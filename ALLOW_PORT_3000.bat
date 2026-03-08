@echo off
echo Adding Windows Firewall rule for port 3000...
netsh advfirewall firewall add rule name="Node.js Server Port 3000" dir=in action=allow protocol=TCP localport=3000
echo.
echo Firewall rule added successfully!
echo Your mobile app should now be able to connect to the backend.
pause
