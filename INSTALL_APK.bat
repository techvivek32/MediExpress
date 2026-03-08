@echo off
echo ========================================
echo MediExpress Patient App - APK Installer
echo ========================================
echo.

cd apps\patient_app

echo Checking for connected devices...
adb devices
echo.

echo Installing APK on device...
call flutter install
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo SUCCESS! App installed on device!
    echo ========================================
    echo.
    echo You can now open the MediExpress Patient app on your phone.
    echo.
) else (
    echo ========================================
    echo INSTALLATION FAILED!
    echo ========================================
    echo.
    echo Make sure:
    echo 1. Your phone is connected via USB
    echo 2. USB debugging is enabled
    echo 3. You've authorized the computer on your phone
    echo.
    echo Or manually install:
    echo 1. Copy build\app\outputs\flutter-apk\app-release.apk to your phone
    echo 2. Open the file on your phone
    echo 3. Allow installation from unknown sources
    echo.
)

pause
