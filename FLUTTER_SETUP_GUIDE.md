# Flutter Apps Setup Guide

## Overview

This project includes 3 Flutter mobile applications:
- **Patient App**: For patients to upload prescriptions and order medicines
- **Pharmacy App**: For pharmacies to receive requests and send quotes
- **Rider App**: For delivery riders to accept and complete deliveries

All apps connect to the same backend API running on `http://localhost:3001`

## Prerequisites

1. **Flutter SDK** (3.0 or higher)
   ```bash
   flutter --version
   ```

2. **Android Studio** or **Xcode** (for iOS)

3. **Backend API** running on port 3001

## Installation Steps

### 1. Install Dependencies

For each app, navigate to its directory and run:

```bash
# Patient App
cd apps/patient_app
flutter pub get

# Pharmacy App
cd apps/pharmacy_app
flutter pub get

# Rider App
cd apps/rider_app
flutter pub get
```

### 2. Required Dependencies

Each `pubspec.yaml` should include:

```yaml
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.1
  http: ^1.1.0
  shared_preferences: ^2.2.2
  google_fonts: ^6.1.0
  image_picker: ^1.0.7
  firebase_core: ^2.24.2
  firebase_messaging: ^14.7.10
  google_maps_flutter: ^2.5.0
```

### 3. Update pubspec.yaml Files

Add these dependencies to each app's `pubspec.yaml`:

**Patient App** (`apps/patient_app/pubspec.yaml`):
```yaml
name: patient_app
description: MediExpress Patient App
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.1
  http: ^1.1.0
  shared_preferences: ^2.2.2
  google_fonts: ^6.1.0
  image_picker: ^1.0.7

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
```

**Pharmacy App** (`apps/pharmacy_app/pubspec.yaml`):
```yaml
name: pharmacy_app
description: MediExpress Pharmacy App
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.1
  http: ^1.1.0
  shared_preferences: ^2.2.2
  google_fonts: ^6.1.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
```

**Rider App** (`apps/rider_app/pubspec.yaml`):
```yaml
name: rider_app
description: MediExpress Rider App
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.1
  http: ^1.1.0
  shared_preferences: ^2.2.2
  google_fonts: ^6.1.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
```

## Running the Apps

### Start Backend First

```bash
cd backend
npm run dev
```

Backend should be running on `http://localhost:3001`

### Run Flutter Apps

#### Patient App
```bash
cd apps/patient_app
flutter run
```

#### Pharmacy App
```bash
cd apps/pharmacy_app
flutter run
```

#### Rider App
```bash
cd apps/rider_app
flutter run
```

## API Configuration

### Android Emulator
The apps are configured to use `10.0.2.2:3001` for Android emulator

### iOS Simulator
The apps use `localhost:3001` for iOS simulator

### Physical Device
Update the `baseUrl` in each app's `app_constants.dart`:
```dart
static const String baseUrl = 'http://YOUR_COMPUTER_IP:3001/api';
```

## Testing Credentials

### Patient Account
```
Email: patient@test.com
Password: password123
```

### Pharmacy Account
```
Email: pharmacy@test.com
Password: password123
```

### Rider Account
```
Email: rider@test.com
Password: password123
```

## App Features

### Patient App
- Upload prescription images
- View quotes from pharmacies
- Select and confirm orders
- Track delivery in real-time
- View order history
- Manage profile

### Pharmacy App
- View prescription requests
- Create and send quotes
- Manage medicine inventory
- Track order status
- View earnings

### Rider App
- View nearby deliveries
- Accept delivery requests
- Navigate to pickup/delivery locations
- Update delivery status
- Track earnings

## Troubleshooting

### Connection Issues

1. **Android Emulator can't connect**
   - Ensure backend is running
   - Use `10.0.2.2` instead of `localhost`
   - Check firewall settings

2. **iOS Simulator can't connect**
   - Use `localhost` or your computer's IP
   - Check if backend is accessible

3. **Physical Device can't connect**
   - Use your computer's local IP address
   - Ensure device and computer are on same network
   - Update `baseUrl` in `app_constants.dart`

### Build Issues

1. **Dependencies not found**
   ```bash
   flutter pub get
   flutter clean
   flutter pub get
   ```

2. **Google Fonts not loading**
   - Check internet connection
   - Fonts are downloaded on first run

3. **Image Picker not working**
   - Add permissions to `AndroidManifest.xml` and `Info.plist`

## Next Steps

1. **Add Firebase** (Optional)
   - Configure Firebase for push notifications
   - Add `google-services.json` (Android)
   - Add `GoogleService-Info.plist` (iOS)

2. **Add Google Maps** (Optional)
   - Get API key from Google Cloud Console
   - Configure in Android and iOS projects

3. **Build for Production**
   ```bash
   flutter build apk --release  # Android
   flutter build ios --release  # iOS
   ```

## Project Structure

```
apps/
├── patient_app/
│   ├── lib/
│   │   ├── core/
│   │   │   ├── constants/
│   │   │   ├── theme/
│   │   │   └── widgets/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── home/
│   │   │   ├── orders/
│   │   │   ├── prescription/
│   │   │   └── profile/
│   │   ├── models/
│   │   ├── providers/
│   │   ├── services/
│   │   └── main.dart
│   └── pubspec.yaml
├── pharmacy_app/
│   └── [similar structure]
└── rider_app/
    └── [similar structure]
```

## Support

For issues or questions:
1. Check API documentation: `API_DOCUMENTATION.md`
2. Review architecture: `ARCHITECTURE.md`
3. Check backend logs for API errors
4. Use Flutter DevTools for debugging

## Development Tips

1. **Hot Reload**: Press `r` in terminal while app is running
2. **Hot Restart**: Press `R` for full restart
3. **DevTools**: Run `flutter pub global activate devtools` then `flutter pub global run devtools`
4. **Logs**: Use `flutter logs` to see real-time logs
5. **Debug**: Use VS Code or Android Studio debugger

## Performance

- Apps use Provider for state management (lightweight)
- Images should be optimized before upload
- API calls are cached where appropriate
- Minimal dependencies for faster builds
