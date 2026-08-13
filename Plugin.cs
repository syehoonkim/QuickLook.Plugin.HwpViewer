using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Threading;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Wpf;
using Newtonsoft.Json;
using QuickLook.Common.Helpers;
using QuickLook.Common.Plugin;

namespace QuickLook.Plugin.Hwp
{
    public class Plugin : IViewer
    {
        public int Priority => 0;

        private static readonly Lazy<string> SharedWebRoot =
            new Lazy<string>(ResolveWebRoot);

        private static readonly Lazy<Task<CoreWebView2Environment>> SharedEnvironmentTask =
            new Lazy<Task<CoreWebView2Environment>>(
                () => CoreWebView2Environment.CreateAsync()
            );

        private WebView2 _viewer;

        private sealed class HostMessage
        {
            public string type { get; set; }
            public string error { get; set; }
            public string reason { get; set; }
            public string renderer { get; set; }
            public int? pageIndex { get; set; }
            public int? pageCount { get; set; }
            public double? elapsedMs { get; set; }
        }

        public void Init()
        {
        }

        public bool CanHandle(string path)
        {
            return !Directory.Exists(path) &&
                   (path.EndsWith(".hwp", StringComparison.OrdinalIgnoreCase) || path.EndsWith(".hwpx", StringComparison.OrdinalIgnoreCase));
        }

        public void Prepare(string path, ContextObject context)
        {
            Size desktopSize = WindowHelper.GetCurrentDesktopSize();

            const double initialRatio = 0.7;
            const double a4AspectRatio = 297.0 / 210.0;

            int height = (int)(desktopSize.Height * initialRatio);
            int width = (int)(height / a4AspectRatio);

            context.CanResize = true;
            context.PreferredSize = new Size
            {
                Width = width,
                Height = height
            };
        }

