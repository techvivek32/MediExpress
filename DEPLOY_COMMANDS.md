# Deployment Commands Reference

Quick reference for all commands you'll need during deployment.

## Option 1: Deploy via Vercel Website (Recommended for Beginners)

No commands needed! Just:
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Follow the web interface

## Option 2: Deploy via Vercel CLI (For Advanced Users)

### Install Vercel CLI
```bash
npm install -g vercel
```

### Deploy Backend
```bash
cd backend
vercel login
vercel
```

When prompted:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? **mediexpress-backend**
- In which directory is your code located? **./**
- Want to override settings? **N**

### Add Environment Variables to Backend
```bash
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add GMAIL_USER
vercel env add GMAIL_APP_PASSWORD
```

### Deploy Admin Panel
```bash
cd ../admin_panel
vercel
```

When prompted:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? **mediexpress-admin**
- In which directory is your code located? **./**
- Want to override settings? **N**

### Add Environment Variable to Admin Panel
```bash
vercel env add NEXT_PUBLIC_API_URL
```

## Update Mobile Apps

### Patient App
```bash
cd ../apps/patient_app

# Edit the constants file first, then:
flutter clean
flutter pub get
flutter build apk --release

# APK location:
# build/app/outputs/flutter-apk/app-release.apk
```

### Pharmacy App
```bash
cd ../apps/pharmacy_app

# Edit the API service file first, then:
flutter clean
flutter pub get
flutter build apk --release
```

### Rider App
```bash
cd ../apps/rider_app

# Edit the API service file first, then:
flutter clean
flutter pub get
flutter build apk --release
```

## Testing Commands

### Test Backend Locally Before Deploy
```bash
cd backend
npm run build
npm start
```

### Test Admin Panel Locally Before Deploy
```bash
cd admin_panel
npm run build
npm start
```

### Check Vercel Deployments
```bash
vercel ls
```

### View Deployment Logs
```bash
vercel logs [deployment-url]
```

### Redeploy (after making changes)
```bash
vercel --prod
```

## MongoDB Atlas Setup (No Commands)

1. Go to https://cloud.mongodb.com
2. Create account
3. Create cluster (free M0)
4. Create database user
5. Network Access → Add IP → Allow from Anywhere (0.0.0.0/0)
6. Get connection string

## Git Commands (If Using Git Integration)

### Initialize Git (if not already)
```bash
git init
git add .
git commit -m "Initial commit"
```

### Push to GitHub
```bash
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

Then Vercel can auto-deploy from GitHub!

## Useful Vercel Commands

### Login
```bash
vercel login
```

### List Projects
```bash
vercel ls
```

### Remove Project
```bash
vercel remove [project-name]
```

### View Project Info
```bash
vercel inspect [deployment-url]
```

### Pull Environment Variables
```bash
vercel env pull
```

## Environment Variables Format

### Backend (.env)
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mediexpress
JWT_SECRET=your_super_secret_key_at_least_32_characters_long
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Admin Panel (.env)
```bash
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
```

## Flutter App Constants Update

Edit: `apps/patient_app/lib/core/constants/app_constants.dart`

```dart
class AppConstants {
  // Change this line:
  static const String baseUrl = 'https://your-backend.vercel.app/api';
  
  // Rest stays the same...
}
```

## Quick Deploy Script (Copy-Paste)

```bash
# Deploy Backend
cd backend
vercel --prod

# Deploy Admin Panel
cd ../admin_panel
vercel --prod

# Build Patient App
cd ../apps/patient_app
flutter build apk --release

echo "✅ Deployment complete!"
echo "Backend: Check Vercel dashboard for URL"
echo "Admin: Check Vercel dashboard for URL"
echo "APK: apps/patient_app/build/app/outputs/flutter-apk/app-release.apk"
```

## Troubleshooting Commands

### Check Node Version
```bash
node --version
# Should be 18.x or higher
```

### Check Flutter Version
```bash
flutter --version
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run build
```

### Clear Flutter Cache
```bash
flutter clean
flutter pub get
```

### Check Vercel Build Logs
```bash
vercel logs --follow
```

## After Deployment

### Get Your URLs
```bash
vercel ls
```

### Test Backend
```bash
curl https://your-backend.vercel.app
```

### Test API Endpoint
```bash
curl https://your-backend.vercel.app/api/health
```

## Need Help?

If any command fails:
1. Copy the error message
2. Note which command failed
3. Check the error in Vercel dashboard
4. Ask for help with the specific error

Happy deploying! 🚀
