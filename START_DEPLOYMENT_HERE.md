# 🚀 START HERE - Deploy to Vercel

## Why Deploy to Vercel?

✅ Solves all network/WiFi issues
✅ Your app works from anywhere
✅ Free hosting
✅ Takes only 15 minutes
✅ No more localhost problems

## What You'll Get

After deployment:
- **Backend API**: `https://your-backend.vercel.app`
- **Admin Panel**: `https://your-admin.vercel.app`
- **Mobile App**: Works from any phone with internet

---

## 📋 Before You Start (5 minutes)

### 1. Create MongoDB Account (Free Database)
👉 Go to: https://www.mongodb.com/cloud/atlas/register

- Click "Sign Up"
- Choose "Free" tier
- Create a cluster (click "Build a Database" → "Free")
- Create username and password (SAVE THESE!)
- Click "Network Access" → "Add IP Address" → "Allow Access from Anywhere"
- Click "Database" → "Connect" → "Connect your application"
- Copy the connection string (looks like: `mongodb+srv://...`)

**Your MongoDB Connection String:**
```
mongodb+srv://username:password@cluster.mongodb.net/mediexpress
```
(Replace username and password with yours)

### 2. Create Vercel Account (Free Hosting)
👉 Go to: https://vercel.com/signup

- Sign up (use GitHub for easier deployment)
- Verify your email

### 3. Get Gmail App Password (For OTP Emails)
👉 Already done? Check your notes!

If not:
- Go to: https://myaccount.google.com/apppasswords
- Create new app password
- Copy the 16-character password

---

## 🎯 Step 1: Deploy Backend (5 minutes)

### Using Vercel Website (Easiest):

1. **Go to**: https://vercel.com/new

2. **Import Project**:
   - Click "Import Git Repository" (if using GitHub)
   - OR click "Browse" to upload the `backend` folder

3. **Configure Project**:
   - Project Name: `mediexpress-backend` (or any name)
   - Framework: Next.js (auto-detected)
   - Root Directory: `backend` (if monorepo)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Add Environment Variables** (Click "Environment Variables"):
   
   Copy and paste these one by one:

   **Variable 1:**
   ```
   Name: MONGODB_URI
   Value: mongodb+srv://your-username:your-password@cluster.mongodb.net/mediexpress
   ```

   **Variable 2:**
   ```
   Name: JWT_SECRET
   Value: my_super_secret_jwt_key_for_mediexpress_app_2024_secure
   ```

   **Variable 3:**
   ```
   Name: GMAIL_USER
   Value: your_email@gmail.com
   ```

   **Variable 4:**
   ```
   Name: GMAIL_APP_PASSWORD
   Value: your_16_char_app_password
   ```

5. **Click "Deploy"**

6. **Wait 2-3 minutes** ⏳

7. **Success!** 🎉 Copy your backend URL:
   ```
   https://mediexpress-backend-xxxxx.vercel.app
   ```

8. **Test it**: Open the URL in your browser. You should see your backend homepage.

---

## 🎯 Step 2: Deploy Admin Panel (3 minutes)

1. **Go to**: https://vercel.com/new (again)

2. **Import Project**:
   - Import the same repository
   - OR upload the `admin_panel` folder

3. **Configure Project**:
   - Project Name: `mediexpress-admin`
   - Framework: Next.js
   - Root Directory: `admin_panel` (if monorepo)

4. **Add Environment Variable**:
   
   **Variable 1:**
   ```
   Name: NEXT_PUBLIC_API_URL
   Value: https://your-backend-url.vercel.app/api
   ```
   ⚠️ Use YOUR backend URL from Step 1, and add `/api` at the end!

5. **Click "Deploy"**

6. **Wait 2-3 minutes** ⏳

7. **Success!** 🎉 Copy your admin URL:
   ```
   https://mediexpress-admin-xxxxx.vercel.app
   ```

8. **Test it**: Open the URL in your browser. You should see the admin dashboard.

---

## 🎯 Step 3: Update Mobile App (2 minutes)

Now we need to tell your mobile app to use the new backend URL.

### I can do this for you! Just tell me:
**"Update patient app with backend URL: [your-backend-url]"**

### Or do it manually:

1. **Open file**: `apps/patient_app/lib/core/constants/app_constants.dart`

2. **Find line 4** (around line 4):
   ```dart
   static const String baseUrl = 'http://192.168.1.33:3000/api';
   ```

3. **Change it to**:
   ```dart
   static const String baseUrl = 'https://your-backend.vercel.app/api';
   ```
   ⚠️ Use YOUR backend URL from Step 1!

4. **Save the file**

5. **Rebuild the APK**:
   ```bash
   cd apps/patient_app
   flutter build apk --release
   ```

6. **Find your APK**:
   ```
   apps/patient_app/build/app/outputs/flutter-apk/app-release.apk
   ```

7. **Install on your phone**:
   - Transfer the APK to your phone
   - Install it
   - Open the app

---

## ✅ Test Everything

### Test 1: Backend
Open in browser: `https://your-backend.vercel.app`
- Should show homepage ✅

### Test 2: Admin Panel
Open in browser: `https://your-admin.vercel.app`
- Should show dashboard ✅

### Test 3: Mobile App
1. Open app on phone
2. Try to sign up with new email
3. Check email for OTP
4. Complete signup
5. Should work! ✅

---

## 🎉 You're Done!

Your app is now live on the internet!

### Save These URLs:
```
Backend: https://_________________.vercel.app
Admin Panel: https://_________________.vercel.app
API Endpoint: https://_________________.vercel.app/api
```

### Share with Your Team:
- Admin Panel URL → For admins
- APK file → For users
- Backend URL → For developers

---

## 🆘 Having Issues?

### Backend won't deploy
- Check MongoDB connection string format
- Make sure all environment variables are added
- Check build logs in Vercel dashboard

### Admin panel shows errors
- Verify NEXT_PUBLIC_API_URL is correct
- Make sure it ends with `/api`
- Check backend is working first

### Mobile app can't connect
- Did you update the baseUrl?
- Did you rebuild the APK?
- Test backend URL in mobile browser first

### Still stuck?
Tell me:
1. Which step you're on
2. What error you see
3. Screenshot if possible

---

## 📚 More Help

- **Detailed Guide**: See `VERCEL_DEPLOYMENT_GUIDE.md`
- **Quick Reference**: See `QUICK_DEPLOY.md`
- **Checklist**: See `DEPLOYMENT_CHECKLIST.md`
- **Commands**: See `DEPLOY_COMMANDS.md`

---

## 🚀 Ready to Deploy?

Start with Step 1 above! It's easier than you think.

Good luck! 🎉
