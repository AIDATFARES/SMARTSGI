import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="w-full glass-card rounded-3xl p-6 md:p-8 my-10 border-[#9B3FF2]/30 relative overflow-hidden group">
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9B3FF2]/15 via-transparent to-[#FF7A00]/10 opacity-60 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9B3FF2]/20 text-[#C084FC] text-xs font-bold uppercase tracking-wider border border-[#9B3FF2]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
              Smart &amp; Reliable IPTV
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            Experience <Link href="/pricing" className="text-gradient-hero hover:underline">SMARTSGI</Link>
          </h3>
          
          <p className="text-[#A8A0B8] text-sm md:text-base mb-0 max-w-2xl leading-relaxed">
            Upgrade your entertainment with ultra-stable, anti-freeze streaming. Access premium <Link href="/channels" className="text-white/90 hover:underline">live channels</Link>, global sports, and curated VOD across all your <Link href="/installation" className="text-white/90 hover:underline">supported devices</Link>.
          </p>
        </div>
        
        <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
          <Link 
            href="/pricing"
            className="btn-primary-purple w-full md:w-auto px-8 py-3.5 text-xs font-black uppercase tracking-wider gap-2 group/btn"
          >
            <span>View SMARTSGI Plans</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
