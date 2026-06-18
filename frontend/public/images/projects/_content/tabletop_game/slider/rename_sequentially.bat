@echo off
setlocal EnableDelayedExpansion

rem ===== Phase 1: rename all files except this script =====
set count=0

for /f "delims=" %%F in ('dir /b /a-d') do (
    if /I not "%%F"=="%~nx0" (
        set /a count+=1
        ren "%%F" "__tmp_!count!__%%~xF"
    )
)

rem ===== Phase 2: rename temporary files to 1.ext, 2.ext, 3.ext =====
set count=0

for /f "delims=" %%F in ('dir /b /a-d "__tmp_*"') do (
    set /a count+=1
    ren "%%F" "!count!%%~xF"
)

echo Done.
pause