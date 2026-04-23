using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Wpf;
using Newtonsoft.Json;
using QuickLook.Common.Helpers;
using QuickLook.Common.Plugin;
using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Threading;

namespace QuickLook.Plugin.Hwp
{
    public class Plugin : IViewer
    {
        public int Priority => 0;

        private WebView2 viewer = new WebView2();

        private static readonly Lazy<string> SharedWebRoot = new Lazy<string>(ResolveWebRoot);
        private static readonly Lazy<Task<CoreWebView2Environment>> SharedEnvironmentTask =
            new Lazy<Task<CoreWebView2Environment>>(() => CoreWebView2Environment.CreateAsync());

        private sealed class HostMessage
        {
            public string type { get; set; }
            public string message { get; set; }
            public int? pageIndex { get; set; }
        }


        const string appHost = "app";
        const string hwpHost = "hwp-resource.local";

        const string responseHeaders =
            "Access-Control-Allow-Origin: https://app\r\n" +
            "Access-Control-Allow-Methods: GET, OPTIONS\r\n" +
            "Access-Control-Allow-Headers: *\r\n" +
            "Cache-Control: no-store, no-cache, must-revalidate\r\n" +
            "Pragma: no-cache\r\n" +
            "Expires: 0\r\n";

        public void Init()
        {
        }

        public bool CanHandle(string path)
        {
            return !Directory.Exists(path) && path.ToLower().EndsWith(".hwp");
        }


        public void Prepare(string path, ContextObject context)
        {
            Size currentDesktopSize = WindowHelper.GetCurrentDesktopSize();

            double r = 0.7;
            double aspectRatio = 297.0 / 210.0;
            int Height = (int)(currentDesktopSize.Height * r);
            int Width = (int)(Height / aspectRatio);

            context.CanResize = true;
            context.PreferredSize = new Size { Width = Width, Height = Height };
        }

        public void View(string path, ContextObject context)
        {
            var dispatcher = Application.Current?.Dispatcher ?? Dispatcher.CurrentDispatcher;

            dispatcher.InvokeAsync(async () =>
            {
                try
                {
                    viewer = new WebView2
                    {
                        HorizontalAlignment = HorizontalAlignment.Stretch,
                        VerticalAlignment = VerticalAlignment.Stretch,
                    };

                    context.ViewerContent = viewer;
                    context.Title = Path.GetFileName(path);

                    viewer.SizeChanged += (s, e) =>
                    {
                        if (viewer.CoreWebView2 == null)
                        {
                            return;
                        }

                        if (e.NewSize.Width <= 0 || e.NewSize.Height <= 0)
                        {
                            return;
                        }

                        var payload = JsonConvert.SerializeObject(new
                        {
                            type = "host-resize",
                        });

                        viewer.CoreWebView2.PostWebMessageAsJson(payload);
                    };

                    var env = await SharedEnvironmentTask.Value;

                    await viewer.EnsureCoreWebView2Async(env);

                    string hwpRequestId = Guid.NewGuid().ToString("N");
                    string hwpUrl = $"https://hwp-resource.local/__current_hwp__?id={hwpRequestId}";

                    bool loadRequested = false;

                    viewer.CoreWebView2.WebMessageReceived += async (s, e) =>
                    {
                        HostMessage message;

                        try
                        {
                            message = JsonConvert.DeserializeObject<HostMessage>(e.WebMessageAsJson);
                        }
                        catch (Exception ex)
                        {
                            Debug.WriteLine($"[QuickLook.Hwp] Failed to parse host message: {ex}");
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
                                    string js = $"window.loadHwpFromUrl({JsonConvert.SerializeObject(hwpUrl)});";
                                    await viewer.ExecuteScriptAsync(js);
                                }
                                catch
                                {
                                    loadRequested = false;
                                    context.IsBusy = false;
                                    throw;
                                }

                                break;

                            case "load-complete":
                                context.IsBusy = false;
                                break;

                            case "load-failed":
                            case "render-failed":
                                Debug.WriteLine(
                                 $"[QuickLook.Hwp] {message.type}: {message.message} (page={message.pageIndex?.ToString() ?? "n/a"})"
                             );
                                context.IsBusy = false;
                                break;
                        }
                    };

                    viewer.CoreWebView2.SetVirtualHostNameToFolderMapping(appHost, SharedWebRoot.Value, CoreWebView2HostResourceAccessKind.Allow);
                    viewer.CoreWebView2.AddWebResourceRequestedFilter("https://hwp-resource.local/*", CoreWebView2WebResourceContext.All);
                    viewer.CoreWebView2.WebResourceRequested += (s, e) =>
                    {
                        var uri = new Uri(e.Request.Uri);
                        if (!uri.Host.Equals(hwpHost, StringComparison.OrdinalIgnoreCase) ||
                            !uri.AbsolutePath.Equals("/__current_hwp__", StringComparison.OrdinalIgnoreCase))
                        {
                            return;
                        }

                        if (e.Request.Method.Equals("OPTIONS", StringComparison.OrdinalIgnoreCase))
                        {
                            e.Response = viewer.CoreWebView2.Environment.CreateWebResourceResponse(Stream.Null, 204, "No Content", responseHeaders + "Content-Type: application/octet-stream\r\n");
                            return;
                        }

                        if (!File.Exists(path))
                        {
                            e.Response = viewer.CoreWebView2.Environment.CreateWebResourceResponse(Stream.Null, 404, "Not Found", responseHeaders + "Content-Type: text/plain\r\n");
                            return;
                        }

                        var stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite | FileShare.Delete);

                        e.Response = viewer.CoreWebView2.Environment.CreateWebResourceResponse(stream, 200, "OK", responseHeaders + "Content-Type: application/octet-stream\r\n");
                    };

                    viewer.CoreWebView2.NavigationCompleted += (_, e) =>
                    {
                        if (!e.IsSuccess)
                        {
                            context.IsBusy = false;
                            return;
                        }
                    };

                    viewer.CoreWebView2.Navigate("https://app/index.html");
                }
                catch
                {
                    context.IsBusy = false;
                    throw;
                }
            });
        }

        public void Cleanup()
        {
            viewer = null;

            var dispatcher = Application.Current?.Dispatcher ?? viewer.Dispatcher;

            if (dispatcher.CheckAccess())
            {
                viewer.Dispose();
            }
            else
            {
                dispatcher.Invoke(() => viewer.Dispose());
            }
        }

        static string ResolveWebRoot()
        {
            const string pluginSubPath = @"QuickLook.Plugin\QuickLook.Plugin.HwpViewer";

            string appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            string localAppData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);

            string[] basePaths =
            {
                Path.Combine(appData, @"pooi.moe\QuickLook"),
                Path.Combine(appData, @"pooi.moe\QuickLook\UserData"),
                Path.Combine(localAppData, @"pooi.moe\QuickLook"),
                Path.Combine(
                    localAppData,
                    @"Packages\21090PaddyXu.QuickLook_egxr34yet59cg\LocalCache\Roaming\pooi.moe\QuickLook"
                )
            };

            foreach (var basePath in basePaths)
            {
                if (Directory.Exists(basePath))
                {
                    return Path.Combine(basePath, pluginSubPath);
                }
            }

            throw new DirectoryNotFoundException(
                "QuickLook base directory was not found in any known AppData locations."
            );
        }

    }
}