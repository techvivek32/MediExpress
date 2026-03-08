# Google Maps API Setup Guide

## Step 1: Get Google Maps API Key

### 1.1 Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/
2. Sign in with your Google account

### 1.2 Create a New Project (or select existing)
1. Click on the project dropdown at the top
2. Click "NEW PROJECT"
3. Enter project name: "MediExpress" (or any name)
4. Click "CREATE"

### 1.3 Enable Required APIs
1. Go to "APIs & Services" > "Library"
2. Search and enable these APIs:
   - **Maps SDK for Android**
   - **Maps SDK for iOS** (if building for iOS)
   - **Geocoding API**
   - **Places API** (optional, for address autocomplete)

### 1.4 Create API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "CREATE CREDENTIALS" > "API key"
3. Copy the API key (it will look like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
4. Click "RESTRICT KEY" (recommended for security)

### 1.5 Restrict API Key (Recommended)
1. Under "Application restrictions":
   - Select "Android apps"
   - Click "ADD AN ITEM"
   - Package name: `com.mediexpress.patient_app`
   - SHA-1 certificate fingerprint: (get from step below)

2. Under "API restrictions":
   - Select "Restrict key"
   - Check: Maps SDK for Android, Geocoding API

### 1.6 Get SHA-1 Certificate Fingerprint
Run this command in your terminal:
```bash
cd apps/patient_app/android
./gradlew signingReport
```

Or for debug key:
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

Copy the SHA-1 fingerprint and add it to the API key restrictions.

## Step 2: Add API Key to Android App

### 2.1 Open AndroidManifest.xml
File: `apps/patient_app/android/app/src/main/AndroidManifest.xml`

### 2.2 Add Meta-data (Already done, just update the key)
The file already has the placeholder. Replace `YOUR_GOOGLE_MAPS_API_KEY_HERE` with your actual API key.

```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_ACTUAL_API_KEY_HERE"/>
```

## Step 3: Verify Setup

### 3.1 Test on Device
```bash
cd apps/patient_app
flutter run -d <device-id>
```

### 3.2 Check Map Loads
1. Open the app
2. Go to Profile > Saved Addresses > Add Address
3. Click "Pick on Map"
4. Map should load with your location

## Important Notes

1. **Free Tier**: Google Maps provides $200 free credit per month
2. **Billing**: You need to enable billing on Google Cloud (but won't be charged unless you exceed free tier)
3. **Security**: Always restrict your API keys to prevent unauthorized use
4. **Multiple Keys**: Consider using different keys for debug and release builds

## Troubleshooting

### Map shows blank/gray
- Check if API key is correct
- Verify Maps SDK for Android is enabled
- Check SHA-1 fingerprint matches

### "This app won't run unless you update Google Play services"
- Update Google Play Services on your device
- Or use a device with newer Android version

### API key restrictions not working
- Make sure package name matches exactly: `com.mediexpress.patient_app`
- SHA-1 fingerprint must match your signing key
- Wait a few minutes for restrictions to take effect
