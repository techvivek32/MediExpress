# 🚀 Deploy Now - Single Deployment

## You Only Need ONE Deployment!

Your backend already includes the admin panel. No need to deploy separately!

---

## What You're Deploying

```
backend/
├── src/app/api/        → API endpoints for mobile apps
├── src/app/admin/      → Admin dashboard (built-in!)
└── src/app/page.tsx    → Homepage
```

One deployment = Everything!

---

## 🎯 Deploy in 3 Steps

### 1. Setup MongoDB (5 minutes)

**Go to**: https://www.mongodb.com/cloud/atlas/register

1. Sign up (free)
2. Create cluster (M0 Free)
3. Create database user
4. Network Access → Add IP → "Allow from Anywhere" (0.0.0.0/0)
5. Get connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/mediexpress
   ```

### 2. Deploy to Vercel (3 minutes)

**Go to**: https://vercel.com/new

1. **Import**: Select `techvivek32/MediExpress` from GitHub
2. **Configure**:
   - Root Directory: `backend` ⭐
   - Framework: Next.js
3. **Environment Variables**:
   ```
   MONGODB_URI = mongodb+srv://user:pass@cluster.mongodb.net/mediexpress
   JWT_SECRET = any_random_string_at_least_32_characters_long
   GMAIL_USER = your_email@gmail.com
   GMAIL_APP_PASSWORD = your_gmail_app_password
   ```
4. **Click Deploy**

### 3. Update Mobile App (2 minutes)

**Edit**: `apps/patient_app/lib/core/constants/app_constants.dart`

```dart
static const String baseUrl = 'https://your-vercel-url.vercel.app/api';
```

**Rebuild**:
```bash
cd apps/patient_app
flutter build apk --release
```

---

## ✅ What You Get

From ONE deployment:

```
https://your-app.vercel.app          → Homepage
https://your-app.vercel.app/admin    → Admin Dashboard
https://your-app.vercel.app/api      → API for mobile apps
```

---

## 🎉 Done!

That's it! One simple deployment.

**Test it**:
- Visit your URL in browser
- Go to `/admin` for admin panel
- Install APK on phone and test

---

## Why One Deployment?

Your backend is a Next.js app that serves:
- API routes (for mobile apps)
- Admin pages (for management)
- Homepage (for info)

All from one codebase, one deployment, one URL. Simple!

---

## Ignore the `admin_panel` Folder

The separate `admin_panel` folder is redundant. Everything is already in `backend/src/app/admin/`.

You can delete it if you want:
```bash
rm -rf admin_panel
```

---

## Quick Reference

**Deployment URL**: _______________________________
**Admin Panel**: _______________________________/admin
**API Endpoint**: _______________________________/api

---

## Need Help?

If you get stuck:
1. Check MongoDB connection string format
2. Make sure all environment variables are added
3. Verify root directory is set to `backend`
4. Check Vercel build logs for errors

---

Happy deploying! 🚀
