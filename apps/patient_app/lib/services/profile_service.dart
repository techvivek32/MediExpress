import 'api_service.dart';

class ProfileService {
  static Future<ProfileResult> getProfile() async {
    try {
      final response = await ApiService.get('/patients/profile');

      if (response.success) {
        return ProfileResult(
          success: true,
          user: response.data['user'],
        );
      } else {
        return ProfileResult(success: false, message: response.message);
      }
    } catch (e) {
      return ProfileResult(success: false, message: 'Failed to get profile');
    }
  }

  static Future<ProfileResult> updateProfile({
    required String fullName,
    required String phone,
    String? profileImage,
  }) async {
    try {
      final response = await ApiService.put(
        '/patients/profile',
        {
          'fullName': fullName,
          'phone': phone,
          if (profileImage != null) 'profileImage': profileImage,
        },
      );

      if (response.success) {
        return ProfileResult(
          success: true,
          user: response.data['user'],
          message: response.message,
        );
      } else {
        return ProfileResult(success: false, message: response.message);
      }
    } catch (e) {
      return ProfileResult(success: false, message: 'Failed to update profile');
    }
  }
}

class ProfileResult {
  final bool success;
  final String? message;
  final Map<String, dynamic>? user;

  ProfileResult({
    required this.success,
    this.message,
    this.user,
  });
}
