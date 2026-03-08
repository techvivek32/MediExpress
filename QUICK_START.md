# Quick Start Guide

## Get Everything Running in 5 Minutes

### Step 1: Start Backend (Terminal 1)
```bash
cd backend
npm install
npm run dev
```
✅ Backend running on http://localhost:3001

### Step 2: Start Admin Panel (Terminal 2)
```bash
cd admin_panel
npm install
npm run dev
```
✅ Admin Panel running on http://localhost:3000

### Step 3: Run Patient App (Terminal 3)
```bash
cd apps/patient_app
flutter pub get
flutter run
```
✅ Patient App running on emulator/simulator

### Step 4: Run Pharmacy App (Terminal 4)
```bash
cd apps/pharmacy_app
flutter pub get
flutter run
```
✅ Pharmacy App running on emulator/simulator

### Step 5: Run Rider App (Terminal 5)
```bash
cd apps/rider_app
flutter pub get
flutter run
```
✅ Rider App running on emulator/simulator

---

## Access Points

| Component | URL | Credentials |
|-----------|-----|-------------|
| Backend API | http://localhost:3001 | N/A |
| Admin Panel | http://localhost:3000 | admin@test.com / password123 |
| Patient App | Mobile Emulator | patient@test.com / password123 |
| Pharmacy App | Mobile Emulator | pharmacy@test.com / password123 |
| Rider App | Mobile Emulator | rider@test.com / password123 |

---

## Test the Complete Flow

### 1. Patient Orders Medicine
- Open Patient App
- Login with `patient@test.com`
- Tap "Upload Prescription"
- Select/take photo
- Enter delivery address
- Submit

### 2. Pharmacy Sends Quote
- Open Pharmacy App
- Login with `pharmacy@test.com`
- View prescription request
- Tap "Create Quote"
- Add medicines with prices
- Send quote

### 3. Patient Confirms Order
- Patient receives quote
- Review medicine prices
- Select payment method (Cash on Delivery)
- Confirm order

### 4. Rider Delivers
- Open Rider App
- Login with `rider@test.com`
- View nearby deliveries
- Accept delivery
- Confirm pickup from pharmacy
- Confirm delivery to patient

### 5. Admin Monitors
- Open Admin Panel
- View all orders in real-time
- Monitor patients, pharmacies, riders
- Check analytics

---

## Troubleshooting

### Backend won't start
```bash
cd backend
rm -rf node_modules
npm install
npm run dev
```

### Flutter app won't connect
- Check backend is running on port 3001
- For Android emulator, API uses `10.0.2.2:3001`
- For iOS simulator, API uses `localhost:3001`

### Dependencies issue
```bash
flutter clean
flutter pub get
```

---

## Project Structure

```
mediexpress/
├── backend/              # Next.js API (Port 3001)
├── admin_panel/          # Next.js Dashboard (Port 3000)
└── apps/
    ├── patient_app/      # Flutter Patient App
    ├── pharmacy_app/     # Flutter Pharmacy App
    └── rider_app/        # Flutter Rider App
```

---

## Key Files

### Backend
- `backend/src/app/api/` - API routes
- `backend/src/models/` - MongoDB models
- `backend/.env.local` - Environment variables

### Admin Panel
- `admin_panel/src/app/` - Next.js pages
- `admin_panel/src/components/` - React components

### Flutter Apps
- `lib/main.dart` - App entry point
- `lib/providers/` - State management
- `lib/services/` - API integration
- `lib/features/` - App screens

---

## Documentation

- `FLUTTER_SETUP_GUIDE.md` - Detailed Flutter setup
- `API_DOCUMENTATION.md` - API endpoints reference
- `ARCHITECTURE.md` - System architecture
- `IMPLEMENTATION_COMPLETE.md` - What was built
- `ACCESS_GUIDE.md` - How to access everything

---

## Need Help?

1. Check if backend is running: http://localhost:3001
2. Check if admin panel is running: http://localhost:3000
3. Check Flutter doctor: `flutter doctor`
4. Check backend logs for errors
5. Check Flutter logs: `flutter logs`

---

**You're all set! 🚀**
