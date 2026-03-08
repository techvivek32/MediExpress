# Frontend Implementation Guide

## 🎨 Complete Frontend Architecture

This document describes the complete frontend implementation for the MediExpress platform.

## 📱 Flutter Apps Architecture

### Clean Architecture Structure

All three Flutter apps follow clean architecture principles:

```
lib/
├── core/
│   ├── constants/
│   │   └── app_constants.dart          # API URLs, keys, constants
│   ├── theme/
│   │   └── app_theme.dart              # Material 3 theme configuration
│   └── widgets/
│       ├── primary_button.dart         # Reusable button components
│       ├── app_card.dart               # Card components
│       ├── input_field.dart            # Form input fields
│       ├── loading_skeleton.dart       # Loading states
│       └── order_status_widget.dart    # Status badges
├── features/
│   ├── auth/
│   │   └── screens/
│   │       ├── login_screen.dart
│   │       └── signup_screen.dart
│   ├── home/
│   │   └── screens/
│   │       └── home_screen.dart
│   ├── orders/
│   │   └── screens/
│   │       ├── order_history_screen.dart
│   │       └── quote_details_screen.dart
│   └── profile/
│       └── screens/
│           └── profile_screen.dart
├── models/
│   ├── user_model.dart
│   ├── prescription_model.dart
│   ├── quote_model.dart
│   └── order_model.dart
└── services/
    ├── api_service.dart                # HTTP client
    ├── auth_service.dart               # Authentication
    ├── prescription_service.dart       # Prescription operations
    └── order_service.dart              # Order operations
```

## 🎨 Design System

### Color Palette

```dart
// Primary Colors
primary: Color(0xFF2E7D32)        // Main green
primaryLight: Color(0xFF66BB6A)   // Light green
primaryDark: Color(0xFF1B5E20)    // Dark green

// Semantic Colors
success: Color(0xFF43A047)        // Green
error: Color(0xFFE53935)          // Red
warning: Color(0xFFFFA726)        // Orange
info: Color(0xFF29B6F6)           // Blue

// Neutral Colors
background: Color(0xFFF5F7FA)     // Light gray
surface: Color(0xFFFFFFFF)        // White
textPrimary: Color(0xFF212121)    // Dark gray
textSecondary: Color(0xFF757575)  // Medium gray
```

### Spacing System (8px Grid)

```dart
spacing4: 4.0
spacing8: 8.0
spacing12: 12.0
spacing16: 16.0
spacing20: 20.0
spacing24: 24.0
spacing32: 32.0
spacing48: 48.0
```

### Border Radius

```dart
radiusSmall: 8.0
radiusMedium: 12.0
radiusLarge: 16.0
radiusXLarge: 24.0
```

## 📱 Patient App Features

### Screens Implemented

1. **Splash Screen** - App initialization with logo
2. **Login Screen** - Email/password authentication
3. **Signup Screen** - User registration with validation
4. **Home Dashboard** - Quick actions and how it works
5. **Upload Prescription** - Camera/gallery image picker
6. **Quote Details** - Medicine breakdown with accept/decline
7. **Order History** - Past orders list
8. **Profile Screen** - User settings

### Key Components

#### PrimaryButton
```dart
PrimaryButton(
  text: 'Continue',
  onPressed: () {},
  isLoading: false,
  icon: Icons.arrow_forward,
)
```

#### InputField
```dart
InputField(
  label: 'Email',
  hint: 'Enter your email',
  controller: emailController,
  prefixIcon: Icon(Icons.email_outlined),
  validator: (value) => value?.isEmpty ?? true ? 'Required' : null,
)
```

#### AppCard
```dart
AppCard(
  padding: EdgeInsets.all(16),
  onTap: () {},
  child: Column(children: [...]),
)
```

### API Integration

