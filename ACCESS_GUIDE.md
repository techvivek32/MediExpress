# 🚀 MediExpress - Complete Access Guide

## 📍 How to Access Everything

### 🔧 Backend API
**URL**: http://localhost:3001  
**Port**: 3001

**Start Command**:
```bash
cd backend
npm install
npm run dev
```

**Available Endpoints**:
- **Root**: http://localhost:3001 - API documentation page
- **Health Check**: http://localhost:3001/api/health
- **Auth**: 
  - POST http://localhost:3001/api/auth/register
  - POST http://localhost:3001/api/auth/login
- **Prescriptions**: 
  - POST http://localhost:3001/api/prescriptions/upload
- **Pharmacy**: 
  - GET http://localhost:3001/api/pharmacy/requests
  - POST http://localhost:3001/api/pharmacy/send-quote
- **Orders**: 
  - POST http://localhost:3001/api/orders/confirm
- **Rider**: 
  - GET http://localhost:3001/api/rider/nearby-deliveries
  - POST http://localhost:3001/api/rider/accept-delivery

---

### 💼 Admin Panel (Dashboard)
**URL**: http://localhost:3000  
**Port**: 3000

**Start Command**:
```bash
cd admin_panel
npm install
npm run dev
```

**Available Pages**:
- **Dashboard**: http://localhost:3000 - Main analytics dashboard
- **Patients**: http://localhost:3000/patients - Patient management
- **Pharmacies**: http://localhost:3000/pharmacies - Pharmacy management
- **Riders**: http://localhost:3000/riders - Rider management
- **Orders**: http://localhost:3000/orders - Order management

**Features**:
- ✅ Real-time statistics
- ✅ Revenue charts
- ✅ User management tables
- ✅ Search and filters
- ✅ Status management
- ✅ Export functionality

---

### 📱 Patient Mobile App (Flutter)
**Platform**: Android / iOS

**Start Command**:
```bash
cd apps/patient_app
flutter pub get
flutter run
```

**Screens**:
- Splash Screen
- Login / Signup
- Home Dashboard
- Upload Prescription
- Quote Details
- Order History
- Profile

---

### 🏥 Pharmacy Mobile App (Flutter)
**Platform**: Android / iOS

**Start Command**:
```bash
cd apps/pharmacy_app
flutter pub get
flutter run
```

**Screens**:
- Login
- Dashboard
- Prescription Requests
- Create Quote
- Order Management
- Earnings

---

### 🏍️ Rider Mobile App (Flutter)
**Platform**: Android / iOS

**Start Command**:
```bash
cd apps/rider_app
flutter pub get
flutter run
```

**Screens**:
- Login
- Dashboard
- Nearby Deliveries
- Delivery Details
- Navigation
- Earnings

---

## 🔥 Quick Start - Run Everything

### Terminal 1: Backend API
```bash
cd backend
npm install
npm run dev
```
✅ Backend running on http://localhost:3001

### Terminal 2: Admin Panel
```bash
cd admin_panel
npm install
npm run dev
```
✅ Admin Panel running on http://localhost:3000

### Terminal 3: Patient App
```bash
cd apps/patient_app
flutter pub get
flutter run
```
✅ Patient app running on emulator/device

### Terminal 4: Pharmacy App (Optional)
```bash
cd apps/pharmacy_app
flutter pub get
flutter run
```

### Terminal 5: Rider App (Optional)
```bash
cd apps/rider_app
flutter pub get
flutter run
```

---

## 🧪 Testing the System

### 1. Test Backend API
```bash
# Health check
curl http://localhost:3001/api/health

# Register a user
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+212600000001",
    "password": "password123",
    "role": "patient"
  }'
```

### 2. Access Admin Panel
1. Open browser: http://localhost:3000
2. Navigate through pages:
   - Dashboard
   - Patients
   - Pharmacies
   - Riders
   - Orders

### 3. Test Mobile Apps
1. Run Flutter app
2. Login with test credentials
3. Test features

---

## 🔐 Default Test Credentials

### Admin User
```
Email: admin@mediexpress.com
Password: admin123
Role: admin
```

