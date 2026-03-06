import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jorvea Safety and Community Protection",
  description: "Learn how Jorvea improves user safety with reporting tools, abuse response workflows, account controls, and privacy settings.",
  keywords: ["jorvea safety", "jorvea reporting", "jorvea privacy controls", "jorvea user protection"],
  alternates: { canonical: "/safety" },
  openGraph: {
    title: "Jorvea Safety and Community Protection",
    description: "Official Jorvea safety page with user protection controls and abuse response guidance.",
    url: "https://jorvea.tech/safety",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorvea Safety",
    description: "How Jorvea protects users with practical account and reporting controls.",
    images: ["/images/og-image.jpg"],
  },
};

export default function SafetyPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Safety at Jorvea</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          User safety is a core priority. We maintain practical controls and review workflows
          to reduce abuse, strengthen trust, and improve platform reliability.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold">Account-level controls</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Block and mute controls across chat and profile flows</li>
            <li>Privacy options for who can message and interact</li>
            <li>Visibility controls designed for safer community use</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold">Abuse response</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Issue reports reviewed for policy and behavior risk</li>
            <li>Escalation for repeated or severe violations</li>
            <li>Feature updates that reinforce safer defaults</li>
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">Need urgent help?</h2>
        <p className="mt-3 text-slate-300">Contact support@jorvea.tech with full context and screenshots to speed up investigation.</p>
      </section>
    </main>
  );
}
