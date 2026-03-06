import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Jorvea App for Android",
  description: "Download the official Jorvea Android app safely from APKPure and start creating, sharing, and earning on Jorvea.",
  keywords: ["download jorvea", "jorvea app apk", "jorvea android app", "jorvea official download"],
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download Jorvea App for Android",
    description: "Official Jorvea download page with latest Android install guidance.",
    url: "https://jorvea.tech/download",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Jorvea App",
    description: "Install the latest official Jorvea Android app.",
    images: ["/images/og-image.jpg"],
  },
};

export default function DownloadPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Download Jorvea for Android</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Get the official Jorvea release from APKPure. Always install the latest version to receive performance improvements,
          security updates, and new creator features.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://apkpure.com/jorvea/com.jorvea"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
          >
            Download on APKPure
          </a>
          <a
            href="mailto:support@jorvea.tech"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold"
          >
            Contact Support
          </a>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="font-semibold">Step 1</h2>
          <p className="mt-2 text-sm text-slate-300">Open the APKPure link and download the latest Jorvea package.</p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="font-semibold">Step 2</h2>
          <p className="mt-2 text-sm text-slate-300">Allow install permissions if prompted by your Android device.</p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="font-semibold">Step 3</h2>
          <p className="mt-2 text-sm text-slate-300">Launch Jorvea, sign in, and start using the latest build.</p>
        </article>
      </section>
    </main>
  );
}
