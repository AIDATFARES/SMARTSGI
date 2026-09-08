import Link from "next/link";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export default function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* High-Tech TV & Play Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#9B3FF2] via-[#9333EA] to-[#0B0714] p-[1.5px] shadow-[0_0_20px_rgba(155,63,242,0.45)] group-hover:shadow-[0_0_28px_rgba(155,63,242,0.7)] transition-all duration-300">
          <div className="w-full h-full bg-[#080511] rounded-[10px] flex items-center justify-center relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9B3FF2]/20 via-transparent to-[#FF7A00]/20 pointer-events-none" />
            
            {/* TV Screen + Play triangle SVG */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer monitor screen */}
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="3"
                stroke="url(#purpleGradient)"
                strokeWidth="2"
              />
              {/* Play symbol with orange accent spark */}
              <polygon
                points="10,7 16,10 10,13"
                fill="url(#orangeSparkGradient)"
              />
              {/* Monitor stand */}
              <path
                d="M8 21H16M12 17V21"
                stroke="#C084FC"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Gradients */}
              <defs>
                <linearGradient id="purpleGradient" x1="2" y1="3" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B86CFF" />
                  <stop offset="1" stopColor="#9B3FF2" />
                </linearGradient>
                <linearGradient id="orangeSparkGradient" x1="10" y1="7" x2="16" y2="13" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF8A1F" />
                  <stop offset="1" stopColor="#FF7A00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Small energetic orange spark badge */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7A00] ring-2 ring-[#05030B] shadow-[0_0_8px_#FF7A00]" />
      </div>

      {/* Wordmark & Tagline */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
            SMART
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#B86CFF] via-[#EC4899] to-[#FF7A00]">
            SGI
          </span>
        </div>
        {!compact && (
          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#A8A0B8] mt-1 group-hover:text-white transition-colors">
            SMART &amp; RELIABLE IPTV
          </span>
        )}
      </div>
    </div>
  );
}
