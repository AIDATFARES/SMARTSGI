import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer & DMCA Policy | SMARTSGI",
  description: "Legal Disclaimer and DMCA policy for SMARTSGI IPTV services.",
  alternates: {
    canonical: "/dmca",
  },
};

const sections = [
  {
    title: "1. No Legal Advice",
    content: (
      <p className="text-sm text-[#A8A0B8] leading-relaxed">
        Nothing presented on this website or in our direct communications constitutes legal or compliance counsel. If you have questions regarding digital streaming regulations in your jurisdiction, consult a qualified attorney. For service questions, review our{" "}
        <Link href="/faq" className="text-[#C084FC] underline hover:text-white">
          FAQ
        </Link>
        .
      </p>
    ),
  },
  {
    title: "2. Content Ownership and Hosting",
    content: (
      <p className="text-sm text-[#A8A0B8] leading-relaxed">
        SMARTSGI does not host, manage, upload, store, or distribute copyrighted media streams. All streams accessed via customer playlists are sourced from independent third parties across the public web. All channel trademarks, logos, and brand identities belong exclusively to their respective owners and are referenced solely for identification purposes in our{" "}
        <Link href="/channels" className="text-[#C084FC] underline hover:text-white">
          channel lineup
        </Link>
        .
      </p>
    ),
  },
  {
    title: "3. Service Availability",
    content: (
      <p className="text-sm text-[#A8A0B8] leading-relaxed">
        Channel selections and on-demand catalogs can vary in availability, resolution, and regional accessibility without prior notice. SMARTSGI does not warrant the permanent uninterrupted availability of any single specific broadcast feed or event. Review our{" "}
        <Link href="/pricing" className="text-[#C084FC] underline hover:text-white">
          subscription plans
        </Link>{" "}
        for feature details.
      </p>
    ),
  },
  {
    title: "4. User Compliance",
    content: (
      <p className="text-sm text-[#A8A0B8] leading-relaxed">
        Users are solely responsible for ensuring their usage conforms with local regulations in their respective territory. Ensure you have the legal right to view public broadcasts in your area prior to connecting your player with our{" "}
        <Link href="/installation" className="text-[#C084FC] underline hover:text-white">
          setup guides
        </Link>
        .
      </p>
    ),
  },
  {
    title: "5. DMCA Takedown Notices",
    content: (
      <p className="text-sm text-[#A8A0B8] leading-relaxed">
        SMARTSGI respects intellectual property rights. If you are a copyright owner or authorized agent and believe that content indexed via our directory infringes your rights, please submit a detailed takedown notice with proof of authorization to our compliance desk via our{" "}
        <Link href="/contact" className="text-[#C084FC] underline hover:text-white">
          contact form
        </Link>{" "}
        or email legal@smartsgi.net.
      </p>
    ),
  },
];

export default function DmcaPage() {
  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <header className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
          <ShieldAlert className="w-3.5 h-3.5 text-[#FF7A00]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
            Legal Information
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          DMCA &amp; Legal Disclaimer
        </h1>
        <p className="text-sm text-[#A8A0B8] mt-3">
          Last updated: {new Date().getFullYear()} · SMARTSGI Compliance. Review our{" "}
          <Link href="/pricing" className="text-[#C084FC] underline hover:text-white">
            plans
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-[#C084FC] underline hover:text-white">
            support channels
          </Link>
          .
        </p>
      </header>

      <div className="space-y-8">
        {sections.map((sec, idx) => (
          <article key={idx} className="glass-card rounded-3xl p-8 border-white/[0.08]">
            <h2 className="text-xl font-black text-white mb-4">
              <Link href="/dmca" className="hover:text-[#C084FC] transition-colors">
                {sec.title}
              </Link>
            </h2>
            {sec.content}
          </article>
        ))}
      </div>
    </main>
  );
}
