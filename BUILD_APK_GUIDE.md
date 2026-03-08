# Build APK Guide for MediExpress Patient App

## Prerequisites

1. ✅ Flutter installed and configured
2. ✅ Android SDK installed
3. ✅ Google Maps API key configured (see GOOGLE_MAPS_SETUP.md)
4. ✅ Device/Emulator for testing

## Quick Build (Debug APK)

### Option 1: Simple Debug Build
```bash
cd apps/patient_app
flutter build apk --debug
```

Output: `build/app/outputs/flutter-apk/app-debug.apk`

### Option 2: Release Build (Unsigned)
```bash
cd apps/patient_app
flutter build apk --release
```

Output: `build/app/outputs/flutter-apk/app-release.apk`

## Production Build (Signed APK)

### Step 1: Create Keystore

```bash
keytool -genkey -v -keystore ~/mediexpress-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias mediexpress
```

You'll be asked:
- Password: (choose a strong password)
- Name, Organization, etc.

**IMPORTANT**: Save the keystore file and password securely!

### Step 2: Create key.properties

Create file: `apps/patient_app/android/key.properties`

```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=mediexpress
storeFile=C:/Users/YourUsername/mediexpress-key.jks
```

**Note**: Use absolute path for storeFile

### Step 3: Update build.gradle

File: `apps/patient_app/android/app/build.gradle`

Add before `android {`:
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Inside `android {` block, add:
```gradle
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
        storePassword keystoreProperties['storePassword']
    }
}

buildTypes {
    release {
        signingConfig signingConfigs.release
        // ... existing config
    }
}
```

### Step 4: Build Signed APK

```bash
cd apps/patient_app
flutter build apk --release
```

Output: `build/app/outputs/flutter-apk/app-release.apk`

## Build Split APKs (Smaller Size)

Build separate APKs for different CPU architectures:

```bash
flutter build apk --split-per-abi
```

This creates:
- `app-armeabi-v7a-release.apk` (32-bit ARM)
- `app-arm64-v8a-release.apk` (64-bit ARM) - Most modern devices
- `app-x86_64-release.apk` (64-bit x86)

## Build App Bundle (For Play Store)

```bash
flutter build appbundle --release
```

Output: `build/app/outputs/bundle/release/app-release.aab`

## Install APK on Device

### Via USB
```bash
flutter install
```

Or manually:
```bash
adb install build/app/outputs/flutter-apk/app-release.apk
```

### Via File Transfer
1. Copy APK to phone
2. Open file manager
3. Tap APK file
4. Allow "Install from unknown sources" if prompted
5. Install

## Build Configuration

### Update App Version

File: `apps/patient_app/pubspec.yaml`

```yaml
version: 1.0.0+1
#        │ │ │  └─ Build number (increment for each build)
#        └─┴─┴─── Version name (shown to users)
```

### Update App Name

File: `apps/patient_app/android/app/src/main/AndroidManifest.xml`

```xml
<application
    android:label="MediExpress Patient"
    ...>
```

### Update Package Name (if needed)

File: `apps/patient_app/android/app/build.gradle`

```gradle
defaultConfig {
    applicationId "com.mediexpress.patient_app"
    ...
}
```

## Optimize APK Size

### 1. Enable Proguard (Shrinking)

File: `apps/patient_app/android/app/build.gradle`

```gradle
buildTypes {
    release {
        shrinkResources true
        minifyEnabled true
        ...
    }
}
```

### 2. Remove Unused Resources

```bash
flutter build apk --release --tree-shake-icons
```

## Testing Checklist

Before releasing:

- [ ] Test on multiple devices (different Android versions)
- [ ] Test all features (GPS, camera, maps, etc.)
- [ ] Test with/without internet
- [ ] Check app permissions work correctly
- [ ] Verify Google Maps loads properly
- [ ] Test signup/login flow
- [ ] Test order placement
- [ ] Check app doesn't crash on back button
- [ ] Verify app icon and name are correct

## Common Build Errors

### Error: "Execution failed for task ':app:lintVitalRelease'"
Solution:
```gradle
// In android/app/build.gradle
android {
    lintOptions {
        checkReleaseBuilds false
    }
}
```

### Error: "Gradle build failed"
Solution:
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter pub get
flutter build apk
```

### Error: "Google Maps not showing"
- Check API key is correct
- Verify Maps SDK for Android is enabled
- Check internet connection
- Verify location permissions granted

## File Locations

After build, find your APK here:

```
apps/patient_app/
└── build/
    └── app/
        └── outputs/
            ├── flutter-apk/
            │   ├── app-debug.apk
            │   ├── app-release.apk
            │   ├── app-armeabi-v7a-release.apk
            │   ├── app-arm64-v8a-release.apk
            │   └── app-x86_64-release.apk
            └── bundle/
                └── release/
                    └── app-release.aab
```

## Quick Commands Reference

```bash
# Debug build
flutter build apk --debug

# Release build
flutter build apk --release

# Split APKs (recommended)
flutter build apk --split-per-abi

# App Bundle for Play Store
flutter build appbundle --release

# Install on connected device
flutter install

# Clean build
flutter clean && flutter pub get && flutter build apk --release
```

## Next Steps

1. Test APK thoroughly on real devices
2. Get SHA-1 fingerprint and update Google Maps API restrictions
3. Create app icon and splash screen
4. Prepare for Play Store submission (if needed)
5. Set up Firebase for push notifications (optional)

## Support

If you encounter issues:
1. Check Flutter doctor: `flutter doctor -v`
2. Clean and rebuild: `flutter clean && flutter pub get`
3. Check Android SDK is up to date
4. Verify all dependencies in pubspec.yaml are compatible
