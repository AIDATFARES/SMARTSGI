"use client";

import { Monitor, Layers, Film, Zap, Smartphone, Globe, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD STREAMING",
      desc: "Enjoy every channel and live event in stunning 4K, Full HD, and HD. SMARTSGI anti-freeze technology ensures smooth IPTV streaming on any compatible device.",
    },
    {
      icon: Layers,
      title: "50,000+ LIVE IPTV CHANNELS",
      desc: "Access over 50,000 live channels covering sports, news, and premium entertainment. Every broadcast on our IPTV service is delivered in crystal-clear quality.",
    },
    {
      icon: Film,
      title: "200,000+ MOVIES & SERIES",
      desc: "Explore a massive VOD library featuring the latest movies, hit series, and documentaries—available on demand with your SMARTSGI subscription.",
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
      icon: Globe,
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
    <section className="py-20 bg-white relative z-10">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block py-1 px-4 rounded-full bg-[#36a9ff]/10 border border-[#36a9ff]/30 text-[#36a9ff] text-xs font-bold tracking-widest uppercase mb-5">
            Premium Features
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
            Everything You Need for the{" "}
            <span className="block text-[#36a9ff]">Ultimate SMARTSGI Experience.</span>
          </h2>
        </div>

        {/* Top Row — 3 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {topFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#145082] rounded-2xl p-8 flex flex-col gap-4 hover:bg-[#1a6098] transition-colors duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-extrabold text-base tracking-wide uppercase">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Row — 4 smaller cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bottomFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#145082] rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#1a6098] transition-colors duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

