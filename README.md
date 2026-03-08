# MediExpress - Prescription Medicine Delivery Platform

A complete production-ready SaaS platform connecting patients, pharmacies, and delivery riders for prescription medicine delivery.

## 🚀 Quick Access

- **Backend API**: http://localhost:3001
- **Admin Panel**: http://localhost:3000 ⭐
- **API Health**: http://localhost:3001/api/health

## 📖 Documentation

- **[ACCESS_GUIDE.md](ACCESS_GUIDE.md)** - Complete access guide with URLs and commands
- **[SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)** - Detailed setup guide
- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - API endpoints reference
- **[FRONTEND_IMPLEMENTATION.md](FRONTEND_IMPLEMENTATION.md)** - Frontend architecture

## 🏗️ System Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Patient App    │     │  Pharmacy App   │     │   Rider App     │
│   (Flutter)     │     │   (Flutter)     │     │   (Flutter)     │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                        │
         └───────────────────────┼────────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   Backend API (Next.js) │
                    │   - REST APIs           │
                    │   - JWT Auth            │
                    │   - FCM Notifications   │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   MongoDB Database      │
                    └─────────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  Admin Panel (Next.js)  │
                    └─────────────────────────┘
```

## 📱 Platform Components

1. **Patient Mobile App** - Upload prescriptions, track orders
2. **Pharmacy Mobile App** - Receive requests, create quotes
3. **Rider Mobile App** - Accept deliveries, navigate routes
4. **Admin Dashboard** - Manage platform, monitor operations
5. **Backend API** - Handle business logic, data management
6. **MongoDB Database** - Store all platform data

## 🚀 Technology Stack

- **Mobile**: Flutter 3.x with Material 3
- **Backend**: Next.js 14 (App Router)
- **Database**: MongoDB with Mongoose
- **Auth**: JWT tokens
- **Notifications**: Firebase Cloud Messaging
- **Maps**: Google Maps API
- **Deployment**: Vercel (backend + admin)

## 📋 Order Workflow

1. Patient uploads prescription image
2. System finds pharmacies within 5km radius
3. Nearby pharmacies receive notification
4. Pharmacy accepts and creates price quote
5. Patient reviews and confirms order
6. Payment processed (online/cash)
7. Rider assigned automatically
8. Rider picks up from pharmacy
9. Patient tracks delivery live
10. Order completed

## 🗂️ Project Structure

```
mediexpress/
├── apps/
│   ├── patient_app/          # Flutter patient app
│   ├── pharmacy_app/         # Flutter pharmacy app
│   └── rider_app/            # Flutter rider app
├── backend/                  # Next.js API
├── admin_panel/              # Next.js admin dashboard
├── docs/                     # Documentation
└── shared/                   # Shared configurations
```

## 🛠️ Setup Instructions

See individual README files in each directory for detailed setup instructions.

## 📄 License

Proprietary - All rights reserved
