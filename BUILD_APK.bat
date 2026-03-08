@echo off
echo ========================================
echo MediExpress Patient App - APK Builder
echo ========================================
echo.

cd apps\patient_app

echo [1/3] Cleaning previous builds...
call flutter clean
echo.

echo [2/3] Getting dependencies...
call flutter pub get
echo.

echo [3/3] Building APK (Release)...
call flutter build apk --release
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo SUCCESS! APK built successfully!
    echo ========================================
    echo.
    echo APK Location:
    echo build\app\outputs\flutter-apk\app-release.apk
    echo.
    echo To install on connected device:
    echo flutter install
    echo.
) else (
    echo ========================================
    echo BUILD FAILED!
    echo ========================================
    echo.
    echo Please check the error messages above.
    echo.
)

pause
