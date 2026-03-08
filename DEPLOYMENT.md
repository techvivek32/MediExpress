# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account
- Firebase project
- Google Maps API key
- Vercel account
- Flutter SDK 3.0+

## Backend Deployment (Vercel)

### 1. Setup MongoDB Atlas

```bash
# Create a MongoDB Atlas cluster
# Get connection string: mongodb+srv://username:password@cluster.mongodb.net/mediexpress
```

### 2. Setup Environment Variables

Create `.env.production` in backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### 3. Deploy to Vercel

```bash
cd backend
npm install
vercel --prod
```

Configure environment variables in Vercel dashboard.

## Admin Panel Deployment (Vercel)

### 1. Build Admin Panel

```bash
cd admin_panel
npm install
npm run build
```

### 2. Deploy to Vercel

```bash
vercel --prod
```

Set environment variable:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
```

## Flutter Apps Deployment

### Patient App

#### Android

```bash
cd apps/patient_app
flutter build apk --release
# Output: build/app/outputs/flutter-apk/app-release.apk
```

Upload to Google Play Console.

#### iOS

```bash
flutter build ios --release
# Open Xcode and archive
```

Upload to App Store Connect.

### Pharmacy App

```bash
cd apps/pharmacy_app
flutter build apk --release
flutter build ios --release
```

### Rider App

```bash
cd apps/rider_app
flutter build apk --release
flutter build ios --release
```

## Firebase Setup

### 1. Create Firebase Project

- Go to Firebase Console
- Create new project
- Enable Cloud Messaging
- Download configuration files

### 2. Android Configuration

Place `google-services.json` in:
- `apps/patient_app/android/app/`
- `apps/pharmacy_app/android/app/`
- `apps/rider_app/android/app/`

### 3. iOS Configuration

Place `GoogleService-Info.plist` in:
- `apps/patient_app/ios/Runner/`
- `apps/pharmacy_app/ios/Runner/`
- `apps/rider_app/ios/Runner/`

## Google Maps Setup

### 1. Enable APIs

- Maps SDK for Android
- Maps SDK for iOS
- Geocoding API
- Directions API

### 2. Add API Keys

**Android** (`android/app/src/main/AndroidManifest.xml`):
```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY"/>
```

**iOS** (`ios/Runner/AppDelegate.swift`):
```swift
GMSServices.provideAPIKey("YOUR_API_KEY")
```

## Database Indexes

Run these commands in MongoDB:

```javascript
// Users
db.users.createIndex({ email: 1 });
db.users.createIndex({ phone: 1 });

// Pharmacies - Geospatial
db.pharmacies.createIndex({ location: "2dsphere" });

// Riders - Geospatial
db.riders.createIndex({ currentLocation: "2dsphere" });

// Orders
db.orders.createIndex({ orderNumber: 1 });
db.orders.createIndex({ status: 1 });
```

## Post-Deployment Checklist

- [ ] Test user registration and login
- [ ] Test prescription upload
- [ ] Test pharmacy quote creation
- [ ] Test order placement
- [ ] Test rider assignment
- [ ] Test push notifications
- [ ] Test payment processing
- [ ] Verify geolocation features
- [ ] Check admin dashboard access
- [ ] Monitor error logs

## Monitoring

### Vercel

- Check deployment logs
- Monitor function execution times
- Set up alerts for errors

### Firebase

- Monitor FCM delivery rates
- Check crash reports

### MongoDB Atlas

- Monitor database performance
- Set up alerts for high usage
- Enable backup

## Scaling Considerations

1. **Database**: Use MongoDB Atlas auto-scaling
2. **API**: Vercel automatically scales
3. **Images**: Use CDN (Cloudinary)
4. **Notifications**: Firebase handles scaling
5. **Caching**: Implement Redis for frequent queries

## Security Checklist

- [ ] Enable HTTPS only
- [ ] Implement rate limiting
- [ ] Validate all inputs
- [ ] Sanitize user data
- [ ] Use environment variables
- [ ] Enable CORS properly
- [ ] Implement API authentication
- [ ] Regular security audits
