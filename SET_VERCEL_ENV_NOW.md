# Set Vercel Environment Variables NOW

## Step-by-Step Instructions

### Step 1: Open Vercel Settings
1. Click this link: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4/settings/environment-variables
2. You should see "Environment Variables" page

### Step 2: Add Each Variable

Click "Add New" button and add these ONE BY ONE:

#### Variable 1: MONGODB_URI
```
Name: MONGODB_URI
Value: mongodb+srv://Vercel-Admin-MediExpress:t7GPSvmlUf8l8NWj@mediexpress.jiyxy19.mongodb.net/?retryWrites=true&w=majority
Environment: Production (check the box)
```
Click "Save"

#### Variable 2: JWT_SECRET
```
Name: JWT_SECRET
Value: mediexpress_super_secret_jwt_key_2024_production_secure_random_string
Environment: Production (check the box)
```
Click "Save"

#### Variable 3: GMAIL_USER
```
Name: GMAIL_USER
Value: vivekvora3226@gmail.com
Environment: Production (check the box)
```
Click "Save"

#### Variable 4: GMAIL_APP_PASSWORD
```
Name: GMAIL_APP_PASSWORD
Value: ckifbuejtjfxatyu
Environment: Production (check the box)
```
Click "Save"

### Step 3: Redeploy

1. Go to: https://vercel.com/vivekvora3226-2527s-projects/medi-express-zvo4
2. Click "Deployments" tab at top
3. Find the latest deployment (top one)
4. Click the "..." (three dots) button on the right
5. Click "Redeploy"
6. Wait for deployment to complete (about 2-3 minutes)

### Step 4: Test

After redeployment completes:

1. Open the test page: `test-api.html` (in your project folder)
2. Click "Send OTP" button
3. You should see success message!

OR test in browser console:
```javascript
fetch('https://medi-express-zvo4.vercel.app/api/auth/send-otp', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({email: 'test@example.com'})
}).then(r => r.json()).then(console.log)
```

### Step 5: Test Your APK

1. Install the APK on your phone: `apps/patient_app/build/app/outputs/flutter-apk/app-release.apk`
2. Open MediExpress app
3. Try to sign up with your email
4. You should receive OTP!

## Visual Guide

```
Vercel Dashboard
    ↓
Settings (left sidebar)
    ↓
Environment Variables
    ↓
Add New (button)
    ↓
Enter Name and Value
    ↓
Check "Production"
    ↓
Save
    ↓
Repeat for all 4 variables
    ↓
Go to Deployments
    ↓
Click "..." on latest
    ↓
Click "Redeploy"
    ↓
Wait for completion
    ↓
Test!
```

## Troubleshooting

### If you see "Environment Variable already exists"
- That's good! It means it's already set
- Click on it to edit and make sure the value is correct

### If redeployment fails
- Check the error message in deployment logs
- Make sure all 4 variables are set correctly
- Try redeploying again

### If API still doesn't work after redeploy
- Check MongoDB Atlas Network Access (must allow 0.0.0.0/0)
- Check Vercel function logs for errors
- Share the error message

## Expected Result

After completing these steps:
✅ Backend APIs will work
✅ OTP emails will be sent
✅ Login will work
✅ Your APK will connect successfully
✅ App will be fully functional!
