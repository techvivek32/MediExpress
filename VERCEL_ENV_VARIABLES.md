# Environment Variables for Vercel Deployment

## 🔑 Required Environment Variables

Copy and paste these into Vercel when deploying:

---

### 1. MONGODB_URI (Required)

**What it is**: Your MongoDB database connection string

**For Vercel, use MongoDB Atlas** (free cloud database):

```
MONGODB_URI
```

**Value**:
```
mongodb+srv://username:password@cluster.mongodb.net/mediexpress
```

**How to get it**:
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster (M0 Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your actual password
7. Add `/mediexpress` at the end

**Example**:
```
mongodb+srv://vivek:MyPassword123@cluster0.abc123.mongodb.net/mediexpress
```

---

### 2. JWT_SECRET (Required)

**What it is**: Secret key for encrypting user authentication tokens

```
JWT_SECRET
```

**Value**: Any random string (at least 32 characters)

**Example**:
```
mediexpress_super_secret_jwt_key_2024_production_secure_random_string
```

**Or generate a random one**:
```bash
# On your computer, run:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

### 3. GMAIL_USER (Required for OTP)

**What it is**: Your Gmail address for sending OTP emails

```
GMAIL_USER
```

**Value**: Your Gmail address

**Example**:
```
vivekvora3226@gmail.com
```

---

### 4. GMAIL_APP_PASSWORD (Required for OTP)

**What it is**: Gmail app-specific password (NOT your regular Gmail password)

```
GMAIL_APP_PASSWORD
```

**Value**: Your current app password

**Example**:
```
ckifbuejtjfxatyu
```

**Already have it**: `ckifbuejtjfxatyu` (from your .env.local)

**If you need a new one**:
1. Go to https://myaccount.google.com/apppasswords
2. Create new app password
3. Copy the 16-character code

---

## 📋 Optional Environment Variables

These are optional but recommended for full functionality:

### 5. CLOUDINARY_CLOUD_NAME (Optional)

**What it is**: For uploading prescription images

```
CLOUDINARY_CLOUD_NAME
```

**How to get it**:
1. Go to https://cloudinary.com/users/register/free
2. Sign up (free)
3. Copy your "Cloud Name" from dashboard

---

### 6. CLOUDINARY_API_KEY (Optional)

```
CLOUDINARY_API_KEY
```

**How to get it**: From Cloudinary dashboard

---

### 7. CLOUDINARY_API_SECRET (Optional)

```
CLOUDINARY_API_SECRET
```

**How to get it**: From Cloudinary dashboard

---

## 🚀 How to Add in Vercel

### During Deployment:

1. When configuring your project, scroll to "Environment Variables"
2. Click "Add" for each variable
3. Enter the **Name** (e.g., `MONGODB_URI`)
4. Enter the **Value** (e.g., your connection string)
5. Click "Add" again for the next variable

### After Deployment:

1. Go to your project in Vercel dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add or edit variables
5. Redeploy for changes to take effect

---

## 📝 Copy-Paste Template for Vercel

### Required Variables (Copy these):

```
Name: MONGODB_URI
Value: mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/mediexpress

Name: JWT_SECRET
Value: mediexpress_super_secret_jwt_key_2024_production_secure_random_string

Name: GMAIL_USER
Value: vivekvora3226@gmail.com

Name: GMAIL_APP_PASSWORD
Value: ckifbuejtjfxatyu
```

---

## ⚠️ Important Notes

### MongoDB URI:
- **Don't use** `mongodb://localhost:27017/mediexpress` (this is for local development)
- **Use** MongoDB Atlas cloud connection string
- **Format**: `mongodb+srv://...` (note the `+srv`)
- **Must include** database name at the end: `/mediexpress`

### JWT Secret:
- **Must be** at least 32 characters long
- **Use different** secret for production vs development
- **Keep it secret** - never share or commit to Git

### Gmail:
- **Must use** App Password, not regular password
- **Enable** 2-factor authentication on Gmail first
- **Test** by sending a test email after deployment

### Cloudinary (Optional):
- **Only needed** if you want image uploads
- **Can skip** for initial deployment
- **Add later** when needed

---

## 🧪 Test Your Variables

After deployment, test if everything works:

### Test MongoDB Connection:
Visit: `https://your-app.vercel.app/api/health`

Should return: `{"status":"ok"}`

### Test OTP Email:
1. Open your mobile app
2. Try to sign up with a new email
3. Check if OTP email arrives

### Test Admin Panel:
Visit: `https://your-app.vercel.app/admin`

Should show the admin dashboard

---

## 🔧 Troubleshooting

### MongoDB Connection Error:
- Check connection string format
- Verify username and password
- Make sure IP whitelist includes `0.0.0.0/0`
- Ensure database name is included: `/mediexpress`

### JWT Error:
- Make sure JWT_SECRET is at least 32 characters
- No special characters that might break (use letters and numbers)

### Gmail Error:
- Verify App Password is correct (16 characters)
- Check if 2FA is enabled on Gmail
- Try generating a new App Password

### Cloudinary Error:
- Verify all three values (name, key, secret)
- Check if they're from the same Cloudinary account

---

## 📊 Environment Variables Summary

| Variable | Required? | Where to Get It |
|----------|-----------|-----------------|
| MONGODB_URI | ✅ Yes | MongoDB Atlas |
| JWT_SECRET | ✅ Yes | Generate random string |
| GMAIL_USER | ✅ Yes | Your Gmail address |
| GMAIL_APP_PASSWORD | ✅ Yes | Google Account settings |
| CLOUDINARY_CLOUD_NAME | ❌ Optional | Cloudinary dashboard |
| CLOUDINARY_API_KEY | ❌ Optional | Cloudinary dashboard |
| CLOUDINARY_API_SECRET | ❌ Optional | Cloudinary dashboard |

---

## 🎯 Quick Setup Checklist

- [ ] Created MongoDB Atlas account
- [ ] Created free cluster
- [ ] Got MongoDB connection string
- [ ] Generated JWT secret (32+ characters)
- [ ] Have Gmail address
- [ ] Have Gmail App Password
- [ ] (Optional) Created Cloudinary account
- [ ] Ready to add to Vercel!

---

## 💡 Pro Tips

1. **Save your variables**: Keep them in a secure password manager
2. **Different environments**: Use different values for development vs production
3. **Test locally first**: Make sure everything works before deploying
4. **Backup**: Keep a copy of your environment variables somewhere safe

---

## 🆘 Need Help?

If you're stuck on any variable:
1. Check the specific section above
2. Follow the "How to get it" instructions
3. Make sure format is correct
4. Test locally before deploying

---

Ready to deploy? You have everything you need! 🚀
