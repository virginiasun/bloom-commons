import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Why Daycare Teachers Spend an Hour a Day on Paperwork — Bloom Commons",
  description:
    "15 kids, 6 data points each, manual entry for every meal and nap. Here's how daycare teacher paperwork adds up to 45-60 minutes a day and what we can do about it.",
  openGraph: {
    title:
      "Why Daycare Teachers Spend an Hour a Day on Paperwork",
    description:
      "15 kids, 6 data points each, manual entry for every meal and nap. Here's how it adds up and what a better approach looks like.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <>
      <header>
        <nav className="bg-bloom-bg/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="font-heading text-xl font-bold text-bloom-dark">
                Bloom Commons
              </span>
            </Link>
            <Link
              href="/blog"
              className="text-sm text-bloom-gray hover:text-bloom-dark transition-colors"
            >
              Blog
            </Link>
          </div>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article>
          <p className="text-sm text-bloom-gray mb-4">April 2026</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-bloom-dark tracking-tight leading-tight mb-8">
            Why Daycare Teachers Spend an Hour a Day on Paperwork (And What We
            Can Do About It)
          </h1>

          <div className="prose prose-bloom max-w-none text-bloom-dark/90 space-y-6 text-[16px] leading-relaxed">
            <p>
              Here&apos;s a number that surprised me as a parent: in a typical
              daycare classroom of 15 children, a teacher is expected to log
              around 6 data points per child per day. Meals, naps, diaper
              changes, activities, incidents, and mood observations. That&apos;s
              90 individual entries, every single day, all entered manually into
              whatever childcare management app the center uses.
            </p>
            <p>
              When you add it up, teachers spend{" "}
              <strong>45 to 60 minutes per classroom per day</strong> on
              documentation. That&apos;s not a guess. It&apos;s what directors
              tell us in every conversation we have.
            </p>

            <h2 className="font-heading text-2xl font-bold text-bloom-dark mt-10 mb-4">
              What existing tools got right
            </h2>
            <p>
              The current generation of childcare management software deserves
              credit. They moved daily reports from paper binders to digital
              platforms. Parents get updates on their phones. Directors can pull
              attendance reports without digging through filing cabinets. Billing
              is integrated. Check-in is contactless.
            </p>
            <p>
              That was a real step forward, and it happened over the last decade.
              The problem is what it didn&apos;t change.
            </p>

            <h2 className="font-heading text-2xl font-bold text-bloom-dark mt-10 mb-4">
              What they missed
            </h2>
            <p>
              Every one of these tools digitized the form but didn&apos;t
              eliminate the form. A teacher still has to stop what she&apos;s
              doing, pull out a tablet or phone, navigate to the right child,
              find the right field, and type or tap in the data. Multiply that
              by 15 kids and 6 entries each, and you start to see the problem.
            </p>
            <p>
              The act of documenting hasn&apos;t changed. It just moved from
              paper to a screen. And teachers are still spending the same amount
              of time on it, time that could be spent actually being present
              with children.
            </p>

            <h2 className="font-heading text-2xl font-bold text-bloom-dark mt-10 mb-4">
              What a better approach looks like
            </h2>
            <p>
              What if a teacher could simply say, while walking between the
              lunch table and the nap area, &ldquo;Liam napped from 1 to 2:30,
              Maya finished most of her lunch, Aiden had a great time during
              art&rdquo;&mdash;and the system turned that into structured,
              compliance-ready records automatically?
            </p>
            <p>
              That&apos;s the approach we&apos;re building at Bloom Commons. Voice-first
              logging that lets teachers speak naturally during their workflow.
              AI turns those observations into structured data. The
              teacher&apos;s job shifts from &ldquo;document the day&rdquo; to
              &ldquo;review and confirm what the system captured.&rdquo;
            </p>
            <p>
              It&apos;s not about making the form faster to fill out. It&apos;s
              about eliminating the form entirely.
            </p>

            <h2 className="font-heading text-2xl font-bold text-bloom-dark mt-10 mb-4">
              Why this matters
            </h2>
            <p>
              Giving teachers 45 minutes back isn&apos;t just an efficiency
              gain. It&apos;s 45 more minutes of being present with children.
              It&apos;s less burnout. It&apos;s the reason most teachers got
              into early childhood education in the first place: to teach, to
              nurture, to connect&mdash;not to fill out forms.
            </p>

            <div className="mt-12 p-6 bg-bloom-mint/40 rounded-card">
              <p className="font-heading font-bold text-bloom-dark mb-2">
                We&apos;re building Bloom Commons for daycare and preschool teams.
              </p>
              <p className="text-bloom-gray text-sm mb-4">
                If you&apos;re a director, teacher, or administrator who&apos;s
                tired of documentation eating into your day, we&apos;d love to
                hear from you.
              </p>
              <Link
                href="/#waitlist"
                className="inline-block bg-bloom-green text-white font-semibold px-6 py-3 rounded-card hover:bg-bloom-green-light transition-colors text-sm"
              >
                Join the Early Access Waitlist
              </Link>
            </div>
          </div>
        </article>
      </main>
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex justify-between text-sm text-bloom-gray/60">
          <Link href="/" className="hover:text-bloom-dark transition-colors">
            &larr; Back to Bloom Commons
          </Link>
          <Link
            href="/blog"
            className="hover:text-bloom-dark transition-colors"
          >
            All posts
          </Link>
        </div>
      </footer>
    </>
  );
}
