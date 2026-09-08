import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* NanoBanana Hero Background Image - Clear & Crisp Family Watching TV */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg-smartsgi.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05030B]/75 via-[#05030B]/45 to-[#05030B] pointer-events-none" />

      {/* Ambient Atmospheric Lighting & Gradients (Optimized for iOS Safari) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] glow-purple blur-3xl pointer-events-none rounded-full opacity-80" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] glow-violet blur-2xl pointer-events-none rounded-full opacity-70" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] glow-orange blur-2xl pointer-events-none rounded-full opacity-60" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] glow-magenta blur-2xl pointer-events-none rounded-full opacity-40" />


      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#9B3FF2]/40 bg-[#9B3FF2]/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(155,63,242,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse shadow-[0_0_8px_#FF7A00]" />
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#C084FC]">
            #1 RATED IPTV PROVIDER
          </span>
        </div>

        {/* Main H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.08] max-w-5xl mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          <span className="text-white block sm:inline">The Best IPTV Provider </span>
          <span className="text-gradient-hero block sm:inline">
            USA, Canada &amp; Europe
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-extrabold text-[#F8FAFC] tracking-wide mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Smart &amp; Reliable IPTV Streaming — High Performance Experience
        </p>

        {/* Original Conversion Copy with Contextual Internal Links */}
        <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0] max-w-3xl leading-relaxed mb-10 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          Elevate your home entertainment with <strong className="text-white font-semibold">SMARTSGI</strong>. Stream crystal-clear{" "}
          <Link href="/channels" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 font-medium transition-colors">
            live television channels
          </Link>
          , world-class{" "}
          <Link href="/channels" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 font-medium transition-colors">
            sporting competitions
          </Link>
          , and on-demand entertainment libraries directly to your{" "}
          <Link href="/installation" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 font-medium transition-colors">
            supported devices
          </Link>{" "}
          with smooth anti-freeze server infrastructure and instant activation.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-10">
          <a
            href="#pricing"
            className="btn-primary-purple w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-extrabold tracking-wider uppercase gap-2 group"
          >
            <span className="relative z-10">Subscribe Now</span>
            <ArrowRight className="w-4.5 h-4.5 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024H%20trial%20for%20SMARTSGI."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-orange w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-extrabold tracking-wider uppercase gap-2 group"
          >
            <span className="relative z-10">Free Trial 24H</span>
            <Sparkles className="w-4.5 h-4.5 relative z-10 transform group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300 text-amber-200" />
          </a>
        </div>

        {/* Trust Card */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-card text-xs sm:text-sm text-[#A8A0B8] mb-4">
          <span className="flex items-center gap-1 text-[#FF8A1F]">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </span>
          <span className="text-white font-bold">Trusted by Cord-Cutters</span>
          <span className="text-white/20">|</span>
          <Link href="/faq" className="flex items-center gap-1.5 text-[#C084FC] hover:text-white transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
            Fast Setup Guarantee
          </Link>
        </div>

        {/* Pricing Teaser with Internal Link */}
        <p className="text-xs sm:text-sm font-medium text-[#777083]">
          Our flexible{" "}
          <Link href="/pricing" className="text-[#C084FC] hover:text-white underline decoration-[#9B3FF2]/40 font-semibold transition-colors">
            IPTV subscription plans
          </Link>{" "}
          start at only <span className="text-[#FF7A00] font-bold">$11.66</span>/Month · Cancel anytime.
        </p>

      </div>
    </section>
  );
}
