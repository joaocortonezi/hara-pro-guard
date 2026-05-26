import type { Metadata, Viewport } from "next";
import { Anton, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0f0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "protetor bucal",
    "mouthguard",
    "jiu-jitsu",
    "MMA",
    "muay thai",
    "boxe",
    "esporte de combate",
    "Hara Pro Guard",
    "Dr. João Hara",
  ],
  authors: [{ name: "Dr. João Hara" }],
  creator: "Hara Pro Guard",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-fg">
        <GrainOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
