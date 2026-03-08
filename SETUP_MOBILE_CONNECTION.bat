@echo off
echo ========================================
echo   MediExpress Mobile Connection Setup
echo ========================================
echo.

echo [Step 1/4] Adding Windows Firewall Rule...
echo.
netsh advfirewall firewall add rule name="MediExpress Backend" dir=in action=allow protocol=TCP localport=3000
if %errorlevel% equ 0 (
    echo SUCCESS: Firewall rule added!
) else (
    echo WARNING: Could not add firewall rule. Run this script as Administrator.
    echo Or manually add the rule in Windows Firewall settings.
)
echo.

echo [Step 2/4] Checking PC IP Address...
echo.
ipconfig | findstr "IPv4"
echo.
echo NOTE: Your phone must use this IP address to connect.
echo.

echo [Step 3/4] Testing Backend Connection...
echo.
curl -s http://localhost:3000/api/health
if %errorlevel% equ 0 (
    echo.
    echo SUCCESS: Backend is responding!
) else (
    echo.
    echo WARNING: Backend might not be running.
    echo Please start it with: cd backend && npm run dev
)
echo.

echo [Step 4/4] Instructions...
echo.
echo NEXT STEPS:
echo 1. Restart backend server (if running):
echo    cd backend
echo    npm run dev
echo.
echo 2. Rebuild the mobile app:
echo    cd apps\patient_app
echo    flutter build apk --release
echo.
echo 3. Install new APK on your phone
echo.
echo 4. Test connection in phone browser:
echo    http://YOUR_PC_IP:3000/api/health
echo.
echo 5. Try signup in the app!
echo.

pause
