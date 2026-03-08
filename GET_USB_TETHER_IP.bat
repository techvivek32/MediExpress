@echo off
echo Getting IP address for USB Tethering...
echo.
ipconfig | findstr /C:"Ethernet adapter" /C:"IPv4"
echo.
echo Look for "Ethernet adapter" with an IP like 192.168.x.x
echo That's your new IP address to use in the app!
echo.
pause
