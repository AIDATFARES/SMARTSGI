import { CreditCard, MailCheck, PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Plan",
      subtitle: "Flexible Durations",
      href: "/pricing",
      description: (
        <>
          Select the subscription duration and number of device connections from our{" "}
          <Link href="/pricing" className="text-white/90 hover:underline">
            pricing tiers
          </Link>{" "}
          that match your household streaming habits.
        </>
      ),
      icon: CreditCard,
      color: "from-[#9B3FF2] to-[#9333EA]",
      border: "border-[#9B3FF2]/40",
      accent: "#C084FC",
    },
    {
      num: "02",
      title: "Receive Your Account",
      subtitle: "Fast Activation",
      href: "/contact",
      description: (
        <>
          Your login credentials (M3U playlist, Xtream Codes API URL, username and password) are sent promptly upon order confirmation. Reach out to our{" "}
          <Link href="/contact" className="text-white/90 hover:underline">
            support team
          </Link>{" "}
          anytime.
        </>
      ),
      icon: MailCheck,
      color: "from-[#EC4899] to-[#9B3FF2]",
      border: "border-[#EC4899]/40",
      accent: "#EC4899",
    },
    {
      num: "03",
      title: "Start Streaming",
      subtitle: "Instant Playback",
      href: "/installation",
      description: (
        <>
          Enter your credentials into your preferred IPTV player using our step-by-step{" "}
          <Link href="/installation" className="text-white/90 hover:underline">
            setup guide
          </Link>{" "}
          on your Smart TV, Firestick, Android box, or phone.
        </>
      ),
      icon: PlayCircle,
      color: "from-[#FF7A00] to-[#FF8A1F]",
      border: "border-[#FF7A00]/40",
      accent: "#FF8A1F",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-extrabold uppercase tracking-[0.2em] text-[#C084FC] mb-4">
            Quick Setup
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            How To Get Started With <Link href="/how-it-works" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">SMARTSGI</Link>
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Follow three straightforward steps to unlock seamless television on all your <Link href="/installation" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">favorite devices</Link>. Learn more about our <Link href="/pricing" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">subscription options</Link>.
          </p>
        </div>

        {/* 3 Modern Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#9B3FF2]/40 via-[#EC4899]/40 to-[#FF7A00]/40 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl glass-card hover:border-[#9B3FF2]/50 hover:shadow-[0_0_35px_rgba(155,63,242,0.2)] transition-all duration-300"
              >
                {/* Number Indicator Pill */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1.5px] shadow-[0_0_25px_rgba(155,63,242,0.35)] flex items-center justify-center`}>
                    <div className="w-full h-full bg-[#080511] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7" style={{ color: step.accent }} />
                    </div>
                  </div>
                  
                  {/* Floating Number Badge */}
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#05030B] border border-white/20 text-[10px] font-black text-white tracking-wider">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white tracking-wide mb-1">
                  <Link href={step.href} className="hover:text-white/90 transition-colors">
                    {step.title}
                  </Link>
                </h3>
                
                <span className="text-[11px] font-bold text-[#A8A0B8] uppercase tracking-wider mb-4">
                  {step.subtitle}
                </span>

                <p className="text-sm text-[#A8A0B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
