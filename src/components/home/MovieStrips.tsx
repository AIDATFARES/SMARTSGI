import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "./BrandMarquee";

export default function MovieStrips() {
  const movieImages = [
    "7R05LaU8Em2zN0LaAqEZMVCx3wb.webp",
    "8iFUWLKBAWDrJ9rOunscgIDrGQ1.webp",
    "Lanterns-S01E.jpg",
    "Mutiny-2026.jpg",
    "OBX-S05.jpg",
    "SMBND-2026-5.jpg",
    "c987gxFjXqYOxZEZKcTkS1ONTWH.webp",
    "hFborW6HmffKL05GIWlkTFdvVpN.webp",
    "iLhi3wqsLOdHB61vySJRm7y09XS.webp",
    "iwCeOpuBtuTP1kLosqgniey5OvX.webp",
    "zqxIT48mWFsC4NSjGEHAcp1pjEo.webp",
    "فيلم-Demon-Slayer-Infinity-Castle-2025-مترجم.jpg",
    "فيلم-Evil-Dead-Burn-2026-مترجم.jpg",
    "فيلم-The-Last-House-2026-مترجم.jpg",
    "مسلسل-From-الموسم-الرابع-مترجم-كامل.jpg",
    "مسلسل-House-of-The-Dragon-الموسم-الثالث.jpg",
    "مسلسل-Reacher-الموسم-الرابع-مترجم-كامل.jpg"
  ];

  return (
    <section className="w-full overflow-hidden bg-transparent py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-[#36a9ff]/10 border border-[#36a9ff]/30 text-[#36a9ff] text-xs font-bold tracking-widest uppercase mb-4">
          Endless Entertainment
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
          THE ULTIMATE <span className="text-[#36a9ff]">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore a massive library of 200,000+ Films & Series. From the latest blockbuster hits to timeless classics, all available instantly in crystal-clear 4K Ultra HD.
        </p>
        <Link 
          href="/channels"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#9B3FF2]/30 text-white text-sm md:text-base font-black tracking-wide uppercase glass-card hover:border-[#9B3FF2] hover:shadow-[0_0_20px_rgba(155,63,242,0.4)] transition-all duration-300 gap-2 hover:-translate-y-1"
        >
          View SMARTSGI Channel List <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Brand Logos Tape */}
      <div className="z-20 w-full mb-10">
        <span className="block text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-6">50,000+ Premium Live Channels</span>
        <BrandMarquee />
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="w-full mb-4 z-20">
        <span className="block text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">200,000+ Latest Movies & Series</span>
      </div>
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...movieImages, ...movieImages, ...movieImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[160px] h-[200px] md:w-[240px] md:h-[300px] relative rounded-xl overflow-hidden shadow-xl border border-[#36a9ff]/20 hover:scale-105 hover:border-[#36a9ff] hover:shadow-[0_0_30px_rgba(54,169,255,0.3)] hover:z-10 transition-all duration-300">
              <Image src={`/movie_new/${img}`} alt="Media Thumbnail" fill sizes="(max-width: 640px) 240px, 340px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>


      
      {/* Gradient Masks removed per user request */}
    </section>
  );
}
