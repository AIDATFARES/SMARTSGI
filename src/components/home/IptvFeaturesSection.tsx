import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Globe, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function IptvFeaturesSection() {
  const featureCards = [
    {
      title: "Every Platform in One",
      tagline: "Centralized Streaming Hub",
      href: "/installation",
      description: "No more switching between confusing interfaces or expensive subscriptions. Stream live TV, sports passes, and video on demand from a single unified connection.",
      icon: MonitorSmartphone,
      glow: "from-[#9B3FF2]/20 to-transparent",
      accent: "#C084FC",
    },
    {
      title: "The Best of All TV Worlds",
      tagline: "Unmatched Content Variety",
      href: "/channels",
      description: "From national broadcast networks to localized regional feeds and premier sports channels, experience rich cultural programming with ultra-reliable transmission.",
      icon: Globe,
      glow: "from-[#FF7A00]/20 to-transparent",
      accent: "#FF8A1F",
    },
    {
      title: "Watch Everywhere",
      tagline: "Freedom of Mobility",
      href: "/pricing",
      description: "Whether you are relaxing in front of a 4K living room television or catching up while traveling on your phone or tablet, SMARTSGI follows you anywhere.",
      icon: Zap,
      glow: "from-[#EC4899]/20 to-transparent",
      accent: "#EC4899",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] glow-purple blur-[150px] pointer-events-none rounded-full opacity-30" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] glow-orange blur-[150px] pointer-events-none rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Description & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
                Premium Streaming Experience
              </span>
            </div>

            {/* H2 with Internal Link */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
              All The Premium TV <br className="hidden sm:inline" />
              <Link 
                href="/channels" 
                className="text-gradient-purple hover:underline decoration-[#9B3FF2]/50 transition-all inline-block"
              >
                You Love
              </Link>
            </h2>

            {/* Paragraph with contextual links */}
            <p className="text-[#A8A0B8] text-base sm:text-lg leading-relaxed mb-8">
              SMARTSGI combines high-performance server architecture with high-definition{" "}
              <Link href="/channels" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 font-semibold transition-colors">
                channel lineups
              </Link>{" "}
              to deliver a truly modern streaming experience. Review our{" "}
              <Link href="/pricing" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 font-semibold transition-colors">
                flexible pricing tiers
              </Link>{" "}
              or see{" "}
              <Link href="/how-it-works" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 font-semibold transition-colors">
                how our service operates
              </Link>{" "}
              for sports fans, movie lovers, and modern cord-cutters.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#pricing"
                className="btn-primary-purple w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold tracking-wider uppercase gap-2 hover:shadow-[0_0_30px_rgba(155,63,242,0.5)] group"
              >
                <span>View Plans &amp; Pricing</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/channels"
                className="btn-outline-glass w-full sm:w-auto px-6 py-3.5 text-sm tracking-wider uppercase"
              >
                Channel Lineup
              </Link>
            </div>

            {/* Quality indicator */}
            <div className="mt-10 flex items-center gap-4 text-xs font-semibold text-[#777083]">
              <Link href="/installation" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
                Full HD &amp; 4K Support
              </Link>
              <span>•</span>
              <Link href="/pricing" className="hover:text-white transition-colors">
                No Binding Contracts
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards with H3 Links */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative p-6 sm:p-8 rounded-2xl glass-card hover:border-[#9B3FF2]/50 hover:shadow-[0_0_35px_rgba(155,63,242,0.2)] transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${card.glow} blur-2xl pointer-events-none rounded-full group-hover:opacity-100 opacity-60 transition-opacity`} />

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#10091B] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className="w-7 h-7" style={{ color: card.accent }} />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-1.5">
                        {/* H3 with Internal Link */}
                        <h3 className="text-xl font-black text-white tracking-wide">
                          <Link 
                            href={card.href} 
                            className="hover:text-[#C084FC] underline decoration-transparent hover:decoration-[#C084FC]/50 transition-colors"
                          >
                            {card.title}
                          </Link>
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.05] text-[#A8A0B8] uppercase tracking-wider">
                          {card.tagline}
                        </span>
                      </div>
                      <p className="text-sm text-[#A8A0B8] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
