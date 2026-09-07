import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { appUrl, copy, isLocale, locales, packages, siteUrl, type Locale } from "../../../lib/site";
import { pageContent } from "../../../lib/page-content";

const pages = ["funzioni", "prezzi", "come-funziona", "faq", "privacy", "termini"] as const;
type PageName = (typeof pages)[number];
type Props = { params: Promise<{ locale: string; page: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => pages.map((page) => ({ locale, page })));
}

function titleFor(locale: Locale, page: PageName) {
  const content = pageContent[locale];
  const local: Record<PageName, string> = {
    funzioni: copy[locale].nav[0], prezzi: copy[locale].pricingTitle, "come-funziona": copy[locale].nav[1], faq: copy[locale].faqTitle, privacy: content.privacyTitle, termini: content.termsTitle,
  };
  return local[page];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as PageName)) return {};
  const title = titleFor(locale, page as PageName);
  const languages = Object.fromEntries(locales.map((code) => [copy[code].locale, `${siteUrl}/${code}/${page}`]));
  return { title, description: `${title} — ${copy[locale].seoDescription}`, alternates: { canonical: `${siteUrl}/${locale}/${page}`, languages }, openGraph: { title, description: copy[locale].seoDescription, url: `${siteUrl}/${locale}/${page}`, locale: copy[locale].locale, type: "website" } };
}

export default async function InformationPage({ params }: Props) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as PageName)) notFound();
  const t = copy[locale]; const name = page as PageName; const dir = t.direction || "ltr";
  const content = pageContent[locale];
  const title = titleFor(locale, name);
  const body: Record<PageName, React.ReactNode> = {
    funzioni: <ul>{t.features.map((item) => <li key={item}>{item}</li>)}</ul>,
    prezzi: <div className="simple-packages">{packages.map(([name, credits, price], index) => <article key={name}><h2>{name}</h2><b>{credits} crediti · {price}</b><p>{content.packageDescriptions[index]}</p></article>)}</div>,
    "come-funziona": <ol>{t.flow.map((step) => <li key={step}>{step}</li>)}</ol>,
    faq: <><h2>{t.faqTitle}</h2><p>{t.creditNote}</p><p>{content.faqText}</p></>,
    privacy: <><p>{content.privacy[0]}</p><p>{content.privacy[1]}</p></>,
    termini: <><p>{content.terms[0]}</p><p>{content.terms[1]}</p></>,
  };
  return <main dir={dir} lang={locale} className="legal-page"><header className="site-header"><Link href={`/${locale}`} className="brand">Scrittore <span>Site</span></Link><Link className="back" href={`/${locale}`}>{content.home}</Link></header><article><p className="eyebrow">SCRITTORE SITE</p><h1>{title}</h1>{body[name]}<a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a></article></main>;
}
