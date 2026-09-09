import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: "Progetta, scrivi, controlla ed esporta il tuo libro con Scrittore Site.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName, images: [{ url: "/opengraph-image" }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><head><meta name="trustpilot-one-time-domain-verification-id" content="467bdb4a-bba4-4057-8eab-32cc5011f334" /></head>{children}</html>;
}
