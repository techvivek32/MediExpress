# Quick Reference Guide

## 🎯 What You Need to Do Right Now

```
Step 1: Get Google Maps API Key (5 min)
   ↓
Step 2: Add Key to AndroidManifest.xml (30 sec)
   ↓
Step 3: Build APK (2 min)
   ↓
Step 4: Install on Phone (1 min)
   ↓
Step 5: Test Map Feature ✨
```

---

## 📍 File Locations

### Add API Key Here:
```
apps/patient_app/android/app/src/main/AndroidManifest.xml
```
Look for: `android:value="YOUR_GOOGLE_MAPS_API_KEY_HERE"/>`

### APK Output Location:
```
apps/patient_app/build/app/outputs/flutter-apk/app-release.apk
```

### Backend Environment:
```
backend/.env.local
```

---

## ⚡ Quick Commands

### Build APK
```bash
BUILD_APK.bat
```

### Install APK
```bash
INSTALL_APK.bat
```

### Start Backend
```bash
cd backend
npm run dev
```

### Run App (Development)
```bash
cd apps/patient_app
flutter run
```

---

## 🔗 Important Links

### Get API Key:
```
https://console.cloud.google.com/
```

### Enable APIs:
- Maps SDK for Android
- Geocoding API

---

## 📱 App Flow

```
1. Sign Up → Enter Email → Receive OTP → Verify
2. Login → Home Screen
3. Profile → Saved Addresses → Add Address
4. Pick on Map → Map Loads → Select Location
5. Verify Address → Save
```

---

## ✅ What's Working

✅ Backend API (Port 3000)
✅ Admin Panel (/admin)
✅ Email OTP (Gmail)
✅ Authentication
✅ Home Screen
✅ Prescription Upload
✅ Order Management
✅ Profile Pages
✅ GPS Location
✅ Google Maps Integration
✅ Address Management

---

## ⏳ What's Pending

⏳ Google Maps API Key (You need to add this)

---

## 🆘 Quick Troubleshooting

### Map not loading?
- Check API key in AndroidManifest.xml
- Enable "Maps SDK for Android" in Google Cloud
- Test on Android device (not web)

### Can't build APK?
```bash
cd apps/patient_app
flutter clean
flutter pub get
flutter build apk --release
```

### Backend not connecting?
```bash
cd backend
npm install
npm run dev
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `START_HERE.md` | Quick 3-step guide |
| `API_KEY_SETUP.md` | Get API key |
| `CURRENT_STATUS_MAPS.md` | Current status |
| `IMPLEMENTATION_SUMMARY.md` | Complete summary |
| `GOOGLE_MAPS_SETUP.md` | Detailed Maps setup |
| `BUILD_APK_GUIDE.md` | Detailed build guide |

---

## 🎯 Success Checklist

- [ ] Got Google Maps API key
- [ ] Added key to AndroidManifest.xml
- [ ] Built APK successfully
- [ ] Installed on phone
- [ ] App opens
- [ ] Can sign up
- [ ] Can log in
- [ ] Map loads when clicking "Pick on Map"
- [ ] Can select location
- [ ] Can save address

---

**Ready? Open `START_HERE.md` and follow the steps! 🚀**
