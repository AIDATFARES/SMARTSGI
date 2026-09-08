import Link from "next/link";

export default function ComparisonSection() {
  const rows = [
    { feature: "Monthly Cost", smartsgi: "From $4.2/mo", cable: "$80-$200/mo", other: "$10-$30/mo (unreliable)" },
    { feature: "Live Channels", smartsgi: "+50,000 Channels", cable: "200-500", other: "5,000-15,000" },
    { feature: "4K Streaming", smartsgi: "✓ Native 4K", cable: "Limited", other: "Rarely stable" },
    { feature: "VOD Library", smartsgi: "+120,000 Films", cable: "Add-on cost", other: "Varies wildly" },
    { feature: "Server Uptime", smartsgi: "99.9% Guaranteed", cable: "99%", other: "60-85%" },
    { feature: "Buffering", smartsgi: "Zero — Ever", cable: "Rare", other: "Common at peak" },
    { feature: "Setup Time", smartsgi: "5 minutes", cable: "Technician visit", other: "Varies" },
    { feature: "Contract", smartsgi: "No", cable: "12-24 months", other: "Sometimes" },
    { feature: "Multi-Screen", smartsgi: "✓ Included", cable: "Extra cost", other: "Limited" },
    { feature: "Free Trial", smartsgi: "✓ Available", cable: "No", other: "Rare" },
  ];

  return (
    <section className="bg-transparent text-black relative z-10 border-b border-black/10 overflow-hidden py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20">
            IPTV vs Cable TV
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
            Why SMARTSGI is the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
              Ultimate Cable Alternative
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-6 leading-relaxed max-w-2xl mx-auto">
            Discover why thousands of users are cutting the cord and switching to SMARTSGI. Our premium IPTV service offers an expansive <Link href="/channels" className="font-semibold text-[#36a9ff] hover:text-[#2196f3] hover:underline transition-colors">channel lineup</Link>, stunning 4K streaming quality, and reliable anti-freeze technology—all at a fraction of the cost of traditional cable TV.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="bg-gray-50/40 backdrop-blur-md rounded-3xl border border-[#36a9ff]/30 p-8 pb-10 relative overflow-hidden">
            
            {/* Vertical Borders for SMARTSGI Column */}
            <div className="absolute top-0 bottom-0 left-[25%] w-[25%] border-x border-[#36a9ff]/30 z-0"></div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-2 relative z-10">
              <div className="text-left font-black text-slate-400 uppercase tracking-widest text-xs flex items-center pb-4 pl-4">Features</div>
              
              <div className="flex flex-col items-center justify-center bg-[#36a9ff] text-white rounded-2xl py-3 shadow-[0_0_20px_rgba(54,169,255,0.4)] border border-white/40 transform -translate-y-2 relative z-20 mx-2">
                <span className="text-[8px] uppercase tracking-widest font-black opacity-90 mb-0.5">Premium Choice</span>
                <span className="text-[22px] font-black tracking-tight leading-none">SMARTSGI</span>
              </div>
              
              <div className="text-center font-black text-slate-400 uppercase tracking-widest text-xs flex items-center justify-center pb-4">Cable / Satellite</div>
              <div className="text-center font-black text-slate-400 uppercase tracking-widest text-xs flex items-center justify-center pb-4">Other IPTV</div>
            </div>

            {/* Table Rows */}
            <div className="relative z-10">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 py-5 border-b border-[#36a9ff]/20 last:border-0 items-center">
                  <div className="font-bold text-gray-800 text-sm md:text-[15px] pl-4">{row.feature}</div>
                  <div className="font-black text-[#36a9ff] text-center text-[15px] md:text-[17px]">{row.smartsgi}</div>
                  <div className="font-medium text-slate-400 text-center text-xs md:text-[13px]">{row.cable}</div>
                  <div className="font-medium text-slate-400 text-center text-xs md:text-[13px]">{row.other}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Comparison (Cards) */}
        <div className="md:hidden space-y-8">
          <div className="bg-gradient-to-br from-[#36a9ff] to-[#2196f3] rounded-3xl p-1 relative shadow-xl">
            <div className="bg-black/20 text-white rounded-[1.35rem] p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-6 text-center">SMARTSGI</h3>
              <div className="space-y-4">
                {rows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-black/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-black/70 text-sm">{row.feature}</span>
                    <span className="font-bold text-black text-right">{row.smartsgi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#36a9ff]/20 p-6">
            <h3 className="text-xl font-bold mb-6 text-center text-slate-400">Cable / Satellite</h3>
            <div className="space-y-4">
              {rows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-black/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-600 text-sm">{row.feature}</span>
                  <span className="font-medium text-gray-700 text-right">{row.cable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center bg-gray-50 border border-[#36a9ff]/30 text-black font-black uppercase text-sm px-10 py-5 rounded-full hover:bg-[#051f33] hover:text-white hover:border-[#36a9ff] hover:shadow-[0_0_20px_rgba(54,169,255,0.4)] transition-all hover:-translate-y-1 gap-2"
          >
            View Plans & Pricing <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

