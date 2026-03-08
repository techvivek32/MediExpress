# ⚡ Quick USB Setup - 3 Steps

## 📱 Step 1: Enable USB Debugging (2 minutes)

### On Your Phone:

1. **Enable Developer Options**
   - Go to: Settings → About Phone
   - Find: Build Number
   - Tap it 7 times rapidly
   - You'll see: "You are now a developer!"

2. **Enable USB Debugging**
   - Go to: Settings → System → Developer Options
   - Turn ON: USB Debugging
   - Turn ON: Install via USB (if available)

3. **Connect USB Cable**
   - Connect phone to PC
   - On phone: Select "File Transfer" mode
   - Allow USB debugging popup
   - Check "Always allow from this computer"

---

## 🔌 Step 2: Verify Connection (30 seconds)

```bash
flutter devices
```

Should show your phone:
```
SM G960F (mobile) • 988a4d303042564b • android-arm64 • Android 10
```

If not showing:
- Try different USB cable
- Restart phone
- Run: `adb kill-server && adb start-server`

---

## 🚀 Step 3: Run App (1 command)

### Option A: Use the Script (Easiest)
```bash
cd apps/patient_app
RUN_ON_PHONE.bat
```

### Option B: Manual Command
```bash
cd apps/patient_app
flutter run --verbose
```

That's it! App will:
- ✅ Build automatically
- ✅ Install on phone
- ✅ Launch automatically
- ✅ Show live logs

---

## 📊 What You'll See

### In Terminal:
```
Launching lib/main.dart on SM G960F in debug mode...
✓ Built build/app/outputs/flutter-apk/app-debug.apk.
Installing...
Waiting for device...

🔥 To hot reload changes, press "r"

I/flutter: App started
I/flutter: 🌐 API Request to: http://192.168.1.33:3000/api/auth/register
I/flutter: ✅ Response: 200
I/flutter: User created successfully!
```

### On Phone:
- App opens automatically
- You can use it normally
- All actions show in terminal logs

---

## 🎮 Interactive Commands

While app is running, press:

| Key | Action |
|-----|--------|
| `r` | Hot reload (instant update) |
| `R` | Hot restart |
| `q` | Quit |
| `h` | Help |

---

## 🐛 Troubleshooting

### Phone Not Detected?

**Quick Fix:**
```bash
adb kill-server
adb start-server
flutter devices
```

**Still not working?**
1. Try different USB cable (must be data cable, not charge-only)
2. Check USB mode is "File Transfer" not "Charging only"
3. Restart phone
4. Reinstall phone USB drivers

### App Not Installing?

**Quick Fix:**
```bash
cd apps/patient_app
flutter clean
flutter pub get
flutter run
```

---

## ✅ Success Checklist

- [ ] Developer options enabled on phone
- [ ] USB debugging enabled
- [ ] Phone connected via USB
- [ ] USB debugging allowed on popup
- [ ] `flutter devices` shows your phone
- [ ] Run `RUN_ON_PHONE.bat`
- [ ] App installs and launches
- [ ] Logs appear in terminal
- [ ] Test signup and watch logs!

---

## 🎯 Testing Signup with Live Logs

1. **Run app**: `RUN_ON_PHONE.bat`
2. **App opens** on phone automatically
3. **Go to signup** screen
4. **Fill form** with test data
5. **Click signup**
6. **Watch terminal** for logs:

```
I/flutter: 🌐 Making request to: http://192.168.1.33:3000/api/auth/register
I/flutter: 📦 Body: {name: Test User, email: test@example.com}
I/flutter: ✅ Status: 200
I/flutter: 📥 Response: {success: true, token: ...}
I/flutter: Navigating to home screen
```

If you see timeout error:
```
E/flutter: SocketException: Failed to connect
```

Then check:
- Backend is running: `npm run dev` in backend folder
- Firewall rule added (see SETUP_MOBILE_CONNECTION.bat)
- Both on same WiFi

---

## 🔥 Hot Reload Demo

1. App is running on phone
2. Edit code in VS Code
3. Press `r` in terminal
4. Changes appear instantly on phone!

No rebuild needed! 🚀

---

## 📱 Complete Example

```bash
# 1. Connect phone via USB

# 2. Check connection
PS> flutter devices
SM G960F (mobile) • 988a4d303042564b • android-arm64 • Android 10

# 3. Run app
PS> cd apps\patient_app
PS> flutter run --verbose

Launching lib/main.dart on SM G960F in debug mode...
✓ Built build/app/outputs/flutter-apk/app-debug.apk.
Installing build/app/outputs/flutter-apk/app-debug.apk...

🔥 To hot reload changes, press "r"

# App opens on phone!

# 4. Test signup - watch logs in terminal
I/flutter: 🌐 API Request
I/flutter: URL: http://192.168.1.33:3000/api/auth/register
I/flutter: ✅ Response: 200
I/flutter: User created!

# 5. Make changes and hot reload
# Edit code in VS Code
# Press 'r'
Performing hot reload...
Reloaded 1 of 589 libraries in 234ms.

# 6. Done!
```

---

**Time Required**: 3 minutes
**Difficulty**: Easy
**Benefits**: Live logs, hot reload, instant install

**Next**: Connect phone and run `RUN_ON_PHONE.bat`! 🚀
