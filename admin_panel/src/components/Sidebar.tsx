'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/' },
    { name: 'Orders', icon: '📦', path: '/orders' },
    { name: 'Patients', icon: '👥', path: '/patients' },
    { name: 'Pharmacies', icon: '🏥', path: '/pharmacies' },
    { name: 'Riders', icon: '🏍️', path: '/riders' },
    { name: 'Prescriptions', icon: '📋', path: '/prescriptions' },
    { name: 'Analytics', icon: '📈', path: '/analytics' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-white shadow-lg transition-all duration-300 overflow-hidden`}
    >
      <div className="flex items-center justify-center h-16 border-b">
        <div className="flex items-center space-x-2">
          <span className="text-3xl">💊</span>
          <span className="text-xl font-bold text-primary-600">OrdoGo</span>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors ${
              pathname === item.path ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600' : ''
            }`}
          >
            <span className="text-2xl mr-3">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
