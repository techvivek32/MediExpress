# Next Steps: Google Maps Setup & APK Build

## Current Status ✅

Your MediExpress Patient App is fully implemented with:
- GPS location fetching
- Interactive Google Maps with draggable marker
- Reverse geocoding (coordinates → address)
- Mandatory location requirement for addresses
- All address fields validated

## What You Need to Do Now

### Step 1: Get Google Maps API Key (5-10 minutes)

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account (vivekvora3226@gmail.com)

2. **Create Project**
   - Click project dropdown at top
   - Click "NEW PROJECT"
   - Name: "MediExpress"
   - Click "CREATE"

3. **Enable APIs**
   - Go to "APIs & Services" → "Library"
   - Search and enable:
     - ✅ Maps SDK for Android
     - ✅ Geocoding API

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "CREATE CREDENTIALS" → "API key"
   - Copy the key (looks like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

5. **Restrict Key (Optional but Recommended)**
   - Click "RESTRICT KEY"
   - Application restrictions: Select "Android apps"
   - Add package: `com.mediexpress.patient_app`
   - API restrictions: Select "Maps SDK for Android" and "Geocoding API"
   - Click "SAVE"

### Step 2: Add API Key to App (1 minute)

Open file: `apps/patient_app/android/app/src/main/AndroidManifest.xml`

Add this inside `<application>` tag (before the closing `</application>`):

```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY_HERE"/>
```

Replace `YOUR_API_KEY_HERE` with your actual API key from Step 1.

### Step 3: Build APK (2 minutes)

Open terminal and run:

```bash
cd apps/patient_app
flutter build apk --release
```

Your APK will be at:
```
apps/patient_app/build/app/outputs/flutter-apk/app-release.apk
```

### Step 4: Install on Phone

**Option A: Via USB**
```bash
flutter install
```

**Option B: Copy APK to Phone**
1. Copy `app-release.apk` to your phone
2. Open file manager on phone
3. Tap the APK file
4. Allow "Install from unknown sources" if prompted
5. Install

### Step 5: Test the App

1. Open MediExpress Patient app
2. Sign up / Log in
3. Go to Profile → Saved Addresses → Add Address
4. Click "Use GPS" or "Pick on Map"
5. Map should load with your location
6. Drag marker or tap to select location
7. Confirm and verify address details
8. Save address

## Important Notes

- **Free Tier**: Google Maps provides $200 free credit/month (more than enough for testing)
- **Billing**: You need to enable billing in Google Cloud, but won't be charged unless you exceed free tier
- **Web Version**: Google Maps won't work on web (Chrome) - only on Android APK
- **Testing**: Always test on real Android device for GPS and maps

## Troubleshooting

### Map shows blank/gray screen
- Check API key is correct in AndroidManifest.xml
- Verify "Maps SDK for Android" is enabled in Google Cloud
- Make sure you're testing on Android device (not web)

### "This app won't run unless you update Google Play services"
- Update Google Play Services on your device
- Or use a device with newer Android version

### Location permission denied
- Go to phone Settings → Apps → MediExpress Patient → Permissions
- Enable Location permission

## Files Modified

✅ `apps/patient_app/lib/features/profile/screens/add_address_screen.dart` - GPS + Map integration
✅ `apps/patient_app/lib/features/profile/screens/map_picker_screen.dart` - Interactive map
✅ `apps/patient_app/android/app/src/main/AndroidManifest.xml` - Ready for API key
✅ `apps/patient_app/pubspec.yaml` - All dependencies added

## Need Help?

Refer to these detailed guides:
- `GOOGLE_MAPS_SETUP.md` - Complete Google Maps setup
- `BUILD_APK_GUIDE.md` - Detailed APK building instructions

---

**Ready to proceed?** Follow Step 1 above to get your Google Maps API key!
