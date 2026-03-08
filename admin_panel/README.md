# MediExpress Admin Dashboard

Next.js admin dashboard for managing the MediExpress platform.

## Features

- Dashboard analytics
- User management (patients, pharmacies, riders)
- Order management and monitoring
- Prescription moderation
- Revenue tracking
- Real-time statistics
- Map view of active deliveries

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts for analytics
- Lucide Icons

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 3. Run Development Server

```bash
npm run dev
```

Dashboard runs on `http://localhost:3002`

## Pages

- `/` - Dashboard overview
- `/orders` - Order management
- `/patients` - Patient management
- `/pharmacies` - Pharmacy management
- `/riders` - Rider management
- `/prescriptions` - Prescription moderation
- `/analytics` - Analytics and reports
- `/settings` - Platform settings

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

## Default Admin Credentials

Create admin user via API:

```json
{
  "fullName": "Admin User",
  "email": "admin@mediexpress.com",
  "phone": "+212600000000",
  "password": "admin123",
  "role": "admin"
}
```

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: {
    500: '#4CAF50',
    600: '#43A047',
  },
}
```

### Components

All components are in `src/components/` directory.