```dart
// Authentication
final result = await AuthService.login(email, password);
if (result.success) {
  Navigator.pushReplacementNamed(context, '/home');
}

// Upload Prescription
final result = await PrescriptionService.uploadPrescription(
  imageUrl: imageUrl,
  address: address,
  coordinates: [longitude, latitude],
);

// Get Quote Details
final result = await QuoteService.getQuoteDetails(quoteId);
```

## 🏥 Pharmacy App Features

### Screens Implemented

1. **Splash Screen**
2. **Login Screen**
3. **Dashboard** - Overview of requests and orders
4. **Prescription Requests** - List of nearby requests
5. **Prescription Viewer** - View prescription image
6. **Create Quote** - Add medicines with prices
7. **Order Preparation** - Active orders management

### Key Features

- Real-time prescription request notifications
- Medicine price builder with automatic calculations
- Order status management
- Earnings dashboard

## 🏍️ Rider App Features

### Screens Implemented

1. **Splash Screen**
2. **Login Screen**
3. **Dashboard** - Earnings and statistics
4. **Nearby Deliveries** - Available delivery requests
5. **Delivery Details** - Order information
6. **Navigation** - Google Maps integration
7. **Earnings Dashboard** - Daily/weekly earnings

### Key Features

- Online/offline toggle
- Real-time delivery requests
- Distance and fee display
- Navigation to pickup and delivery locations

## 💼 Admin Dashboard (Next.js)

### Pages Implemented

1. **Dashboard** (`/`)
   - Statistics cards
   - Revenue chart
   - Recent orders table

2. **Patients** (`/patients`)
   - Patient list with search
   - Total orders per patient
   - Status management
   - User verification

3. **Orders** (`/orders`)
   - Order list with filters
   - Status-based filtering
   - Order details view
   - Export functionality

4. **Pharmacies** (`/pharmacies`)
   - Pharmacy management
   - License verification
   - Performance metrics

5. **Riders** (`/riders`)
   - Rider management
   - Delivery statistics
   - Earnings tracking

### Components

#### Sidebar
```tsx
<Sidebar isOpen={sidebarOpen} />
```

#### DashboardStats
```tsx
<DashboardStats />
// Displays: Total Orders, Active Riders, Revenue, Pharmacies
```

#### RevenueChart
```tsx
<RevenueChart />
// Monthly revenue visualization
```

#### RecentOrders
```tsx
<RecentOrders />
// Latest orders table
```

## 🔌 API Integration

### API Service Configuration

```dart
// apps/patient_app/lib/services/api_service.dart

class ApiService {
  static String get baseUrl {
    if (Platform.isAndroid) {
      return 'http://10.0.2.2:3001/api';  // Android emulator
    } else if (Platform.isIOS) {
      return 'http://localhost:3001/api';  // iOS simulator
    }
    return 'http://localhost:3001/api';
  }

  static Future<ApiResponse> post(String endpoint, Map<String, dynamic> data) async {
    final headers = await _getHeaders();
    final response = await http.post(
      Uri.parse('$baseUrl$endpoint'),
      headers: headers,
      body: json.encode(data),
    );
    return _handleResponse(response);
  }
}
```

### Authentication Flow

```dart
// 1. Login
final result = await AuthService.login(email, password);

// 2. Store token
SharedPreferences prefs = await SharedPreferences.getInstance();
await prefs.setString('auth_token', token);

// 3. Include in requests
headers['Authorization'] = 'Bearer $token';
```

## 🎯 State Management

### Provider Pattern (Used)

```dart
// Provider setup in main.dart
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => AuthProvider()),
    ChangeNotifierProvider(create: (_) => PrescriptionProvider()),
    ChangeNotifierProvider(create: (_) => OrderProvider()),
  ],
  child: MaterialApp(...),
)

// Usage in widgets
final authProvider = Provider.of<AuthProvider>(context);
final user = authProvider.user;
```

## 📦 Dependencies

### Patient App (pubspec.yaml)

