# MediExpress Backend API

Next.js 14 backend API with MongoDB for the MediExpress platform.

## Features

- RESTful API architecture
- JWT authentication
- MongoDB with Mongoose ODM
- Firebase Cloud Messaging
- Cloudinary image storage
- Geospatial queries
- Real-time notifications

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- MongoDB + Mongoose
- JWT for authentication
- Firebase Admin SDK
- Cloudinary

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

### 3. Run Development Server

```bash
npm run dev
```

Server runs on `http://localhost:3001`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Prescriptions
- `POST /api/prescriptions/upload` - Upload prescription
- `GET /api/prescriptions/:id` - Get prescription details

### Pharmacy
- `GET /api/pharmacy/requests` - Get prescription requests
- `POST /api/pharmacy/send-quote` - Send price quote

### Orders
- `POST /api/orders/confirm` - Confirm order
- `GET /api/orders/history` - Get order history
- `GET /api/orders/:id/track` - Track order

### Rider
- `GET /api/rider/nearby-deliveries` - Get nearby deliveries
- `POST /api/rider/accept-delivery` - Accept delivery
- `PUT /api/rider/update-status` - Update delivery status

## Database Models

- User
- Patient
- Pharmacy
- Rider
- Prescription
- Quote
- Order
- Notification

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

## Testing

```bash
npm test
```

## Documentation

See [API_DOCUMENTATION.md](../API_DOCUMENTATION.md) for detailed API documentation.
