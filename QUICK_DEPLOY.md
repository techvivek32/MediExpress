# Quick Deploy to Vercel - Simple Steps

## What You Need (5 minutes setup)

### 1. MongoDB Atlas (Free Database)
- Go to: https://www.mongodb.com/cloud/atlas/register
- Sign up (free)
- Create a cluster (choose free M0)
- Get connection string

### 2. Vercel Account (Free Hosting)
- Go to: https://vercel.com/signup
- Sign up with GitHub/GitLab/Email (free)

## Deploy in 3 Steps

### Step 1: Deploy Backend (5 minutes)

1. Go to https://vercel.com/new
2. Click "Import Git Repository" or "Deploy from GitHub"
3. Select your project
4. Set **Root Directory** to: `backend`
5. Click "Environment Variables" and add:

```
MONGODB_URI = mongodb+srv://user:pass@cluster.mongodb.net/mediexpress
JWT_SECRET = any_random_string_at_least_32_characters_long_12345
GMAIL_USER = your_email@gmail.com
GMAIL_APP_PASSWORD = your_gmail_app_password_from_google
```

6. Click "Deploy"
7. **SAVE YOUR BACKEND URL**: `https://your-project-name.vercel.app`

### Step 2: Deploy Admin Panel (3 minutes)

1. Go to https://vercel.com/new again
2. Import same repository
3. Set **Root Directory** to: `admin_panel`
4. Click "Environment Variables" and add:

```
NEXT_PUBLIC_API_URL = https://your-backend-url.vercel.app/api
```
(Use the URL from Step 1)

5. Click "Deploy"
6. **SAVE YOUR ADMIN URL**: `https://your-admin-name.vercel.app`

### Step 3: Update Mobile App (2 minutes)

I'll do this for you! Just tell me your backend URL from Step 1.

Or you can do it manually:

1. Open: `apps/patient_app/lib/core/constants/app_constants.dart`
2. Change line 4 to:
```dart
static const String baseUrl = 'https://your-backend-url.vercel.app/api';
```
3. Run: `flutter build apk --release`
4. Install the new APK

## That's It!

Your app is now live on the internet! No more network issues.

## Test It

1. Visit your backend URL in browser
2. Visit your admin panel URL in browser
3. Install new APK on phone
4. Try signing up in the app

## Need Help?

If you get stuck, just tell me:
- Which step you're on
- What error you see
- I'll help you fix it!

## Pro Tips

- Use the same email for MongoDB and Vercel
- Save your URLs in a text file
- You can redeploy anytime by pushing to Git
- Free tier is enough for testing and small projects
