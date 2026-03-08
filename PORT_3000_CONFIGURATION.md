# Port 3000 Configuration - Complete ✅

## Configuration Summary

**ONLY the Backend API runs on port 3000**

All components (Admin Panel, Flutter Apps) connect to the backend at `http://localhost:3000`

---

## What Was Changed

### 1. Backend Configuration
**File**: `backend/package.json`
```json
"scripts": {
  "dev": "next dev -p 3000",
  "start": "next start -p 3000"
}
```
✅ Backend now runs on port 3000

### 2. Environment Variables
**File**: `backend/.env.local` (Created)
```env
MONGODB_URI=mongodb://localhost:27017/mediexpress
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
PORT=3000
```
✅ MongoDB connection configured
✅ JWT secret configured

### 3. Admin Panel API URLs
**Files Updated**:
- `admin_panel/src/components/DashboardStats.tsx`
- `admin_panel/src/components/RecentOrders.tsx`

Changed from:
```javascript
fetch('http://localhost:3001/api/...')
```

To:
```javascript
fetch('http://localhost:3000/api/...')
```
✅ Admin panel now connects to port 3000

### 4. Flutter Apps API URLs
**Files Updated**:
- `apps/patient_app/lib/core/constants/app_constants.dart`
- `apps/pharmacy_app/lib/core/constants/app_constants.dart`
- `apps/rider_app/lib/core/constants/app_constants.dart`

Changed from:
```dart
static const String baseUrl = 'http://localhost:3001/api';
static const String androidEmulatorUrl = 'http://10.0.2.2:3001/api';
static const String iosSimulatorUrl = 'http://localhost:3001/api';
```

To:
```dart
static const String baseUrl = 'http://localhost:3000/api';
static const String androidEmulatorUrl = 'http://10.0.2.2:3000/api';
static const String iosSimulatorUrl = 'http://localhost:3000/api';
```
✅ All Flutter apps now connect to port 3000

---

## Current Setup

### Running Services

| Service | Port | Status | URL |
|---------|------|--------|-----|
| Backend API | 3000 | ✅ Running | http://localhost:3000 |
| Admin Panel | - | ⏸️ Stopped | Run separately if needed |

### API Endpoints Available

All endpoints now accessible at `http://localhost:3000/api/`:

- ✅ `GET /api/health` - Health check
- ✅ `POST /api/auth/login` - User login
- ✅ `POST /api/auth/register` - User registration
- ✅ `GET /api/analytics` - Dashboard analytics
- ✅ `GET /api/orders` - List orders
- ✅ `GET /api/prescriptions` - List prescriptions
- ✅ `GET /api/settings` - App settings
- ✅ `POST /api/prescriptions/upload` - Upload prescription
- ✅ `GET /api/pharmacy/requests` - Pharmacy requests
- ✅ `POST /api/pharmacy/send-quote` - Send quote
- ✅ `POST /api/orders/confirm` - Confirm order
- ✅ `GET /api/rider/nearby-deliveries` - Nearby deliveries
- ✅ And more...

---

## How to Run

### Start Backend (Port 3000)
```bash
cd backend
npm run dev
```
✅ Backend running at http://localhost:3000

### Run Admin Panel (Optional - Separate Port)
If you want to run the admin panel, it will need a different port:
```bash
cd admin_panel
npm run dev
```
It will automatically use port 3001 or another available port.

### Run Flutter Apps
```bash
# Patient App
cd apps/patient_app
flutter run

# Pharmacy App
cd apps/pharmacy_app
flutter run

# Rider App
cd apps/rider_app
flutter run
```
All apps connect to backend at port 3000.

---

## Testing the Backend

### Browser
Open: http://localhost:3000

### API Endpoints
```bash
# Health Check
curl http://localhost:3000/api/health

# Analytics
curl http://localhost:3000/api/analytics

# Orders
curl http://localhost:3000/api/orders

# Settings
curl http://localhost:3000/api/settings
```

---

## Important Notes

1. **MongoDB Required**: Make sure MongoDB is running on `mongodb://localhost:27017`
   ```bash
   # Start MongoDB (if not running)
   mongod
   ```

2. **Port 3000 Must Be Free**: If you get "EADDRINUSE" error, stop any process using port 3000:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. **Environment Variables**: The `.env.local` file is created with default values. Update if needed:
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - Change to a secure random string in production

4. **Admin Panel**: Can run on any port (3001, 3002, etc.) as long as it connects to backend at port 3000

5. **Flutter Apps**: 
   - Android Emulator uses `10.0.2.2:3000`
   - iOS Simulator uses `localhost:3000`
   - Physical devices need your computer's IP address

---

## Troubleshooting

### Backend won't start
```bash
cd backend
rm -rf .next
rm -rf node_modules
npm install
npm run dev
```

### MongoDB connection error
- Check if MongoDB is running: `mongod`
- Verify connection string in `.env.local`
- Default: `mongodb://localhost:27017/mediexpress`

### Flutter apps can't connect
- Verify backend is running on port 3000
- For Android emulator, use `10.0.2.2:3000`
- For iOS simulator, use `localhost:3000`
- Check firewall settings

---

## File Structure

```
backend/
├── .env.local              # Environment variables (PORT=3000)
├── package.json            # Scripts use port 3000
└── src/
    └── app/
        └── api/            # All API endpoints
            ├── analytics/
            ├── orders/
            ├── prescriptions/
            └── ...

admin_panel/
└── src/
    └── components/         # Updated to use port 3000
        ├── DashboardStats.tsx
        └── RecentOrders.tsx

apps/
├── patient_app/
│   └── lib/core/constants/
│       └── app_constants.dart    # Port 3000
├── pharmacy_app/
│   └── lib/core/constants/
│       └── app_constants.dart    # Port 3000
└── rider_app/
    └── lib/core/constants/
        └── app_constants.dart    # Port 3000
```

---

## Status: ✅ COMPLETE

- ✅ Backend configured for port 3000
- ✅ Environment variables created
- ✅ Admin panel updated to use port 3000
- ✅ All Flutter apps updated to use port 3000
- ✅ Backend running successfully on port 3000
- ✅ All API endpoints accessible

**Everything is now configured to use port 3000!**
