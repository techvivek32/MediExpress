import 'package:flutter/material.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/widgets/primary_button.dart';
import '../../../core/widgets/input_field.dart';

class AddressSelectionScreen extends StatefulWidget {
  const AddressSelectionScreen({super.key});

  @override
  State<AddressSelectionScreen> createState() => _AddressSelectionScreenState();
}

class _AddressSelectionScreenState extends State<AddressSelectionScreen> {
  final _formKey = GlobalKey<FormState>();
  final _addressController = TextEditingController();
  final _cityController = TextEditingController();
  final _phoneController = TextEditingController();
  final _notesController = TextEditingController();

  @override
  void dispose() {
    _addressController.dispose();
    _cityController.dispose();
    _phoneController.dispose();
    _notesController.dispose();
    super.dispose();
  }

  void _confirmAddress() {
    if (_formKey.currentState!.validate()) {
      final address = {
        'address': _addressController.text,
        'city': _cityController.text,
        'phone': _phoneController.text,
        'notes': _notesController.text,
      };
      Navigator.pop(context, address);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Delivery Address'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(AppTheme.spacing16),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Where should we deliver?',
                style: Theme.of(context).textTheme.displaySmall,
              ),
              const SizedBox(height: AppTheme.spacing8),
              Text(
                'Please provide your delivery address',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              const SizedBox(height: AppTheme.spacing32),
              InputField(
                controller: _addressController,
                label: 'Street Address',
                hint: 'Enter your street address',
                prefixIcon: const Icon(Icons.location_on),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your address';
                  }
                  return null;
                },
              ),
              const SizedBox(height: AppTheme.spacing16),
              InputField(
                controller: _cityController,
                label: 'City',
                hint: 'Enter your city',
                prefixIcon: const Icon(Icons.location_city),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your city';
                  }
                  return null;
                },
              ),
              const SizedBox(height: AppTheme.spacing16),
              InputField(
                controller: _phoneController,
                label: 'Phone Number',
                hint: '+212 600 000 000',
                prefixIcon: const Icon(Icons.phone),
                keyboardType: TextInputType.phone,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your phone number';
                  }
                  return null;
                },
              ),
              const SizedBox(height: AppTheme.spacing16),
              InputField(
                controller: _notesController,
                label: 'Delivery Notes (Optional)',
                hint: 'Any special instructions',
                prefixIcon: const Icon(Icons.note),
                maxLines: 3,
              ),
              const SizedBox(height: AppTheme.spacing32),
              PrimaryButton(
                text: 'Confirm Address',
                onPressed: _confirmAddress,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
