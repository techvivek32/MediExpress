import 'package:flutter/material.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/widgets/app_card.dart';
import '../../../core/widgets/primary_button.dart';

class PrescriptionDetailScreen extends StatelessWidget {
  final dynamic prescription;

  const PrescriptionDetailScreen({super.key, required this.prescription});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Prescription Details'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(AppTheme.spacing16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            AppCard(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(AppTheme.radiusLarge),
                child: Image.network(
                  prescription.imageUrl ?? '',
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) {
                    return Container(
                      height: 300,
                      color: AppTheme.background,
                      child: const Center(
                        child: Icon(Icons.image, size: 64, color: AppTheme.textHint),
                      ),
                    );
                  },
                ),
              ),
            ),
            const SizedBox(height: AppTheme.spacing24),
            _buildInfoCard(context),
            const SizedBox(height: AppTheme.spacing24),
            PrimaryButton(
              text: 'Create Quote',
              onPressed: () {
                Navigator.pushNamed(
                  context,
                  '/quote-builder',
                  arguments: prescription,
                );
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoCard(BuildContext context) {
    return AppCard(
      child: Padding(
        padding: const EdgeInsets.all(AppTheme.spacing16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Patient Information',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: AppTheme.spacing16),
            _buildInfoRow(Icons.person, 'Name', prescription.patientName ?? 'N/A'),
            _buildInfoRow(Icons.phone, 'Phone', prescription.patientPhone ?? 'N/A'),
            _buildInfoRow(Icons.location_on, 'Address', prescription.deliveryAddress ?? 'N/A'),
            _buildInfoRow(Icons.straighten, 'Distance', '${prescription.distance ?? 0} km'),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(IconData icon, String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppTheme.spacing12),
      child: Row(
        children: [
          Icon(icon, size: 20, color: AppTheme.textSecondary),
          const SizedBox(width: AppTheme.spacing8),
          Text('$label: ', style: const TextStyle(fontWeight: FontWeight.w500)),
          Expanded(child: Text(value)),
        ],
      ),
    );
  }
}
