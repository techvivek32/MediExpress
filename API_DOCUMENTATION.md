# API Documentation

Base URL: `https://your-api.vercel.app/api`

## Authentication

All authenticated endpoints require JWT token in header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register User
```http
POST /auth/register
```

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+212600000000",
  "password": "password123",
  "role": "patient"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+212600000000",
      "role": "patient",
      "isVerified": false
    }
  }
}
```

#### Login
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123",
  "fcmToken": "firebase_token_here"
}
```

**Response:** Same as register

---

### Prescriptions

#### Upload Prescription
```http
POST /prescriptions/upload
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "imageUrl": "https://cloudinary.com/image.jpg",
  "address": "123 Main St, Casablanca",
  "coordinates": [-7.6163, 33.5731]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Prescription uploaded successfully",
  "data": {
    "prescription": {
      "id": "507f1f77bcf86cd799439011",
      "imageUrl": "https://cloudinary.com/image.jpg",
      "status": "pending",
      "nearbyPharmaciesCount": 12
    }
  }
}
```

#### Get Prescription Details
```http
GET /prescriptions/:id
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "prescription": {
      "id": "507f1f77bcf86cd799439011",
      "imageUrl": "https://cloudinary.com/image.jpg",
      "status": "quoted",
      "deliveryAddress": {
        "address": "123 Main St",
        "coordinates": [-7.6163, 33.5731]
      },
      "quotes": [
        {
          "pharmacyName": "City Pharmacy",
          "totalAmount": 120,
          "items": [...]
        }
      ]
    }
  }
}
```

---

### Pharmacy

#### Get Prescription Requests
```http
GET /pharmacy/requests
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "prescriptions": [
      {
        "id": "507f1f77bcf86cd799439011",
        "imageUrl": "https://cloudinary.com/image.jpg",
        "patientName": "John Doe",
        "patientPhone": "+212600000000",
        "deliveryAddress": "123 Main St",
        "distance": 2.5,
        "createdAt": "2024-03-08T10:00:00Z",
        "expiresAt": "2024-03-09T10:00:00Z"
      }
    ]
  }
}
```

#### Send Quote
```http
POST /pharmacy/send-quote
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "prescriptionId": "507f1f77bcf86cd799439011",
  "items": [
    {
      "medicineName": "Paracetamol 500mg",
      "quantity": 2,
      "unitPrice": 10,
      "totalPrice": 20
    },
    {
      "medicineName": "Amoxicillin 250mg",
      "quantity": 1,
      "unitPrice": 45,
      "totalPrice": 45
    }
  ],
  "deliveryFee": 10
}
```

**Response:**
```json
{
  "success": true,
  "message": "Quote sent successfully",
  "data": {
    "quote": {
      "id": "507f1f77bcf86cd799439012",
      "items": [...],
      "subtotal": 65,
      "deliveryFee": 10,
      "totalAmount": 75,
      "expiresAt": "2024-03-08T10:30:00Z"
    }
  }
}
```

---

### Orders

#### Confirm Order
```http
POST /orders/confirm
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "quoteId": "507f1f77bcf86cd799439012",
  "paymentMethod": "cash"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order confirmed successfully",
  "data": {
    "order": {
      "id": "507f1f77bcf86cd799439013",
      "orderNumber": "ORD-20240308-001",
      "status": "confirmed",
      "totalAmount": 75,
      "paymentMethod": "cash",
      "estimatedDeliveryTime": "2024-03-08T11:30:00Z"
    }
  }
}
```

#### Track Order
```http
GET /orders/:orderId/track
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "order": {
      "orderNumber": "ORD-20240308-001",
      "status": "in_transit",
      "rider": {
        "name": "Ahmed",
        "phone": "+212600000001",
        "currentLocation": [-7.6163, 33.5731]
      },
      "pharmacy": {
        "name": "City Pharmacy",
        "location": [-7.6200, 33.5800]
      },
      "deliveryAddress": {
        "address": "123 Main St",
        "location": [-7.6163, 33.5731]
      }
    }
  }
}
```

#### Get Order History
```http
GET /orders/history
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "507f1f77bcf86cd799439013",
        "orderNumber": "ORD-20240308-001",
        "pharmacyName": "City Pharmacy",
        "totalAmount": 75,
        "status": "delivered",
        "createdAt": "2024-03-08T10:00:00Z",
        "deliveredAt": "2024-03-08T11:45:00Z"
      }
    ]
  }
}
```

---

### Rider

#### Get Nearby Deliveries
```http
GET /rider/nearby-deliveries
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "deliveries": [
      {
        "orderId": "507f1f77bcf86cd799439013",
        "orderNumber": "ORD-20240308-001",
        "pickupAddress": "City Pharmacy, Main St",
        "deliveryAddress": "123 Main St",
        "distance": 3.2,
        "deliveryFee": 10
      }
    ]
  }
}
```

#### Accept Delivery
```http
POST /rider/accept-delivery
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "orderId": "507f1f77bcf86cd799439013"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Delivery accepted",
  "data": {
    "order": {
      "orderNumber": "ORD-20240308-001",
      "pickupLocation": [-7.6200, 33.5800],
      "deliveryLocation": [-7.6163, 33.5731]
    }
  }
}
```

#### Update Delivery Status
```http
PUT /rider/update-status
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "orderId": "507f1f77bcf86cd799439013",
  "status": "picked_up"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Status updated successfully"
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": {}
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user

## Webhooks

### Order Status Update
```json
{
  "event": "order.status_updated",
  "data": {
    "orderId": "507f1f77bcf86cd799439013",
    "status": "delivered",
    "timestamp": "2024-03-08T11:45:00Z"
  }
}
```
