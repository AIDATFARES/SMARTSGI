import { Monitor, Layers, Film, Zap, Smartphone, Globe2, ShieldCheck } from "lucide-react";

export default function ChannelCategories() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD STREAMING",
      desc: "Enjoy every channel and live event in stunning 4K, Full HD, and HD. SMARTSGI anti-freeze technology ensures smooth IPTV streaming on any compatible device.",
      tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"],
    },
    {
      icon: Layers,
      title: "50,000+ LIVE IPTV CHANNELS",
      desc: "Access over 50,000 live channels covering sports, news, and premium entertainment. Every broadcast on our IPTV service is delivered in crystal-clear quality.",
      tags: ["160+ COUNTRIES", "SPORTS", "NEWS", "KIDS"],
    },
    {
      icon: Film,
      title: "200,000+ MOVIES & SERIES",
      desc: "Explore a massive VOD library featuring the latest movies, hit series, and documentaries—available on demand with your SMARTSGI subscription.",
      tags: ["MOVIES", "SERIES", "REPLAYS", "UPDATED DAILY"],
    },
  ];

  const bottomFeatures = [
    {
      icon: Zap,
      title: "Instant Activation",
      desc: "Your subscription is activated within minutes.",
    },
    {
      icon: Smartphone,
      title: "All Devices Supported",
      desc: "Smart TV, Android, iOS, Mac, Fire Stick, PC, and more.",
    },
    {
      icon: Globe2,
      title: "Works Worldwide",
      desc: "Enjoy the SMARTSGI service wherever you are, on any stable internet connection.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime",
      desc: "Reliable servers with stable, buffer-free streaming.",
    },
  ];

  return (
    <section className="relative z-10 bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-[10px] tracking-widest uppercase mb-6 border border-[#36a9ff]/20">
            Premium Features
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-[1.2] animate-fade-up">
            Everything You Need for the <br className="hidden md:block" />
            <span className="text-[#36a9ff]">
              Ultimate SMARTSGI Experience.
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          
          {/* Top Row: 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center rounded-xl bg-[#145082] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex items-center justify-center text-white">
                    <Icon className="h-10 w-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-[19px] font-black text-white">{feature.title}</h3>
                  <p className="flex-grow text-[13px] leading-relaxed text-white/90 font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 4 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bottomFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center rounded-xl bg-[#145082] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex items-center justify-center text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="mb-2 text-[15px] font-black text-white">{feature.title}</h4>
                  <p className="text-[12px] leading-relaxed text-white/90 font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

