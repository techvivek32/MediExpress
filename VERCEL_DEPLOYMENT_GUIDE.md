# Vercel Deployment Guide

This guide will help you deploy both the backend and admin panel to Vercel, solving all network connectivity issues.

## Prerequisites

1. A Vercel account (free tier works fine)
2. A MongoDB Atlas account (free tier available)
3. Your Gmail credentials for OTP
4. Cloudinary account (optional, for image uploads)

## Step 1: Setup MongoDB Atlas (Free Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (free M0 tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Replace `<password>` with your actual password
7. Add `/mediexpress` at the end: `mongodb+srv://username:password@cluster.mongodb.net/mediexpress`

## Step 2: Prepare for Deployment

### Install Vercel CLI (Optional but recommended)
```bash
npm install -g vercel
```

## Step 3: Deploy Backend to Vercel

### Option A: Using Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your Git repository (or upload the `backend` folder)
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `backend` (if deploying from monorepo)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variables (click "Environment Variables"):
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mediexpress
   JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long
   GMAIL_USER=your_email@gmail.com
   GMAIL_APP_PASSWORD=your_gmail_app_password
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

6. Click "Deploy"
7. Wait for deployment (2-3 minutes)
8. Copy your backend URL (e.g., `https://your-backend.vercel.app`)

### Option B: Using Vercel CLI

```bash
cd backend
vercel login
vercel
```

Follow the prompts and add environment variables when asked.

## Step 4: Deploy Admin Panel to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import the `admin_panel` folder
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `admin_panel` (if deploying from monorepo)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
   ```
   (Replace with your actual backend URL from Step 3)

6. Click "Deploy"
7. Copy your admin panel URL (e.g., `https://your-admin.vercel.app`)

## Step 5: Update Mobile App Configuration

Now update your Flutter app to use the deployed backend:

1. Open `apps/patient_app/lib/core/constants/app_constants.dart`

2. Update the baseUrl:
   ```dart
   static const String baseUrl = 'https://your-backend.vercel.app/api';
   ```

3. Rebuild the APK:
   ```bash
   cd apps/patient_app
   flutter build apk --release
   ```

4. The APK will be at: `apps/patient_app/build/app/outputs/flutter-apk/app-release.apk`

## Step 6: Update Other Apps (Optional)

### Pharmacy App
```dart
// apps/pharmacy_app/lib/services/api_service.dart
static const String baseUrl = 'https://your-backend.vercel.app/api';
```

### Rider App
```dart
// apps/rider_app/lib/services/api_service.dart
static const String baseUrl = 'https://your-backend.vercel.app/api';
```

## Step 7: Test Everything

### Test Backend
Visit: `https://your-backend.vercel.app`
You should see the homepage.

### Test Admin Panel
Visit: `https://your-admin.vercel.app`
You should see the admin dashboard.

### Test Mobile App
1. Install the new APK on your phone
2. Open the app
3. Try to sign up with a new account
4. You should receive an OTP email
5. Complete the signup process

## Important Notes

### Environment Variables
- Never commit `.env` files to Git
- Always use Vercel's environment variables dashboard
- You can update environment variables anytime from Vercel dashboard

### MongoDB Atlas Network Access
1. Go to MongoDB Atlas dashboard
2. Click "Network Access"
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (0.0.0.0/0)
5. This allows Vercel to connect to your database

### Custom Domains (Optional)
You can add custom domains in Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Backend deployment fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Make sure MongoDB connection string is correct

### Admin panel can't connect to backend
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check browser console for errors
- Make sure backend is deployed and running

### Mobile app shows "No internet connection"
- Verify you updated the `baseUrl` in app_constants.dart
- Rebuild the APK after changing the URL
- Test backend URL in mobile browser first

### MongoDB connection errors
- Check if IP whitelist includes 0.0.0.0/0
- Verify connection string format
- Make sure database user has read/write permissions

## Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string copied
- [ ] Gmail app password generated
- [ ] Backend deployed to Vercel
- [ ] Backend environment variables configured
- [ ] Backend URL copied
- [ ] Admin panel deployed to Vercel
- [ ] Admin panel environment variables configured
- [ ] Mobile app baseUrl updated
- [ ] Mobile app APK rebuilt
- [ ] Everything tested and working

## Your Deployment URLs

After deployment, save these URLs:

```
Backend: https://your-backend.vercel.app
Admin Panel: https://your-admin.vercel.app
API Endpoint: https://your-backend.vercel.app/api
```

## Benefits of Vercel Deployment

✅ No more localhost/IP address issues
✅ Accessible from anywhere with internet
✅ Automatic HTTPS/SSL
✅ Free hosting for small projects
✅ Automatic deployments on Git push
✅ Global CDN for fast loading
✅ Easy environment variable management
✅ Built-in analytics and monitoring

## Next Steps

1. Deploy backend first
2. Deploy admin panel second
3. Update mobile apps with new URL
4. Rebuild and test mobile apps
5. Share the admin panel URL with your team

Need help? Check the Vercel documentation or ask for assistance!
