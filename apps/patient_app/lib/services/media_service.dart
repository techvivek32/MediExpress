import 'dart:io';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../core/constants/app_constants.dart';

class MediaService {
  static Future<MediaUploadResult> uploadImage(File imageFile) async {
    return _uploadFile(imageFile, 'image');
  }

  static Future<MediaUploadResult> uploadVideo(File videoFile) async {
    return _uploadFile(videoFile, 'video');
  }

  static Future<MediaUploadResult> _uploadFile(File file, String type) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString(AppConstants.tokenKey);

      if (token == null) {
        return MediaUploadResult(
          success: false,
          message: 'Authentication required',
        );
      }

      var request = http.MultipartRequest(
        'POST',
        Uri.parse('${AppConstants.baseUrl}/upload/media'),
      );

      request.headers['Authorization'] = 'Bearer $token';
      request.fields['type'] = type;
      request.files.add(await http.MultipartFile.fromPath('file', file.path));

      print('🌐 API Media Upload: ${request.url}');
      print('📤 Request Type: $type');
      print('📤 Request File: ${file.path}');

      var response = await request.send();
      var responseData = await response.stream.bytesToString();

      print('✅ Response Status: ${response.statusCode}');
      print('📥 Response Body: $responseData');

      if (response.statusCode == 200) {
        final jsonResponse = json.decode(responseData);
        return MediaUploadResult(
          success: true,
          url: jsonResponse['data']['url'],
          publicId: jsonResponse['data']['publicId'],
          resourceType: jsonResponse['data']['resourceType'],
          format: jsonResponse['data']['format'],
          width: jsonResponse['data']['width'],
          height: jsonResponse['data']['height'],
          bytes: jsonResponse['data']['bytes'],
          message: jsonResponse['message'],
        );
      } else {
        final jsonResponse = json.decode(responseData);
        return MediaUploadResult(
          success: false,
          message: jsonResponse['message'] ?? 'Upload failed',
        );
      }
    } catch (e) {
      print('❌ Upload error: $e');
      return MediaUploadResult(
        success: false,
        message: 'Failed to upload $type',
      );
    }
  }
}

class MediaUploadResult {
  final bool success;
  final String? message;
  final String? url;
  final String? publicId;
  final String? resourceType;
  final String? format;
  final int? width;
  final int? height;
  final int? bytes;

  MediaUploadResult({
    required this.success,
    this.message,
    this.url,
    this.publicId,
    this.resourceType,
    this.format,
    this.width,
    this.height,
    this.bytes,
  });
}