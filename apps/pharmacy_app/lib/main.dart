import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'core/theme/app_theme.dart';
import 'providers/auth_provider.dart';
import 'providers/prescription_provider.dart';
import 'features/auth/screens/splash_screen.dart';
import 'features/auth/screens/login_screen.dart';
import 'features/home/screens/home_screen.dart';
import 'features/requests/screens/prescription_requests_screen.dart';
import 'features/requests/screens/prescription_detail_screen.dart';
import 'features/requests/screens/quote_builder_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => PrescriptionProvider()),
      ],
      child: MaterialApp(
        title: 'MediExpress Pharmacy',
        debugShowCheckedModeBanner: false,
        theme: AppTheme.lightTheme,
        initialRoute: '/',
        routes: {
          '/': (context) => const SplashScreen(),
          '/login': (context) => const LoginScreen(),
          '/home': (context) => const HomeScreen(),
          '/requests': (context) => const PrescriptionRequestsScreen(),
        },
        onGenerateRoute: (settings) {
          if (settings.name == '/prescription-detail') {
            final prescription = settings.arguments;
            return MaterialPageRoute(
              builder: (context) => PrescriptionDetailScreen(prescription: prescription),
            );
          }
          if (settings.name == '/quote-builder') {
            final prescription = settings.arguments;
            return MaterialPageRoute(
              builder: (context) => QuoteBuilderScreen(prescription: prescription),
            );
          }
          return null;
        },
      ),
    );
  }
}
