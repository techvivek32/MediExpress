# 🎯 Deploy Backend + Admin from ONE Git Repo

## The Magic: Root Directory Setting

You have ONE Git repo with everything. Vercel can deploy ONLY the folders you want.

---

## 📦 What You Have

```
your-git-repo/
├── apps/              ← Flutter apps (DON'T deploy)
├── backend/           ← Deploy THIS as Project 1
└── admin_panel/       ← Deploy THIS as Project 2
```

---

## 🚀 How to Deploy

### Step 1: Push to GitHub (One Time)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

---

### Step 2: Deploy Backend

1. Go to: **https://vercel.com/new**

2. Click: **"Import Git Repository"**

3. Select: **Your GitHub repo**

4. **IMPORTANT**: Click "Edit" next to "Root Directory"
   
   Type: `backend`

5. Add environment variables:
   - MONGODB_URI
   - JWT_SECRET
   - GMAIL_USER
   - GMAIL_APP_PASSWORD

6. Click: **"Deploy"**

7. **Copy URL**: `https://your-backend.vercel.app`

---

### Step 3: Deploy Admin Panel

1. Go to: **https://vercel.com/new** (again)

2. Click: **"Import Git Repository"**

3. Select: **SAME GitHub repo** (yes, same one!)

4. **IMPORTANT**: Click "Edit" next to "Root Directory"
   
   Type: `admin_panel`

5. Add environment variable:
   - NEXT_PUBLIC_API_URL = `https://your-backend.vercel.app/api`

6. Click: **"Deploy"**

7. **Copy URL**: `https://your-admin.vercel.app`

---

## ✅ Done!

You now have:
- ✅ Backend live at: `https://your-backend.vercel.app`
- ✅ Admin Panel live at: `https://your-admin.vercel.app`
- ✅ Both from ONE Git repo
- ✅ Flutter apps stay in repo (not deployed)

---

## 🎯 The Key Setting

When Vercel asks for "Root Directory":

**For Backend:**
```
Root Directory: backend
```

**For Admin Panel:**
```
Root Directory: admin_panel
```

This tells Vercel: "Only deploy THIS folder, ignore everything else"

---

## 🔄 Auto-Deploy

Now when you push to GitHub:
- Update `backend/` → Backend auto-redeploys
- Update `admin_panel/` → Admin auto-redeploys
- Update `apps/` → Nothing happens (perfect!)

---

## 📱 Update Mobile App

After backend is deployed, update your Flutter app:

**File**: `apps/patient_app/lib/core/constants/app_constants.dart`

**Change**:
```dart
static const String baseUrl = 'https://your-backend.vercel.app/api';
```

**Rebuild**:
```bash
cd apps/patient_app
flutter build apk --release
```

---

## 🎉 That's It!

Two projects from one repo. Simple!

**Questions?** Just ask!
