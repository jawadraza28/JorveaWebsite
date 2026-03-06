import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jorvea Official Site | Download, Support, Safety, Earning",
  description:
    "Official Jorvea website to download the app, get support, read legal pages, and learn how to earn money from Jorvea creators program.",
  keywords: [
    "jorvea",
    "jorvea official website",
    "how to earn money from jorvea",
    "jorvea earning",
    "jorvea app download",
    "jorvea support",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jorvea Official Site",
    description:
      "Download Jorvea, access support resources, and learn how to earn money from your content.",
    url: "https://jorvea.tech/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jorvea app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorvea Official Site",
    description: "Official Jorvea site for downloads, support, and creator earning guidance.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="px-6 pb-10 pt-10">
      <section className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12">
        <p className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-xs font-medium text-cyan-200">
          Official Jorvea Website
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
          Jorvea — create, share, connect, and earn money
        </h1>
        <p className="mt-4 text-3xl font-extrabold text-cyan-300 sm:text-5xl">
          Earn Money with Your Content
        </p>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          If you searched for Jorvea, this is the official home for app downloads,
          support, policy pages, and community safety resources.
        </p>
        <p className="mt-3 max-w-2xl text-base text-slate-300">
          Looking for how to earn money from Jorvea? Visit our creator earning guide for eligibility,
          payout policy, and appeal process details.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/download" className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
            Download for Android
          </Link>
          <Link href="/earning" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100">
            Learn Earning Policy
          </Link>
          <Link href="/support" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100">
            Open Help Center
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold">Performance First</h2>
          <p className="mt-3 text-slate-300">Built for fast feed loading, responsive interactions, and smooth content playback on real devices.</p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold">Community Safety</h2>
          <p className="mt-3 text-slate-300">Clear moderation pathways, stronger account controls, and practical privacy options in everyday use.</p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold">Creator Tools</h2>
          <p className="mt-3 text-slate-300">Optimized publishing and sharing flows that help creators post consistently and engage reliably.</p>
        </article>
      </section>

      <section className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
        <Image
          src="/images/og-image.jpg"
          alt="Jorvea app preview and creator earning experience"
          width={1200}
          height={630}
          className="h-auto w-full"
          priority
        />
      </section>

      <section className="mx-auto mt-10 max-w-6xl rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
        <h2 className="text-2xl font-semibold">Everything in one place</h2>
        <p className="mt-3 text-slate-300">
          Use the website to access legal documents, support channels, issue submission,
          and app download links. Jorvea content itself stays in the mobile app for the best user experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/earning" className="rounded-lg border border-slate-700 px-4 py-2">Creator Earning Guide</Link>
          <Link href="/legal" className="rounded-lg border border-slate-700 px-4 py-2">Legal Information</Link>
          <Link href="/privacy" className="rounded-lg border border-slate-700 px-4 py-2">Privacy Policy</Link>
          <Link href="/terms" className="rounded-lg border border-slate-700 px-4 py-2">Terms of Service</Link>
          <Link href="/contact" className="rounded-lg border border-slate-700 px-4 py-2">Contact & Issue Forms</Link>
        </div>
      </section>
    </main>
  );
}
