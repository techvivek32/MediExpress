# WiFi Connection Setup Guide

## Problem
Your mobile app shows "No internet connection" even though both PC and mobile are on the same WiFi network.

## Solution Applied

### 1. Updated App Configuration
Changed the API base URL from `localhost` to your PC's local IP address:
- **Your PC IP**: `192.168.1.33`
- **New API URL**: `http://192.168.1.33:3000/api`

### 2. Rebuilt the APK
A new debug APK has been built with the correct IP address:
```
apps/patient_app/build/app/outputs/flutter-apk/app-debug.apk
```

### 3. Firewall Configuration (IMPORTANT!)
Windows Firewall might be blocking incoming connections on port 3000.

**To fix this:**
1. Right-click on `ALLOW_PORT_3000.bat`
2. Select "Run as administrator"
3. Click "Yes" when prompted

This will add a firewall rule to allow incoming connections on port 3000.

## Installation Steps

1. **Add Firewall Rule** (if not done already):
   - Run `ALLOW_PORT_3000.bat` as administrator

2. **Make sure backend is running**:
   ```bash
   cd backend
   npm run dev
   ```

3. **Install the new APK on your mobile**:
   ```bash
   adb install apps/patient_app/build/app/outputs/flutter-apk/app-debug.apk
   ```
   
   Or transfer the APK file to your phone and install manually.

4. **Test the connection**:
   - Open the app on your mobile
   - Try to sign up or log in
   - The app should now connect to your backend

## Troubleshooting

### Still not working?

1. **Verify both devices are on the same WiFi network**:
   - PC WiFi: Check your WiFi settings
   - Mobile: Check WiFi settings

2. **Test connection from mobile browser**:
   - Open browser on your mobile
   - Visit: `http://192.168.1.33:3000`
   - You should see the backend homepage

3. **Check if backend is running**:
   ```bash
   netstat -ano | findstr :3000
   ```
   Should show: `TCP    0.0.0.0:3000`

4. **Verify firewall rule**:
   ```bash
   netsh advfirewall firewall show rule name="Node.js Server Port 3000"
   ```

5. **If your PC IP changes**:
   - Your router might assign a different IP after restart
   - Check new IP: `ipconfig`
   - Update `apps/patient_app/lib/core/constants/app_constants.dart`
   - Rebuild APK: `flutter build apk --debug`

## Quick Test

From your mobile browser, visit:
```
http://192.168.1.33:3000/api/health
```

If you see a response, the connection is working!

## Notes

- The IP address `192.168.1.33` is your current local IP
- This IP might change if you restart your router or PC
- For production, you'll want to use a proper domain name or static IP
