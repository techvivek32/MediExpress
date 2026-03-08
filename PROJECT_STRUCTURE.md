# Project Structure

## Complete Directory Layout

```
mediexpress/
├── README.md
├── ARCHITECTURE.md
├── API_DOCUMENTATION.md
├── DEPLOYMENT.md
├── SETUP_INSTRUCTIONS.md
├── PROJECT_STRUCTURE.md
│
├── apps/
│   ├── patient_app/                    # Flutter Patient Mobile App
│   │   ├── android/
│   │   ├── ios/
│   │   ├── lib/
│   │   │   ├── main.dart
│   │   │   ├── models/
│   │   │   │   ├── user_model.dart
│   │   │   │   ├── prescription_model.dart
│   │   │   │   ├── quote_model.dart
│   │   │   │   └── order_model.dart
│   │   │   ├── providers/
│   │   │   │   ├── auth_provider.dart
│   │   │   │   ├── prescription_provider.dart
│   │   │   │   └── order_provider.dart
│   │   │   ├── screens/
│   │   │   │   ├── splash_screen.dart
│   │   │   │   ├── auth/
│   │   │   │   │   ├── login_screen.dart
│   │   │   │   │   └── signup_screen.dart
│   │   │   │   ├── home/
│   │   │   │   │   └── home_screen.dart
│   │   │   │   ├── prescription/
│   │   │   │   │   ├── upload_prescription_screen.dart
│   │   │   │   │   └── prescription_details_screen.dart
│   │   │   │   ├── orders/
│   │   │   │   │   ├── order_history_screen.dart
│   │   │   │   │   ├── order_details_screen.dart
│   │   │   │   │   └── tracking_screen.dart
│   │   │   │   └── profile/
│   │   │   │       └── profile_screen.dart
│   │   │   ├── services/
│   │   │   │   ├── api_service.dart
│   │   │   │   ├── location_service.dart
│   │   │   │   └── notification_service.dart
│   │   │   ├── utils/
│   │   │   │   ├── theme.dart
│   │   │   │   ├── constants.dart
│   │   │   │   └── helpers.dart
│   │   │   └── widgets/
│   │   │       ├── custom_button.dart
│   │   │       ├── custom_card.dart
│   │   │       └── loading_indicator.dart
│   │   ├── pubspec.yaml
│   │   └── README.md
│   │
│   ├── pharmacy_app/                   # Flutter Pharmacy Mobile App
│   │   ├── android/
│   │   ├── ios/
│   │   ├── lib/
│   │   │   ├── main.dart
│   │   │   ├── models/
│   │   │   ├── providers/
│   │   │   ├── screens/
│   │   │   │   ├── splash_screen.dart
│   │   │   │   ├── auth/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── requests/
│   │   │   │   ├── quote/
│   │   │   │   └── orders/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   └── widgets/
│   │   ├── pubspec.yaml
│   │   └── README.md
│   │
│   └── rider_app/                      # Flutter Rider Mobile App
│       ├── android/
│       ├── ios/
│       ├── lib/
│       │   ├── main.dart
│       │   ├── models/
│       │   ├── providers/
│       │   ├── screens/
│       │   │   ├── splash_screen.dart
│       │   │   ├── auth/
│       │   │   ├── dashboard/
│       │   │   ├── deliveries/
│       │   │   └── earnings/
│       │   ├── services/
│       │   ├── utils/
│       │   └── widgets/
│       ├── pubspec.yaml
│       └── README.md
│
├── backend/                            # Next.js Backend API
│   ├── src/
│   │   ├── app/
│   │   │   └── api/
│   │   │       ├── auth/
│   │   │       │   ├── register/
│   │   │       │   │   └── route.ts
│   │   │       │   └── login/
│   │   │       │       └── route.ts
│   │   │       ├── prescriptions/
│   │   │       │   ├── upload/
│   │   │       │   │   └── route.ts
│   │   │       │   └── [id]/
│   │   │       │       └── route.ts
│   │   │       ├── pharmacy/
│   │   │       │   ├── requests/
│   │   │       │   │   └── route.ts
│   │   │       │   └── send-quote/
│   │   │       │       └── route.ts
│   │   │       ├── orders/
│   │   │       │   ├── confirm/
│   │   │       │   │   └── route.ts
│   │   │       │   ├── history/
│   │   │       │   │   └── route.ts
│   │   │       │   └── [id]/
│   │   │       │       ├── track/
│   │   │       │       │   └── route.ts
│   │   │       │       └── cancel/
│   │   │       │           └── route.ts
│   │   │       └── rider/
│   │   │           ├── nearby-deliveries/
│   │   │           │   └── route.ts
│   │   │           ├── accept-delivery/
│   │   │           │   └── route.ts
│   │   │           └── update-status/
│   │   │               └── route.ts
│   │   ├── lib/
│   │   │   ├── mongodb.ts
│   │   │   ├── auth.ts
│   │   │   └── response.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Patient.ts
│   │   │   ├── Pharmacy.ts
│   │   │   ├── Rider.ts
│   │   │   ├── Prescription.ts
│   │   │   ├── Quote.ts
│   │   │   ├── Order.ts
│   │   │   └── Notification.ts
│   │   └── services/
│   │       ├── notification.ts
│   │       ├── geolocation.ts
│   │       └── payment.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md
│
├── admin_panel/                        # Next.js Admin Dashboard
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── orders/
│   │   │   │   └── page.tsx
│   │   │   ├── patients/
│   │   │   │   └── page.tsx
│   │   │   ├── pharmacies/
│   │   │   │   └── page.tsx
│   │   │   ├── riders/
│   │   │   │   └── page.tsx
│   │   │   └── analytics/
│   │   │       └── page.tsx
│   │   └── components/
│   │       ├── Sidebar.tsx
│   │       ├── DashboardStats.tsx
│   │       ├── RecentOrders.tsx
│   │       ├── RevenueChart.tsx
│   │       └── UserTable.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
│
└── docs/                               # Additional Documentation
    ├── api/
    │   ├── authentication.md
    │   ├── prescriptions.md
    │   ├── orders.md
    │   └── webhooks.md
    ├── guides/
    │   ├── getting-started.md
    │   ├── flutter-setup.md
    │   └── deployment.md
    └── diagrams/
        ├── architecture.png
        ├── workflow.png
        └── database-schema.png
```

