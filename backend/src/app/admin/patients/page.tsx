'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/admin/Sidebar';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  status: string;
  joinedDate: string;
}

export default function PatientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('/api/patients');
      const data = await response.json() as any;
      if (data.success) {
        setPatients(data.data.patients);
      }
    } catch (error) {
      console.error('Failed to fetch patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

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
              <h1 className="ml-4 text-2xl font-semibold text-gray-800">Patients Management</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Patients</p>
                  <h3 className="text-2xl font-bold text-gray-800">{patients.length}</h3>
                </div>
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Patients</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {patients.filter(p => p.status === 'active').length}
                  </h3>
                </div>
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">New This Month</p>
                  <h3 className="text-2xl font-bold text-gray-800">156</h3>
                </div>
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🆕</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Orders</p>
                  <h3 className="text-2xl font-bold text-gray-800">8.5</h3>
                </div>
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search patients..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-96"
                />
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Add Patient
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Email</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Phone</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Total Orders</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Joined</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-gray-500">
                        Loading patients...
                      </td>
                    </tr>
                  ) : filteredPatients.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-gray-500">
                        No patients found
                      </td>
                    </tr>
                  ) : (
                    filteredPatients.map((patient) => (
                    <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold mr-3">
                            {patient.name.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-800">{patient.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{patient.email}</td>
                      <td className="py-4 px-6 text-gray-600">{patient.phone}</td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-800">{patient.totalOrders}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            patient.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{patient.joinedDate}</td>
                      <td className="py-4 px-6">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mr-3">
                          View
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Deactivate
                        </button>
                      </td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
