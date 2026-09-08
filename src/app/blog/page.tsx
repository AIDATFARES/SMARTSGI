import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Streaming Tutorials | SMARTSGI",
  description: "Stay updated with the latest in IPTV streaming guides, player optimization tutorials, and industry insights with SMARTSGI.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto w-full relative z-10">
      {/* Header */}
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B3FF2]/30 bg-[#9B3FF2]/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C084FC]">
            Tutorials &amp; Guides
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
          <span className="text-white block sm:inline">Streaming Insights &amp; </span>
          <span className="text-gradient-hero block sm:inline">Tutorials</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A8A0B8] leading-relaxed">
          Explore comprehensive tutorials, player configurations, and streaming guides to get the most out of your SMARTSGI subscription.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-20">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-300 hover:border-[#9B3FF2]/50 hover:shadow-[0_0_35px_rgba(155,63,242,0.25)]">
              <div className="md:w-3/5 h-64 md:h-[420px] relative overflow-hidden bg-[#10091B]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  alt={featuredPost.title}
                  src={featuredPost.coverImage || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030B] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#05030B]/90"></div>
              </div>

              <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center z-10 relative">
                <span className="inline-block px-3 py-1 bg-[#9B3FF2]/20 text-[#C084FC] rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 w-max border border-[#9B3FF2]/30">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#C084FC] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-[#A8A0B8] text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-3 mt-auto text-xs font-black uppercase tracking-wider text-white">
                  <span>Read Article</span>
                  <ArrowRight className="text-[#FF7A00] w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="glass-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer hover:border-[#9B3FF2]/50 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="h-52 relative overflow-hidden shrink-0 bg-[#10091B]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  alt={post.title}
                  src={post.coverImage || ""}
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-[#C084FC] uppercase tracking-wider mb-2 block">
                  {post.category}
                </span>
                <h3 className="text-lg font-black text-white mb-3 group-hover:text-[#C084FC] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A0B8] line-clamp-3 mb-6 leading-relaxed flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-white pt-4 border-t border-white/[0.06] mt-auto">
                  <span>Read Guide</span>
                  <ArrowRight className="text-[#FF7A00] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
