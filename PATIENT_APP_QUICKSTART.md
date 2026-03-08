# 🚀 Patient App - Quick Start Guide

## ✅ Current Status

The Patient App is **READY TO BUILD** with all features implemented:

✅ Complete Flutter project structure
✅ All dependencies installed (122 packages)
✅ Backend API integration configured
✅ Material 3 design theme
✅ Provider state management
✅ All screens implemented

---

## 📱 What's Included

### Features Implemented
1. **Authentication**
   - Splash screen
   - Login screen
   - Signup screen
   - Token-based auth

2. **Prescription Management**
   - Upload prescription (camera/gallery)
   - Multiple image support
   - Address selection

3. **Quote System**
   - View quotes from pharmacies
   - Compare prices
   - Quote details

4. **Order Management**
   - Payment selection
   - Order confirmation
   - Real-time tracking
   - Order history

5. **Profile**
   - User profile
   - Edit details
   - Logout

---

## 🎯 Quick Start (3 Steps)

### Step 1: Ensure Backend is Running
```bash
cd backend
npm run dev
```
Backend should be running on: http://localhost:3000

### Step 2: Open Patient App
```bash
cd apps/patient_app
```

### Step 3: Run the App
```bash
# For Android Emulator
flutter run

# For iOS Simulator (macOS only)
flutter run

# For Chrome (Web)
flutter run -d chrome
```

---

## 📋 Pre-Flight Checklist

Before running the app, verify:

- [ ] Flutter is installed: `flutter --version`
- [ ] Backend is running on port 3000
- [ ] Dependencies installed: `flutter pub get` (already done ✅)
- [ ] Device/emulator is connected: `flutter devices`

---

## 🔧 API Configuration

The app is configured to connect to:

**Android Emulator**: `http://10.0.2.2:3000/api`
**iOS Simulator**: `http://localhost:3000/api`

Location: `apps/patient_app/lib/core/constants/app_constants.dart`

---

## 📱 Testing on Different Platforms

### Android Emulator
1. Open Android Studio
2. Start an emulator (AVD Manager)
3. Run: `flutter run`

### iOS Simulator (macOS only)
1. Open Xcode
2. Start simulator: `open -a Simulator`
3. Run: `flutter run`

### Physical Device
1. Enable USB debugging on device
2. Connect via USB
3. Run: `flutter devices` to see device ID
4. Run: `flutter run -d <device-id>`

**Important**: For physical devices, update the API URL to your computer's IP:
```dart
// In app_constants.dart
static const String baseUrl = 'http://192.168.1.XXX:3000/api';
```

---

## 🎨 App Screens Flow

```
Splash Screen
    ↓
Login/Signup
    ↓
Home Screen
    ↓
Upload Prescription → Address Selection → View Quotes
    ↓
Quote Details → Payment Selection → Order Confirmation
    ↓
Order Tracking → Order History
```

---

## 🏗️ Build for Production

### Android APK (Release)
```bash
cd apps/patient_app
flutter build apk --release
```
Output: `build/app/outputs/flutter-apk/app-release.apk`

### Android App Bundle (Play Store)
```bash
flutter build appbundle --release
```
Output: `build/app/outputs/bundle/release/app-release.aab`

### iOS (macOS only)
```bash
flutter build ios --release
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot connect to backend"
**Solution**: 
- Check backend is running: `curl http://localhost:3000/api/health`
- For Android emulator, use `10.0.2.2:3000` not `localhost:3000`
- For physical device, use your computer's IP address

### Issue 2: "Dependencies not found"
**Solution**:
```bash
flutter clean
flutter pub get
```

### Issue 3: "Build failed"
**Solution**:
```bash
# For Android
cd android
./gradlew clean
cd ..
flutter build apk

# For iOS (macOS)
cd ios
pod install
cd ..
flutter build ios
```

### Issue 4: "Hot reload not working"
**Solution**:
- Press `r` in terminal for hot reload
- Press `R` for hot restart
- Or stop and run `flutter run` again

---

## 📊 App Architecture

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│  (Screens, Widgets, UI Components)  │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│        State Management Layer       │
│    (Providers - Auth, Order, Rx)    │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│          Service Layer              │
│  (API Service, Auth, Prescription)  │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│          Backend API                │
│    (http://localhost:3000/api)      │
└─────────────────────────────────────┘
```

---

## 🎯 Development Workflow

1. **Start Backend**
   ```bash
   cd backend && npm run dev
   ```

2. **Run Patient App**
   ```bash
   cd apps/patient_app && flutter run
   ```

3. **Make Changes**
   - Edit code in VS Code or Android Studio
   - Press `r` for hot reload
   - Press `R` for hot restart

4. **Test Features**
   - Test authentication flow
   - Upload prescription
   - View quotes
   - Place order
   - Track delivery

---

## 📦 Dependencies Overview

Key packages used:
- **provider**: State management
- **http/dio**: API calls
- **image_picker**: Camera/gallery
- **google_maps_flutter**: Maps integration
- **geolocator**: Location services
- **firebase_messaging**: Push notifications
- **shared_preferences**: Local storage
- **cached_network_image**: Image caching

---

## 🔐 Security Features

✅ Token-based authentication
✅ Secure API communication
✅ Input validation
✅ Error handling
✅ Session management

---

## 📱 Supported Platforms

- ✅ Android 8.0+ (API 26+)
- ✅ iOS 12.0+
- ✅ Web (Chrome)

---

## 🎨 Design System

- **Theme**: Material 3
- **Primary Color**: Medical Green (#2E7D32)
- **Typography**: Google Fonts
- **Spacing**: 8px grid system
- **Components**: Reusable widgets

---

## 📞 Next Steps

1. ✅ Backend is running on port 3000
2. ✅ Patient app dependencies installed
3. ⏭️ Run `flutter run` to start the app
4. ⏭️ Test authentication flow
5. ⏭️ Test prescription upload
6. ⏭️ Test order placement
7. ⏭️ Build release version

---

## 🚀 Ready to Launch!

The Patient App is fully configured and ready to run. Simply execute:

```bash
cd apps/patient_app
flutter run
```

Then test the complete user journey from signup to order tracking!

---

**Status**: ✅ READY TO BUILD AND RUN
**Backend**: http://localhost:3000
**API Docs**: See API_DOCUMENTATION.md
