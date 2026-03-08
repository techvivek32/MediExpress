# Test OTP Flow - Quick Verification

## Prerequisites
- Backend running on http://localhost:3000
- Gmail credentials configured in `backend/.env.local`

## Test Using cURL (Command Line)

### 1. Send OTP
```bash
curl -X POST http://localhost:3000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"your-test-email@gmail.com\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "OTP sent to your email",
  "data": {
    "message": "OTP sent successfully"
  }
}
```

**Check:**
- Email inbox for OTP (check spam folder too)
- Backend console for OTP if email fails

### 2. Verify OTP
```bash
curl -X POST http://localhost:3000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"your-test-email@gmail.com\",\"otp\":\"123456\"}"
```

**Expected Response (Success):**
```json
{
  "success": true,
  "message": "OTP verified successfully",
  "data": {
    "verified": true
  }
}
```

**Expected Response (Invalid OTP):**
```json
{
  "success": false,
  "message": "Invalid OTP"
}
```

## Test Using Browser Console

Open http://localhost:8080 and open browser console (F12), then run:

### 1. Send OTP
```javascript
fetch('http://localhost:3000/api/auth/send-otp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'your-test-email@gmail.com' })
})
.then(r => r.json())
.then(console.log)
```

### 2. Verify OTP
```javascript
fetch('http://localhost:3000/api/auth/verify-otp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    email: 'your-test-email@gmail.com',
    otp: '123456'  // Replace with actual OTP from email
  })
})
.then(r => r.json())
.then(console.log)
```

## Test Using Web App UI

1. Open http://localhost:8080
2. Click "Sign Up"
3. Fill in the form:
   - Full Name: Test User
   - Email: your-test-email@gmail.com
   - Phone: 1234567890
   - Password: Test@123
   - Confirm Password: Test@123
4. Click "Sign Up"
5. Check your email for OTP
6. Enter the 6-digit OTP
7. Click "Verify"

## Backend Console Output

When OTP is sent successfully:
```
[OTP] Stored for user@example.com: 123456 (expires in 10 min)
✅ OTP email sent to user@example.com
```

When email fails (fallback mode):
```
[OTP] Stored for user@example.com: 123456 (expires in 10 min)
❌ Failed to send OTP email: [error details]

🔐 OTP for user@example.com: 123456 (Email failed, showing in console)
```

When OTP is verified:
```
[OTP] Stored for user@example.com: 123456 (expires in 10 min)
```

## Common Issues

### Issue: "OTP not found or expired"
**Cause:** OTP was not stored or already expired
**Solution:** 
- Send OTP again
- Check backend console for storage confirmation
- Verify email matches exactly

### Issue: "User already exists"
**Cause:** Email is already registered
**Solution:** Use a different email or login instead

### Issue: Email not received
**Cause:** Gmail credentials not configured or incorrect
**Solution:**
1. Check `backend/.env.local` has correct credentials
2. Verify App Password is correct
3. Check spam folder
4. Look for OTP in backend console (fallback mode)

### Issue: CORS error in browser
**Cause:** Browser blocking cross-origin requests
**Solution:** Already configured in `next.config.js`, restart backend

## Success Indicators

✅ Backend console shows: `[OTP] Stored for email@example.com: 123456`
✅ Backend console shows: `✅ OTP email sent to email@example.com`
✅ Email received with professional template
✅ OTP verification returns `{"success": true}`
✅ User can complete registration after OTP verification

## Next Steps After Testing

1. If email works: You're all set! 🎉
2. If email fails: Check Gmail credentials in `.env.local`
3. If OTP verification fails: Check backend console for errors
4. If registration fails: Check MongoDB connection

---

**Pro Tip:** Use your own email for testing to see the actual email template!
