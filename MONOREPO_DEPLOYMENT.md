# Deploy Backend + Admin Panel from One Git Repo

## Your Project Structure
```
your-repo/
├── apps/
│   ├── patient_app/     ❌ Don't deploy (Flutter app)
│   ├── pharmacy_app/    ❌ Don't deploy (Flutter app)
│   └── rider_app/       ❌ Don't deploy (Flutter app)
├── backend/             ✅ Deploy this to Vercel
├── admin_panel/         ✅ Deploy this to Vercel
└── ... other files
```

## Solution: Use "Root Directory" Setting

Vercel can deploy specific folders from one Git repo. You'll create TWO separate Vercel projects from the SAME Git repo.

---

## Step-by-Step Deployment

### 1️⃣ Push Your Code to GitHub (One Time Setup)

If you haven't already:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ Deploy Backend (Project 1)

1. **Go to**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select your GitHub repo
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: `mediexpress-backend`
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: Click "Edit" → Type `backend` ⭐ THIS IS KEY!
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables**:
   Click "Environment Variables" and add:
   
   ```
   MONGODB_URI = mongodb+srv://user:pass@cluster.mongodb.net/mediexpress
   JWT_SECRET = your_secret_key_at_least_32_characters_long
   GMAIL_USER = your_email@gmail.com
   GMAIL_APP_PASSWORD = your_gmail_app_password
   ```

5. **Click "Deploy"** 🚀

6. **Save Backend URL**: `https://your-backend.vercel.app`

---

### 3️⃣ Deploy Admin Panel (Project 2)

1. **Go to**: https://vercel.com/new (again)

2. **Import SAME Git Repository**:
   - Click "Import Git Repository"
   - Select the SAME GitHub repo
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: `mediexpress-admin`
   - **Framework Preset**: Next.js
   - **Root Directory**: Click "Edit" → Type `admin_panel` ⭐ THIS IS KEY!
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. **Environment Variables**:
   
   ```
   NEXT_PUBLIC_API_URL = https://your-backend.vercel.app/api
   ```
   (Use YOUR backend URL from step 2)

5. **Click "Deploy"** 🚀

6. **Save Admin URL**: `https://your-admin.vercel.app`

---

## ✅ Result

From ONE Git repo, you now have TWO deployed projects:
- ✅ Backend: `https://your-backend.vercel.app`
- ✅ Admin Panel: `https://your-admin.vercel.app`

The Flutter apps (`apps/` folder) stay in your repo but are NOT deployed to Vercel (they're mobile apps, not web apps).

---

## 🔄 Auto-Deploy on Git Push

Now whenever you push to GitHub:
- Changes in `backend/` folder → Auto-redeploys backend
- Changes in `admin_panel/` folder → Auto-redeploys admin panel
- Changes in `apps/` folder → Nothing happens (as expected)

---

## 📝 Visual Guide

### When Creating Backend Project:
```
┌─────────────────────────────────────┐
│ Configure Project                   │
├─────────────────────────────────────┤
│ Project Name: mediexpress-backend   │
│ Framework: Next.js                  │
│ Root Directory: backend  ⭐         │
│ Build Command: npm run build        │
└─────────────────────────────────────┘
```

### When Creating Admin Panel Project:
```
┌─────────────────────────────────────┐
│ Configure Project                   │
├─────────────────────────────────────┤
│ Project Name: mediexpress-admin     │
│ Framework: Next.js                  │
│ Root Directory: admin_panel  ⭐     │
│ Build Command: npm run build        │
└─────────────────────────────────────┘
```

---

## 🎯 Key Points

1. **Same Git Repo** → Two Vercel Projects
2. **Root Directory** → Tells Vercel which folder to deploy
3. **Backend** → Set root to `backend`
4. **Admin Panel** → Set root to `admin_panel`
5. **Flutter Apps** → Stay in repo, not deployed to Vercel

---

## 🔧 Alternative: Deploy Without GitHub

If you don't want to use GitHub, you can use Vercel CLI:

### Deploy Backend:
```bash
cd backend
vercel --prod
```

### Deploy Admin Panel:
```bash
cd admin_panel
vercel --prod
```

Each folder becomes a separate Vercel project.

---

## ❓ Common Questions

### Q: Will Vercel deploy the Flutter apps?
**A:** No! Vercel only deploys the folder you specify in "Root Directory". Flutter apps stay in your repo but aren't deployed.

### Q: Can I have different Git branches for each?
**A:** Yes! In project settings, you can set different production branches.

### Q: What if I update both backend and admin panel?
**A:** Both will auto-deploy when you push to Git. They deploy independently.

### Q: Do I need two Git repos?
**A:** No! One Git repo is perfect. Use "Root Directory" to deploy different folders.

---

## 🚀 Quick Checklist

**Backend Deployment:**
- [ ] Import Git repo
- [ ] Set root directory to `backend`
- [ ] Add environment variables
- [ ] Deploy
- [ ] Save URL

**Admin Panel Deployment:**
- [ ] Import SAME Git repo
- [ ] Set root directory to `admin_panel`
- [ ] Add environment variable (backend URL)
- [ ] Deploy
- [ ] Save URL

**Done!** ✅

---

## 📸 Screenshot Guide

When you see this screen in Vercel:

```
Configure Project
─────────────────
Framework Preset: Next.js
Root Directory: ./  [Edit] ← CLICK HERE!
```

Click "Edit" and type:
- For backend: `backend`
- For admin panel: `admin_panel`

That's the magic! 🎩✨

---

## Need Help?

If you're stuck:
1. Make sure you clicked "Edit" next to "Root Directory"
2. Type the folder name exactly: `backend` or `admin_panel`
3. Don't include slashes: ❌ `/backend/` ✅ `backend`

Happy deploying! 🎉
