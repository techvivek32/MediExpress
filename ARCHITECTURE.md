# System Architecture

## Overview

MediExpress is a three-sided marketplace platform connecting patients, pharmacies, and delivery riders.

## Core Components

### 1. Mobile Applications (Flutter)

#### Patient App
- Upload prescription images
- View nearby pharmacies
- Receive and accept quotes
- Make payments
- Track deliveries in real-time
- Order history and notifications

#### Pharmacy App
- Receive prescription requests
- Review prescription images
- Create detailed price quotes
- Manage inventory
- Track order preparation
- Earnings dashboard

#### Rider App
- View nearby delivery requests
- Accept deliveries
- Navigate to pickup/delivery locations
- Update delivery status
- Earnings tracking
- Delivery history

### 2. Backend API (Next.js)

**Architecture Pattern**: RESTful API with JWT authentication

**Key Services**:
- Authentication & Authorization
- Prescription Processing
- Pharmacy Matching (Geospatial)
- Quote Management
- Order Processing
- Payment Integration
- Notification Service
- Real-time Tracking

### 3. Admin Dashboard (Next.js)

**Features**:
- Analytics dashboard
- User management (patients, pharmacies, riders)
- Order monitoring
- Prescription moderation
- Revenue tracking
- Platform settings

### 4. Database (MongoDB)

**Collections**:
- users
- prescriptions
- quotes
- orders
- deliveries
- notifications
- payments

## Data Flow

### Prescription Upload Flow
```
Patient → Upload Image → Backend → Store in Cloud → Notify Pharmacies
```

### Quote Creation Flow
```
Pharmacy → Review Prescription → Add Medicines → Calculate Total → Send Quote → Patient
```

### Order Fulfillment Flow
```
Patient Confirms → Payment → Assign Rider → Pickup → Delivery → Complete
```

## Security Architecture

- JWT-based authentication
- Role-based access control (RBAC)
- API rate limiting
- Image upload validation
- HTTPS encryption
- Environment variable management

## Scalability Considerations

- Horizontal scaling with Vercel
- MongoDB Atlas for database scaling
- CDN for image delivery
- Caching layer for frequent queries
- Queue system for notifications

## Third-Party Integrations

- **Firebase**: Push notifications, analytics
- **Google Maps**: Geolocation, routing
- **Payment Gateway**: Stripe/PayPal integration
- **Cloud Storage**: AWS S3 or Cloudinary for images
- **SMS Gateway**: Twilio for OTP verification

## Deployment Architecture

```
┌─────────────────────────────────────────┐
│           Vercel Edge Network           │
├─────────────────┬───────────────────────┤
│   Backend API   │   Admin Dashboard     │
└────────┬────────┴───────────────────────┘
         │
    ┌────▼─────┐
    │ MongoDB  │
    │  Atlas   │
    └──────────┘
```

## Monitoring & Analytics

- Error tracking (Sentry)
- Performance monitoring
- User analytics
- Business metrics dashboard
