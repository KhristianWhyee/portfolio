import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://khristianwhyee.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khristian Whyee — Electrical Engineering Portfolio",
  description:
    "Digital portfolio of Khristian Whyee, an aspiring electrical engineer at Temple University. Hardware, software, and everything the ideas turn into.",
  keywords: [
    "Khristian Whyee",
    "Electrical Engineering",
    "Temple University",
    "PCB design",
    "KiCad",
    "portfolio",
    "embedded",
  ],
  authors: [{ name: "Khristian Whyee" }],
  openGraph: {
    title: "Khristian Whyee — Electrical Engineering Portfolio",
    description:
      "Hardware, software, and everything the ideas turn into. Portfolio of an aspiring electrical engineer at Temple University.",
    url: siteUrl,
    siteName: "Khristian Whyee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khristian Whyee — Electrical Engineering Portfolio",
    description:
      "Hardware, software, and everything the ideas turn into.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
