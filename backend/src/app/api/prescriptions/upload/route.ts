import { NextRequest } from 'next/server';
import connectDB from '@/lib/mongodb';
import Prescription from '@/models/Prescription';
import Pharmacy from '@/models/Pharmacy';
import Patient from '@/models/Patient';
import { authenticateRequest } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse } from '@/lib/response';
import { sendNotificationToPharmacies } from '@/services/notification';

export async function POST(request: NextRequest) {
  try {
    const auth = await authenticateRequest(request);
    if (!auth || auth.role !== 'patient') {
      return unauthorizedResponse();
    }

    await connectDB();

    const body = await request.json();
    const { imageUrl, address, coordinates } = body;

    if (!imageUrl || !address || !coordinates) {
      return errorResponse('Image, address and coordinates are required');
    }

    // Get patient
    const patient = await Patient.findOne({ userId: auth.userId });
    if (!patient) {
      return errorResponse('Patient profile not found', 404);
    }

    // Find nearby pharmacies within 5km
    const nearbyPharmacies = await Pharmacy.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: coordinates, // [longitude, latitude]
          },
          $maxDistance: 5000, // 5km in meters
        },
      },
      isOpen: true,
    }).limit(20);

    if (nearbyPharmacies.length === 0) {
      return errorResponse('No pharmacies found nearby', 404);
    }

    // Create prescription
    const prescription = await Prescription.create({
      patientId: patient._id,
      imageUrl,
      deliveryAddress: {
        address,
        location: {
          type: 'Point',
          coordinates,
        },
      },
      nearbyPharmacies: nearbyPharmacies.map((p) => p._id),
      status: 'pending',
    });

    // Send notifications to nearby pharmacies
    await sendNotificationToPharmacies(
      nearbyPharmacies.map((p) => p.userId.toString()),
      'New Prescription Request',
      'A patient nearby needs medicine delivery',
      {
        prescriptionId: prescription._id.toString(),
        type: 'prescription_request',
      }
    );

    return successResponse(
      {
        prescription: {
          id: prescription._id,
          imageUrl: prescription.imageUrl,
          status: prescription.status,
          nearbyPharmaciesCount: nearbyPharmacies.length,
        },
      },
      'Prescription uploaded successfully',
      201
    );
  } catch (error: any) {
    console.error('Upload prescription error:', error);
    return errorResponse('Failed to upload prescription', 500);
  }
}
