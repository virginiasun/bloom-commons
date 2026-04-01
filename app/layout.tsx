import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom Commons — AI-Powered Daycare & Preschool Management Software",
  description:
    "Bloom Commons uses AI to turn teacher voice notes into compliance-ready records. Less paperwork, more time with kids. Join the early access waitlist.",
  openGraph: {
    title: "Bloom Commons — Teachers teach. Bloom Commons handles the rest.",
    description:
      "AI-powered daycare management that eliminates documentation burden. Voice-first logging turns teacher observations into structured records.",
    type: "website",
    siteName: "Bloom Commons",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Commons — Teachers teach. Bloom Commons handles the rest.",
    description:
      "AI-powered daycare management that eliminates documentation burden. Voice-first logging turns teacher observations into structured records.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <head>
        <link rel="canonical" href="https://www.bloomcommons.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Bloom Commons",
              applicationCategory: "BusinessApplication",
              description:
                "AI-powered daycare and preschool management platform that turns teacher voice notes into structured, compliance-ready records.",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Early access waitlist",
              },
            }),
          }}
        />
      </head>
      <body className="font-body text-bloom-dark antialiased">{children}</body>
    </html>
  );
}
