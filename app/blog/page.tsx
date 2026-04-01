import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Bloom Commons",
  description:
    "Insights on childcare documentation, daycare management, and how AI can give teachers their time back.",
};

const posts = [
  {
    slug: "daycare-teacher-paperwork",
    title:
      "Why Daycare Teachers Spend an Hour a Day on Paperwork (And What We Can Do About It)",
    date: "April 2026",
    excerpt:
      "15 kids. 6 data points each. Manual entry for every meal, nap, and diaper change. Here's how it adds up and what a better approach looks like.",
  },
];

export default function BlogIndex() {
  return (
    <>
      <header>
        <nav className="bg-bloom-bg/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="font-heading text-xl font-bold text-bloom-dark">
                Bloom Commons
              </span>
            </Link>
          </div>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-bloom-dark tracking-tight mb-12">
          Blog
        </h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-card p-6 shadow-[0_1px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_24px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <p className="text-sm text-bloom-gray mb-2">{post.date}</p>
                <h2 className="font-heading text-xl font-bold text-bloom-dark mb-2 group-hover:text-bloom-green transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-bloom-gray text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center text-sm text-bloom-gray/60">
          <Link href="/" className="hover:text-bloom-dark transition-colors">
            &larr; Back to Bloom Commons
          </Link>
        </div>
      </footer>
    </>
  );
}
