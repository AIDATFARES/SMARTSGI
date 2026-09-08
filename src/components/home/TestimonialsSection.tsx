import { Star, ShieldCheck, MessageSquareQuote, UserCheck } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    location: "United States",
    device: "Firestick 4K",
    quote: "Setup was fast and smooth. The streams run crisp without interruptions during Sunday football games, and the EPG layout is very easy to navigate on the big screen.",
  },
  {
    name: "David L.",
    location: "United Kingdom",
    device: "Smart TV (Tizen)",
    quote: "Very impressed with the responsiveness of the customer support team on WhatsApp when I had questions configuring my playlist. Everything has been running reliably.",
  },
  {
    name: "Jean-Philippe R.",
    location: "Canada",
    device: "Apple TV",
    quote: "The video quality on high-motion sports and cinema channels is clear and fluid. Having multi-device support means the family can stream what they want without hassle.",
  },
  {
    name: "Elena M.",
    location: "Europe",
    device: "Android TV Box",
    quote: "Switched from traditional cable last month. The channel lineup has all the international channels we watch, and the activation instructions were clear from step one.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] glow-purple blur-[160px] pointer-events-none rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-extrabold uppercase tracking-[0.2em] text-[#C084FC] mb-4">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#A8A0B8] text-base sm:text-lg">
            Hear from cord-cutters who stream with SMARTSGI every day.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col justify-between p-7 rounded-3xl glass-card hover:border-[#9B3FF2]/50 hover:shadow-[0_0_30px_rgba(155,63,242,0.2)] transition-all duration-300"
            >
              <div>
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 text-[#FF8A1F] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-white/90 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-white">{t.name}</h4>
                  <p className="text-[11px] text-[#A8A0B8]">{t.location}</p>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] text-[#C084FC]">
                  {t.device}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
