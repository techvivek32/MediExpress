# Testing Live API

## Test the following endpoints manually:

### 1. Test Backend Health
Open in browser: https://medi-express-zvo4.vercel.app

### 2. Test Send OTP API
```bash
curl -X POST https://medi-express-zvo4.vercel.app/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### 3. Test Login API (after creating a user)
```bash
curl -X POST https://medi-express-zvo4.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

## Common Issues:

### Issue 1: Environment Variables Not Set
- Go to Vercel Dashboard
- Select your project
- Go to Settings > Environment Variables
- Verify these are set:
  - MONGODB_URI
  - JWT_SECRET
  - GMAIL_USER
  - GMAIL_APP_PASSWORD

### Issue 2: MongoDB Connection
- Check if MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Or add Vercel's IP ranges to whitelist

### Issue 3: Gmail App Password
- Verify Gmail App Password is correct
- Check if 2FA is enabled on Gmail account
- Try generating a new App Password

## Check Vercel Logs
1. Go to https://vercel.com/dashboard
2. Select your project
3. Click on "Deployments"
4. Click on the latest deployment
5. Check "Functions" tab for error logs
