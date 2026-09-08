import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation & Setup Guides | SMARTSGI",
  description: "Step-by-step installation guides to set up SMARTSGI on Smart TVs, Amazon Firestick, Android TV, Apple TV, mobile devices, and computers.",
  alternates: {
    canonical: "/installation",
  },
};

export default function Installation() {
  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
            Device Configuration
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
          <span className="text-white block sm:inline">SMARTSGI </span>
          <span className="text-gradient-hero block sm:inline">Setup Guides</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A8A0B8] leading-relaxed">
          Comprehensive step-by-step instructions to configure SMARTSGI on all your favorite streaming devices. Once configured, browse our <Link href="/channels" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">full channel lineup</Link> or manage your <Link href="/pricing" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">subscription plans</Link>.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-semibold text-[#A8A0B8]">
          <span className="inline-flex items-center gap-2">
            <Monitor className="h-4 w-4 text-[#C084FC]" /> All Major Platforms
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-[#FF7A00]" /> 5-Minute Fast Setup
          </span>
          <span className="inline-flex items-center gap-2">
            <Headphones className="h-4 w-4 text-[#25D366]" /> 24/7 Live Support
          </span>
        </div>
      </header>

      {/* 3 Quick Start Steps */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <QuickStartCard icon={Download} step="1" title="Download App" accent="#9B3FF2">
            Install your preferred IPTV player (TiviMate, IPTV Smarters, IBO Player) from your device&apos;s app store. Review our{" "}
            <Link href="/how-it-works" className="text-white/90 underline hover:text-[#C084FC]">
              activation steps
            </Link>.
          </QuickStartCard>
          <QuickStartCard icon={Link2} step="2" title="Enter Credentials" accent="#EC4899">
            Input the SMARTSGI M3U playlist URL or Xtream Codes login details provided in your activation message. Need credentials? Select a{" "}
            <Link href="/pricing" className="text-white/90 underline hover:text-[#EC4899]">
              subscription plan
            </Link>.
          </QuickStartCard>
          <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming" accent="#FF7A00">
            Enjoy immediate access to{" "}
            <Link href="/channels" className="text-white/90 underline hover:text-[#FF8A1F]">
              live channels
            </Link>, cinema releases, and sports broadcasts with seamless playback.
          </QuickStartCard>
        </div>
      </section>

      {/* Interactive Device Selector & Instructions */}
      <DeviceSetupGuide />

      {/* Support Reassurance Card */}
      <section className="mx-auto max-w-2xl text-center mt-20 p-8 rounded-3xl glass-card border-[#9B3FF2]/30">
        <h2 className="text-2xl font-black text-white uppercase tracking-wide">
          Need Assistance With <Link href="/contact" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Setup</Link>?
        </h2>
        <p className="mt-3 text-sm text-[#A8A0B8]">
          Our technical support team is available 24/7 on WhatsApp to guide you through playlist configuration. You can also review our{" "}
          <Link href="/faq" className="text-white/90 underline hover:text-[#C084FC]">
            frequently asked questions
          </Link>.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="btn-primary-purple px-8 py-3.5 text-xs font-black uppercase tracking-wider"
          >
            Contact Support Team
          </Link>
        </div>
      </section>
    </main>
  );
}

function QuickStartCard({
  children,
  icon: Icon,
  step,
  title,
  accent,
}: {
  children: React.ReactNode;
  icon: typeof Download;
  step: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="glass-card rounded-3xl p-8 flex flex-col gap-4 hover:border-[#9B3FF2]/50 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div 
          className="w-12 h-12 rounded-2xl bg-[#10091B] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner"
        >
          <Icon className="w-6 h-6" style={{ color: accent }} strokeWidth={1.75} />
        </div>
        <span 
          className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white"
          style={{ background: accent }}
        >
          {step}
        </span>
      </div>

      <h3 className="text-white font-black text-lg tracking-wide uppercase mt-2">
        <Link href="/installation" className="hover:text-[#C084FC] transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-[#A8A0B8] text-sm leading-relaxed">{children}</p>
    </div>
  );
}
