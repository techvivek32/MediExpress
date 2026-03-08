# Complete Implementation Guide

## ✅ What's Already Done

### Backend (100% Complete):
- ✅ Profile API (GET, PUT)
- ✅ Address CRUD APIs (GET, POST, PUT, DELETE)
- ✅ Admin patient list with pagination
- ✅ Admin patient details
- ✅ Admin toggle patient status
- ✅ User model updated with profileImage

### Flutter Services (100% Complete):
- ✅ `profile_service.dart` - Profile management
- ✅ `address_service.dart` - Address CRUD operations

## 🔄 What Needs to Be Done

### 1. Update Edit Profile Screen

File: `apps/patient_app/lib/features/profile/screens/edit_profile_screen.dart`

**Changes needed:**
```dart
// Add at top:
import '../../services/profile_service.dart';
import '../../services/auth_service.dart';

// In _handleSave method, replace with:
Future<void> _handleSave() async {
  if (!_formKey.currentState!.validate()) return;

  setState(() => _isLoading = true);

  try {
    final result = await ProfileService.updateProfile(
      fullName: _fullNameController.text.trim(),
      phone: _phoneController.text.trim(),
      profileImage: _profileImageBase64, // if you implement image upload
    );

    setState(() => _isLoading = false);

    if (!mounted) return;

    if (result.success) {
      // Update local user data
      await AuthService.updateLocalUser(result.user!);
      
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(result.message ?? 'Profile updated')),
      );
      Navigator.pop(context, true);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(result.message ?? 'Failed to update')),
      );
    }
  } catch (e) {
    setState(() => _isLoading = false);
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Failed to update profile')),
      );
    }
  }
}
```

### 2. Update Add Address Screen

File: `apps/patient_app/lib/features/profile/screens/add_address_screen.dart`

**Changes needed:**
```dart
// Add at top:
import '../../services/address_service.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

// Add map widget in build method:
Container(
  height: 200,
  child: GoogleMap(
    initialCameraPosition: CameraPosition(
      target: LatLng(_latitude ?? 0, _longitude ?? 0),
      zoom: 15,
    ),
    markers: {
      if (_latitude != null && _longitude != null)
        Marker(
          markerId: MarkerId('selected'),
          position: LatLng(_latitude!, _longitude!),
        ),
    },
    onTap: (LatLng position) {
      setState(() {
        _latitude = position.latitude;
        _longitude = position.longitude;
      });
    },
  ),
),

// In _handleConfirm method:
Future<void> _handleConfirm() async {
  if (!_formKey.currentState!.validate()) return;
  if (_latitude == null || _longitude == null) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Please select location on map')),
    );
    return;
  }

  setState(() => _isLoading = true);

  try {
    final result = await AddressService.addAddress(
      label: _labelController.text.trim(),
      address: _addressController.text.trim(),
      city: _cityController.text.trim(),
      latitude: _latitude!,
      longitude: _longitude!,
      isDefault: false,
    );

    setState(() => _isLoading = false);

    if (!mounted) return;

    if (result.success) {
      Navigator.pop(context, true);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(result.message ?? 'Failed to add address')),
      );
    }
  } catch (e) {
    setState(() => _isLoading = false);
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Failed to add address')),
      );
    }
  }
}
```

### 3. Update Saved Addresses Screen

File: `apps/patient_app/lib/features/profile/screens/saved_addresses_screen.dart`

**Changes needed:**
```dart
// Add at top:
import '../../services/address_service.dart';

// Add state variables:
List<Map<String, dynamic>> _addresses = [];
bool _isLoading = true;

// Add initState:
@override
void initState() {
  super.initState();
  _loadAddresses();
}

Future<void> _loadAddresses() async {
  setState(() => _isLoading = true);
  
  final result = await AddressService.getAddresses();
  
  setState(() {
    _isLoading = false;
    if (result.success) {
      _addresses = result.addresses ?? [];
    }
  });
}

// Add delete method:
Future<void> _deleteAddress(String id) async {
  final result = await AddressService.deleteAddress(id);
  if (result.success) {
    _loadAddresses();
  }
}
```

### 4. Create Address Selection Screen

File: `apps/patient_app/lib/features/prescription/screens/address_selection_screen.dart`

