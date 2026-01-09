'use client';
import AdminSidebar from '@/components/admin/Sidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const token = Cookies.get('accessToken');
      if (!token) {
        router.push('/admin/login');
      } else {
        try {
          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          const expirationTime = decodedToken.exp * 1000;

          if (expirationTime < Date.now()) {
            Cookies.remove('accessToken');
            router.push('/admin/login');
          } else {
            setIsAuthenticated(true);
          }
        } catch (error) {
          Cookies.remove('accessToken');
          router.push('/admin/login');
        }
      }
    };

    checkToken();
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className='flex min-h-screen bg-gray-50/50'>
      {/* Sidebar */}
      <AdminSidebar />

      <div className='flex-1 flex flex-col min-w-0 overflow-hidden'>
        {/* Topbar */}
        <AdminTopbar />

        {/* Content Area */}
        <main className='flex-1 overflow-y-auto p-8 custom-scrollbar'>
          {children}
        </main>
      </div>
      <Toaster richColors position='top-right' />
    </div>
  );
}
