# Gmail SMTP Setup Guide

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", enable "2-Step Verification"
4. Follow the prompts to set it up

## Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other (Custom name)" as the device
4. Enter "MediExpress Backend" as the name
5. Click "Generate"
6. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

## Step 3: Update Environment Variables

Open `backend/.env.local` and update:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Important:** 
- Use your actual Gmail address for `GMAIL_USER`
- Use the 16-character app password (with or without spaces) for `GMAIL_APP_PASSWORD`
- DO NOT use your regular Gmail password!

## Step 4: Restart Backend

After updating the .env.local file, restart the backend server:

```bash
cd backend
npm run dev
```

## Testing

1. Go to http://localhost:8080 (web app)
2. Click "Sign up"
3. Fill in the form with a real email address
4. Click "Sign Up"
5. Check your email inbox for the OTP
6. Enter the OTP in the verification screen

## Troubleshooting

### Email not received?
1. Check spam/junk folder
2. Verify Gmail credentials in .env.local
3. Check backend console for error messages
4. Make sure 2FA is enabled on your Google account
5. Make sure you're using an App Password, not your regular password

### "Invalid credentials" error?
- Double-check the app password
- Make sure there are no extra spaces
- Try generating a new app password

### Still not working?
The OTP will be printed in the backend console as a fallback:
```
🔐 OTP for user@example.com: 123456 (Email failed, showing in console)
```

## Security Notes

- Never commit .env.local to git
- Use different app passwords for different applications
- Revoke app passwords you're not using
- In production, use a dedicated email service like SendGrid or AWS SES
