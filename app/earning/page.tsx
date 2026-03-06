import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Earn Money from Jorvea (Creator Guide + Appeal)",
  description:
    "Learn how to earn money from Jorvea: eligibility, content rules, payouts, ranking tips, disqualification policy, and appeal process.",
  keywords: [
    "how to earn money from jorvea",
    "jorvea earning policy",
    "jorvea monetization",
    "jorvea appeal",
    "jorvea payout",
    "creator earnings jorvea",
  ],
  openGraph: {
    title: "How to Earn Money from Jorvea",
    description:
      "Full Jorvea earning guide with payouts, eligibility, policy risks, and the official appeal process.",
    url: "https://jorvea.tech/earning",
    type: "article",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Earn Money from Jorvea",
    description:
      "Eligibility, ranking tips, payout policy, and appeal process for Jorvea creator earnings.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "/earning" },
};

export default function EarningPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to earn money from Jorvea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creators can earn based on eligibility, policy-safe original content, audience retention, and engagement quality. Payout reviews can apply when verification or risk checks are required.",
        },
      },
      {
        "@type": "Question",
        name: "How can I appeal a Jorvea earning decision?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Submit an appeal from the official contact page with your account ID, timestamps, and supporting screenshots for faster review.",
        },
      },
    ],
  };

  return (
    <main className="px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Jorvea Creator Earning Policy</h1>
        <p className="mt-3 text-slate-300">Effective date: March 6, 2026</p>
        <p className="mt-4 max-w-3xl text-slate-300">
          This page explains how creator earning and monetization works on Jorvea,
          including eligibility, content quality expectations, payment behavior,
          and account risk conditions.
        </p>
        <p className="mt-3 max-w-3xl text-slate-300">
          If you searched for how to earn money from Jorvea, this is the official earning policy page
          with appeal steps and support guidance.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-5xl space-y-6 text-slate-200">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">1. Basic eligibility</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Account must be in good standing with no active severe policy strikes.</li>
            <li>Creator profile should be complete and authentic.</li>
            <li>Content must follow platform safety and copyright standards.</li>
            <li>Monetization feature availability can vary by region and rollout stage.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">2. Content quality standards</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Post original or properly licensed content.</li>
            <li>Avoid repetitive, low-effort, or misleading uploads.</li>
            <li>Keep audio/video quality clear and viewer-friendly.</li>
            <li>Use accurate captions and avoid manipulative metadata.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">3. Ranking and earning performance guidance</h2>
          <p className="mt-3 text-slate-300">
            Higher watch completion, repeat viewers, and healthy engagement generally improve creator momentum.
            Build a consistent niche, maintain a regular posting schedule, and respond to comments quickly.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-300">
            <li>Use a strong first 2 seconds in every reel.</li>
            <li>Keep structure clear: hook, value, close.</li>
            <li>Review analytics and repeat what performs best.</li>
            <li>Prefer quality over volume when testing formats.</li>
          </ol>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">4. Payment and payout policy</h2>
          <p className="mt-3 text-slate-300">
            Payout timelines, thresholds, and methods may change by program and region.
            Jorvea may hold or review payouts when fraud signals, policy disputes, or verification issues are detected.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Payout requires valid account information and eligibility checks.</li>
            <li>Suspicious activity can trigger temporary review delays.</li>
            <li>Confirmed severe violations can lead to payout cancellation for affected periods.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-rose-900/60 bg-rose-950/30 p-6">
          <h2 className="text-2xl font-semibold text-rose-200">5. Creator account removal / earning disqualification</h2>
          <p className="mt-3 text-rose-100/90">
            Creator monetization access may be limited, paused, or removed if policy violations are severe,
            repeated, or intentionally abusive.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-rose-100/90">
            <li>Repeated copyright infringement or unauthorized content use.</li>
            <li>Fake engagement, automation abuse, or fraudulent behavior.</li>
            <li>Severe harassment, harmful behavior, or illegal activity.</li>
            <li>Identity misrepresentation or payment verification manipulation.</li>
          </ul>
          <p className="mt-4 text-rose-100/90">
            Enforcement actions can include reduced distribution, monetization lock, payout hold,
            and full creator program removal where required.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">6. Appeal and support process</h2>
          <p className="mt-3 text-slate-300">
            If you believe an earning decision is incorrect, submit a detailed issue report from the contact page
            with account ID, timestamps, and supporting screenshots.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="https://jorvea.tech/contact" className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
              Submit Issue / Appeal
            </Link>
            <Link href="/terms" className="rounded-lg border border-slate-700 px-4 py-2">
              View Terms
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
