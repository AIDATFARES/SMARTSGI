import { 
  Tv, 
  Smartphone, 
  Laptop, 
  Monitor, 
  Cast, 
  Tablet, 
  Box, 
  Cpu,
  Flame,
  Layers,
  Sparkles
} from "lucide-react";

const devices = [
  { name: "Smart TV", icon: Tv, tag: "Universal" },
  { name: "Samsung Tizen", icon: Tv, tag: "Smart TV" },
  { name: "LG webOS", icon: Tv, tag: "Smart TV" },
  { name: "Amazon Fire TV", icon: Flame, tag: "Streaming Stick" },
  { name: "Android TV", icon: Tv, tag: "Google OS" },
  { name: "Android Phone", icon: Smartphone, tag: "Mobile" },
  { name: "iPhone / iPad", icon: Tablet, tag: "iOS / iPadOS" },
  { name: "Apple TV 4K", icon: Box, tag: "tvOS" },
  { name: "Windows PC", icon: Monitor, tag: "Desktop" },
  { name: "macOS", icon: Laptop, tag: "Desktop" },
  { name: "Roku", icon: Layers, tag: "Streaming" },
  { name: "Chromecast", icon: Cast, tag: "Google Cast" },
  { name: "Kodi", icon: Cpu, tag: "Media Center" },
  { name: "NVIDIA Shield", icon: Cpu, tag: "Streaming Box" },
];

export default function DeviceSupport() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-white/[0.06]">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] glow-purple blur-[140px] pointer-events-none rounded-full opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
              Seamless Compatibility
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SMARTSGI: Effortlessly Connect Across All Your Devices
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Enjoy your IPTV experience across your favorite devices.
          </p>
        </div>

        {/* Devices Carousel Grid / Marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-4 sm:gap-6 min-w-max animate-marquee hover:[animation-play-state:paused]">
            {[...devices, ...devices].map((device, idx) => {
              const Icon = device.icon;
              return (
                <div
                  key={`${device.name}-${idx}`}
                  className="flex flex-col items-center justify-center p-6 w-[170px] sm:w-[190px] h-[150px] rounded-2xl glass-card hover:border-[#9B3FF2]/60 hover:shadow-[0_0_30px_rgba(155,63,242,0.35)] transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#10091B] border border-white/[0.08] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#9B3FF2]/40 transition-all duration-300 shadow-inner">
                    <Icon className="w-6 h-6 text-[#C084FC] group-hover:text-[#FF8A1F] transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-[#F8FAFC] text-center line-clamp-1">
                    {device.name}
                  </span>
                  <span className="text-[10px] font-semibold text-[#777083] uppercase tracking-wider mt-1">
                    {device.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sub-text guide link */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#777083]">
            Need help configuring your specific setup? Explore our step-by-step{" "}
            <a href="/installation" className="text-[#C084FC] hover:text-white font-semibold underline underline-offset-4 decoration-[#9B3FF2]/40 transition-colors">
              Device Setup Guides
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
