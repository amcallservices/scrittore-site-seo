import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Scrittore Site", template: "%s | Scrittore Site" },
  description: "Progetta, scrivi, controlla ed esporta il tuo libro con Scrittore Site.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it">{children}</html>;
}
