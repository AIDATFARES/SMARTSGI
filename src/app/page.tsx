import HeroSection from "@/components/home/HeroSection";
import DeviceSupport from "@/components/home/DeviceSupport";
import CategorySection from "@/components/home/CategorySection";
import IptvFeaturesSection from "@/components/home/IptvFeaturesSection";
import EntertainmentShowcase from "@/components/home/EntertainmentShowcase";
import PricingSection from "@/components/home/PricingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StatsSection from "@/components/home/StatsSection";
import GlobalCoverageSection from "@/components/home/GlobalCoverageSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export const metadata = {
  title: "SMARTSGI | Best IPTV Subscription USA, Canada & Europe",
  description: "Stream 4K live TV, sports, movies & international channels with SMARTSGI. Anti-freeze server, 99.9% uptime, instant setup & 24h free trial.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen bg-[#05030B] text-[#F8FAFC]">
      {/* 1. Centered Hero Section */}
      <HeroSection />

      {/* 2. Device Compatibility Section (Immediately after hero) */}
      <DeviceSupport />

      {/* 3. High-Converting Pricing Section (Choose Your Best IPTV Subscription Plan) */}
      <PricingSection />

      {/* 4. Entertainment Categories (Entertainment For Everyone) */}
      <CategorySection />

      {/* 5. IPTV Features (All The Premium TV You Love - Two Columns) */}
      <IptvFeaturesSection />

      {/* 6. Sports, Movies & Shows Showcase */}
      <EntertainmentShowcase />

      {/* 7. How To Get Started With SMARTSGI (01, 02, 03) */}
      <HowItWorksSection />

      {/* 8. Modern Stats Section */}
      <StatsSection />

      {/* 9. Global Coverage (USA, Canada, UK, Europe, International) */}
      <GlobalCoverageSection />

      {/* 10. Customer Testimonials */}
      <TestimonialsSection />

      {/* 11. Frequently Asked Questions (9 core questions) */}
      <FAQSection />

      {/* 12. Final High-Impact CTA */}
      <SupportCtaSection />
    </main>
  );
}
