@echo off
echo Adding Windows Firewall Rule for MediExpress Backend...
echo.
netsh advfirewall firewall add rule name="MediExpress Backend" dir=in action=allow protocol=TCP localport=3000
echo.
echo Done! Press any key to close...
pause
