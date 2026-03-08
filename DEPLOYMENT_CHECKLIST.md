# Deployment Checklist

Use this checklist to track your deployment progress.

## Pre-Deployment Setup

### MongoDB Atlas
- [ ] Created MongoDB Atlas account
- [ ] Created free cluster (M0)
- [ ] Created database user
- [ ] Whitelisted all IPs (0.0.0.0/0)
- [ ] Copied connection string
- [ ] Connection string format: `mongodb+srv://user:pass@cluster.mongodb.net/mediexpress`

### Vercel Account
- [ ] Created Vercel account
- [ ] Verified email

### Gmail Setup (for OTP)
- [ ] Generated Gmail App Password
- [ ] Saved Gmail credentials

## Backend Deployment

- [ ] Opened https://vercel.com/new
- [ ] Imported project
- [ ] Set root directory to `backend`
- [ ] Added environment variables:
  - [ ] MONGODB_URI
  - [ ] JWT_SECRET
  - [ ] GMAIL_USER
  - [ ] GMAIL_APP_PASSWORD
  - [ ] CLOUDINARY_CLOUD_NAME (optional)
  - [ ] CLOUDINARY_API_KEY (optional)
  - [ ] CLOUDINARY_API_SECRET (optional)
- [ ] Clicked Deploy
- [ ] Deployment successful
- [ ] Saved backend URL: `_______________________________`
- [ ] Tested backend URL in browser

## Admin Panel Deployment

- [ ] Opened https://vercel.com/new
- [ ] Imported project
- [ ] Set root directory to `admin_panel`
- [ ] Added environment variable:
  - [ ] NEXT_PUBLIC_API_URL (backend URL + /api)
- [ ] Clicked Deploy
- [ ] Deployment successful
- [ ] Saved admin URL: `_______________________________`
- [ ] Tested admin panel in browser

## Mobile App Update

### Patient App
- [ ] Updated `apps/patient_app/lib/core/constants/app_constants.dart`
- [ ] Changed baseUrl to Vercel backend URL
- [ ] Ran `flutter build apk --release`
- [ ] Located APK at `apps/patient_app/build/app/outputs/flutter-apk/app-release.apk`
- [ ] Installed APK on phone
- [ ] Tested signup/login

### Pharmacy App (Optional)
- [ ] Updated API URL in pharmacy app
- [ ] Rebuilt APK
- [ ] Tested

### Rider App (Optional)
- [ ] Updated API URL in rider app
- [ ] Rebuilt APK
- [ ] Tested

## Testing

- [ ] Backend health check works
- [ ] Admin panel loads
- [ ] Can create admin account
- [ ] Mobile app connects to backend
- [ ] OTP email is received
- [ ] User can sign up
- [ ] User can log in
- [ ] Can upload prescription
- [ ] Can view orders

## Post-Deployment

- [ ] Saved all URLs in safe place
- [ ] Shared admin panel URL with team
- [ ] Distributed mobile APK
- [ ] Documented any issues
- [ ] Celebrated successful deployment! 🎉

## Your Deployment URLs

Write them here for easy reference:

```
Backend API: https://_________________________________.vercel.app
Admin Panel: https://_________________________________.vercel.app
API Endpoint: https://_________________________________.vercel.app/api
```

## Common Issues & Solutions

### Issue: Backend deployment fails
- Check build logs in Vercel
- Verify all environment variables are set
- Check MongoDB connection string format

### Issue: Admin panel shows API errors
- Verify NEXT_PUBLIC_API_URL is correct
- Make sure it ends with `/api`
- Check backend is deployed and running

### Issue: Mobile app can't connect
- Verify baseUrl in app_constants.dart
- Make sure you rebuilt the APK
- Test backend URL in mobile browser first

### Issue: MongoDB connection error
- Check IP whitelist (should be 0.0.0.0/0)
- Verify connection string has correct password
- Make sure database user has permissions

## Need Help?

If you're stuck on any step:
1. Note which checkbox you're on
2. Copy any error messages
3. Ask for help with specific details

Good luck with your deployment! 🚀
