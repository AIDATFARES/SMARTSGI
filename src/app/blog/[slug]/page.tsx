import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";
import BlogOfferCard from "@/components/blog/BlogOfferCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found | SMARTSGI' };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };

}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: (props: any) => <h2 className="text-2xl font-black mt-12 mb-6 text-white uppercase tracking-tight" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: (props: any) => <h3 className="text-xl font-black mt-8 mb-4 text-[#C084FC] tracking-wide" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: (props: any) => <p className="mb-6 leading-relaxed text-[#A8A0B8]" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[#A8A0B8]" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#A8A0B8]" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: (props: any) => <a className="text-[#C084FC] hover:text-white underline underline-offset-2 font-semibold transition-colors" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: (props: any) => <blockquote className="border-l-4 border-[#9B3FF2] pl-4 py-2 mb-6 italic bg-white/[0.03] rounded-r text-[#A8A0B8]" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: (props: any) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse glass-card rounded-xl" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} /></div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: (props: any) => <th className="border-b border-white/[0.08] py-3 px-4 font-bold text-white bg-white/[0.05]" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: (props: any) => <td className="border-b border-white/[0.05] py-3 px-4 text-[#A8A0B8]" {...Object.fromEntries(Object.entries(props).filter(([k]) => k !== 'node'))} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: (props: any) => (
      <span className="my-8 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.src} alt={props.alt} className="rounded-2xl max-w-full shadow-2xl border border-white/[0.08]" />
        {props.alt && <span className="text-xs text-center block mt-2 text-[#777083]">{props.alt}</span>}
      </span>
    ),
    cta: () => <div className="not-prose my-12"><BlogOfferCard /></div>,
  };

  return (
    <main className="min-h-screen bg-[#05030B] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1024px] mx-auto w-full relative z-10">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href="/blog" className="inline-flex items-center text-[#C084FC] hover:text-white mb-8 transition-colors group font-bold tracking-wider uppercase text-xs">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <article className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border-white/[0.08]">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-[#9B3FF2]/20 text-[#C084FC] rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 w-max border border-[#9B3FF2]/30">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-[#777083] font-bold uppercase tracking-wider text-xs">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author || "SMARTSGI Team"}</span>
          </div>
        </header>

        {(post.coverImage || post.image) && (
          <div className="mb-12 rounded-2xl overflow-hidden relative w-full h-[280px] sm:h-[450px] bg-[#10091B]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage || post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-[#A8A0B8]">
          {beforeFaq.split("<cta></cta>").map((section, index, array) => (
            <React.Fragment key={index}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {section}
              </ReactMarkdown>
              {index < array.length - 1 && (
                <div className="not-prose my-12 w-full"><BlogOfferCard /></div>
              )}
            </React.Fragment>
          ))}

          {faqs.length > 0 && (
            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">
                <Link href="/faq" className="hover:text-[#C084FC] transition-colors">
                  Frequently Asked Questions
                </Link>
              </h2>
              <ArticleFAQAccordion faqs={faqs} />
            </div>
          )}

          {afterFaq && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {afterFaq}
            </ReactMarkdown>
          )}
        </div>
      </article>

      {/* Related Articles */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="mt-20 pt-12 border-t border-white/[0.08]">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
              <Link href="/blog" className="hover:text-[#C084FC] transition-colors">
                Related Articles
              </Link>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                  <article className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:border-[#9B3FF2]/50 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="h-40 relative overflow-hidden shrink-0 bg-[#10091B]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        alt={relPost.title}
                        src={relPost.coverImage || relPost.image || "/imggt1_2.webp"}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-[10px] text-[#C084FC] font-bold tracking-widest uppercase mb-2">{relPost.category}</span>
                      <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-[#C084FC] transition-colors leading-snug">
                        {relPost.title}
                      </h3>
                      <p className="text-[10px] text-[#777083] font-semibold tracking-wider uppercase mt-auto">
                        {relPost.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
    </main>
  );
}
