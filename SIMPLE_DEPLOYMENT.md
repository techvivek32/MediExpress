# Simple Deployment - Just Backend (Includes Admin Panel)

## You're Right! Deploy Only ONE Project

Your backend already includes:
- ✅ API endpoints (`/api/*`)
- ✅ Admin panel (`/admin/*`)
- ✅ Homepage (`/`)

The separate `admin_panel` folder is redundant. You only need to deploy the `backend` folder!

---

## 🎯 One Simple Deployment

### What You Get from ONE Deployment:

```
https://your-backend.vercel.app/          → Homepage
https://your-backend.vercel.app/api/*     → API for mobile apps
https://your-backend.vercel.app/admin     → Admin dashboard
```

All from deploying just the `backend` folder!

---

## 🚀 Deploy in 5 Minutes

### Step 1: Go to Vercel
https://vercel.com/new

### Step 2: Import Your GitHub Repo
- Click "Import Git Repository"
- Select: `techvivek32/MediExpress`

### Step 3: Configure
- **Project Name**: `mediexpress`
- **Framework**: Next.js (auto-detected)
- **Root Directory**: `backend` ⭐
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### Step 4: Add Environment Variables

Click "Environment Variables" and add these:

```
MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/mediexpress
JWT_SECRET = your_secret_key_at_least_32_characters_long
GMAIL_USER = your_email@gmail.com
GMAIL_APP_PASSWORD = your_gmail_app_password
```

Optional (for image uploads):
```
CLOUDINARY_CLOUD_NAME = your_cloudinary_name
CLOUDINARY_API_KEY = your_cloudinary_key
CLOUDINARY_API_SECRET = your_cloudinary_secret
```

### Step 5: Deploy!
Click "Deploy" and wait 2-3 minutes.

---

## ✅ After Deployment

You'll get ONE URL that serves everything:

```
Your URL: https://mediexpress-xxxxx.vercel.app
```

### Access Points:
- **Homepage**: `https://mediexpress-xxxxx.vercel.app/`
- **Admin Panel**: `https://mediexpress-xxxxx.vercel.app/admin`
- **API**: `https://mediexpress-xxxxx.vercel.app/api`

---

## 📱 Update Mobile Apps

After deployment, update your Flutter apps to use the new URL:

### Patient App
**File**: `apps/patient_app/lib/core/constants/app_constants.dart`

```dart
static const String baseUrl = 'https://your-backend.vercel.app/api';
```

### Rebuild APK
```bash
cd apps/patient_app
flutter build apk --release
```

---

## 🎉 That's It!

One deployment = Everything working!

- ✅ Backend API for mobile apps
- ✅ Admin panel for management
- ✅ All from one URL
- ✅ Much simpler!

---

## Why This Works

Your backend is a Next.js app with:
- API routes in `src/app/api/`
- Admin pages in `src/app/admin/`
- Homepage in `src/app/page.tsx`

Next.js serves all of these from one deployment. No need for separate deployments!

---

## What About the `admin_panel` Folder?

You can ignore it or delete it. Everything is already in the `backend` folder. The separate `admin_panel` was probably created by mistake or for testing.

---

## Quick Checklist

- [ ] Go to vercel.com/new
- [ ] Import GitHub repo
- [ ] Set root directory to `backend`
- [ ] Add environment variables
- [ ] Deploy
- [ ] Save your URL
- [ ] Update mobile app constants
- [ ] Rebuild mobile APK
- [ ] Test everything

---

## Your Deployment URL

After deployment, save this:

```
Main URL: https://_________________________________.vercel.app
Admin Panel: https://_________________________________.vercel.app/admin
API Endpoint: https://_________________________________.vercel.app/api
```

---

## Need MongoDB?

1. Go to: https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to Vercel environment variables

---

## Test Your Deployment

### Test Homepage
Visit: `https://your-url.vercel.app`

### Test Admin Panel
Visit: `https://your-url.vercel.app/admin`

### Test API
Visit: `https://your-url.vercel.app/api/health`

---

## 🎊 Much Simpler!

One deployment instead of two. Everything in one place. Easy to manage!

Happy deploying! 🚀
