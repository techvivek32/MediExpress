# Setup Instructions

## Quick Start Guide

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/mediexpress.git
cd mediexpress
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

Backend runs on `http://localhost:3001`

### 3. Admin Panel Setup

```bash
cd admin_panel
npm install
npm run dev
```

Admin panel runs on `http://localhost:3002`

### 4. Patient App Setup

```bash
cd apps/patient_app
flutter pub get
flutter run
```

### 5. Pharmacy App Setup

```bash
cd apps/pharmacy_app
flutter pub get
flutter run
```

### 6. Rider App Setup

```bash
cd apps/rider_app
flutter pub get
flutter run
```

## Detailed Setup

### Prerequisites

Install the following:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Flutter** 3.0+ ([Install Guide](https://flutter.dev/docs/get-started/install))
- **MongoDB** (Local or Atlas)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, Mac only)

### Environment Configuration

#### Backend (.env)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/mediexpress

# JWT
JWT_SECRET=your-secret-key-change-this
JWT_EXPIRES_IN=7d

# Firebase (Get from Firebase Console)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your-project.iam.gserviceaccount.com

# Cloudinary (Sign up at cloudinary.com)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Google Maps
GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# App
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=development
```

#### Flutter Apps

Update API URL in each app:

**`apps/patient_app/lib/services/api_service.dart`**
```dart
static const String baseUrl = 'http://localhost:3001/api';
// For Android emulator: http://10.0.2.2:3001/api
// For iOS simulator: http://localhost:3001/api
// For physical device: http://YOUR_IP:3001/api
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add Android and iOS apps
4. Download configuration files:
   - `google-services.json` for Android
   - `GoogleService-Info.plist` for iOS
5. Place files in respective directories

### Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable these APIs:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Geocoding API
   - Directions API
4. Create API key
5. Add to environment variables

### MongoDB Setup

#### Option 1: Local MongoDB

```bash
# Install MongoDB
# macOS
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Connection string
MONGODB_URI=mongodb://localhost:27017/mediexpress
```

#### Option 2: MongoDB Atlas (Recommended)

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP address (0.0.0.0/0 for development)
5. Get connection string

### Running the Platform

#### Terminal 1: Backend
```bash
cd backend
npm run dev
```

#### Terminal 2: Admin Panel
```bash
cd admin_panel
npm run dev
```

#### Terminal 3: Patient App
```bash
cd apps/patient_app
flutter run
```

#### Terminal 4: Pharmacy App
```bash
cd apps/pharmacy_app
flutter run
```

#### Terminal 5: Rider App
```bash
cd apps/rider_app
flutter run
```

## Testing

### Create Test Users

Use the API or admin panel to create test accounts:

**Patient:**
```json
{
  "fullName": "Test Patient",
  "email": "patient@test.com",
  "phone": "+212600000001",
  "password": "password123",
  "role": "patient"
}
```

**Pharmacy:**
```json
{
  "fullName": "Test Pharmacy",
  "email": "pharmacy@test.com",
  "phone": "+212600000002",
  "password": "password123",
  "role": "pharmacy",
  "pharmacyName": "City Pharmacy",
  "licenseNumber": "PH12345",
  "address": "123 Main St, Casablanca",
  "coordinates": [-7.6163, 33.5731]
}
```

**Rider:**
```json
{
  "fullName": "Test Rider",
  "email": "rider@test.com",
  "phone": "+212600000003",
  "password": "password123",
  "role": "rider",
  "vehicleType": "bike",
  "vehicleNumber": "A-12345",
  "licenseNumber": "DL12345"
}
```

### Test Workflow

1. **Patient App**: Register → Login → Upload prescription
2. **Pharmacy App**: Login → View requests → Create quote
3. **Patient App**: View quote → Confirm order
4. **Rider App**: Login → View deliveries → Accept delivery
5. **Patient App**: Track delivery in real-time

## Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
```bash
# Check MongoDB is running
mongosh
# or
brew services list
```

**Port Already in Use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Flutter Issues

**Packages Not Found:**
```bash
flutter pub get
flutter clean
flutter pub get
```

**Build Errors:**
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter run
```

**iOS Pods Error:**
```bash
cd ios
pod deintegrate
pod install
cd ..
flutter run
```

### Common Errors

**CORS Error:**
- Add your frontend URL to CORS whitelist in backend

**Firebase Error:**
- Verify configuration files are in correct location
- Check Firebase project settings

**Maps Not Loading:**
- Verify API key is correct
- Check API is enabled in Google Cloud Console
- Ensure billing is enabled

## Development Tips

1. **Hot Reload**: Press `r` in Flutter terminal for hot reload
2. **Debug Mode**: Use Flutter DevTools for debugging
3. **API Testing**: Use Postman or Thunder Client
4. **Database GUI**: Use MongoDB Compass
5. **Logs**: Check terminal outputs for errors

## Next Steps

- Customize UI theme colors
- Add more features
- Implement payment gateway
- Add analytics
- Set up CI/CD pipeline
- Write tests
