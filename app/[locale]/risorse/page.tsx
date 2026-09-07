import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResources, resourceUi } from "../../../lib/localized-resources";
import { appUrl, copy, isLocale, locales, siteUrl } from "../../../lib/site";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = resourceUi[locale];
  const languages = Object.fromEntries(locales.map((code) => [copy[code].locale, `${siteUrl}/${code}/risorse`]));
  return { title: ui.indexTitle, description: ui.indexLead, keywords: [ui.nav, "Scrittore Site", "book writing guides"], alternates: { canonical: `${siteUrl}/${locale}/risorse`, languages }, openGraph: { type: "website", title: ui.indexTitle, description: ui.indexLead, url: `${siteUrl}/${locale}/risorse`, locale: copy[locale].locale } };
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = resourceUi[locale];
  const resources = getResources(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${ui.nav} Scrittore Site`,
    description: ui.indexLead,
    url: `${siteUrl}/${locale}/risorse`,
    inLanguage: copy[locale].locale,
    mainEntity: { "@type": "ItemList", itemListElement: resources.map((guide, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/${locale}/risorse/${guide.slug}`, name: guide.title })) },
  };
  return <main dir={copy[locale].direction || "ltr"} lang={locale} className="resources-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><Link href={`/${locale}`} className="brand">Scrittore <span>Site</span></Link><nav aria-label={ui.nav}><Link href={`/${locale}`}>{ui.all}</Link><Link href={`/${locale}/come-funziona`}>{copy[locale].nav[1]}</Link><a href={appUrl} target="_blank" rel="noopener noreferrer">{copy[locale].primary} ↗</a></nav></header>
    <section className="resources-hero"><p className="eyebrow">{ui.eyebrow}</p><h1>{ui.indexTitle}</h1><p>{ui.indexLead}</p></section>
    <section className="resource-grid" aria-label={`${ui.nav} Scrittore Site`}>{resources.map((guide, index) => <article key={guide.slug}><span>{String(index + 1).padStart(2, "0")}</span><h2>{guide.title}</h2><p>{guide.description}</p><div>{guide.keywords.slice(0, 2).map((keyword) => <small key={keyword}>{keyword}</small>)}</div><Link href={`/${locale}/risorse/${guide.slug}`}>{ui.read} <b>→</b></Link></article>)}</section>
    <section className="resource-cta"><h2>{ui.ctaTitle}</h2><p>{ui.ctaText}</p><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{ui.begin}</a></section>
    <footer><span>© Scrittore Site {new Date().getFullYear()}</span><div><Link href={`/${locale}`}>{ui.all}</Link><Link href={`/${locale}/privacy`}>{copy[locale].nav[4]}</Link><Link href={`/${locale}/termini`}>Terms</Link></div></footer>
  </main>;
}
