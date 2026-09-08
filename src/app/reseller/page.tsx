import type { Metadata } from "next";
import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata: Metadata = {
  title: "Become an IPTV Reseller | SMARTSGI Reseller Panel",
  description: "Join the SMARTSGI Reseller Program. High-performance IPTV reseller management panel, flexible credit packages, sub-reseller accounts, and 24/7 technical support.",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
