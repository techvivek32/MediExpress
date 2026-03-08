@echo off
echo ========================================
echo   ADB Reverse Port Forwarding
echo ========================================
echo.
echo This makes your phone access PC's localhost:3000
echo through the USB cable - no WiFi needed!
echo.

cd apps\patient_app

echo [Step 1] Setting up port forwarding...
flutter run -d ZD2232F2B4 --dart-define=USE_LOCALHOST=true

echo.
echo Done! The app will now connect through USB.
pause
