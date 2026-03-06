import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jorvea Legal Information and Policy Overview",
  description: "Review Jorvea legal information, policy scope, compliance actions, user responsibilities, and official support contacts.",
  keywords: ["jorvea legal", "jorvea policy", "jorvea compliance", "jorvea terms and privacy"],
  alternates: { canonical: "/legal" },
  openGraph: {
    title: "Jorvea Legal Information",
    description: "Official legal and policy overview for Jorvea users and creators.",
    url: "https://jorvea.tech/legal",
    type: "article",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorvea Legal Information",
    description: "Policy scope, compliance, and official legal contacts for Jorvea.",
    images: ["/images/og-image.jpg"],
  },
};

export default function LegalPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Legal Information</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          This page summarizes Jorvea legal scope, policy structure, user responsibilities,
          and formal communication channels.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-5xl space-y-6">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">Policy documents</h2>
          <p className="mt-3 text-slate-300">
            Jorvea policies are primarily covered by Privacy Policy and Terms of Service.
            These documents explain platform behavior, data handling, account rules,
            moderation expectations, and legal process touchpoints.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">User responsibilities</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Use truthful account information and secure credentials.</li>
            <li>Respect community rules and avoid abuse, harassment, or illegal content.</li>
            <li>Publish only content you are authorized to share.</li>
            <li>Follow product and monetization eligibility requirements where applicable.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">Compliance and escalation</h2>
          <p className="mt-3 text-slate-300">
            Jorvea may investigate safety and compliance concerns and take proportionate actions,
            including feature limits, content removal, or account suspension where needed.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">Legal and support contacts</h2>
          <p className="mt-3 text-slate-300">Support: support@jorvea.tech</p>
          <p className="text-slate-300">System mailbox: no-reply@jorvea.tech</p>
        </article>
      </section>
    </main>
  );
}
