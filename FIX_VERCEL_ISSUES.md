# Fix Vercel Deployment Issues

## Current Problem
- App shows "Failed to send OTP"
- Login fails

## Possible Causes & Solutions

### 1. Environment Variables Not Set in Vercel ⚠️

**Check in Vercel Dashboard:**
1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables
2. Verify ALL these variables are set:

```
MONGODB_URI=mongodb+srv://Vercel-Admin-MediExpress:t7GPSvmlUf8l8NWj@mediexpress.jiyxy19.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=mediexpress_super_secret_jwt_key_2024_production_secure_random_string
GMAIL_USER=vivekvora3226@gmail.com
GMAIL_APP_PASSWORD=ckifbuejtjfxatyu
```

**IMPORTANT:** After adding/updating environment variables, you MUST:
- Click "Save"
- Go to Deployments tab
- Click "..." on latest deployment
- Click "Redeploy"

### 2. MongoDB Atlas Network Access

**Check MongoDB Atlas:**
1. Go to: https://cloud.mongodb.com
2. Click on your cluster (mediexpress)
3. Go to "Network Access" in left sidebar
4. Make sure you have an entry for: `0.0.0.0/0` (Allow access from anywhere)
5. If not, click "Add IP Address" > "Allow Access from Anywhere"

### 3. Gmail App Password Issues

**Verify Gmail Setup:**
1. Go to: https://myaccount.google.com/security
2. Make sure 2-Step Verification is ON
3. Go to: https://myaccount.google.com/apppasswords
4. Generate a NEW App Password for "Mail"
5. Update GMAIL_APP_PASSWORD in Vercel with the new password
6. Redeploy

### 4. Check Vercel Function Logs

**View Real-Time Errors:**
1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4
2. Click on latest deployment
3. Click "Functions" tab
4. Look for errors in the logs
5. Share the error messages if you see any

### 5. Test API Endpoints Directly

**Test in Browser or Postman:**

Test 1 - Backend Health:
```
https://medi-express-zvo4.vercel.app
```

Test 2 - Send OTP:
```
POST https://medi-express-zvo4.vercel.app/api/auth/send-otp
Content-Type: application/json

{
  "email": "test@example.com"
}
```

Test 3 - Check if API responds:
```
https://medi-express-zvo4.vercel.app/api/auth/send-otp
```

## Quick Fix Steps

### Step 1: Verify Environment Variables
```bash
# In Vercel Dashboard:
# Settings > Environment Variables
# Make sure all 4 variables are set for "Production"
```

### Step 2: Redeploy
```bash
# In Vercel Dashboard:
# Deployments > Latest > ... > Redeploy
```

### Step 3: Check MongoDB Access
```bash
# In MongoDB Atlas:
# Network Access > Add IP Address > 0.0.0.0/0
```

### Step 4: Test API
```bash
# Use browser or curl:
curl -X POST https://medi-express-zvo4.vercel.app/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Expected Response

### Success Response:
```json
{
  "success": true,
  "message": "OTP sent to your email",
  "data": {
    "message": "OTP sent successfully"
  }
}
```

### Error Response (Missing Env Vars):
```json
{
  "success": false,
  "message": "Please define MONGODB_URI in .env file"
}
```

### Error Response (MongoDB Connection):
```json
{
  "success": false,
  "message": "Failed to send OTP"
}
```

## What to Check Next

1. **Check Vercel Logs** - Most important!
2. **Verify Environment Variables** - Must be set in Vercel
3. **Test MongoDB Connection** - Check Atlas network access
4. **Test Gmail** - Verify app password works

## Share This Information

If still not working, share:
1. Screenshot of Vercel environment variables (hide sensitive values)
2. Error from Vercel function logs
3. Response when testing API directly
4. MongoDB Atlas network access settings
