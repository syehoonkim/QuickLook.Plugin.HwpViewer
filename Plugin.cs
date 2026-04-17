using System;
using System.IO;
using System.Windows;
using QuickLook.Common.Plugin;
using QuickLook.Common.Helpers;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Wpf;
using System.Xml.Linq;
using System.Globalization;
using System.Windows.Threading;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace QuickLook.Plugin.Hwp
{
    public class Plugin : IViewer
    {
        public int Priority => 0;

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
            int Height= (int)(currentDesktopSize.Height * r);
            int Width= (int)(Height / aspectRatio);

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
                    var viewer = new WebView2();

                    viewer.Width = context.PreferredSize.Width;
                    viewer.Height = context.PreferredSize.Height;

                    context.ViewerContent = viewer;
                    context.Title = Path.GetFileName(path);


                    var env = await CoreWebView2Environment.CreateAsync();
                    await viewer.EnsureCoreWebView2Async(env);

                    const string pluginSubPath = @"QuickLook.Plugin\QuickLook.Plugin.HwpViewer";

                    var result = new List<string>();

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
                        if (!Directory.Exists(basePath))
                            continue;

                        result.Add(Path.Combine(basePath, pluginSubPath));
                    }

                    string webRoot = ResolveWebRoot();
                    viewer.CoreWebView2.SetVirtualHostNameToFolderMapping("app", webRoot, CoreWebView2HostResourceAccessKind.Allow);
                    viewer.CoreWebView2.Navigate("https://app/index.html");

                    viewer.CoreWebView2.NavigationCompleted += async (_, __) =>
                    {
                        try
                        {
                            byte[] data = File.ReadAllBytes(path);
                            string base64 = Convert.ToBase64String(data);

                            string setWindowSizeScript = $"window.resizeTo({context.PreferredSize.Width}, {context.PreferredSize.Height});";
                            await viewer.ExecuteScriptAsync(setWindowSizeScript);

                            // base64는 따옴표 문제 줄이기 위해 JSON 문자열로 안전하게 전달 권장
                            string js = $"window.loadHwpFromWebView2({JsonConvert.SerializeObject(base64)});";
                            await viewer.ExecuteScriptAsync(js);

                            // Busy 플래그도 UI Dispatcher에서
                            dispatcher.InvokeAsync(() => context.IsBusy = false);
                        }
                        catch
                        {
                            dispatcher.InvokeAsync(() => context.IsBusy = false);
                            throw;
                        }
                    };
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