## Key Directories Explained

### `/apps`
Contains all Flutter mobile applications (Patient, Pharmacy, Rider)

### `/backend`
Next.js API server with MongoDB integration

### `/admin_panel`
Next.js admin dashboard for platform management

### `/docs`
Additional documentation and guides

## Technology Stack by Component

### Patient App
- Flutter 3.x
- Provider (State Management)
- Google Maps
- Firebase Messaging
- Image Picker

### Pharmacy App
- Flutter 3.x
- Provider
- Cached Network Image
- Firebase Messaging

### Rider App
- Flutter 3.x
- Provider
- Google Maps
- Geolocator
- Firebase Messaging

### Backend
- Next.js 14 (App Router)
- MongoDB + Mongoose
- JWT Authentication
- Firebase Admin SDK
- Cloudinary

### Admin Panel
- Next.js 14
- Tailwind CSS
- Recharts
- Lucide Icons

## File Naming Conventions

- **Flutter**: `snake_case.dart`
- **TypeScript**: `camelCase.ts` or `PascalCase.tsx`
- **Components**: `PascalCase.tsx`
- **Models**: `PascalCase.ts`
- **Services**: `camelCase.ts`

## Environment Files

- `backend/.env` - Backend configuration
- `admin_panel/.env.local` - Admin panel configuration
- Flutter apps use `lib/utils/constants.dart` for configuration
