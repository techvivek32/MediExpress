# 📱 Mobile App Connection Fix

## ✅ Issues Fixed

### 1. API URL Updated
Changed from `localhost` to your PC's IP address: `192.168.1.33`

**File Updated**: `apps/patient_app/lib/core/constants/app_constants.dart`
```dart
static const String baseUrl = 'http://192.168.1.33:3000/api';
```

---

## 🔧 Steps to Fix Connection

### Step 1: Allow Node.js Through Windows Firewall

Run this command in PowerShell as Administrator:

```powershell
# Allow Node.js through firewall
netsh advfirewall firewall add rule name="Node.js Server" dir=in action=allow protocol=TCP localport=3000

# Or allow all Node.js
New-NetFirewallRule -DisplayName "Node.js" -Direction Inbound -Program "C:\Program Files\nodejs\node.exe" -Action Allow
```

### Step 2: Verify Backend is Running

```bash
# Check if backend is accessible from your PC
curl http://localhost:3000/api/health

# Check if accessible from network
curl http://192.168.1.33:3000/api/health
```

### Step 3: Rebuild and Install App

```bash
cd apps/patient_app

# Clean build
flutter clean

# Get dependencies
flutter pub get

# Build new APK with updated IP
flutter build apk --release

# Install on phone
# Transfer the APK from: build/app/outputs/flutter-apk/app-release.apk
```

---

## 🧪 Test Connection from Phone

### Option 1: Test in Browser
Open your phone's browser and go to:
```
http://192.168.1.33:3000
```

You should see the MediExpress API landing page.

### Option 2: Test API Endpoint
```
http://192.168.1.33:3000/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "MediExpress API is running"
}
```

---

## 🔍 Troubleshooting

### Issue 1: Still Getting Timeout

**Check 1: Backend is Running**
```bash
# In backend directory
npm run dev
```

**Check 2: Firewall is Allowing Connection**
```powershell
# Run as Administrator
netsh advfirewall firewall show rule name="Node.js Server"
```

**Check 3: Both Devices on Same WiFi**
- PC WiFi: Check network name
- Phone WiFi: Must be same network
- No VPN active on either device

**Check 4: PC IP Address Hasn't Changed**
```powershell
ipconfig | Select-String "IPv4"
```

If IP changed, update `app_constants.dart` again.

### Issue 2: Connection Refused

**Solution**: Ensure backend is listening on all interfaces

Update `backend/package.json`:
```json
{
  "scripts": {
    "dev": "next dev -H 0.0.0.0 -p 3000"
  }
}
```

Then restart backend:
```bash
cd backend
npm run dev
```

### Issue 3: Firewall Blocking

**Quick Fix**: Temporarily disable Windows Firewall
1. Windows Security → Firewall & network protection
2. Turn off for Private network
3. Test app
4. Turn back on and add proper rule

---

## 📋 Complete Checklist

- [x] Backend running on port 3000
- [x] API URL updated to PC's IP (192.168.1.33)
- [ ] Windows Firewall rule added
- [ ] App rebuilt with new IP
- [ ] New APK installed on phone
- [ ] Both devices on same WiFi
- [ ] Test connection in phone browser
- [ ] Test signup in app

---

## 🚀 Quick Fix Commands

### On PC (PowerShell as Administrator):

```powershell
# 1. Add firewall rule
netsh advfirewall firewall add rule name="Node.js Server" dir=in action=allow protocol=TCP localport=3000

# 2. Restart backend
cd "D:\pharmacy appizi\backend"
npm run dev

# 3. Rebuild app
cd "D:\pharmacy appizi\apps\patient_app"
flutter clean
flutter pub get
flutter build apk --release
```

### On Phone:

1. Uninstall old app
2. Install new APK from: `apps/patient_app/build/app/outputs/flutter-apk/app-release.apk`
3. Open app and try signup

---

## 🎯 Expected Behavior After Fix

1. **Signup Screen**: Enter details and click signup
2. **API Call**: App sends request to `http://192.168.1.33:3000/api/auth/register`
3. **Backend**: Receives request, creates user in MongoDB
4. **Response**: Returns success with user data and token
5. **App**: Navigates to home screen
6. **Admin Panel**: New user visible at `http://localhost:3000/admin/patients`

---

## 📊 Network Configuration

```
Your PC (Backend Server)
├── IP: 192.168.1.33
├── Port: 3000
├── Backend API: http://192.168.1.33:3000/api
└── Admin Panel: http://localhost:3000/admin

Your Phone (Patient App)
├── WiFi: Same network as PC
├── API URL: http://192.168.1.33:3000/api
└── Connects to PC's IP address
```

---

## 🔐 Security Note

The firewall rule allows incoming connections on port 3000. This is safe for development on your local network. For production:
- Use HTTPS
- Deploy to proper server
- Use environment variables
- Implement proper authentication

---

## ✅ Verification Steps

1. **Test from PC Browser**
   ```
   http://localhost:3000/api/health
   ```
   Should work ✅

2. **Test from Phone Browser**
   ```
   http://192.168.1.33:3000/api/health
   ```
   Should work ✅

3. **Test Signup in App**
   - Open app
   - Go to signup
   - Fill details
   - Click signup
   - Should create user ✅

4. **Check Admin Panel**
   ```
   http://localhost:3000/admin/patients
   ```
   New user should appear ✅

---

## 🆘 Still Not Working?

### Check MongoDB Connection

```bash
# In backend directory
# Check .env.local file
cat backend/.env.local
```

Should have:
```
MONGODB_URI=mongodb://localhost:27017/mediexpress
JWT_SECRET=your-secret-key-here
```

### Check Backend Logs

When you try to signup, watch the backend terminal for errors.

### Enable Debug Mode

In `apps/patient_app/lib/services/api_service.dart`, add logging:
```dart
print('Making request to: $url');
print('Request body: $body');
```

---

**Status**: Configuration Updated ✅
**Next Step**: Add firewall rule and rebuild app
**Your PC IP**: 192.168.1.33
**Backend Port**: 3000
