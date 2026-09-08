"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  Headphones,
  MonitorSmartphone,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "100-credits",
    credits: 100,
    price: 399,
  },
  {
    id: "200-credits",
    credits: 200,
    price: 799,
    popular: true,
  },
  {
    id: "300-credits",
    credits: 300,
    price: 1199,
    bestValue: true,
  },
  {
    id: "400-credits",
    credits: 400,
    price: 1599,
  },
  {
    id: "500-credits",
    credits: 500,
    price: 1999,
  },
];

const planFeatures = [
  "Each credit equals 1 month line",
  "Free trial creation in panel",
  "Custom channel group selection",
  "Pay as you grow model",
  "Credits never expire",
  "24/7 dedicated support",
  "Sub-reseller account management",
];

const advantages = [
  {
    icon: MonitorSmartphone,
    title: "COMPATIBLE ACROSS ALL DEVICES",
    href: "/installation",
    description: (
      <>
        Your clients can connect using any device: Smart TVs, Android boxes, Firestick, Apple TV, iOS, and PC using our{" "}
        <Link href="/installation" className="text-white/90 underline hover:text-[#C084FC]">
          setup guides
        </Link>.
      </>
    ),
  },
  {
    icon: Server,
    title: "HIGH-PERFORMANCE SERVERS",
    href: "/pricing",
    description: (
      <>
        Reliable streaming infrastructure equipped with anti-freeze routing technology across all{" "}
        <Link href="/channels" className="text-white/90 underline hover:text-[#C084FC]">
          live channels
        </Link>.
      </>
    ),
  },
  {
    icon: Headphones,
    title: "EXPERT RESELLER SUPPORT",
    href: "/contact",
    description: (
      <>
        Our technical team is available 24/7 on WhatsApp to assist with reseller queries via our{" "}
        <Link href="/contact" className="text-white/90 underline hover:text-[#C084FC]">
          help desk
        </Link>.
      </>
    ),
  },
  {
    icon: Zap,
    title: "INTUITIVE CONTROL PANEL",
    href: "/how-it-works",
    description: (
      <>
        Manage customer accounts, extend lines, create test accounts, and set up sub-reseller balances with ease and see{" "}
        <Link href="/how-it-works" className="text-white/90 underline hover:text-[#C084FC]">
          how it works
        </Link>.
      </>
    ),
  },
];

const resellerFaqs = [
  {
    question: "DOES THE RESELLER PANEL EXPIRE?",
    answer:
      "No. Your SMARTSGI reseller management panel remains active permanently, and your purchased credit balance does not expire.",
  },
  {
    question: "CAN I RENEW A CLIENT SUBSCRIPTION?",
    answer:
      "Yes! You can renew or extend any client line directly with a single click inside your reseller dashboard.",
  },
  {
    question: "CAN I CHANGE A CLIENT'S DEVICE TYPE?",
    answer:
      "Yes. You can switch line formats, update M3U URLs, or adjust Xtream Codes credentials at any time in the panel.",
  },
  {
    question: "HOW DO I SELL SUBSCRIPTIONS?",
    answer:
      "You can sell subscriptions through your own website, online channels, or local customer base. You establish your own retail pricing and keep 100% of your profit.",
  },
  {
    question: "CAN I CREATE SUB-RESELLERS?",
    answer:
      "Yes. From your master control panel, you can create sub-reseller logins and distribute credits from your own account balance.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the SMARTSGI Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming a SMARTSGI Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/447882781998?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="relative overflow-hidden bg-[#05030B] text-[#F8FAFC] py-20 sm:py-28">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="relative mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
              Reseller Program
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            <span className="text-white block sm:inline">SMARTSGI </span>
            <span className="text-gradient-hero block sm:inline">Reseller Program</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A8A0B8] leading-relaxed">
            Start your own branded IPTV business with SMARTSGI. High-capacity streaming infrastructure, flexible credit tiers, and comprehensive panel management. Check our <Link href="/channels" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">channel inventory</Link> or standard <Link href="/pricing" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">retail plans</Link>.
          </p>
        </header>

        {/* 5-Card Reseller Credit Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-20">
          {creditPlans.map((plan) => {
            const isFeatured = plan.popular;
            const isValue = plan.bestValue;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  isFeatured
                    ? "glass-card-featured border-[#9B3FF2] md:-translate-y-2"
                    : isValue
                    ? "glass-card border-[#FF7A00]/40 shadow-[0_0_25px_rgba(255,122,0,0.15)]"
                    : "glass-card"
                }`}
              >
                {/* Badge if available */}
                {(isFeatured || isValue) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#9B3FF2] to-[#EC4899]"
                          : "bg-gradient-to-r from-[#FF7A00] to-[#FF8A1F]"
                      }`}
                    >
                      {isFeatured ? "MOST POPULAR" : "BEST VALUE"}
                    </span>
                  </div>
                )}

                <div className="text-center pt-2 pb-5 border-b border-white/[0.08]">
                  <h3 className="text-xl font-black text-white tracking-wide uppercase mb-1">
                    <Link href="/reseller" className="hover:text-[#C084FC] transition-colors">
                      {plan.credits} CREDITS
                    </Link>
                  </h3>
                  <span className="text-xs text-[#A8A0B8]">
                    ${(plan.price / plan.credits).toFixed(2)} per credit
                  </span>

                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      ${plan.price}
                    </span>
                  </div>
                </div>

                <ul className="py-6 space-y-3 flex-grow text-left">
                  {planFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-white/85">
                      <Check className="w-4 h-4 shrink-0 text-[#C084FC] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleOrderPanel(plan)}
                    className={`w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md ${
                      isFeatured
                        ? "btn-primary-purple hover:scale-105"
                        : isValue
                        ? "btn-secondary-orange hover:scale-105"
                        : "btn-outline-glass hover:border-[#9B3FF2]/50 hover:bg-[#9B3FF2]/20 text-white"
                    }`}
                  >
                    Order Panel
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advantages Grid */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
              Reseller <Link href="/reseller" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Platform Advantages</Link>
            </h2>
            <p className="text-[#A8A0B8] text-sm sm:text-base">
              Everything you need to operate and grow an independent IPTV streaming business, backed by our <Link href="/contact" className="text-white/90 hover:underline">dedicated technical support</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.title} className="p-7 rounded-3xl glass-card flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#9B3FF2]/10 border border-[#9B3FF2]/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#C084FC]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white tracking-wide uppercase mb-2">
                      <Link href={adv.href} className="hover:text-[#C084FC] transition-colors">
                        {adv.title}
                      </Link>
                    </h3>
                    <div className="text-sm text-[#A8A0B8] leading-relaxed">
                      {adv.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reseller FAQs */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Reseller <Link href="/faq" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Questions &amp; Answers</Link>
            </h2>
          </div>

          <div className="space-y-4">
            {resellerFaqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl glass-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#A8A0B8] transition-transform ${isOpen ? "rotate-180 text-[#C084FC]" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#A8A0B8] leading-relaxed border-t border-white/[0.04]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
