# 📱 USB Debugging & Live Logs Guide

## 🎯 Benefits of USB Connection

✅ Direct install to phone (no APK transfer needed)
✅ Live logs in real-time
✅ Hot reload (instant code updates)
✅ Faster development
✅ See all errors immediately

---

## 🔧 Setup USB Debugging (One-Time)

### Step 1: Enable Developer Options on Phone

1. Go to **Settings** → **About Phone**
2. Find **Build Number**
3. Tap it **7 times** rapidly
4. You'll see "You are now a developer!"

### Step 2: Enable USB Debugging

1. Go to **Settings** → **System** → **Developer Options**
2. Enable **USB Debugging**
3. Enable **Install via USB** (if available)

### Step 3: Connect Phone to PC

1. Connect phone via USB cable
2. On phone: Select **File Transfer** or **PTP** mode
3. On phone: Allow USB debugging popup
4. Check "Always allow from this computer"

### Step 4: Verify Connection

```bash
# Check if phone is detected
flutter devices
```

Should show your phone like:
```
SM G960F (mobile) • 988a4d303042564b • android-arm64 • Android 10 (API 29)
```

---

## 🚀 Quick Start Commands

### Option 1: Run with Live Logs (Recommended)

```bash
cd apps/patient_app
flutter run --verbose
```

This will:
- ✅ Build the app
- ✅ Install on phone automatically
- ✅ Launch the app
- ✅ Show live logs
- ✅ Enable hot reload (press 'r')

### Option 2: Install and Watch Logs

```bash
# Terminal 1: Run the app
cd apps/patient_app
flutter run

# Terminal 2: Watch logs (in another terminal)
flutter logs
```

### Option 3: Build and Install APK

```bash
cd apps/patient_app
flutter build apk --debug
flutter install
```

---

## 📊 Understanding the Logs

### Normal Startup Logs
```
Launching lib/main.dart on SM G960F in debug mode...
✓ Built build/app/outputs/flutter-apk/app-debug.apk.
Installing build/app/outputs/flutter-apk/app-debug.apk...
Waiting for SM G960F to report its views...
Debug service listening on ws://127.0.0.1:12345/
Synced 0.0MB.
```

### API Request Logs
```
I/flutter (12345): 🌐 Making request to: http://192.168.1.33:3000/api/auth/register
I/flutter (12345): 📦 Request body: {name: Test User, email: test@example.com}
I/flutter (12345): ✅ Response: 200
I/flutter (12345): 📥 Response data: {success: true, token: ...}
```

### Error Logs
```
E/flutter (12345): [ERROR:flutter/runtime/dart_vm_initializer.cc(41)] 
E/flutter (12345): SocketException: Failed to connect to /192.168.1.33:3000
```

---

## 🎮 Interactive Commands While Running

When `flutter run` is active, you can use:

| Key | Action |
|-----|--------|
| `r` | Hot reload (instant update) |
| `R` | Hot restart (full restart) |
| `h` | Show help |
| `c` | Clear screen |
| `q` | Quit |
| `d` | Detach (keep app running) |
| `v` | Open DevTools |

---

## 🔍 Advanced Logging

### Add Debug Prints to Your Code

Edit `apps/patient_app/lib/services/api_service.dart`:

```dart
import 'dart:developer' as developer;

class ApiService {
  Future<Map<String, dynamic>> post(String endpoint, Map<String, dynamic> body) async {
    final url = '$baseUrl$endpoint';
    
    // Add detailed logging
    developer.log('🌐 API Request', name: 'API');
    developer.log('URL: $url', name: 'API');
    developer.log('Body: ${json.encode(body)}', name: 'API');
    
    try {
      final response = await http.post(
        Uri.parse(url),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(body),
      ).timeout(AppConstants.connectionTimeout);
      
      developer.log('✅ Status: ${response.statusCode}', name: 'API');
      developer.log('📥 Response: ${response.body}', name: 'API');
      
      return json.decode(response.body);
    } catch (e) {
      developer.log('❌ Error: $e', name: 'API', error: e);
      rethrow;
    }
  }
}
```

### Filter Logs by Tag

```bash
# Show only API logs
flutter logs | grep "API"

# Show only errors
flutter logs | grep "ERROR"

# Show only your app logs
flutter logs | grep "flutter"
```

---

## 🚀 Complete Workflow

### 1. Connect Phone
```bash
# Connect USB cable
# Enable USB debugging on phone
# Verify connection
flutter devices
```

### 2. Run with Logs
```bash
cd apps/patient_app
flutter run --verbose
```

### 3. Test Signup
1. App launches automatically on phone
2. Go to signup screen
3. Fill form
4. Click signup
5. Watch logs in terminal

### 4. See Live Logs
```
I/flutter: 🌐 API Request
I/flutter: URL: http://192.168.1.33:3000/api/auth/register
I/flutter: Body: {"name":"Test User","email":"test@example.com",...}
I/flutter: ✅ Status: 200
I/flutter: 📥 Response: {"success":true,"token":"..."}
```

### 5. Hot Reload Changes
1. Edit code in VS Code
2. Press `r` in terminal
3. Changes appear instantly on phone!

---

## 📱 One-Command Setup

Create `RUN_ON_PHONE.bat`:

