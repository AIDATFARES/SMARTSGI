"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Tv, Zap } from "lucide-react";

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
  "Movies & Series library on demand",
  "Ultra HD, Full HD & HD streams",
  "Electronic Program Guide (EPG)",
  "Multi-device compatibility",
  "Regular playlist updates",
  "24/7 dedicated customer support",
  "Optimized anti-freeze streaming",
];

export default function PricingSection() {
  const [devices, setDevices] = useState<number>(1);

  const calculateTotalPrice = (plan: Plan) => {
    return (plan.basePrice * devices).toFixed(2);
  };

  const calculateMonthlyRate = (plan: Plan) => {
    return ((plan.basePrice * devices) / plan.months).toFixed(2);
  };

  const handleSubscribe = (plan: Plan) => {
    const message = encodeURIComponent(
      `Hello! I would like to subscribe to the SMARTSGI ${plan.name} plan for ${devices} device connection${devices > 1 ? "s" : ""} ($${calculateTotalPrice(plan)}).`
    );
    window.open(`https://wa.me/213552069874?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-35" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Choose Your Best <Link href="/pricing" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">IPTV Subscription Plan</Link>
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Explore SMARTSGI plans and choose the option that fits your streaming needs. Browse our <Link href="/channels" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">channel directory</Link> or learn <Link href="/how-it-works" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">how it works</Link>.
          </p>
        </div>

        {/* Device Switcher Toggle */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
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
                {/* Badge if available */}
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

                {/* Plan Title & Duration */}
                <div className="text-center pt-2 pb-5 border-b border-white/[0.08]">
                  <h3 className="text-lg font-black text-white tracking-wide uppercase mb-1">
                    <Link href="/pricing" className="hover:text-[#C084FC] transition-colors">
                      {plan.name}
                    </Link>
                  </h3>
                  <span className="text-xs font-semibold text-[#A8A0B8]">
                    {devices} Connection{devices > 1 ? "s" : ""}
                  </span>

                  {/* Price Display */}
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      ${calculateTotalPrice(plan)}
                    </span>
                  </div>

                  {/* Monthly rate pill */}
                  <div className="mt-2.5 inline-block">
                    <span className="text-[11px] font-bold text-[#C084FC] bg-[#9B3FF2]/10 border border-[#9B3FF2]/20 px-3 py-1 rounded-full">
                      ${calculateMonthlyRate(plan)} / month
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="py-6 space-y-3 flex-grow text-left">
                  {planFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-white/85">
                      <Check className="w-4 h-4 shrink-0 text-[#C084FC] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
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

        {/* Free 24H Trial Banner */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-l-[#FF7A00]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-[#FF8A1F]" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white uppercase tracking-wide">
                Want to test before subscribing?
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A0B8]">
                Request a 24-hour test line to verify stream stability on your favorite device with our easy <Link href="/installation" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">setup guide</Link>, or browse our <Link href="/faq" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">frequently asked questions</Link>.
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

      </div>
    </section>
  );
}
