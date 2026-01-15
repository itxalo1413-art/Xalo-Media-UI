import { env } from "@/lib/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { Toaster } from "sonner";
import Popup from "@/components/Popup";

async function getSettings() {
    try {
        const res = await fetch(`${env.API_URL}/api/v1/settings`, {
            next: { revalidate: 60 }
        });
        const data = await res.json();
        return data.success ? data.data : null;
    } catch (error) {
        return null;
    }
}

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const settings = await getSettings();

    return (
        <>
            <Navbar />
            <main className="flex-grow lg:pt-16">
                {children}
            </main>
            <Footer />
            <FloatingCTA />
            {settings && (
                <Popup 
                    active={settings.popupActive}
                    imageUrl={settings.popupImageUrl}
                    linkUrl={settings.popupLinkUrl}
                />
            )}
            <Toaster richColors position="bottom-right" />
        </>
    );
}
