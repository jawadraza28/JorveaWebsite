import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jorvea Support Center | Account, Reels, Earning Help",
  description: "Get Jorvea support for account access, reel issues, safety concerns, and creator earning policy or appeal questions.",
  keywords: [
    "jorvea support",
    "jorvea help center",
    "jorvea appeal support",
    "jorvea earning help",
    "jorvea contact support",
  ],
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Jorvea Support Center",
    description: "Official support page for account, safety, technical, and earning-related issues.",
    url: "https://jorvea.tech/support",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorvea Support Center",
    description: "Get official help for account, reels, safety, and earning issues.",
    images: ["/images/og-image.jpg"],
  },
};

export default function SupportPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">Jorvea Help Center</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Need help with account access, messaging, reels, privacy settings, update issues,
          or moderation concerns? Our support team is available through email and form-based issue reporting.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold">Common support topics</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Account login, verification, and password reset</li>
            <li>Blocked chats, direct message permissions, and privacy options</li>
            <li>Reel upload failures, playback quality, and share links</li>
            <li>Profile counts, follow state issues, and notification delays</li>
            <li>Forced update and app installation problems</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold">How to get faster resolution</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Share your Jorvea username or user ID</li>
            <li>Include device model, Android version, and app version</li>
            <li>Describe exact steps to reproduce the issue</li>
            <li>Attach screenshots if UI/flow related</li>
            <li>Mention error text exactly as shown</li>
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">How to create a Jorvea account</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-300">
          <li>Install the latest Jorvea app from the Download page.</li>
          <li>Open app, tap Sign Up, and enter your email or phone details.</li>
          <li>Create a strong password and verify your account.</li>
          <li>Set username, profile picture, and short bio.</li>
          <li>Choose your interests to personalize your feed and recommendations.</li>
        </ol>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">How to create a reel</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-300">
          <li>Tap the Create button and choose Reel.</li>
          <li>Record directly or upload a video from your gallery.</li>
          <li>Add caption, hashtags, and an engaging first frame/thumbnail.</li>
          <li>Review privacy options before publishing.</li>
          <li>Post during active audience hours and share to chat/profile for reach.</li>
        </ol>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">How to rank better on Jorvea</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>Hook viewers in the first 1-2 seconds with clear value or curiosity.</li>
          <li>Keep reels concise and high quality with stable visuals/audio.</li>
          <li>Use relevant captions and hashtags instead of keyword stuffing.</li>
          <li>Post consistently and monitor what format drives more watch time.</li>
          <li>Respond to comments quickly to increase engagement momentum.</li>
          <li>Avoid recycled low-quality uploads and policy-risk content.</li>
        </ul>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">Monetization and earning guidance</h2>
        <p className="mt-3 text-slate-300">
          Monetization eligibility can depend on account status, policy compliance, audience quality,
          and feature availability. Keep your profile authentic, post original content consistently,
          and avoid spam-like behavior to improve eligibility over time.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>Focus on retention, repeat viewers, and healthy engagement rates.</li>
          <li>Publish in a clear niche to build audience trust.</li>
          <li>Maintain policy-safe content to avoid monetization restrictions.</li>
          <li>Track analytics trends and repeat top-performing formats.</li>
        </ul>
        <p className="mt-4 text-slate-300">
          For full creator earning policy, disqualification rules, and appeal steps,
          visit the dedicated Earning page.
        </p>
        <Link href="/earning" className="mt-3 inline-block rounded-lg border border-slate-700 px-4 py-2 text-slate-100">
          Open Earning Policy
        </Link>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">Account recovery guidance</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>Use the reset flow from sign-in if you forgot your password.</li>
          <li>Check spam folder for verification or reset messages.</li>
          <li>Ensure your app is updated before retrying login.</li>
          <li>Contact support with device and account details if issue persists.</li>
        </ul>
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">Support channels</h2>
        <p className="mt-3 text-slate-300">Primary support: support@jorvea.tech</p>
        <p className="text-slate-300">System notifications: no-reply@jorvea.tech</p>
        <p className="mt-3 text-slate-400">Typical response window: 24 to 48 hours.</p>
      </section>
    </main>
  );
}
