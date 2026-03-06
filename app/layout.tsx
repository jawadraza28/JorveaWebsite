import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jorvea.tech"),
  title: {
    default: "Jorvea - Create, Share, Connect",
    template: "%s | Jorvea",
  },
  description:
    "Jorvea is a social video app for creators and communities. Download the Android app, explore safety resources, and get support.",
  applicationName: "Jorvea",
  keywords: [
    "jorvea",
    "jorvea app",
    "short video app",
    "social video",
    "android social app",
    "creator community",
    "how to earn money from jorvea",
    "jorvea earning",
    "jorvea appeal",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jorvea - Create, Share, Connect",
    description:
      "Download Jorvea and join a fast, creator-first social video experience.",
    url: "https://jorvea.tech",
    siteName: "Jorvea",
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
    title: "Jorvea - Create, Share, Connect",
    description:
      "Download Jorvea and join a fast, creator-first social video experience.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/favicon.ico",
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jorvea",
    url: "https://jorvea.tech",
    logo: "https://jorvea.tech/images/logo.png",
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jorvea",
    url: "https://jorvea.tech",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jorvea.tech/earning",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <SiteHeader />
          <div className="page-enter">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
