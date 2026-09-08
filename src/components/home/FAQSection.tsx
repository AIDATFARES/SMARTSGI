"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is IPTV?",
    answer: (
      <p>
        IPTV stands for Internet Protocol Television. Instead of delivering content through traditional terrestrial antennas, satellite dishes, or cable cables, IPTV streams television programming directly over your internet connection. With SMARTSGI, this allows you to access live broadcasts and on-demand entertainment anywhere with a broadband network.
      </p>
    ),
  },
  {
    id: 2,
    question: "How do I receive my IPTV credentials?",
    answer: (
      <p>
        Once your subscription is processed, your personalized access parameters (including your M3U playlist URL, Xtream Codes API server address, username, and password) are sent promptly via email or direct message. You can paste these details directly into any compatible IPTV application.
      </p>
    ),
  },
  {
    id: 3,
    question: "Which devices are supported?",
    answer: (
      <p>
        SMARTSGI is compatible across all major hardware and operating systems, including Smart TVs (Samsung Tizen, LG webOS), Amazon Fire TV Stick, Android TV boxes, NVIDIA Shield, Apple TV, iPhone, iPad, Android mobile devices, Windows PCs, and macOS computers.
      </p>
    ),
  },
  {
    id: 4,
    question: "How many devices can I use?",
    answer: (
      <p>
        You can configure your subscription across multiple devices. Simultaneous streaming depends on the active connection plan you choose (1, 2, or 3 concurrent devices). If you require simultaneous viewing in multiple rooms, simply choose a multi-device plan during checkout.
      </p>
    ),
  },
  {
    id: 5,
    question: "How do I set up SMARTSGI?",
    answer: (
      <p>
        Setting up is straightforward: download a popular IPTV player app (such as TiviMate, IPTV Smarters Pro, IBO Player, or XCIPTV) on your device, choose login via Xtream Codes or M3U Playlist, enter the details provided in your welcome message, and begin watching. For detailed walkthroughs, consult our{" "}
        <Link href="/installation" className="text-[#C084FC] underline hover:text-white transition-colors">
          Setup Guides
        </Link>
        .
      </p>
    ),
  },
  {
    id: 6,
    question: "How long does activation take?",
    answer: (
      <p>
        Activation is handled rapidly. In most cases, account details and playlist URLs are generated and sent within 5 to 30 minutes following confirmed payment.
      </p>
    ),
  },
  {
    id: 7,
    question: "What payment methods are supported?",
    answer: (
      <p>
        We support safe and recognized payment options including major credit/debit cards, PayPal, and leading cryptocurrencies (Bitcoin, USDT). Payment instructions are confirmed when selecting your preferred plan.
      </p>
    ),
  },
  {
    id: 8,
    question: "What is the refund policy?",
    answer: (
      <p>
        We want you to be completely confident in your subscription. We encourage all new customers to test our service with a 24-hour trial prior to long-term purchase. For full details on cancellation and refund windows, please review our official{" "}
        <Link href="/refund-policy" className="text-[#C084FC] underline hover:text-white transition-colors">
          Refund Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: 9,
    question: "How can I contact support?",
    answer: (
      <p>
        Our customer support team is available 24/7 to assist with playlist setup, troubleshooting, or account inquiries. You can connect with us directly via WhatsApp or by emailing support through our{" "}
        <Link href="/contact" className="text-[#C084FC] underline hover:text-white transition-colors">
          Contact Page
        </Link>
        .
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C084FC]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Everything you need to know about SMARTSGI subscriptions, device setup, and streaming access.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl glass-card transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-[#9B3FF2]/50 shadow-[0_0_25px_rgba(155,63,242,0.15)] bg-white/[0.04]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#9B3FF2]/20 text-[#C084FC]" : "text-[#A8A0B8]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#A8A0B8] leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
