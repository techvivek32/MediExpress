# 💼 Admin Panel - Complete Guide

## 🎯 Access Information

### URL: http://localhost:3000
### Port: 3000

## 🚀 How to Start

```bash
cd admin_panel
npm install
npm run dev
```

**Output:**
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
✓ Ready in 2s
```

Then open your browser: **http://localhost:3000**

---

## 📊 Available Pages

### 1. Dashboard (/)
**URL**: http://localhost:3000

**Features**:
- 📈 Statistics Cards
  - Total Orders: 1,234
  - Active Riders: 89
  - Total Revenue: 45,678 MAD
  - Pharmacies: 156
- 📊 Revenue Chart (Monthly)
- 📋 Recent Orders Table
- 🔔 Real-time Updates

**What You See**:
- Clean, modern dashboard
- Color-coded statistics
- Interactive charts
- Recent activity

---

### 2. Patients Management (/patients)
**URL**: http://localhost:3000/patients

**Features**:
- 👥 Patient List Table
- 🔍 Search Functionality
- 📊 Statistics:
  - Total Patients: 1,234
  - Active Today: 89
  - New This Month: 156
  - Average Orders: 8.5
- ✅ Status Management (Active/Inactive)
- 👁️ View Patient Details
- 🚫 Deactivate Accounts

**Table Columns**:
- Name (with avatar)
- Email
- Phone
- Total Orders
- Status
- Joined Date
- Actions

---

### 3. Pharmacies Management (/pharmacies)
**URL**: http://localhost:3000/pharmacies

**Features**:
- 🏥 Pharmacy List Table
- 🔍 Search Functionality
- 📊 Statistics:
  - Total Pharmacies: 156
  - Active Now: 89
  - Average Rating: 4.7
  - Pending Approval: 12
- ⭐ Rating Display
- 📜 License Verification
- 🚫 Suspend/Activate

**Table Columns**:
- Pharmacy Name (with icon)
- License Number
- Address
- Phone
- Total Orders
- Rating (with stars)
- Status
- Actions

---

### 4. Riders Management (/riders)
**URL**: http://localhost:3000/riders

**Features**:
- 🏍️ Rider List Table
- 🔍 Search Functionality
- 📊 Statistics:
  - Total Riders: 89
  - Online Now: 45
  - Average Rating: 4.8
  - Total Earnings: 234K MAD
- 🟢 Online/Offline Status
- 🚗 Vehicle Information
- 💰 Earnings Tracking

**Table Columns**:
- Rider Name (with avatar)
- Phone
- Vehicle (Type & Number)
- Total Deliveries
- Rating (with stars)
- Earnings
- Status (Online/Offline)
- Actions

---

### 5. Orders Management (/orders)
**URL**: http://localhost:3000/orders

**Features**:
- 📦 Order List Table
- 🔍 Search Functionality
- 🏷️ Status Filters:
  - All
  - Confirmed
  - Preparing
  - In Transit
  - Delivered
  - Cancelled
- 📤 Export Functionality
- 📄 Pagination
- 👁️ View Order Details

**Table Columns**:
- Order ID
- Patient Name
- Pharmacy Name
- Rider Name
- Amount
- Status (with color badges)
- Date & Time
- Actions

**Status Colors**:
- 🟢 Delivered - Green
- 🔵 In Transit - Blue
- 🟡 Preparing - Yellow
- 🟣 Confirmed - Purple
- 🔴 Cancelled - Red

---

## 🎨 Design Features

### Color Scheme
- **Primary**: Green (#4CAF50) - Medical theme
- **Success**: Green (#43A047)
- **Warning**: Orange (#FFA726)
- **Error**: Red (#E53935)
- **Info**: Blue (#29B6F6)

### UI Components
- ✅ Modern card design with shadows
- ✅ Rounded corners (16px)
- ✅ Consistent spacing (8px grid)
- ✅ Professional typography
- ✅ Hover effects
- ✅ Status badges
- ✅ Icon integration
- ✅ Responsive layout

### Navigation
- 📱 Collapsible sidebar
- 🎯 Active page highlighting
- 🔗 Clean routing
- 📊 Icon-based menu

---

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### API Integration
The admin panel connects to backend API at:
- Development: http://localhost:3001/api
- Production: https://your-api.vercel.app/api

---

## 📱 Responsive Design

### Desktop (1920px+)
- Full sidebar visible
- 4-column statistics grid
- Wide tables

### Tablet (768px - 1919px)
- Collapsible sidebar
- 2-column statistics grid
- Scrollable tables

### Mobile (< 768px)
- Hidden sidebar (toggle button)
- 1-column statistics grid
- Horizontal scroll tables

---

## 🎯 User Actions

### Dashboard
- View statistics
- Check recent orders
- Monitor revenue

### Patients Page
- Search patients
- View patient details
- Activate/Deactivate accounts
- Add new patients

### Pharmacies Page
- Search pharmacies
- View pharmacy details
- Verify licenses
- Suspend/Activate pharmacies
- Add new pharmacies

### Riders Page
- Search riders
- View rider details
- Check online status
- Monitor earnings
- Suspend/Activate riders
- Add new riders

### Orders Page
- Filter by status
- Search orders
- View order details
- Export data
- Navigate pages

---

## 🔐 Security Features

### Authentication (To Be Implemented)
- Admin login required
- JWT token authentication
- Role-based access control
- Session management

### Current Status
- Open access (development mode)
- Add authentication before production

---

## 🧪 Testing

### Test the Admin Panel

1. **Start Backend**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Admin Panel**:
   ```bash
   cd admin_panel
   npm run dev
   ```

3. **Open Browser**:
   - Go to: http://localhost:3002
   - Navigate through all pages
   - Test search functionality
   - Try filters on orders page

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
cd admin_panel
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
```bash
# Ensure Tailwind is configured
npm install -D tailwindcss postcss autoprefixer
```

### API Connection Error
- Check backend is running on port 3001
- Verify NEXT_PUBLIC_API_URL in .env.local
- Check CORS settings in backend

---

## 📊 Data Flow

```
Admin Panel (Port 3000)
        ↓
    API Calls
        ↓
