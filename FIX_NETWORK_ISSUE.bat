@echo off
echo ========================================
echo   Fixing Network Connection Issue
echo ========================================
echo.

echo [Step 1] Changing Network Profile to Private...
echo This allows device-to-device communication
echo.
powershell -Command "Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private"
if %errorlevel% equ 0 (
    echo SUCCESS: Network changed to Private!
) else (
    echo WARNING: Could not change network profile. Run as Administrator.
)
echo.

echo [Step 2] Verifying Firewall Rule...
netsh advfirewall firewall show rule name="MediExpress Backend" | findstr "Enabled"
echo.

echo [Step 3] Current Network Status:
powershell -Command "Get-NetConnectionProfile | Select-Object Name, NetworkCategory"
echo.

echo ========================================
echo   IMPORTANT: Router AP Isolation
echo ========================================
echo.
echo If this still doesn't work, your router might have
echo "AP Isolation" or "Client Isolation" enabled.
echo.
echo This prevents devices from talking to each other.
echo.
echo SOLUTION: Use USB Tethering or Mobile Hotspot
echo.
echo Option 1: USB Tethering (Recommended)
echo   1. On your phone: Settings ^> Network ^> Hotspot ^& tethering
echo   2. Enable "USB tethering"
echo   3. Your PC will get internet from phone
echo   4. Phone and PC will be on same network
echo.
echo Option 2: Mobile Hotspot
echo   1. On your phone: Enable Mobile Hotspot
echo   2. Connect your PC to phone's hotspot
echo   3. Get new PC IP address
echo   4. Update app with new IP
echo.

pause
