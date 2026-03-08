# Fix OTP Issue - Step by Step

## Current Problem
- App shows "Failed to send OTP"
- API returns 500 Internal Server Error
- This means environment variables are NOT loaded in Vercel

## Solution: 3 Options

---

## OPTION 1: Quick Fix (Recommended)

### Do This Right Now:

1. **Open Vercel Dashboard**
   ```
   https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4
   ```

2. **Go to Settings → Environment Variables**
   ```
   https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables
   ```

3. **Verify These 4 Variables Exist:**
   
   Click on each one to check the value:

   **MONGODB_URI**
   ```
   mongodb+srv://Vercel-Admin-MediExpress:t7GPSvmlUf8l8NWj@mediexpress.jiyxy19.mongodb.net/?retryWrites=true&w=majority
   ```
   - Make sure "Production" is checked
   - No extra spaces
   - Click "Save"

   **JWT_SECRET**
   ```
   mediexpress_super_secret_jwt_key_2024_production_secure_random_string
   ```
   - Make sure "Production" is checked
   - Click "Save"

   **GMAIL_USER**
   ```
   vivekvora3226@gmail.com
   ```
   - Make sure "Production" is checked
   - Click "Save"

   **GMAIL_APP_PASSWORD**
   ```
   ckifbuejtjfxatyu
   ```
   - Make sure "Production" is checked
   - Click "Save"

4. **REDEPLOY (CRITICAL!)**
   
   - Go to "Deployments" tab
   - Find the latest deployment (top one)
   - Click "..." (three dots)
   - Click "Redeploy"
   - Wait 2-3 minutes

5. **Test**
   
   Open in browser:
   ```
   https://medi-express-zvo4.vercel.app
   ```
   Should show Next.js page (not error)

6. **Test API**
   
   Open `test-api.html` in browser
   Click "Send OTP" button
   Should show success!

---

## OPTION 2: Push Health Check (If Option 1 Doesn't Work)

I created a health check endpoint to diagnose the issue.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add health check endpoint"
   git push origin main
   ```

2. **Wait for Auto-Deploy**
   - Vercel will automatically deploy
   - Wait 2-3 minutes

3. **Check Health**
   
   Open in browser:
   ```
   https://medi-express-zvo4.vercel.app/api/health
   ```
   
   This will show which environment variables are set.

4. **Share Results**
   
   Copy the JSON output and share it.
   I'll tell you exactly what's missing.

---

## OPTION 3: Manual Environment Variable Check

### Check Each Variable:

1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables

2. For EACH variable, click on it and verify:

   **MONGODB_URI:**
   - Value starts with: `mongodb+srv://`
   - Contains: `@mediexpress.jiyxy19.mongodb.net`
   - Ends with: `?retryWrites=true&w=majority`
   - No spaces before or after
   - "Production" is checked

   **JWT_SECRET:**
   - Value is: `mediexpress_super_secret_jwt_key_2024_production_secure_random_string`
   - No spaces
   - "Production" is checked

   **GMAIL_USER:**
   - Value is: `vivekvora3226@gmail.com`
   - No spaces
   - "Production" is checked

   **GMAIL_APP_PASSWORD:**
   - Value is: `ckifbuejtjfxatyu`
   - Exactly 16 characters
   - No spaces
   - "Production" is checked

3. If ANY variable is wrong or missing:
   - Fix it
   - Click "Save"
   - Go to Deployments
   - Redeploy

---

## Common Mistakes

### Mistake 1: Not Redeploying
**Problem:** Added variables but didn't redeploy
**Fix:** Always redeploy after adding/changing environment variables

### Mistake 2: Wrong Environment
**Problem:** Variables set for "Preview" or "Development" only
**Fix:** Make sure "Production" is checked for each variable

### Mistake 3: Extra Spaces
**Problem:** Copy-pasted values with spaces
**Fix:** Remove all spaces before and after values

### Mistake 4: Wrong MongoDB URI
**Problem:** Missing parts of the connection string
**Fix:** Copy the EXACT string:
```
mongodb+srv://Vercel-Admin-MediExpress:t7GPSvmlUf8l8NWj@mediexpress.jiyxy19.mongodb.net/?retryWrites=true&w=majority
```

---

## How to Verify It's Fixed

### Test 1: Backend Health
```
https://medi-express-zvo4.vercel.app
```
Should show Next.js page

### Test 2: Health Check (if you pushed it)
```
https://medi-express-zvo4.vercel.app/api/health
```
Should show all variables as `true`

### Test 3: Send OTP API
Open `test-api.html` and click "Send OTP"
Should show: `{"success":true,"message":"OTP sent to your email"}`

### Test 4: Mobile App
Install APK and try to sign up
Should receive OTP email

---

## Timeline

- Check environment variables: 2 minutes
- Redeploy: 2-3 minutes  
- Test: 1 minute
- **Total: 5-6 minutes**

---

## What to Do Right Now

1. ✅ Go to Vercel environment variables
2. ✅ Check all 4 variables are set correctly
3. ✅ Make sure "Production" is checked
4. ✅ Click "Save" on each
5. ✅ Go to Deployments tab
6. ✅ Redeploy latest deployment
7. ✅ Wait 2-3 minutes
8. ✅ Test using test-api.html
9. ✅ Install APK and test

---

## Need Help?

If still not working after following Option 1:

1. Try Option 2 (push health check)
2. Share the health check output
3. Share any error messages from Vercel logs
4. I'll help you fix it immediately

---

## Most Likely Issue

Based on the 500 error, the most likely issues are:

1. **Environment variables not set** (90% chance)
   - Fix: Add them in Vercel settings

2. **Forgot to redeploy** (80% chance)
   - Fix: Redeploy after adding variables

3. **Wrong MongoDB URI format** (10% chance)
   - Fix: Copy exact string from above

4. **MongoDB network access** (5% chance)
   - Fix: Add 0.0.0.0/0 in MongoDB Atlas

---

## Start Here

**Right now, do this:**

1. Open: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables
2. Check if you see 4 variables
3. If yes → Redeploy
4. If no → Add them, then redeploy
5. Test with test-api.html

That's it! Should take 5 minutes total.
