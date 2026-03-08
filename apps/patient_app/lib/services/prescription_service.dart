import '../models/prescription_model.dart';
import 'api_service.dart';

class PrescriptionService {
  static Future<PrescriptionResult> uploadPrescription({
    required String imageUrl,
    required String address,
    required List<double> coordinates,
  }) async {
    try {
      final response = await ApiService.post('/prescriptions/upload', {
        'imageUrl': imageUrl,
        'address': address,
        'coordinates': coordinates,
      });

      if (response.success) {
        final prescription = Prescription.fromJson(response.data['prescription']);
        return PrescriptionResult(success: true, prescription: prescription);
      } else {
        return PrescriptionResult(success: false, message: response.message);
      }
    } catch (e) {
      return PrescriptionResult(
        success: false,
        message: 'Failed to upload prescription',
      );
    }
  }

  static Future<PrescriptionResult> getPrescriptionDetails(String id) async {
    try {
      final response = await ApiService.get('/prescriptions/$id');

      if (response.success) {
        final prescription = Prescription.fromJson(response.data['prescription']);
        return PrescriptionResult(success: true, prescription: prescription);
      } else {
        return PrescriptionResult(success: false, message: response.message);
      }
    } catch (e) {
      return PrescriptionResult(
        success: false,
        message: 'Failed to fetch prescription',
      );
    }
  }

  static Future<List<Prescription>> getPrescriptionHistory() async {
    try {
      final response = await ApiService.get('/prescriptions/history');

      if (response.success) {
        final List<dynamic> data = response.data['prescriptions'];
        return data.map((json) => Prescription.fromJson(json)).toList();
      }
    } catch (e) {
      return [];
    }
    return [];
  }
}

class PrescriptionResult {
  final bool success;
  final String? message;
  final Prescription? prescription;

  PrescriptionResult({
    required this.success,
    this.message,
    this.prescription,
  });
}
