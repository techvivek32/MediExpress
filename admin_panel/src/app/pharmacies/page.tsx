'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';

const API_BASE_URL = 'https://medi-express-zvo4.vercel.app/api';

export default function PharmaciesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [pharmacies, setPharmacies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    avgRating: 0,
    pending: 0
  });

  useEffect(() => {
    fetchPharmacies();
  }, [search]);

  const fetchPharmacies = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/admin/pharmacies?search=${search}`);
      const data = await response.json();
      
      if (data.success) {
        setPharmacies(data.data.pharmacies);
        setStats({
          total: data.data.pharmacies.length,
          active: data.data.pharmacies.filter((p: any) => p.isActive).length,
          avgRating: data.data.pharmacies.length > 0 
            ? data.data.pharmacies.reduce((acc: number, p: any) => acc + (p.rating || 0), 0) / data.data.pharmacies.length 
            : 0,
          pending: data.data.pharmacies.filter((p: any) => !p.isVerified).length
        });
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch pharmacies');
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/patients/${id}/toggle-status`, {
        method: 'POST'
      });
      const data = await response.json();
      if (data.success) {
        fetchPharmacies();
      }
    } catch (err) {
      console.error('Failed to toggle status');
    }
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
              <h1 className="ml-4 text-2xl font-semibold text-gray-800">Pharmacies Management</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Pharmacies</p>
                  <h3 className="text-2xl font-bold text-gray-800">{stats.total}</h3>
                </div>
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Now</p>
                  <h3 className="text-2xl font-bold text-gray-800">{stats.active}</h3>
                </div>
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Rating</p>
                  <h3 className="text-2xl font-bold text-gray-800">{stats.avgRating.toFixed(1)}</h3>
                </div>
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending Approval</p>
                  <h3 className="text-2xl font-bold text-gray-800">{stats.pending}</h3>
                </div>
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏳</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search pharmacies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-96 text-gray-800"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Pharmacy Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">License</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Rating</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Total Orders</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={6} className="text-center py-10 text-gray-500">Loading pharmacies...</td></tr>
                  ) : error ? (
                    <tr><td colSpan={6} className="text-center py-10 text-red-500">{error}</td></tr>
                  ) : pharmacies.length === 0 ? (
                    <tr><td colSpan={6} className="text-center py-10 text-gray-500">No pharmacies found.</td></tr>
                  ) : pharmacies.map((pharmacy) => (
                    <tr key={pharmacy.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">{pharmacy.name}</span>
                          <span className="text-xs text-gray-500">{pharmacy.address}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{pharmacy.licenseNumber}</td>
                      <td className="py-4 px-6 text-gray-600">
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          {pharmacy.rating.toFixed(1)}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-800 font-medium">{pharmacy.totalOrders}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            pharmacy.isActive
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {pharmacy.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button 
                          onClick={() => toggleStatus(pharmacy.id)}
                          className={`text-sm font-medium ${
                            pharmacy.isActive ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'
                          }`}
                        >
                          {pharmacy.isActive ? 'Deactivate' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
