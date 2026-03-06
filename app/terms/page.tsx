import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Jorvea Terms of Service covering account responsibilities, community rules, enforcement, and creator monetization conditions.",
  keywords: ["jorvea terms", "jorvea terms of service", "jorvea monetization terms", "jorvea creator policy"],
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Jorvea Terms of Service",
    description: "Official terms for using Jorvea platform features, content systems, and creator programs.",
    url: "https://jorvea.tech/terms",
    type: "article",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorvea Terms of Service",
    description: "Account rules, enforcement policy, and creator eligibility terms on Jorvea.",
    images: ["/images/og-image.jpg"],
  },
};

export default function TermsPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-slate-300">Last updated: March 6, 2026</p>
      </section>

      <section className="mx-auto mt-8 max-w-5xl space-y-6 text-slate-200">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-3 text-slate-300">By accessing or using Jorvea services, you agree to comply with these Terms and applicable law.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">2. Account Responsibilities</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>You are responsible for account credentials and security.</li>
            <li>You agree to provide accurate profile and contact information.</li>
            <li>You must not impersonate another person or entity.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">3. Community Rules</h2>
          <p className="mt-3 text-slate-300">Prohibited behavior includes unlawful content, harmful harassment, abuse, fraud, and repeated policy evasion.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">4. Enforcement</h2>
          <p className="mt-3 text-slate-300">Jorvea may limit features, remove content, or suspend accounts where safety, integrity, or legal compliance requires action.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">5. Service Availability</h2>
          <p className="mt-3 text-slate-300">Features may change over time. We work to keep services available and secure, but uninterrupted operation is not guaranteed.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">6. Contact</h2>
          <p className="mt-3 text-slate-300">For terms-related inquiries, contact support@jorvea.tech.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">7. Creator Content and Originality</h2>
          <p className="mt-3 text-slate-300">
            You should publish content you own or are authorized to use. Repeatedly posting misleading,
            low-quality, infringing, or manipulative content may reduce distribution or trigger account actions.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">8. Ranking and Recommendation Integrity</h2>
          <p className="mt-3 text-slate-300">
            Jorvea systems prioritize safety, relevance, and engagement quality. Attempts to artificially manipulate
            metrics (fake interactions, abuse automation, or policy evasion patterns) may lead to reduced reach or enforcement.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">9. Monetization and Earning Eligibility</h2>
          <p className="mt-3 text-slate-300">
            Monetization opportunities may require policy compliance, account trust signals, and valid participation in available programs.
            Eligibility, availability, and payouts can vary by region, product status, and policy history.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">10. Limitation and Service Changes</h2>
          <p className="mt-3 text-slate-300">
            We may add, remove, or modify features and guidance over time. Continued use of Jorvea after updates
            means acceptance of revised terms where permitted by applicable law.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">11. Dispute and Compliance</h2>
          <p className="mt-3 text-slate-300">
            Users are expected to comply with local laws and cooperate with legitimate legal and safety processes.
            For policy clarification or formal concerns, contact support@jorvea.tech.
          </p>
        </article>

        <article className="rounded-2xl border border-rose-900/60 bg-rose-950/20 p-6">
          <h2 className="text-2xl font-semibold text-rose-200">12. Creator Removal and Monetization Suspension</h2>
          <p className="mt-3 text-rose-100/90">
            Effective date for this clause: March 6, 2026. Creator monetization access may be suspended or removed
            when severe or repeated violations are identified, including fraud, manipulation, illegal behavior,
            repeated copyright abuse, or harmful policy evasion.
          </p>
          <p className="mt-3 text-rose-100/90">
            Where appropriate, Jorvea may apply staged enforcement (warning, temporary restrictions, full removal)
            based on risk severity and account history.
          </p>
        </article>
      </section>
    </main>
  );
}
