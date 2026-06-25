@echo off
setlocal EnableDelayedExpansion

title WebP Converter

REM =========================================================
REM Converts files ONLY in the folder this .bat is started in
REM No subfolders.
REM
REM Presets:
REM   PNG  -> high compression / balanced / low compression
REM   JPG  -> high compression / balanced / low compression
REM =========================================================

echo.
echo ==========================================
echo           WEBP CONVERTER
echo ==========================================
echo Current folder:
echo %CD%
echo.

REM -------------------------
REM CHOOSE FILE TYPE
REM -------------------------
echo What do you want to convert?
echo.
echo   1^) PNG files
echo   2^) JPG / JPEG files
echo.
set /p FILETYPE="Enter 1 or 2: "

if "%FILETYPE%"=="1" goto choose_png_preset
if "%FILETYPE%"=="2" goto choose_jpg_preset

echo.
echo Invalid choice.
pause
exit /b

REM =========================================================
REM PNG PRESETS
REM =========================================================
:choose_png_preset
echo.
echo PNG preset:
echo.
echo   1^) High compression   ^(smaller files, more compression, still good quality^)
echo   2^) Balanced           ^(recommended default^)
echo   3^) Low compression    ^(largest files, safest quality^)
echo.
set /p PRESET="Enter 1, 2, or 3: "

if "%PRESET%"=="1" (
    set "MODE_NAME=PNG - High compression"
    set "QUALITY=90"
    set "ALPHA_QUALITY=95"
    set "METHOD=6"
    goto run_png
)

if "%PRESET%"=="2" (
    set "MODE_NAME=PNG - Balanced"
    set "QUALITY=95"
    set "ALPHA_QUALITY=100"
    set "METHOD=6"
    goto run_png
)

if "%PRESET%"=="3" (
    set "MODE_NAME=PNG - Low compression"
    set "QUALITY=97"
    set "ALPHA_QUALITY=100"
    set "METHOD=6"
    goto run_png
)

echo.
echo Invalid choice.
pause
exit /b

REM =========================================================
REM JPG PRESETS
REM =========================================================
:choose_jpg_preset
echo.
echo JPG/JPEG preset:
echo.
echo   1^) High compression   ^(smallest files, more visible loss possible^)
echo   2^) Balanced           ^(recommended default^)
echo   3^) Low compression    ^(largest files, least visible loss^)
echo.
set /p PRESET="Enter 1, 2, or 3: "

if "%PRESET%"=="1" (
    set "MODE_NAME=JPG - High compression"
    set "QUALITY=80"
    set "METHOD=6"
    goto run_jpg
)

if "%PRESET%"=="2" (
    set "MODE_NAME=JPG - Balanced"
    set "QUALITY=88"
    set "METHOD=6"
    goto run_jpg
)

if "%PRESET%"=="3" (
    set "MODE_NAME=JPG - Low compression"
    set "QUALITY=93"
    set "METHOD=6"
    goto run_jpg
)

echo.
echo Invalid choice.
pause
exit /b

REM =========================================================
REM RUN PNG CONVERSION
REM =========================================================
:run_png
echo.
echo ==========================================
echo Running preset: %MODE_NAME%
echo Folder: %CD%
echo ==========================================
echo.

set /a COUNT_TOTAL=0
set /a COUNT_DONE=0
set /a COUNT_SKIPPED=0

for %%F in (*.png) do (
    set /a COUNT_TOTAL+=1
    set "OUT=%%~nF.webp"

    if exist "!OUT!" (
        echo Skipping %%F ^(already exists: !OUT!^)
        set /a COUNT_SKIPPED+=1
    ) else (
        echo Converting %%F
        magick "%%F" ^
            -quality %QUALITY% ^
            -define webp:alpha-quality=%ALPHA_QUALITY% ^
            -define webp:method=%METHOD% ^
            "!OUT!"

        if exist "!OUT!" (
            set /a COUNT_DONE+=1
        )
    )
)

goto finish

REM =========================================================
REM RUN JPG/JPEG CONVERSION
REM =========================================================
:run_jpg
echo.
echo ==========================================
echo Running preset: %MODE_NAME%
echo Folder: %CD%
echo ==========================================
echo.

set /a COUNT_TOTAL=0
set /a COUNT_DONE=0
set /a COUNT_SKIPPED=0

for %%F in (*.jpg *.jpeg) do (
    set /a COUNT_TOTAL+=1
    set "OUT=%%~nF.webp"

    if exist "!OUT!" (
        echo Skipping %%F ^(already exists: !OUT!^)
        set /a COUNT_SKIPPED+=1
    ) else (
        echo Converting %%F
        magick "%%F" ^
            -quality %QUALITY% ^
            -define webp:method=%METHOD% ^
            "!OUT!"

        if exist "!OUT!" (
            set /a COUNT_DONE+=1
        )
    )
)

goto finish

REM =========================================================
REM FINISH
REM =========================================================
:finish
echo.
echo ==========================================
echo Done.
echo Total matching files found: %COUNT_TOTAL%
echo Converted: %COUNT_DONE%
echo Skipped (already had .webp): %COUNT_SKIPPED%
echo ==========================================
echo.
pause