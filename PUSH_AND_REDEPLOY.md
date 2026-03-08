# Push Changes and Redeploy

## What I Added

Created a health check endpoint at `/api/health` that will show:
- Which environment variables are set
- MongoDB URI prefix (first 20 characters)
- Current environment

This will help us diagnose the issue.

## Steps to Fix

### Step 1: Push Changes to GitHub

Run these commands in your terminal:

```bash
git add .
git commit -m "Add health check endpoint"
git push origin main
```

### Step 2: Vercel Will Auto-Deploy

Vercel is connected to your GitHub repo, so it will automatically deploy when you push.

Wait 2-3 minutes for deployment to complete.

### Step 3: Test Health Endpoint

Open in browser:
```
https://medi-express-zvo4.vercel.app/api/health
```

You should see something like:
```json
{
  "success": true,
  "message": "Health check",
  "environment": {
    "nodeEnv": "production",
    "hasMongoUri": true,
    "hasJwtSecret": true,
    "hasGmailUser": true,
    "hasGmailPassword": true,
    "mongoUriPrefix": "mongodb+srv://Vercel..."
  }
}
```

### Step 4: Check Results

**If all values are `true`:**
- Environment variables are set correctly
- Try the send-otp API again
- Should work now!

**If any value is `false`:**
- That environment variable is NOT set in Vercel
- Go to Vercel settings and add it
- Redeploy manually

## Alternative: Manual Redeploy

If you don't want to push to GitHub:

1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables

2. Double-check ALL 4 variables are set:
   - MONGODB_URI
   - JWT_SECRET  
   - GMAIL_USER
   - GMAIL_APP_PASSWORD

3. Go to Deployments tab

4. Click "..." on latest deployment

5. Click "Redeploy"

6. Wait for completion

7. Test: https://medi-express-zvo4.vercel.app/api/auth/send-otp

## Quick Test Commands

### Test Health (after deployment)
```powershell
Invoke-WebRequest -Uri "https://medi-express-zvo4.vercel.app/api/health" -UseBasicParsing | Select-Object -ExpandProperty Content
```

### Test Send OTP (after health check passes)
```powershell
$body = @{email="test@example.com"} | ConvertTo-Json
Invoke-WebRequest -Uri "https://medi-express-zvo4.vercel.app/api/auth/send-otp" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing | Select-Object -ExpandProperty Content
```

## What to Share

After running health check, share the output so I can see:
- Which environment variables are missing
- If MongoDB URI is set correctly
- Current environment settings

This will help diagnose the exact issue!
