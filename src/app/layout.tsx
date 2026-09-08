import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMARTSGI | Smart & Reliable IPTV Subscription",
  description: "Experience premier live TV channels, sports events, movies, and international entertainment with SMARTSGI. Ultra-stable streaming infrastructure with instant activation across all your favorite devices.",
  metadataBase: new URL("https://smartsgi.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SMARTSGI | Smart & Reliable IPTV",
    description: "Stream premium live TV, sports, and entertainment with SMARTSGI. Instant activation, wide device compatibility, and 24/7 dedicated support.",
    url: "https://smartsgi.net",
    siteName: "SMARTSGI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMARTSGI | Smart & Reliable IPTV",
    description: "Stream premium live TV, sports, and entertainment with SMARTSGI. Instant activation, wide device compatibility, and 24/7 dedicated support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-[#05030B] text-[#F8FAFC] font-sans min-h-screen flex flex-col antialiased bg-grid-pattern selection:bg-[#9B3FF2] selection:text-white">
        {/* Sticky Fixed Header */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow flex flex-col">{children}</div>

        {/* Professional Footer */}
        <footer className="w-full mt-auto border-t border-white/[0.08] bg-[#080511] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] glow-purple blur-[140px] pointer-events-none opacity-20" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[200px] glow-orange blur-[140px] pointer-events-none opacity-15" />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
              
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-4">
                <Link href="/" className="inline-block">
                  <BrandLogo />
                </Link>
                <p className="text-sm text-[#A8A0B8] leading-relaxed max-w-sm">
                  SMARTSGI delivers high-definition IPTV streaming with smooth anti-freeze server technology, broad device support, and fast customer assistance.
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#FF7A00]">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                  <span>Network Systems Online · 24/7 Monitoring</span>
                </div>
              </div>

              {/* Quick Links Column */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-4 border-b border-white/[0.08] pb-2 inline-block">
                  Quick Links
                </h4>
                <ul className="space-y-2.5 text-sm text-[#A8A0B8]">
                  <li><Link href="/" className="hover:text-[#C084FC] transition-colors">Home</Link></li>
                  <li><Link href="/pricing" className="hover:text-[#C084FC] transition-colors">IPTV Subscription</Link></li>
                  <li><Link href="/#pricing" className="hover:text-[#C084FC] transition-colors">Pricing</Link></li>
                  <li><Link href="/channels" className="hover:text-[#C084FC] transition-colors">Channel List</Link></li>
                  <li><Link href="/installation" className="hover:text-[#C084FC] transition-colors">Tutorials</Link></li>
                  <li><Link href="/contact" className="hover:text-[#C084FC] transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Support Column */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-4 border-b border-white/[0.08] pb-2 inline-block">
                  Support
                </h4>
                <ul className="space-y-2.5 text-sm text-[#A8A0B8]">
                  <li><Link href="/faq" className="hover:text-[#C084FC] transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-[#C084FC] transition-colors">Contact Support</Link></li>
                  <li><Link href="/installation" className="hover:text-[#C084FC] transition-colors">Setup Guides</Link></li>
                  <li><Link href="/reseller" className="hover:text-[#C084FC] transition-colors">Reseller Panel</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-[#C084FC] transition-colors">How It Works</Link></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-4 border-b border-white/[0.08] pb-2 inline-block">
                  Legal
                </h4>
                <ul className="space-y-2.5 text-sm text-[#A8A0B8]">
                  <li><Link href="/privacy-policy" className="hover:text-[#C084FC] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="hover:text-[#C084FC] transition-colors">Refund Policy</Link></li>
                  <li><Link href="/dmca" className="hover:text-[#C084FC] transition-colors">DMCA Disclaimer</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777083]">
              <p>© {new Date().getFullYear()} SMARTSGI. Smart &amp; Reliable IPTV. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <span>•</span>
                <Link href="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
                <span>•</span>
                <Link href="/dmca" className="hover:text-white transition-colors">DMCA</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Global Floating WhatsApp Support Widget */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