### Patient User
```
Email: patient@test.com
Password: password123
Role: patient
```

### Pharmacy User
```
Email: pharmacy@test.com
Password: password123
Role: pharmacy
```

### Rider User
```
Email: rider@test.com
Password: password123
Role: rider
```

**Note**: Create these users via API first using the register endpoint.

---

## 📊 Admin Panel Features

### Dashboard (/)
- Total orders statistics
- Active users count
- Revenue analytics
- Recent orders table
- Revenue chart

### Patients (/patients)
- Patient list with search
- Total orders per patient
- Status management (active/inactive)
- User verification
- Add/Edit/Delete patients

### Pharmacies (/pharmacies)
- Pharmacy list with search
- License verification
- Performance metrics
- Rating display
- Suspend/Activate pharmacies

### Riders (/riders)
- Rider list with search
- Online/Offline status
- Delivery statistics
- Earnings tracking
- Vehicle information

### Orders (/orders)
- Order list with filters
- Status-based filtering (all, confirmed, preparing, in_transit, delivered, cancelled)
- Order details view
- Export functionality
- Pagination

---

## 🛠️ Configuration

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/mediexpress
JWT_SECRET=your-secret-key
FIREBASE_PROJECT_ID=your-project-id
CLOUDINARY_CLOUD_NAME=your-cloud-name
GOOGLE_MAPS_API_KEY=your-maps-key
```

### Admin Panel (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Flutter Apps
Update API URL in:
- `apps/patient_app/lib/services/api_service.dart`
- `apps/pharmacy_app/lib/services/api_service.dart`
- `apps/rider_app/lib/services/api_service.dart`

```dart
static const String baseUrl = 'http://localhost:3001/api';
// For Android emulator: http://10.0.2.2:3001/api
// For iOS simulator: http://localhost:3001/api
```

---

## 🐛 Troubleshooting

### Backend Issues

**Port already in use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**MongoDB connection error:**
```bash
# Start MongoDB
brew services start mongodb-community
# or
mongod --dbpath /path/to/data
```

### Admin Panel Issues

**Port already in use:**
```bash
# Kill process on port 3002
lsof -ti:3002 | xargs kill -9
```

**Module not found:**
```bash
cd admin_panel
rm -rf node_modules package-lock.json
npm install
```

### Flutter Issues

**Packages not found:**
```bash
flutter pub get
flutter clean
flutter pub get
```

**Build errors:**
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter run
```

---

## 📱 Mobile App URLs

### For Testing on Physical Devices

Replace `localhost` with your computer's IP address:

**Find your IP:**
```bash
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

**Update API URLs:**
```dart
// Example: Your IP is 192.168.1.100
static const String baseUrl = 'http://192.168.1.100:3001/api';
```

---

## 🎯 Next Steps

1. ✅ Start backend API
2. ✅ Start admin panel
3. ✅ Create test users via API
4. ✅ Login to admin panel
5. ✅ Run mobile apps
6. ✅ Test complete workflow

---

## 📞 Support

For issues or questions:
- Check logs in terminal
- Review API documentation: `API_DOCUMENTATION.md`
- Check setup guide: `SETUP_INSTRUCTIONS.md`
- Review architecture: `ARCHITECTURE.md`

---

## 🎨 Admin Panel Screenshots

### Dashboard
- Statistics cards with icons
- Revenue chart (monthly)
- Recent orders table
- Clean, modern design

### Management Pages
- Search functionality
- Filter options
- Pagination
- Action buttons (View, Edit, Delete)
- Status badges

---

## ✅ Checklist

Before starting:
- [ ] Node.js 18+ installed
- [ ] MongoDB running
- [ ] Flutter SDK installed
- [ ] Android Studio / Xcode setup
- [ ] Environment variables configured

After starting:
- [ ] Backend API accessible at http://localhost:3001
- [ ] Admin panel accessible at http://localhost:3002
- [ ] Mobile apps running on emulator/device
- [ ] Database connected
- [ ] Test users created

---

**🎉 You're all set! Access the admin panel at http://localhost:3002**
