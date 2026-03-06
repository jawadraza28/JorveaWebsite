import type { Metadata } from "next";
import OpenInAppClient from "./OpenInAppClient";

type Props = {
  params: Promise<{ reelId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { reelId } = await params;

  return {
    title: "Open Reel in Jorvea",
    description: "Open this reel directly in the Jorvea app.",
    keywords: ["jorvea reel link", "open reel in jorvea", "jorvea deep link"],
    alternates: { canonical: `/r/${encodeURIComponent(reelId)}` },
    openGraph: {
      title: "Open Reel in Jorvea",
      description: "Open this reel directly in the Jorvea app.",
      url: `https://jorvea.tech/r/${encodeURIComponent(reelId)}`,
      type: "website",
      images: ["/images/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Open Reel in Jorvea",
      description: "Tap to open this reel in the Jorvea app.",
      images: ["/images/og-image.jpg"],
    },
    robots: { index: false, follow: true },
  };
}

export default async function ReelDeepLinkPage({ params }: Props) {
  const { reelId } = await params;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <OpenInAppClient reelId={reelId} />
    </main>
  );
}
