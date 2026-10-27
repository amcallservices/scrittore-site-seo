import Link from "next/link";
import type { Locale } from "./site";

export function BrandLogo({ locale }: { locale: Locale }) {
  return (
    <Link href={`/${locale}`} className="brand brand-logo" aria-label="Scrittore Site">
      <span className="brand-symbol" aria-hidden="true">
        <img src="/brand/scrittore-site-logo.png" alt="" />
      </span>
      <span className="brand-wordmark">Scrittore<span>.site</span></span>
    </Link>
  );
}
