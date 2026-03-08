import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'MediExpress Admin',
  description: 'Admin Dashboard for MediExpress Platform',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
