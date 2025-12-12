Remove-Item ..\QuickLook.Plugin.HwpViewer.qlplugin -ErrorAction SilentlyContinue

$files = Get-ChildItem -Path ..\bin\Release\ -Exclude *.pdb,*.xml
Compress-Archive $files ..\QuickLook.Plugin.HwpViewer.zip
Move-Item ..\QuickLook.Plugin.HwpViewer.zip ..\QuickLook.Plugin.HwpViewer.qlplugin