**Create new file:**
```dart
import 'package:flutter/material.dart';
import '../../services/address_service.dart';
import '../../profile/screens/add_address_screen.dart';

class AddressSelectionScreen extends StatefulWidget {
  const AddressSelectionScreen({super.key});

  @override
  State<AddressSelectionScreen> createState() => _AddressSelectionScreenState();
}

class _AddressSelectionScreenState extends State<AddressSelectionScreen> {
  List<Map<String, dynamic>> _addresses = [];
  bool _isLoading = true;
  String? _selectedAddressId;

  @override
  void initState() {
    super.initState();
    _loadAddresses();
  }

  Future<void> _loadAddresses() async {
    setState(() => _isLoading = true);
    
    final result = await AddressService.getAddresses();
    
    setState(() {
      _isLoading = false;
      if (result.success) {
        _addresses = result.addresses ?? [];
        
        // If no addresses, redirect to add address
        if (_addresses.isEmpty) {
          WidgetsBinding.instance.addPostFrameCallback((_) {
            _navigateToAddAddress();
          });
        }
      }
    });
  }

  Future<void> _navigateToAddAddress() async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const AddAddressScreen()),
    );
    
    if (result == true) {
      _loadAddresses();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Select Delivery Address'),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _addresses.isEmpty
              ? Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('No addresses saved'),
                      const SizedBox(height: 16),
                      ElevatedButton(
                        onPressed: _navigateToAddAddress,
                        child: const Text('Add Address'),
                      ),
                    ],
                  ),
                )
              : ListView.builder(
                  itemCount: _addresses.length,
                  itemBuilder: (context, index) {
                    final address = _addresses[index];
                    return RadioListTile(
                      title: Text(address['label'] ?? ''),
                      subtitle: Text(address['address'] ?? ''),
                      value: address['_id'],
                      groupValue: _selectedAddressId,
                      onChanged: (value) {
                        setState(() => _selectedAddressId = value as String?);
                      },
                    );
                  },
                ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.all(16),
        child: ElevatedButton(
          onPressed: _selectedAddressId == null
              ? null
              : () {
                  final selected = _addresses.firstWhere(
                    (addr) => addr['_id'] == _selectedAddressId,
                  );
                  Navigator.pop(context, selected);
                },
          child: const Text('Confirm Address'),
        ),
      ),
    );
  }
}
```

### 5. Update Admin Panel Patients Page

File: `backend/src/app/admin/patients/page.tsx`

**Replace entire file with:**
```typescript
'use client';

import { useState, useEffect } from 'react';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadPatients();
  }, [page]);

  const loadPatients = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/patients?page=${page}&limit=10`);
      const data = await response.json();
      
      if (data.success) {
        setPatients(data.data.patients);
        setTotalPages(data.data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Failed to load patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const viewDetails = async (patientId: string) => {
    try {
      const response = await fetch(`/api/admin/patients/${patientId}`);
      const data = await response.json();
      
      if (data.success) {
        setSelectedPatient(data.data.patient);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Failed to load patient details:', error);
    }
  };

  const toggleStatus = async (patientId: string) => {
    try {
      const response = await fetch(`/api/admin/patients/${patientId}/toggle-status`, {
        method: 'PUT',
      });
      const data = await response.json();
      
      if (data.success) {
        loadPatients();
      }
    } catch (error) {
      console.error('Failed to toggle status:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Patients Management</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient: any) => (
                <tr key={patient.id}>
                  <td>{patient.fullName}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.totalOrders}</td>
                  <td>
                    <span className={patient.isActive ? 'text-green-600' : 'text-red-600'}>
                      {patient.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => viewDetails(patient.id)}>View</button>
                    <button onClick={() => toggleStatus(patient.id)}>
                      {patient.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex justify-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Patient Details Modal */}
      {showModal && selectedPatient && (
        <div className="modal">
          <h2>{selectedPatient.fullName}</h2>
          <p>Email: {selectedPatient.email}</p>
          <p>Phone: {selectedPatient.phone}</p>
          <p>Total Orders: {selectedPatient.totalOrders}</p>
          <h3>Addresses:</h3>
          <ul>
            {selectedPatient.addresses.map((addr: any, i: number) => (
              <li key={i}>{addr.label}: {addr.address}</li>
            ))}
          </ul>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
```

## Summary of Changes

### Backend: ✅ COMPLETE
- 9 new API endpoints created
- User model updated
- All connected to MongoDB

### Flutter: 🔄 NEEDS UPDATES
- 2 services created (profile, address)
- 5 screens need updates (see above)
- Add google_maps_flutter dependency

### Admin: 🔄 NEEDS UPDATES
- 1 page needs complete rewrite (see above)

## Next Steps

1. **Update Flutter screens** using the code above
2. **Update admin panel** using the code above
3. **Add google_maps_flutter** to pubspec.yaml
4. **Test locally**
5. **Build new APK**
6. **Push to GitHub**
7. **Vercel will auto-deploy**

## Testing Checklist

- [ ] Profile update saves to database
- [ ] Address add/edit/delete works
- [ ] Map shows in address screen
- [ ] Address selection works in prescription flow
- [ ] Admin panel shows paginated patients
- [ ] Admin can view patient details
- [ ] Admin can activate/deactivate patients

## Time Estimate

- Flutter updates: 30-45 minutes
- Admin panel: 15-20 minutes
- Testing: 15 minutes
- **Total: ~1-1.5 hours**
