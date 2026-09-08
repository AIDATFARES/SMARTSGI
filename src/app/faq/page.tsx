"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Sparkles, Mail, MessageCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "What is IPTV?",
    answer: (
      <p>
        IPTV (Internet Protocol Television) delivers television programming and video content through your high-speed internet connection rather than traditional cables or satellite dishes. With SMARTSGI, this gives you access to live TV and video on demand across any compatible screen in your home or while traveling. Check our{" "}
        <Link href="/channels" className="text-[#C084FC] underline hover:text-white transition-colors">
          complete channel lineup
        </Link>{" "}
        to see what&apos;s included.
      </p>
    ),
  },
  {
    question: "How do I receive my IPTV credentials?",
    answer: (
      <p>
        Once your order is processed, your activation details are sent immediately via email or WhatsApp. Your credentials include an M3U playlist link and Xtream Codes API parameters (Server URL, Username, Password) that can be plugged into your chosen player. See our{" "}
        <Link href="/how-it-works" className="text-[#C084FC] underline hover:text-white transition-colors">
          quick start walkthrough
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Which devices are supported by SMARTSGI?",
    answer: (
      <p>
        SMARTSGI is compatible with all major devices including Smart TVs (Samsung, LG, Sony), Amazon Fire TV Stick, Android TV boxes, Apple TV, iPhone, iPad, Android phones, Windows PCs, and Mac computers.
      </p>
    ),
  },
  {
    question: "How many devices can I use simultaneously?",
    answer: (
      <p>
        Simultaneous streaming depends on the active connection tier you choose (1, 2, or 3 devices). You can install your playlist across multiple devices and watch concurrently according to your selected plan limit in our{" "}
        <Link href="/pricing" className="text-[#C084FC] underline hover:text-white transition-colors">
          pricing section
        </Link>
        .
      </p>
    ),
  },
  {
    question: "How do I set up SMARTSGI on my device?",
    answer: (
      <p>
        Simply install a recognized IPTV player app (such as TiviMate, IPTV Smarters Pro, or IBO Player), select Xtream Codes or M3U Login, enter your SMARTSGI details, and start watching. Follow our detailed{" "}
        <Link href="/installation" className="text-[#C084FC] underline hover:text-white transition-colors">
          Installation Guides
        </Link>{" "}
        for step-by-step instructions for each platform.
      </p>
    ),
  },
  {
    question: "How long does account activation take?",
    answer: (
      <p>
        Activation is fast. In most cases, your connection parameters are generated and sent within 5 to 30 minutes following confirmed payment.
      </p>
    ),
  },
  {
    question: "What payment methods are supported?",
    answer: (
      <p>
        We accept standard payment options including major credit/debit cards, PayPal, and leading cryptocurrencies (Bitcoin, USDT). Payment guidance is provided during checkout.
      </p>
    ),
  },
  {
    question: "What is the refund policy?",
    answer: (
      <p>
        We want you to be completely satisfied with your streaming experience. We recommend requesting a 24-hour trial to test device compatibility before purchasing extended plans. Review our full{" "}
        <Link href="/refund-policy" className="text-[#C084FC] underline hover:text-white transition-colors">
          Refund Policy
        </Link>{" "}
        for details.
      </p>
    ),
  },
  {
    question: "How can I contact technical support?",
    answer: (
      <p>
        Our support team is available 24/7 on WhatsApp and through our{" "}
        <Link href="/contact" className="text-[#C084FC] underline hover:text-white transition-colors">
          Contact Form
        </Link>
        . Real human assistance is available around the clock to help with playlist setup or troubleshooting.
      </p>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full relative z-10">
      
      {/* Header */}
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
            Help Center
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
          <span className="text-white block sm:inline">Frequently Asked </span>
          <span className="text-gradient-hero block sm:inline">Questions</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A8A0B8] leading-relaxed">
          Find straightforward answers regarding SMARTSGI <Link href="/pricing" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">subscriptions</Link>, <Link href="/installation" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">device compatibility</Link>, streaming quality across our <Link href="/channels" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">channel lineup</Link>, and activation.
        </p>
      </header>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4 mb-24">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl glass-card transition-all duration-300 overflow-hidden ${
                isOpen ? "border-[#9B3FF2]/50 shadow-[0_0_25px_rgba(155,63,242,0.15)] bg-white/[0.04]" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
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

      {/* Support Cards */}
      <section className="pt-16 border-t border-white/[0.08] max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
            Still Have <Link href="/contact" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Questions</Link>?
          </h2>
          <p className="mt-2 text-sm text-[#A8A0B8]">
            Our support team is standing by 24/7 to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl glass-card text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#9B3FF2]/15 border border-[#9B3FF2]/30 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#C084FC]" />
            </div>
            <h3 className="text-lg font-black text-white mb-1">
              <Link href="/contact" className="hover:text-[#C084FC] transition-colors">
                Email Support
              </Link>
            </h3>
            <p className="text-xs text-[#A8A0B8] mb-4">Send us your question anytime.</p>
            <a href="mailto:support@smartsgi.stream" className="text-sm font-bold text-[#C084FC] hover:text-white transition-colors">
              support@smartsgi.stream
            </a>
          </div>

          <div className="p-8 rounded-3xl glass-card text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <h3 className="text-lg font-black text-white mb-1">
              <Link href="/contact" className="hover:text-[#25D366] transition-colors">
                WhatsApp Live Chat
              </Link>
            </h3>
            <p className="text-xs text-[#A8A0B8] mb-4">Immediate real-time technical help.</p>
            <a 
              href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20SMARTSGI."
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-[#25D366] hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
