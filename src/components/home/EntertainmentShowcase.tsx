import { Trophy, Film, HeartHandshake, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const showcaseItems = [
  {
    title: "Sports & Live Events",
    tagline: "Ultra-Crisp 60 FPS",
    description: "Follow major football leagues, championship boxing, MMA events, basketball tournaments, and motorsports live in crystal-clear high definition.",
    icon: Trophy,
    accentColor: "#FF7A00",
    gradient: "from-[#FF7A00]/25 via-transparent to-transparent",
    features: ["Live Football & Soccer", "Basketball & Motorsports", "Combat & Pay-Per-View", "Smooth 60 FPS Streams"],
  },
  {
    title: "Movies & Series",
    tagline: "VOD On-Demand Library",
    description: "Catch up on trending cinema releases, popular episodic television series, and multi-genre films updated regularly for your entertainment.",
    icon: Film,
    accentColor: "#B86CFF",
    gradient: "from-[#9B3FF2]/25 via-transparent to-transparent",
    features: ["4K & Full HD Quality", "Latest Cinema Releases", "Multi-Language Subtitles", "Regular Content Updates"],
  },
  {
    title: "Family Entertainment",
    tagline: "All-Ages Programming",
    description: "Safe, cheerful cartoon channels for kids, documentary explorations for curious minds, and lifestyle television for the entire household.",
    icon: HeartHandshake,
    accentColor: "#EC4899",
    gradient: "from-[#EC4899]/25 via-transparent to-transparent",
    features: ["Children & Cartoon Hubs", "Wildlife & Science Docs", "News & Cultural Channels", "Household-Friendly Controls"],
  },
];

export default function EntertainmentShowcase() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] glow-purple blur-[140px] pointer-events-none rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF8A1F] mb-4">
            Unified Streaming
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Sports, Movies &amp; Shows — All in One Subscription
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Experience premium television without paying for multiple separate streaming packages.
          </p>
        </div>

        {/* 3 Large Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {showcaseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col rounded-3xl glass-card overflow-hidden hover:border-[#9B3FF2]/50 hover:shadow-[0_0_35px_rgba(155,63,242,0.25)] transition-all duration-300"
              >
                {/* Visual Header / Banner */}
                <div className={`relative h-48 w-full bg-gradient-to-b ${item.gradient} bg-[#080511] p-6 flex flex-col justify-between border-b border-white/[0.06] overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.08] text-white backdrop-blur-md">
                      {item.tagline}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-md flex items-center justify-center border border-white/[0.1]">
                      <Icon className="w-5 h-5" style={{ color: item.accentColor }} />
                    </div>
                  </div>

                  {/* Big Stylized Title */}
                  <h3 className="text-2xl font-black text-white z-10 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Atmospheric decorative orb */}
                  <div 
                    className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
                    style={{ background: item.accentColor }}
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <p className="text-[#A8A0B8] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-white/[0.06]">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: item.accentColor }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

