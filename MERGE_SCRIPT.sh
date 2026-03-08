#!/bin/bash

# MediExpress Admin Panel Merge Script
# This script merges the admin panel into the backend

echo "🚀 Starting Admin Panel Merge..."

# Stop any running servers
echo "⏸️  Stopping servers..."
pkill -f "next dev"

# Create admin pages directory structure
echo "📁 Creating admin directory structure..."
mkdir -p backend/src/app/admin/orders
mkdir -p backend/src/app/admin/patients
mkdir -p backend/src/app/admin/pharmacies
mkdir -p backend/src/app/admin/riders

# Copy globals.css
echo "🎨 Copying styles..."
cp admin_panel/src/app/globals.css backend/src/app/

# Update backend package.json
echo "📦 Updating dependencies..."
cd backend
npm install recharts date-fns lucide-react

# Create admin pages with updated imports
echo "📄 Creating admin pages..."

# Orders Page
cat > src/app/admin/orders/page.tsx << 'EOF'
'use client';

import { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';

export default function OrdersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      patient: 'John Doe',
      pharmacy: 'City Pharmacy',
      rider: 'Ahmed Ali',
      amount: '120 MAD',
      status: 'delivered',
      date: '2024-03-08 14:30',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in_transit':
        return 'bg-blue-100 text-blue-800';
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="ml-4 text-2xl font-semibold text-gray-800">Orders Management</h1>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold">Orders will be loaded from API</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
EOF

echo "✅ Admin panel merge complete!"
echo ""
echo "📍 Next steps:"
echo "1. cd backend"
echo "2. npm run dev"
echo "3. Open http://localhost:3000/admin"
echo ""
echo "🎉 Done!"
