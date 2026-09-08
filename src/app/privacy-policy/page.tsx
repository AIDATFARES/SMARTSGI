import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SMARTSGI",
  description: "Learn how SMARTSGI collects, uses, and safeguards customer information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect only the essential personal details needed to set up and manage your IPTV subscription, communicate account parameters, and process billing. This typically includes your contact email address, transaction identifiers, and technical connection logs necessary for anti-freeze routing.",
    ],
  },
  {
    title: "2. How We Use Information",
    content: [
      "Collected information is utilized strictly to provide active subscription credentials, process order transactions, troubleshoot client connection issues, and maintain server reliability against abuse or DDoS threats.",
    ],
  },
  {
    title: "3. Payment Data Security",
    content: [
      "All financial transactions are conducted through external, industry-standard encrypted payment gateways. SMARTSGI does not store complete credit card numbers or sensitive banking passwords on our local servers.",
    ],
  },
  {
    title: "4. Cookies and Tracking",
    content: [
      "We employ minimal, non-intrusive functional cookies essential for site navigation, session management, and shopping cart persistence. We do not sell user data to advertising brokers.",
    ],
  },
  {
    title: "5. Data Retention & Contact",
    content: [
      "Account records are maintained for the active duration of your subscription and for regulatory accounting compliance. To request account deletion or data clarification, please email privacy@smartsgi.net.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <header className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C084FC]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
            Data Protection
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#A8A0B8] mt-3">
          Last updated: {new Date().getFullYear()} · SMARTSGI
        </p>
      </header>

      <div className="space-y-8">
        {sections.map((sec, idx) => (
          <article key={idx} className="glass-card rounded-3xl p-8 border-white/[0.08]">
            <h2 className="text-xl font-black text-white mb-4">{sec.title}</h2>
            {sec.content.map((p, pIdx) => (
              <p key={pIdx} className="text-sm text-[#A8A0B8] leading-relaxed">
                {p}
              </p>
            ))}
          </article>
        ))}
      </div>
    </main>
  );
}
