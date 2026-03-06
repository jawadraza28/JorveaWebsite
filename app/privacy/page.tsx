import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Jorvea Privacy Policy for data collection, processing, retention, security controls, and user rights.",
  keywords: ["jorvea privacy policy", "jorvea data policy", "jorvea user rights", "jorvea data retention"],
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Jorvea Privacy Policy",
    description: "Official privacy policy covering Jorvea data handling, security, and user controls.",
    url: "https://jorvea.tech/privacy",
    type: "article",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorvea Privacy Policy",
    description: "Data processing, security, and privacy controls for Jorvea users.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-slate-300">Last updated: March 6, 2026</p>
      </section>

      <section className="mx-auto mt-8 max-w-5xl space-y-6 text-slate-200">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">1. Overview</h2>
          <p className="mt-3 text-slate-300">This Privacy Policy explains how Jorvea collects, uses, shares, and protects information when you use the Jorvea app and website.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Account data: email, username, display profile fields, and authentication metadata.</li>
            <li>Content metadata: upload timestamps, engagement signals, moderation status, and sharing references.</li>
            <li>Technical data: device model, app version, diagnostics, crash traces, and performance metrics.</li>
            <li>Communication data: support requests, issue submissions, and service notifications.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">3. How We Use Data</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>To deliver core app features, account access, messaging, and media functionality.</li>
            <li>To improve reliability, reduce abuse, and maintain service integrity.</li>
            <li>To respond to support and legal inquiries with relevant context.</li>
            <li>To detect policy violations and enforce platform safety standards.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
          <p className="mt-3 text-slate-300">Jorvea does not sell personal data. Information may be shared with infrastructure or security vendors strictly to operate services, meet legal obligations, or protect users.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">5. Retention and Security</h2>
          <p className="mt-3 text-slate-300">We retain data only for legitimate product, safety, operational, and compliance reasons. Access controls and technical safeguards are applied to reduce unauthorized access risk.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">6. Your Rights and Controls</h2>
          <p className="mt-3 text-slate-300">You can manage profile and privacy settings in-app and request support for account concerns by contacting support@jorvea.tech.</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">7. Account Creation and Verification Data</h2>
          <p className="mt-3 text-slate-300">
            During sign-up and verification, we may process identity-related account details, authentication events,
            and security signals to reduce fraud, protect users, and ensure platform integrity.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">8. Creator, Ranking, and Monetization Signals</h2>
          <p className="mt-3 text-slate-300">
            We may process engagement and quality signals (for example watch time trends, interaction quality,
            and policy health) to improve recommendations and product performance. These signals may affect feature visibility,
            creator discovery, and eligibility-related experiences.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">9. Support and Legal Requests</h2>
          <p className="mt-3 text-slate-300">
            When you submit contact or issue forms, we process submitted fields to investigate and resolve your request.
            We retain request history for operational quality, security review, and compliance needs.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">10. Policy Updates</h2>
          <p className="mt-3 text-slate-300">
            We may update this policy as product features, legal obligations, or safety standards evolve.
            Material updates will be reflected on this page with the latest revision date.
          </p>
        </article>
      </section>
    </main>
  );
}
