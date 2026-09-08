import { Globe, MapPin } from "lucide-react";
import Link from "next/link";

interface RegionInfo {
  name: string;
  code: string;
  tagline: string;
  highlights: string[];
  color: string;
}

const regions: RegionInfo[] = [
  {
    name: "USA",
    code: "US",
    tagline: "Live Networks & Regional Feeds",
    highlights: ["National Major Networks", "Live Regional Sports Channels", "Pay-Per-View Events", "News & Entertainment"],
    color: "#3B82F6",
  },
  {
    name: "Canada",
    code: "CA",
    tagline: "Bilingual English & French Channels",
    highlights: ["Coast-to-Coast Sports", "News & Public Broadcasters", "Specialty Entertainment", "French Language Channels"],
    color: "#EF4444",
  },
  {
    name: "United Kingdom",
    code: "UK",
    tagline: "Premier UK & Ireland Television",
    highlights: ["Football & League Coverage", "UK Entertainment & Drama", "Documentaries & Cinema", "Catch-up Supported Channels"],
    color: "#9B3FF2",
  },
  {
    name: "Europe",
    code: "EU",
    tagline: "Multi-Country European Broadcasters",
    highlights: ["France, Germany & Spain", "Italy, Portugal & Netherlands", "Nordic & Eastern European", "European League Sports"],
    color: "#FF7A00",
  },
  {
    name: "International",
    code: "INT",
    tagline: "Global Cultural & Regional Streams",
    highlights: ["Latin America Channels", "Arabic & Middle Eastern", "Asian & African Networks", "Worldwide News Feeds"],
    color: "#10B981",
  },
];

export default function GlobalCoverageSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-4">
            <Globe className="w-3.5 h-3.5 text-[#C084FC]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
              Worldwide Selection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Premium Entertainment From <Link href="/channels" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Around The World</Link>
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Stream high-definition broadcasts from the United States, Canada, the United Kingdom, Europe, and international regions with our versatile <Link href="/pricing" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">subscription plans</Link> or view our <Link href="/channels" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">complete channel directory</Link>.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="group relative flex flex-col p-6 rounded-3xl glass-card hover:border-[#9B3FF2]/50 hover:shadow-[0_0_30px_rgba(155,63,242,0.2)] transition-all duration-300"
            >
              {/* Badge row */}
              <div className="flex items-center justify-between mb-5">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-wider"
                  style={{ backgroundColor: `${region.color}30`, border: `1px solid ${region.color}60` }}
                >
                  {region.code}
                </span>
                <MapPin className="w-4 h-4 text-[#A8A0B8] group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-black text-white tracking-tight mb-1">
                <Link href="/channels" className="hover:text-white/90 transition-colors">
                  {region.name}
                </Link>
              </h3>
              
              <span className="text-[11px] font-bold text-[#A8A0B8] leading-tight mb-4">
                {region.tagline}
              </span>

              <ul className="space-y-2 mt-auto pt-4 border-t border-white/[0.06] text-xs text-white/80">
                {region.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

