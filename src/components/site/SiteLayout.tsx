import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { siteConfig, waLink } from "@/config/site";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/** Public site shell — navbar + page + footer + floating WhatsApp button. */
export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
        className="fixed bottom-5 right-5 z-40 inline-flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
