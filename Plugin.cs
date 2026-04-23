using System;
using System.IO;
using System.Windows;
using QuickLook.Common.Plugin;
using QuickLook.Common.Helpers;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Wpf;
using System.Windows.Threading;
using Newtonsoft.Json;

namespace QuickLook.Plugin.Hwp
{
    public class Plugin : IViewer
    {
        public int Priority => 0;

        private WebView2 _viewer;

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
                    WebView2 viewer = new WebView2();

                    _viewer = viewer;

                    viewer.HorizontalAlignment = HorizontalAlignment.Stretch;
                    viewer.VerticalAlignment = VerticalAlignment.Stretch;

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

                    context.ViewerContent = viewer;
                    context.Title = Path.GetFileName(path);

                    var env = await CoreWebView2Environment.CreateAsync();
                    await viewer.EnsureCoreWebView2Async(env);

                    string webRoot = ResolveWebRoot();

                    const string appHost = "app";
                    const string hwpHost = "hwp-resource.local";
                    string hwpRequestId = Guid.NewGuid().ToString("N");
                    string hwpUrl = $"https://hwp-resource.local/__current_hwp__?id={hwpRequestId}";

                    bool loadRequested = false;

                    viewer.CoreWebView2.WebMessageReceived += async (s, e) =>
                    {
                        try
                        {
                            dynamic message = JsonConvert.DeserializeObject(e.WebMessageAsJson);

                            if (message?.type != "viewer-ready")
                            {
                                return;
                            }

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
                                throw;
                            }

                            viewer.CoreWebView2.PostWebMessageAsJson(
                            JsonConvert.SerializeObject(new
                            {
                                type = "host-resize"
                            })
                            );

                            context.IsBusy = false;
                        }
                        catch
                        {
                            context.IsBusy = false;
                            throw;
                        }
                    };

                    viewer.CoreWebView2.SetVirtualHostNameToFolderMapping(appHost, webRoot, CoreWebView2HostResourceAccessKind.Allow);
                    viewer.CoreWebView2.AddWebResourceRequestedFilter("https://hwp-resource.local/*", CoreWebView2WebResourceContext.All);
                    viewer.CoreWebView2.WebResourceRequested += (s, e) =>
                    {
                        var uri = new Uri(e.Request.Uri);
                        if (!uri.Host.Equals(hwpHost, StringComparison.OrdinalIgnoreCase) ||
                            !uri.AbsolutePath.Equals("/__current_hwp__", StringComparison.OrdinalIgnoreCase))
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
            var viewer = _viewer;
            _viewer = null;

            if (viewer == null)
            {
                return;
            }

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