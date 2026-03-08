# Quick API Key Setup Guide

## 🎯 Your Task: Get Google Maps API Key and Add to App

### Part 1: Get API Key (5 minutes)

1. **Open Google Cloud Console**
   ```
   https://console.cloud.google.com/
   ```

2. **Create New Project**
   - Click project dropdown (top left)
   - Click "NEW PROJECT"
   - Project name: `MediExpress`
   - Click "CREATE"

3. **Enable APIs**
   - Left menu → "APIs & Services" → "Library"
   - Search: `Maps SDK for Android` → Click → Enable
   - Search: `Geocoding API` → Click → Enable

4. **Create API Key**
   - Left menu → "APIs & Services" → "Credentials"
   - Click "CREATE CREDENTIALS" → "API key"
   - **COPY THE KEY** (it looks like: `AIzaSyABC123...`)

### Part 2: Add Key to App (30 seconds)

**File to Edit:**
```
apps/patient_app/android/app/src/main/AndroidManifest.xml
```

**Find this line:**
```xml
android:value="YOUR_GOOGLE_MAPS_API_KEY_HERE"/>
```

**Replace with your actual key:**
```xml
android:value="AIzaSyABC123XYZ..."/>
```

**Save the file!**

### Part 3: Build APK (2 minutes)

**Open terminal and run:**
```bash
cd apps/patient_app
flutter build apk --release
```

**APK Location:**
```
apps/patient_app/build/app/outputs/flutter-apk/app-release.apk
```

### Part 4: Install & Test

**Install on phone:**
```bash
flutter install
```

**Or copy APK to phone and install manually**

**Test:**
1. Open app
2. Profile → Saved Addresses → Add Address
3. Click "Pick on Map"
4. Map should load! 🎉

---

## ⚠️ Important Notes

- **Billing Required**: Google Cloud requires billing enabled (but you get $200 free/month)
- **Web Won't Work**: Google Maps only works on Android APK, not on web browser
- **Keep Key Secret**: Don't share your API key publicly

## 🆘 Troubleshooting

**Map shows blank screen?**
- Check API key is correct
- Verify "Maps SDK for Android" is enabled
- Make sure you're on Android device (not web)

**"Enable billing" error?**
- Go to Google Cloud Console
- Billing → Enable billing
- Add payment method (won't be charged for normal usage)

---

## ✅ Quick Checklist

- [ ] Created Google Cloud project
- [ ] Enabled "Maps SDK for Android"
- [ ] Enabled "Geocoding API"
- [ ] Created API key
- [ ] Added key to AndroidManifest.xml
- [ ] Built APK
- [ ] Installed on phone
- [ ] Tested map feature

**All done? Your app should now have working Google Maps! 🚀**
