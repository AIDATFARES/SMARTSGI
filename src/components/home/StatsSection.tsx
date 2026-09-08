import { Tv, Film, MonitorSmartphone, Headphones, ShieldCheck, Zap } from "lucide-react";

const stats = [
  {
    title: "Extensive Channel Selection",
    subtitle: "Live Global TV",
    detail: "Coverage spanning sports, cinema, global news, and localized entertainment feeds.",
    icon: Tv,
    accent: "#9B3FF2",
    glow: "rgba(155, 63, 242, 0.2)",
  },
  {
    title: "Curated VOD Library",
    subtitle: "On-Demand Catalog",
    detail: "Rich collection of blockbuster movies and top-rated television series updated on regular cycles.",
    icon: Film,
    accent: "#EC4899",
    glow: "rgba(236, 72, 153, 0.2)",
  },
  {
    title: "Multi-Device Support",
    subtitle: "Complete Ecosystem",
    detail: "Full compatibility across Smart TVs, Android TV, Fire TV, Apple TV, iOS, Windows, and Mac.",
    icon: MonitorSmartphone,
    accent: "#FF7A00",
    glow: "rgba(255, 122, 0, 0.2)",
  },
  {
    title: "24/7 Customer Assistance",
    subtitle: "Direct Support",
    detail: "Dedicated human assistance available around the clock via WhatsApp and email.",
    icon: Headphones,
    accent: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.2)",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="group relative p-7 rounded-2xl glass-card hover:border-[#9B3FF2]/40 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl bg-[#10091B] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ boxShadow: `0 0 20px ${stat.glow}` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.accent }} />
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[#A8A0B8] block mb-1">
                  {stat.subtitle}
                </span>

                <h3 className="text-lg font-black text-white tracking-wide mb-2">
                  {stat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A0B8] leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

