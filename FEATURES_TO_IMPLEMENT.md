# Features to Implement

## Issues Found:
1. ❌ Profile image upload not working
2. ❌ Profile data not saving to database  
3. ❌ Address not saving
4. ❌ No map in address screen
5. ❌ No address selection after prescription upload
6. ❌ Admin panel missing patient details view
7. ❌ Admin panel missing activate/deactivate button
8. ❌ Admin panel missing pagination

## Solution Plan:

### Backend APIs Needed:
1. `PUT /api/patients/profile` - Update profile (name, phone, image)
2. `POST /api/patients/addresses` - Add new address
3. `GET /api/patients/addresses` - Get all addresses
4. `PUT /api/patients/addresses/:id` - Update address
5. `DELETE /api/patients/addresses/:id` - Delete address
6. `GET /api/admin/patients` - Get patients with pagination
7. `GET /api/admin/patients/:id` - Get patient details
8. `PUT /api/admin/patients/:id/status` - Activate/deactivate patient
9. `POST /api/upload/profile-image` - Upload profile image

### Flutter App Changes:
1. Fix edit profile screen to save to backend
2. Fix add address screen to save to backend
3. Add map view to address screen
4. Add address selection in prescription upload flow
5. Connect all screens to real APIs

### Admin Panel Changes:
1. Add pagination to patients list
2. Add "View Details" modal/page
3. Add "Activate/Deactivate" button
4. Show all patient info (addresses, orders, etc.)

## Priority Order:
1. Create backend APIs (HIGH)
2. Fix profile and address saving (HIGH)
3. Add map to address screen (MEDIUM)
4. Update admin panel (MEDIUM)
5. Add address selection flow (LOW)

## Estimated Time:
- Backend APIs: 30 minutes
- Flutter fixes: 45 minutes
- Admin panel updates: 30 minutes
- Testing: 15 minutes
**Total: ~2 hours**

## Note:
This is a significant amount of work. I'll implement the critical features first:
1. Profile and address APIs
2. Connect Flutter app to APIs
3. Basic admin panel improvements

Then you can test and request additional features.
