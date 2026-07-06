import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsPrep } from "@/components/analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dyna-mic.co.za"),
  title: {
    default: "Dyna-Mic Diesel | Diesel Truck Repairs in Boksburg",
    template: "%s | Dyna-Mic Diesel",
  },
  description:
    "Dyna-Mic Diesel is a diesel truck repair workshop in Anderbolt, Boksburg serving the East Rand and Gauteng.",
  openGraph: {
    title: "Dyna-Mic Diesel | Diesel Truck Repairs in Boksburg",
    description:
      "Truck diagnostics, diesel engine reconditioning and fleet maintenance support in Anderbolt, Boksburg.",
    url: "https://dyna-mic.co.za",
    siteName: "Dyna-Mic Diesel",
    images: [{ url: "/images/diesel-workshop-hero.png", width: 1536, height: 1024 }],
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AnalyticsPrep />
        {children}
      </body>
    </html>
  );
}