```batch
@echo off
echo ========================================
echo   Running App on Phone via USB
echo ========================================
echo.

echo [1/3] Checking phone connection...
flutter devices
echo.

echo [2/3] Building and installing app...
echo.

echo [3/3] Launching with live logs...
echo.
echo Press 'r' for hot reload
echo Press 'R' for hot restart
echo Press 'q' to quit
echo.

cd apps\patient_app
flutter run --verbose

pause
```

---

## 🐛 Troubleshooting

### Phone Not Detected

**Check 1**: USB Debugging enabled?
```
Settings → Developer Options → USB Debugging
```

**Check 2**: USB mode correct?
```
Notification bar → USB options → File Transfer
```

**Check 3**: Drivers installed?
```bash
# Install Android SDK Platform Tools
# Or install phone manufacturer's USB drivers
```

**Check 4**: Try different USB cable
- Some cables are charge-only
- Use data transfer cable

**Check 5**: Restart ADB
```bash
adb kill-server
adb start-server
flutter devices
```

### App Not Installing

**Solution 1**: Uninstall old app first
```bash
adb uninstall com.example.patient_app
flutter run
```

**Solution 2**: Clear build cache
```bash
flutter clean
flutter pub get
flutter run
```

### Logs Not Showing

**Solution**: Use verbose mode
```bash
flutter run --verbose
```

Or separate logs:
```bash
flutter logs -v
```

---

## 📊 Log Levels

### Info (I/)
```
I/flutter: Normal information
```

### Warning (W/)
```
W/flutter: Warning messages
```

### Error (E/)
```
E/flutter: Error messages
```

### Debug (D/)
```
D/flutter: Debug information
```

---

## 🎯 Testing Signup with Logs

### 1. Start App with Logs
```bash
cd apps/patient_app
flutter run --verbose
```

### 2. Watch for These Logs

**When app starts:**
```
I/flutter: App initialized
I/flutter: Checking authentication...
```

**When you click signup:**
```
I/flutter: 🌐 API Request
I/flutter: URL: http://192.168.1.33:3000/api/auth/register
I/flutter: Body: {...}
```

**If successful:**
```
I/flutter: ✅ Status: 200
I/flutter: 📥 Response: {"success":true,...}
I/flutter: Navigating to home screen
```

**If error:**
```
E/flutter: ❌ Error: SocketException
E/flutter: Failed to connect to /192.168.1.33:3000
```

---

## 🔥 Hot Reload Demo

1. Run app: `flutter run`
2. App opens on phone
3. Edit `lib/features/auth/screens/signup_screen.dart`
4. Change button text: "Sign Up" → "Create Account"
5. Press `r` in terminal
6. Button text updates instantly on phone!

No need to rebuild or reinstall! 🚀

---

## 📱 Multiple Devices

If you have multiple devices connected:

```bash
# List all devices
flutter devices

# Run on specific device
flutter run -d <device-id>

# Example
flutter run -d SM_G960F
```

---

## 🎉 Benefits Summary

| Feature | USB Cable | WiFi/APK |
|---------|-----------|----------|
| Install Speed | ⚡ Instant | 🐌 Manual |
| Live Logs | ✅ Yes | ❌ No |
| Hot Reload | ✅ Yes | ❌ No |
| Debugging | ✅ Full | ❌ Limited |
| Setup | 🔧 One-time | 🔄 Every build |

---

## 🚀 Quick Commands Reference

```bash
# Check connection
flutter devices

# Run with logs
flutter run --verbose

# Just logs (if app already running)
flutter logs

# Hot reload
Press 'r'

# Hot restart
Press 'R'

# Quit
Press 'q'

# Clear build
flutter clean

# Uninstall app
adb uninstall com.example.patient_app

# Restart ADB
adb kill-server && adb start-server
```

---

## 📝 Complete Example Session

```bash
# 1. Connect phone via USB
# 2. Enable USB debugging on phone

# 3. Verify connection
PS D:\pharmacy appizi> flutter devices
2 connected devices:

SM G960F (mobile) • 988a4d303042564b • android-arm64 • Android 10 (API 29)
Chrome (web)      • chrome           • web-javascript • Google Chrome 120.0

# 4. Run app
PS D:\pharmacy appizi> cd apps\patient_app
PS D:\pharmacy appizi\apps\patient_app> flutter run

Launching lib/main.dart on SM G960F in debug mode...
✓ Built build/app/outputs/flutter-apk/app-debug.apk.
Installing build/app/outputs/flutter-apk/app-debug.apk...
Waiting for SM G960F to report its views...

🔥  To hot reload changes while running, press "r" or "R".
For a more detailed help message, press "h". To quit, press "q".

An Observatory debugger and profiler on SM G960F is available at: http://127.0.0.1:12345/

# 5. App opens on phone automatically!

# 6. Test signup and watch logs:
I/flutter (12345): 🌐 Making API request
I/flutter (12345): URL: http://192.168.1.33:3000/api/auth/register
I/flutter (12345): ✅ Response: 200
I/flutter (12345): User created successfully!

# 7. Make changes and hot reload:
# Edit code in VS Code
# Press 'r'
Performing hot reload...
Reloaded 1 of 589 libraries in 234ms.

# 8. Done! Press 'q' to quit
```

---

**Status**: Ready for USB debugging! 🚀
**Next**: Connect phone, run `flutter run`, and watch live logs!
