import AdminSidebar from '@/components/admin/Sidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';
import { Toaster } from 'sonner';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Sidebar */}
            <AdminSidebar />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Topbar */}
                <AdminTopbar />

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {children}
                </main>
            </div>
            <Toaster richColors position="top-right" />
        </div>
    );
}
