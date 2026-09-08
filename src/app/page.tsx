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

      {/* 3. Entertainment Categories (Entertainment For Everyone) */}
      <CategorySection />

      {/* 4. IPTV Features (All The Premium TV You Love - Two Columns) */}
      <IptvFeaturesSection />

      {/* 5. Sports, Movies & Shows Showcase */}
      <EntertainmentShowcase />

      {/* 6. High-Converting Pricing Section (5 tiers + Device count) */}
      <PricingSection />

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