        public void View(string path, ContextObject context)
        {
            var dispatcher =
                Application.Current?.Dispatcher ??
                Dispatcher.CurrentDispatcher;

            dispatcher.InvokeAsync(async () =>
            {
                try
                {
                    var viewer = new WebView2
                    {
                        HorizontalAlignment = HorizontalAlignment.Stretch,
                        VerticalAlignment = VerticalAlignment.Stretch,
                    };

                    _viewer = viewer;
                    context.ViewerContent = viewer;
                    context.Title = Path.GetFileName(path);

                    viewer.SizeChanged += (_, e) =>
                    {
                        if (!ReferenceEquals(_viewer, viewer) ||
                            viewer.CoreWebView2 == null ||
                            e.NewSize.Width <= 0 ||
                            e.NewSize.Height <= 0)
                        {
                            return;
                        }

                        viewer.CoreWebView2.PostWebMessageAsJson(
                            JsonConvert.SerializeObject(
                                new { type = "host-resize" }
                            )
                        );
                    };

                    CoreWebView2Environment environment =
                        await SharedEnvironmentTask.Value;

                    await viewer.EnsureCoreWebView2Async(environment);

                    const string appHost = "app";
                    const string hwpHost = "hwp-resource.local";

                    string requestId = Guid.NewGuid().ToString("N");
                    string hwpUrl =
                        $"https://{hwpHost}/__current_hwp__?id={requestId}";

                    bool loadRequested = false;

                    viewer.CoreWebView2.WebMessageReceived += async (_, e) =>
                    {
                        if (!ReferenceEquals(_viewer, viewer))
                        {
                            return;
                        }

                        HostMessage message;

                        try
                        {
                            message =
                                JsonConvert.DeserializeObject<HostMessage>(
                                    e.WebMessageAsJson
                                );
                        }
                        catch (Exception ex)
                        {
                            Debug.WriteLine(
                                $"[QuickLook.Hwp] Invalid host message: {ex}"
                            );
                            return;
                        }

                        if (message?.type == null)
                        {
                            return;
                        }

                        switch (message.type)
                        {
                            case "viewer-ready":
                                if (loadRequested)
                                {
                                    return;
                                }

                                loadRequested = true;

                                try
                                {
                                    string script =
                                        $"window.loadHwpFromUrl(" +
                                        $"{JsonConvert.SerializeObject(hwpUrl)}" +
                                        ");";

                                    await viewer.ExecuteScriptAsync(script);

                                    viewer.CoreWebView2.PostWebMessageAsJson(
                                        JsonConvert.SerializeObject(
                                            new { type = "host-resize" }
                                        )
                                    );
                                }
                                catch (Exception ex)
                                {
                                    loadRequested = false;
                                    context.IsBusy = false;

                                    Debug.WriteLine(
                                        $"[QuickLook.Hwp] Load invocation failed: {ex}"
                                    );
                                }

                                break;

                            case "load-complete":
                                Debug.WriteLine(
                                    $"[QuickLook.Hwp] Loaded " +
                                    $"{message.pageCount ?? 0} pages with " +
                                    $"{message.renderer ?? "unknown"} in " +
                                    $"{message.elapsedMs ?? 0:0} ms"
                                );

                                context.IsBusy = false;
                                break;

                            case "render-fallback":
                                Debug.WriteLine(
                                    $"[QuickLook.Hwp] Canvas2D fallback to SVG, " +
                                    $"page={message.pageIndex?.ToString() ?? "n/a"}, " +
                                    $"reason={message.reason ?? "unknown"}"
                                );
                                break;

                            case "load-failed":
                            case "render-failed":
                                Debug.WriteLine(
                                    $"[QuickLook.Hwp] {message.type}, " +
                                    $"page={message.pageIndex?.ToString() ?? "n/a"}, " +
                                    $"error={message.error ?? "unknown"}"
                                );

                                context.IsBusy = false;
                                break;
                        }
                    };

                    viewer.CoreWebView2.SetVirtualHostNameToFolderMapping(
                        appHost,
                        SharedWebRoot.Value,
                        CoreWebView2HostResourceAccessKind.Allow
                    );

                    viewer.CoreWebView2.AddWebResourceRequestedFilter(
                        $"https://{hwpHost}/*",
                        CoreWebView2WebResourceContext.All
                    );

                    viewer.CoreWebView2.WebResourceRequested += (_, e) =>
                    {
                        if (!ReferenceEquals(_viewer, viewer))
                        {
                            return;
                        }

                        var uri = new Uri(e.Request.Uri);

                        if (!uri.Host.Equals(
                                hwpHost,
                                StringComparison.OrdinalIgnoreCase
                            ) ||
                            !uri.AbsolutePath.Equals(
                                "/__current_hwp__",
                                StringComparison.OrdinalIgnoreCase
                            ))
                        {
                            return;
                        }

                        const string responseHeaders =
                            "Access-Control-Allow-Origin: https://app\r\n" +
                            "Access-Control-Allow-Methods: GET, OPTIONS\r\n" +
                            "Access-Control-Allow-Headers: *\r\n" +
                            "Cache-Control: no-store, no-cache, must-revalidate\r\n" +
                            "Pragma: no-cache\r\n" +
                            "Expires: 0\r\n";

                        if (e.Request.Method.Equals(
                                "OPTIONS",
                                StringComparison.OrdinalIgnoreCase
                            ))
                        {
                            e.Response =
                                viewer.CoreWebView2.Environment
                                    .CreateWebResourceResponse(
                                        Stream.Null,
                                        204,
                                        "No Content",
                                        responseHeaders +
                                        "Content-Type: application/octet-stream\r\n"
                                    );

                            return;
                        }

                        if (!File.Exists(path))
                        {
                            e.Response =
                                viewer.CoreWebView2.Environment
                                    .CreateWebResourceResponse(
                                        Stream.Null,
                                        404,
                                        "Not Found",
                                        responseHeaders +
                                        "Content-Type: text/plain\r\n"
                                    );

                            return;
                        }

                        var stream = new FileStream(
                            path,
                            FileMode.Open,
                            FileAccess.Read,
                            FileShare.ReadWrite | FileShare.Delete
                        );

                        e.Response =
                            viewer.CoreWebView2.Environment
                                .CreateWebResourceResponse(
                                    stream,
                                    200,
                                    "OK",
                                    responseHeaders +
                                    "Content-Type: application/octet-stream\r\n"
                                );
                    };

                    viewer.CoreWebView2.NavigationCompleted += (_, e) =>
                    {
                        if (!ReferenceEquals(_viewer, viewer))
                        {
                            return;
                        }

                        if (!e.IsSuccess)
                        {
                            Debug.WriteLine(
                                $"[QuickLook.Hwp] Navigation failed: " +
                                $"{e.WebErrorStatus}"
                            );

                            context.IsBusy = false;
                        }
                    };

                    viewer.CoreWebView2.Navigate(
                        $"https://{appHost}/index.html"
                    );
                }
                catch (Exception ex)
                {
                    context.IsBusy = false;
                    Debug.WriteLine($"[QuickLook.Hwp] View failed: {ex}");
                }
            });
        }

        public void Cleanup()
        {
            var viewer = _viewer;
            _viewer = null;

            if (viewer == null)
            {
                return;
            }

            var dispatcher =
                Application.Current?.Dispatcher ??
                viewer.Dispatcher;

            if (dispatcher.CheckAccess())
            {
                viewer.Dispose();
            }
            else
            {
                dispatcher.Invoke(viewer.Dispose);
            }
        }

        private static string ResolveWebRoot()
        {
            const string pluginSubPath =
                @"QuickLook.Plugin\QuickLook.Plugin.HwpViewer";

            string appData =
                Environment.GetFolderPath(
                    Environment.SpecialFolder.ApplicationData
                );

            string localAppData =
                Environment.GetFolderPath(
                    Environment.SpecialFolder.LocalApplicationData
                );

            string[] basePaths =
            {
                Path.Combine(
                    appData,
                    @"pooi.moe\QuickLook"
                ),
                Path.Combine(
                    appData,
                    @"pooi.moe\QuickLook\UserData"
                ),
                Path.Combine(
                    localAppData,
                    @"pooi.moe\QuickLook"
                ),
                Path.Combine(
                    localAppData,
                    @"Packages\21090PaddyXu.QuickLook_egxr34yet59cg\" +
                    @"LocalCache\Roaming\pooi.moe\QuickLook"
                )
            };

            foreach (string basePath in basePaths)
            {
                if (!Directory.Exists(basePath))
                {
                    continue;
                }

                string webRoot =
                    Path.Combine(basePath, pluginSubPath);

                if (Directory.Exists(webRoot))
                {
                    return webRoot;
                }
            }

            throw new DirectoryNotFoundException(
                "QuickLook HWP plugin web root was not found."
            );
        }
    }
}