Backend API (Port 3001)
        ↓
    MongoDB
        ↓
    Response
        ↓
Admin Panel Display
```

---

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#4CAF50', // Change this
          600: '#43A047',
        },
      },
    },
  },
};
```

### Add New Page
1. Create file: `src/app/newpage/page.tsx`
2. Add to sidebar: `src/components/Sidebar.tsx`
3. Restart dev server

---

## 📈 Performance

### Optimization Tips
- Use React Server Components
- Implement pagination
- Add loading states
- Cache API responses
- Optimize images
- Lazy load components

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Admin panel ready"
   git push
   ```

2. **Deploy**:
   ```bash
   cd admin_panel
   vercel --prod
   ```

3. **Set Environment Variables**:
   - Go to Vercel dashboard
   - Add NEXT_PUBLIC_API_URL
   - Redeploy

---

## ✅ Features Checklist

- [x] Dashboard with statistics
- [x] Patients management
- [x] Pharmacies management
- [x] Riders management
- [x] Orders management
- [x] Search functionality
- [x] Filter functionality
- [x] Status badges
- [x] Responsive design
- [x] Modern UI/UX
- [ ] Authentication (to be added)
- [ ] Real-time updates (to be added)
- [ ] Export to CSV (to be added)
- [ ] Advanced analytics (to be added)

---

## 📞 Support

For issues:
1. Check terminal logs
2. Verify backend is running
3. Check browser console
4. Review `FIXES_APPLIED.md`
5. Check `ACCESS_GUIDE.md`

---

## 🎉 Quick Start Summary

```bash
# 1. Install dependencies
cd admin_panel
npm install

# 2. Create environment file
cp .env.local.example .env.local

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

**That's it! Your admin panel is ready! 🚀**

---

## 📸 Screenshots

### Dashboard
- Clean layout with statistics cards
- Revenue chart showing monthly data
- Recent orders table
- Professional medical theme

### Management Pages
- Searchable tables
- Action buttons
- Status indicators
- Pagination controls

---

**🎯 Admin Panel URL: http://localhost:3000**

**📚 Full Documentation: See ACCESS_GUIDE.md**
