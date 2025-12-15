using System;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using QuickLook.Common.Plugin;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Wpf;
using System.Diagnostics;
using System.Xml.Linq;
using System.Globalization;
using System.Threading.Tasks;
using System.Threading;
using System.Windows.Threading;
using Newtonsoft.Json;
using System.Reflection;
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
            context.PreferredSize = new Size { Width = 525, Height = 743 };
        }

        public (double width, double height) ReadSvgSize(string svgPath)
        {
            var doc = XDocument.Load(svgPath);
            var svg = doc.Root;
            if (svg == null) throw new InvalidOperationException("Invalid SVG");

            string wAttr = (string)svg.Attribute("width");
            string hAttr = (string)svg.Attribute("height");
            string vbAttr = (string)svg.Attribute("viewBox");

            float ParseLength(string s)
            {
                if (string.IsNullOrWhiteSpace(s)) return 0;
                // 단위(px, mm 등) 제거
                int i = 0;
                while (i < s.Length && (char.IsDigit(s[i]) || s[i] == '.' || s[i] == '-')) i++;
                return float.Parse(s.Substring(0, i), CultureInfo.InvariantCulture);
            }

            float w = ParseLength(wAttr);
            float h = ParseLength(hAttr);

            if ((w == 0 || h == 0) && !string.IsNullOrWhiteSpace(vbAttr))
            {
                var parts = vbAttr.Split(new[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length == 4)
                {
                    w = float.Parse(parts[2], CultureInfo.InvariantCulture);
                    h = float.Parse(parts[3], CultureInfo.InvariantCulture);
                }
            }

            return (w, h);
        }

        public void View(string path, ContextObject context)
        {
            // QuickLook 호스트의 UI Dispatcher를 잡습니다.
            var dispatcher = Application.Current?.Dispatcher ?? Dispatcher.CurrentDispatcher;

            dispatcher.InvokeAsync(async () =>
            {
                try
                {
                    var viewer = new WebView2();


                    // ViewerContent/Title도 같은 Dispatcher에서 설정
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

                            // base64는 따옴표 문제 줄이기 위해 JSON 문자열로 안전하게 전달 권장
                            string js = $"window.loadHwpFromBase64({JsonConvert.SerializeObject(base64)});";
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