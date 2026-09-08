import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.08]">
      
      {/* Massive Ambient Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-40" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[350px] glow-orange blur-[140px] pointer-events-none rounded-full opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Glow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9B3FF2]/40 bg-[#9B3FF2]/10 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8A1F]" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C084FC]">
            Instant Access
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
          Ready to Upgrade Your <Link href="/pricing" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Entertainment</Link>?
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-[#A8A0B8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Choose your <Link href="/pricing" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">SMARTSGI plan</Link>, check out our <Link href="/channels" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">full channel lineup</Link>, and start streaming today.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <a
            href="#pricing"
            className="btn-primary-purple w-full sm:w-auto px-10 py-4 text-sm sm:text-base font-extrabold tracking-wider uppercase gap-2 hover:shadow-[0_0_40px_rgba(155,63,242,0.7)] group"
          >
            <span>Subscribe Now</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20have%20a%20question%20about%20SMARTSGI."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-orange w-full sm:w-auto px-10 py-4 text-sm sm:text-base font-extrabold tracking-wider uppercase gap-2 hover:shadow-[0_0_40px_rgba(255,122,0,0.7)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Support</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#777083] font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#FF7A00]" /> Instant Delivery
          </span>
          <span>•</span>
          <span>Works on All Devices</span>
          <span>•</span>
          <span>24/7 Live Assistance</span>
        </div>

      </div>
    </section>
  );
}
