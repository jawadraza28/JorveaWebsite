import type { Metadata } from "next";
import ContactForms from "../../components/ContactForms";

export const metadata: Metadata = {
  title: "Contact Jorvea Support and Appeal Team",
  description: "Contact Jorvea for support, technical issues, creator earning questions, and appeal requests.",
  keywords: [
    "jorvea contact",
    "jorvea support email",
    "jorvea appeal",
    "jorvea earning appeal",
    "jorvea issue report",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Jorvea Support",
    description: "Official contact page for support, technical issue reports, and earning appeals.",
    url: "https://jorvea.tech/contact",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jorvea Support",
    description: "Submit support and appeal requests to the Jorvea team.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Contact and Issue Reporting</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Use the forms below for direct support requests and technical issue reports.
          You can also email us at support@jorvea.tech or no-reply@jorvea.tech.
          If you need creator earning review, include your account ID and appeal details.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <ContactForms />
      </section>
    </main>
  );
}
