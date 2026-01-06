import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { Toaster } from "sonner";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex-grow lg:pt-16">
                {children}
            </main>
            <Footer />
            <FloatingCTA />
            <Toaster richColors position="bottom-right" />
        </>
    );
}
