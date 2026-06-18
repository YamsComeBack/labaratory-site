@echo off
setlocal

set /p SIZE=Enter target resolution (e.g. 1920x1080): 

echo.
echo Resizing images...
echo.

for %%F in (*.jpg *.jpeg *.png *.webp *.bmp *.tif *.tiff) do (
    magick "%%F" -resize "%SIZE%" "__tmp_%%~nxF"
    move /Y "__tmp_%%~nxF" "%%F" >nul
    echo Processed: %%F
)

echo.
echo Done.
pauses