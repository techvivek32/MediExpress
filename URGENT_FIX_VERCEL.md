# URGENT: Fix Vercel 500 Error

## Problem
API is returning 500 Internal Server Error, which means:
- Environment variables might not be properly set
- OR you need to REDEPLOY after adding them
- OR MongoDB connection is failing

## IMMEDIATE ACTIONS

### Step 1: Verify Environment Variables in Vercel

1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables

2. Check if ALL 4 variables exist:
   - ✅ MONGODB_URI
   - ✅ JWT_SECRET
   - ✅ GMAIL_USER
   - ✅ GMAIL_APP_PASSWORD

3. Click on each variable to verify:
   - The VALUE is correct (no extra spaces)
   - "Production" environment is checked
   - Click "Save" if you made any changes

### Step 2: REDEPLOY (CRITICAL!)

**After adding environment variables, you MUST redeploy!**

1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4

2. Click "Deployments" tab

3. Find the LATEST deployment (top one)

4. Click the "..." (three dots) menu

5. Click "Redeploy"

6. Wait 2-3 minutes for deployment to complete

7. Check if deployment succeeded (green checkmark)

### Step 3: Check Vercel Function Logs

1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4

2. Click on the latest deployment

3. Click "Functions" tab

4. Look for error messages

5. Share the error if you see one

### Step 4: Verify MongoDB Atlas Network Access

1. Go to: https://cloud.mongodb.com

2. Select your cluster: "mediexpress"

3. Click "Network Access" in left sidebar

4. You should see: `0.0.0.0/0` (Access from anywhere)

5. If not:
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere"
   - Click "Confirm"

## Common Issues & Fixes

### Issue 1: Environment Variables Not Applied
**Symptom:** 500 error after adding variables
**Fix:** You MUST redeploy after adding environment variables!

### Issue 2: Wrong MongoDB URI Format
**Check your MONGODB_URI value:**
```
mongodb+srv://Vercel-Admin-MediExpress:t7GPSvmlUf8l8NWj@mediexpress.jiyxy19.mongodb.net/?retryWrites=true&w=majority
```

**Common mistakes:**
- Extra spaces at beginning or end
- Missing `mongodb+srv://` prefix
- Wrong password
- Missing `?retryWrites=true&w=majority` at end

### Issue 3: MongoDB Network Access
**Symptom:** Connection timeout errors
**Fix:** Add `0.0.0.0/0` to MongoDB Atlas Network Access

### Issue 4: Gmail App Password Wrong
**Check your GMAIL_APP_PASSWORD:**
- Should be 16 characters
- No spaces
- Generated from Google Account settings

## Test After Redeployment

### Test 1: Check Backend
Open in browser: https://medi-express-zvo4.vercel.app
- Should show Next.js page (not error)

### Test 2: Test API
Run this in PowerShell:
```powershell
$body = @{email="test@example.com"} | ConvertTo-Json
Invoke-WebRequest -Uri "https://medi-express-zvo4.vercel.app/api/auth/send-otp" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing
```

**Expected:** Status 200, success message
**If 500:** Check Vercel function logs

### Test 3: Use Test Page
1. Open `test-api.html` in browser
2. Click "Send OTP"
3. Should show success message

## Detailed Redeployment Steps

1. **Open Vercel Dashboard**
   - https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4

2. **Click "Deployments"**
   - You'll see a list of deployments

3. **Find Latest Deployment**
   - It's at the top of the list
   - Shows date/time and commit message

4. **Click Three Dots (...)**
   - On the right side of the deployment row

5. **Click "Redeploy"**
   - A popup will appear

6. **Confirm Redeploy**
   - Click "Redeploy" button in popup

7. **Wait for Completion**
   - Watch the progress
   - Should take 2-3 minutes
   - Green checkmark = success
   - Red X = failed (check logs)

8. **Test Immediately**
   - Try the API test above
   - Or use test-api.html

## If Still Not Working

### Check Vercel Logs
1. Click on the deployment
2. Go to "Functions" tab
3. Look for errors like:
   - "MONGODB_URI is not defined"
   - "Connection timeout"
   - "Authentication failed"

### Share This Information
If you need help, share:
1. Screenshot of environment variables (hide sensitive values)
2. Error message from Vercel function logs
3. Result of API test

## Quick Checklist

Before testing APK:

- [ ] All 4 environment variables added in Vercel
- [ ] "Production" environment checked for each variable
- [ ] Redeployed after adding variables
- [ ] Deployment succeeded (green checkmark)
- [ ] Backend URL works in browser
- [ ] API test returns 200 (not 500)
- [ ] MongoDB Atlas allows 0.0.0.0/0

## Expected Timeline

- Add environment variables: 2 minutes
- Redeploy: 2-3 minutes
- Test: 1 minute
- **Total: ~5-6 minutes**

## After Fix

Once API returns 200:
1. Install fresh APK on phone
2. Test signup with real email
3. Check email for OTP
4. Complete registration
5. Everything should work!

## MOST COMMON MISTAKE

**Forgetting to redeploy after adding environment variables!**

Environment variables are only loaded during deployment. If you add them after deployment, you MUST redeploy for them to take effect.

## Need Help?

1. Check Vercel function logs first
2. Verify all environment variables are correct
3. Make sure you redeployed
4. Test API using test-api.html
5. Share error messages if still failing