```yaml
dependencies:
  flutter:
    sdk: flutter
  
  # UI
  google_fonts: ^6.1.0
  
  # State Management
  provider: ^6.1.1
  
  # Network
  http: ^1.1.0
  
  # Storage
  shared_preferences: ^2.2.2
  
  # Maps & Location
  google_maps_flutter: ^2.5.0
  geolocator: ^10.1.0
  
  # Image
  image_picker: ^1.0.5
  cached_network_image: ^3.3.0
  
  # Notifications
  firebase_core: ^2.24.0
  firebase_messaging: ^14.7.6
```

### Admin Panel (package.json)

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "recharts": "^2.10.0",
    "tailwindcss": "^3.4.0"
  }
}
```

## 🚀 Running the Apps

### Patient App

```bash
cd apps/patient_app
flutter pub get
flutter run
```

### Pharmacy App

```bash
cd apps/pharmacy_app
flutter pub get
flutter run
```

### Rider App

```bash
cd apps/rider_app
flutter pub get
flutter run
```

### Admin Panel

```bash
cd admin_panel
npm install
npm run dev
```

## 🎨 UI/UX Guidelines

### Card Design

```dart
Container(
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(16),
    border: Border.all(color: Colors.grey.shade200),
    boxShadow: [
      BoxShadow(
        color: Colors.black.withOpacity(0.05),
        blurRadius: 10,
        offset: Offset(0, 2),
      ),
    ],
  ),
)
```

### Button Design

```dart
ElevatedButton(
  style: ElevatedButton.styleFrom(
    backgroundColor: AppTheme.primary,
    padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(12),
    ),
  ),
)
```

### Input Field Design

```dart
InputDecoration(
  filled: true,
  fillColor: Colors.white,
  border: OutlineInputBorder(
    borderRadius: BorderRadius.circular(12),
    borderSide: BorderSide(color: Colors.grey.shade300),
  ),
  focusedBorder: OutlineInputBorder(
    borderRadius: BorderRadius.circular(12),
    borderSide: BorderSide(color: AppTheme.primary, width: 2),
  ),
)
```

## 📱 Navigation

### Flutter Navigation

```dart
// Push named route
Navigator.pushNamed(context, '/quote-details', arguments: quote);

// Replace route
Navigator.pushReplacementNamed(context, '/home');

// Pop route
Navigator.pop(context);

// Pop with result
Navigator.pop(context, result);
```

### Admin Panel Navigation

```tsx
// Next.js App Router
import Link from 'next/link';

<Link href="/patients">Patients</Link>
<Link href="/orders">Orders</Link>
```

## 🔐 Security

### Token Storage

```dart
// Save token
final prefs = await SharedPreferences.getInstance();
await prefs.setString('auth_token', token);

// Get token
final token = prefs.getString('auth_token');

// Clear token (logout)
await prefs.remove('auth_token');
```

### API Request Headers

```dart
final headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer $token',
};
```

## 🧪 Testing

### Widget Testing

```dart
testWidgets('Login button test', (WidgetTester tester) async {
  await tester.pumpWidget(MyApp());
  
  final button = find.text('Login');
  expect(button, findsOneWidget);
  
  await tester.tap(button);
  await tester.pump();
});
```

## 📈 Performance Optimization

### Image Caching

```dart
CachedNetworkImage(
  imageUrl: imageUrl,
  placeholder: (context, url) => LoadingSkeleton(),
  errorWidget: (context, url, error) => Icon(Icons.error),
)
```

### Lazy Loading

```dart
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ItemWidget(item: items[index]);
  },
)
```

## 🎯 Next Steps

1. Implement remaining screens
2. Add unit tests
3. Integrate Firebase notifications
4. Add Google Maps for tracking
5. Implement payment gateway
6. Add analytics
7. Optimize performance
8. Add error handling
9. Implement offline mode
10. Add accessibility features

## 📚 Resources

- [Flutter Documentation](https://flutter.dev/docs)
- [Material Design 3](https://m3.material.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
