"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Tv, HelpCircle, ShieldCheck, Zap, CreditCard, Headphones, MonitorSmartphone } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  durationLabel: string;
  months: number;
  basePrice: number;
  popular?: boolean;
  bestValue?: boolean;
  discountBadge?: string;
}

const plans: Plan[] = [
  {
    id: "1-month",
    name: "1 MONTH",
    durationLabel: "1 Month Access",
    months: 1,
    basePrice: 14.99,
  },
  {
    id: "3-months",
    name: "3 MONTHS",
    durationLabel: "3 Months Access",
    months: 3,
    basePrice: 35.00,
    discountBadge: "SAVE 22%",
  },
  {
    id: "6-months",
    name: "6 MONTHS",
    durationLabel: "6 Months Access",
    months: 6,
    basePrice: 49.99,
    discountBadge: "SAVE 44%",
  },
  {
    id: "1-year",
    name: "1 YEAR",
    durationLabel: "12 Months Access",
    months: 12,
    basePrice: 69.99,
    popular: true,
    discountBadge: "MOST POPULAR",
  },
  {
    id: "2-years",
    name: "2 YEARS",
    durationLabel: "24 Months Access",
    months: 24,
    basePrice: 119.99,
    bestValue: true,
    discountBadge: "BEST VALUE",
  },
];

const planFeatures = [
  "Live TV channels worldwide",
  "Movies & Series on-demand catalog",
  "Ultra HD, Full HD & HD streams",
  "Electronic Program Guide (EPG)",
  "Multi-device ecosystem support",
  "Regular playlist updates",
  "24/7 dedicated customer assistance",
  "Optimized anti-freeze streaming",
];

const includedFeatures = [
  { icon: Tv, title: "Extensive Channel Selection", text: "Stream sports, news, and premier entertainment channels from around the world." },
  { icon: MonitorSmartphone, title: "Curated VOD Catalog", text: "Explore hit movies and popular television series available on demand." },
  { icon: Zap, title: "Anti-Freeze Technology", text: "Optimized server routes designed to deliver consistent, stable stream playback." },
  { icon: Headphones, title: "24/7 Customer Support", text: "Dedicated human support team ready to assist with playlist setup and device questions." },
  { icon: Sparkles, title: "Instant Activation", text: "Your login credentials and playlist parameters are sent promptly following checkout." },
  { icon: CreditCard, title: "Interactive TV Guide", text: "Browse program schedules with an integrated electronic programme guide." },
];

