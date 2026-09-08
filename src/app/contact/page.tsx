"use client";

import Link from "next/link";
import { Mail, MessageCircle, ArrowRight, Clock, Send, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto w-full relative z-10">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
            Customer Care
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
          <span className="text-white block sm:inline">Get in Touch with </span>
          <span className="text-gradient-hero block sm:inline">SMARTSGI Support</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A8A0B8] leading-relaxed">
          We are here to assist with <Link href="/installation" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">device activation</Link>, playlist links, or subscription inquiries across our <Link href="/pricing" className="text-white/90 hover:text-[#FF8A1F] underline decoration-[#FF8A1F]/40 underline-offset-2 transition-colors">plans</Link>. Check our <Link href="/faq" className="text-white/90 hover:text-[#C084FC] underline decoration-[#9B3FF2]/40 underline-offset-2 transition-colors">FAQ</Link> for fast answers or connect with our dedicated support staff 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group hover:border-[#9B3FF2]/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#9B3FF2]/15 border border-[#9B3FF2]/30 flex items-center justify-center mb-4">
              <Mail className="text-[#C084FC] w-6 h-6" />
            </div>
            <h3 className="font-black text-xl text-white mb-2">
              <Link href="/contact" className="hover:text-[#C084FC] transition-colors">
                Email Support
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A0B8] mb-4">For general inquiries and billing support.</p>
            <a
              className="text-[#C084FC] font-bold hover:text-white transition-colors text-sm"
              href="mailto:support@smartsgi.stream"
            >
              support@smartsgi.stream
            </a>
          </div>

          <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group hover:border-[#25D366]/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center mb-4">
              <MessageCircle className="text-[#25D366] w-6 h-6" />
            </div>
            <h3 className="font-black text-xl text-white mb-2">
              <Link href="/contact" className="hover:text-[#25D366] transition-colors">
                WhatsApp Live Chat
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A0B8] mb-4">
              Fastest way to reach us for real-time activation assistance.
            </p>
            <a
              className="btn-secondary-orange px-6 py-2.5 text-xs font-black uppercase tracking-wider flex items-center gap-2"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20SMARTSGI."
              target="_blank"
              rel="noreferrer"
            >
              Start Chat <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center mb-4">
              <Clock className="text-[#FF8A1F] w-6 h-6" />
            </div>
            <h3 className="font-black text-xl text-white mb-2">
              <Link href="/faq" className="hover:text-[#FF8A1F] transition-colors">
                Response Time
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A0B8]">
              We typically reply within minutes on WhatsApp and under 2 hours via email.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 h-full border-[#9B3FF2]/30">
            <h2 className="text-2xl font-black text-white uppercase tracking-wide mb-8 border-b border-white/[0.08] pb-6">
              Send a <Link href="/contact" className="text-white hover:text-[#C084FC] underline decoration-[#9B3FF2]/50 underline-offset-4 transition-colors">Message</Link>
            </h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A8A0B8]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-white/[0.04] border border-white/[0.1] focus:border-[#9B3FF2] focus:ring-1 focus:ring-[#9B3FF2] rounded-2xl px-5 py-3.5 text-white placeholder:text-[#777083] focus:outline-none transition-all text-sm font-medium"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A8A0B8]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-white/[0.04] border border-white/[0.1] focus:border-[#9B3FF2] focus:ring-1 focus:ring-[#9B3FF2] rounded-2xl px-5 py-3.5 text-white placeholder:text-[#777083] focus:outline-none transition-all text-sm font-medium"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#A8A0B8]" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-white/[0.04] border border-white/[0.1] focus:border-[#9B3FF2] focus:ring-1 focus:ring-[#9B3FF2] rounded-2xl px-5 py-3.5 text-white placeholder:text-[#777083] focus:outline-none transition-all text-sm font-medium"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#A8A0B8]" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-white/[0.04] border border-white/[0.1] focus:border-[#9B3FF2] focus:ring-1 focus:ring-[#9B3FF2] rounded-2xl px-5 py-3.5 text-white placeholder:text-[#777083] focus:outline-none transition-all resize-none text-sm font-medium"
                  id="message"
                  name="message"
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                ></textarea>
              </div>

              <div className="mt-2 flex justify-end">
                <button
                  className="btn-primary-purple px-9 py-3.5 text-xs font-black tracking-wider uppercase flex items-center gap-2 group shadow-lg"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
