import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResource, getResources, resourceUi } from "../../../../lib/localized-resources";
import { appUrl, copy, isLocale, locales, siteUrl } from "../../../../lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getResources(locale).map((resource) => ({ locale, slug: resource.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const guide = getResource(locale, slug);
  if (!guide) return {};
  const languages = Object.fromEntries(locales.map((code) => [copy[code].locale, `${siteUrl}/${code}/risorse/${guide.slug}`]));
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `${siteUrl}/${locale}/risorse/${guide.slug}`, languages },
    openGraph: { type: "article", title: guide.title, description: guide.description, url: `${siteUrl}/${locale}/risorse/${guide.slug}`, locale: copy[locale].locale },
  };
}

export default async function ResourceArticle({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const guide = getResource(locale, slug);
  if (!guide) notFound();
  const ui = resourceUi[locale];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: guide.title, description: guide.description, inLanguage: copy[locale].locale, mainEntityOfPage: `${siteUrl}/${locale}/risorse/${guide.slug}`, author: { "@type": "Organization", name: "Scrittore Site" }, publisher: { "@type": "Organization", name: "Scrittore Site" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/${locale}` }, { "@type": "ListItem", position: 2, name: ui.nav, item: `${siteUrl}/${locale}/risorse` }, { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/${locale}/risorse/${guide.slug}` }] },
    ],
  };
  const related = getResources(locale).filter((resource) => resource.slug !== guide.slug).slice(0, 3);
  return <main dir={copy[locale].direction || "ltr"} lang={locale} className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><Link href={`/${locale}`} className="brand">Scrittore <span>Site</span></Link><nav aria-label={ui.nav}><Link href={`/${locale}`}>Home</Link><Link href={`/${locale}/risorse`}>{ui.nav}</Link><a href={appUrl} target="_blank" rel="noopener noreferrer">{ui.begin} ↗</a></nav></header>
    <article className="resource-article"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={`/${locale}`}>Home</Link><span>/</span><Link href={`/${locale}/risorse`}>{ui.nav}</Link><span>/</span><span>{guide.title}</span></nav><p className="eyebrow">{ui.nav.toUpperCase()}</p><h1>{guide.title}</h1><p className="article-lead">{guide.intro}</p><div className="keyword-row">{guide.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>{guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}{section.note && <aside><b>{ui.start}.</b> {section.note}</aside>}</section>)}<section className="article-faq"><h2>FAQ</h2>{guide.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section><section className="article-cta"><h2>{ui.practice}</h2><p>{ui.ctaText}</p><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{ui.begin}</a></section></article>
    <aside className="related-guides"><p className="eyebrow">{ui.continue}</p><h2>{ui.other}</h2><div>{related.map((resource) => <Link key={resource.slug} href={`/${locale}/risorse/${resource.slug}`}>{resource.title}<b>→</b></Link>)}</div></aside>
    <footer><span>© Scrittore Site {new Date().getFullYear()}</span><div><Link href={`/${locale}/risorse`}>{ui.all}</Link><Link href={`/${locale}/privacy`}>Privacy</Link><Link href={`/${locale}/termini`}>Terms</Link></div></footer>
  </main>;
}