const billingQuestions = [
  { 
    question: "1. Which payment methods are accepted?", 
    answer: "We support recognized payment options including major credit/debit cards, PayPal, and cryptocurrencies (Bitcoin, USDT). For custom payment inquiries, reach out via WhatsApp." 
  },
  { 
    question: "2. Is my purchase secure?", 
    answer: "Yes, all order processing is conducted via encrypted payment gateways to ensure maximum transaction safety." 
  },
  { 
    question: "3. Will my subscription renew automatically?", 
    answer: "No automated surprise charges. When your subscription period nears expiration, you receive a reminder allowing you to renew manually at your convenience." 
  },
  { 
    question: "4. Can I change my active connection count?", 
    answer: "Yes! If you need to add device connections for additional rooms in your household, contact our support team and we will assist with plan upgrades." 
  },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState<number>(1);

  const calculateTotalPrice = (plan: Plan) => {
    return (plan.basePrice * devices).toFixed(2);
  };

  const calculateMonthlyRate = (plan: Plan) => {
    return ((plan.basePrice * devices) / plan.months).toFixed(2);
  };

  const handleSubscribe = (plan: Plan) => {
    const message = encodeURIComponent(
      `Hello! I would like to purchase the SMARTSGI ${plan.name} plan for ${devices} device connection${devices > 1 ? "s" : ""} ($${calculateTotalPrice(plan)}).`
    );
    window.open(`https://wa.me/213552069874?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative overflow-hidden bg-[#05030B] text-[#F8FAFC] py-16 sm:py-24">
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <header className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
              Transparent Pricing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase">
            <span className="text-white block sm:inline">SMARTSGI </span>
            <span className="text-gradient-hero block sm:inline">Subscription Plans</span>
          </h1>
          <p className="mx-auto mt-6 text-base sm:text-lg text-[#A8A0B8] leading-relaxed max-w-2xl">
            Select your preferred subscription period. Enjoy larger savings on longer durations and connect your whole home with multi-device options.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-semibold text-[#777083]">
            <Link href="/installation" className="text-[#C084FC] hover:text-white underline transition-colors">
              Setup Guides
            </Link>
            <span>•</span>
            <Link href="/channels" className="text-[#C084FC] hover:text-white underline transition-colors">
              Channel Lineup
            </Link>
          </div>
        </header>

        {/* Device Switcher */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#A8A0B8]">
            <Tv className="w-4 h-4 text-[#C084FC]" />
            <span>Select Active Connections</span>
          </div>

          <div className="inline-flex p-1.5 rounded-full border border-white/[0.08] bg-[#080511]/80 backdrop-blur-md">
            {[1, 2, 3].map((num) => {
              const active = devices === num;
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => setDevices(num)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-300 uppercase ${
                    active
                      ? "bg-gradient-to-r from-[#9B3FF2] to-[#9333EA] text-white shadow-[0_0_20px_rgba(155,63,242,0.5)]"
                      : "text-[#A8A0B8] hover:text-white"
                  }`}
                >
                  {num} Device{num > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Card Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-20">
          {plans.map((plan) => {
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
                {plan.discountBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#9B3FF2] to-[#EC4899]"
                          : isValue
                          ? "bg-gradient-to-r from-[#FF7A00] to-[#FF8A1F]"
                          : "bg-white/10 border border-white/20"
                      }`}
                    >
                      {plan.discountBadge}
                    </span>
                  </div>
                )}

                <div className="text-center pt-2 pb-5 border-b border-white/[0.08]">
                  <h3 className="text-lg font-black text-white tracking-wide uppercase mb-1">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#A8A0B8]">
                    {devices} Connection{devices > 1 ? "s" : ""}
                  </span>

                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      ${calculateTotalPrice(plan)}
                    </span>
                  </div>

                  <div className="mt-2.5 inline-block">
                    <span className="text-[11px] font-bold text-[#C084FC] bg-[#9B3FF2]/10 border border-[#9B3FF2]/20 px-3 py-1 rounded-full">
                      ${calculateMonthlyRate(plan)} / month
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
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md ${
                      isFeatured
                        ? "btn-primary-purple hover:scale-105"
                        : isValue
                        ? "btn-secondary-orange hover:scale-105"
                        : "btn-outline-glass hover:border-[#9B3FF2]/50 hover:bg-[#9B3FF2]/20 text-white"
                    }`}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Trial Banner */}
        <div className="max-w-3xl mx-auto rounded-2xl glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-l-[#FF7A00] mb-24">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-[#FF8A1F]" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white uppercase tracking-wide">
                Want to test before subscribing?
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A0B8]">
                Request a 24-hour test line to verify stream stability on your favorite device.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024H%20trial%20for%20SMARTSGI."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-orange px-7 py-3 text-xs font-black tracking-wider uppercase shrink-0"
          >
            Get Free Trial
          </a>
        </div>

        {/* Feature Matrix / Highlights */}
        <div className="mt-16 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
              Everything Included in Every Plan
            </h2>
            <p className="text-[#A8A0B8] text-sm sm:text-base">
              Regardless of duration, every SMARTSGI subscription includes full premium streaming capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="p-6 rounded-2xl glass-card flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#9B3FF2]/10 border border-[#9B3FF2]/30 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C084FC]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white tracking-wide mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A0B8] leading-relaxed">
                      {feat.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Billing FAQ */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Pricing &amp; Billing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {billingQuestions.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card">
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-sm text-[#A8A0B8] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
