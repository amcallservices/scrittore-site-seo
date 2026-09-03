import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResource, resources } from "../../../../lib/resources";
import { appUrl, siteUrl } from "../../../../lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return resources.map((resource) => ({ locale: "it", slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = locale === "it" ? getResource(slug) : undefined;
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `${siteUrl}/it/risorse/${guide.slug}` },
    openGraph: { type: "article", title: guide.title, description: guide.description, url: `${siteUrl}/it/risorse/${guide.slug}`, locale: "it_IT" },
  };
}

export default async function ResourceArticle({ params }: Props) {
  const { locale, slug } = await params;
  const guide = locale === "it" ? getResource(slug) : undefined;
  if (!guide) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: guide.title, description: guide.description, inLanguage: "it-IT", mainEntityOfPage: `${siteUrl}/it/risorse/${guide.slug}`, author: { "@type": "Organization", name: "Scrittore Site" }, publisher: { "@type": "Organization", name: "Scrittore Site" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/it` }, { "@type": "ListItem", position: 2, name: "Risorse", item: `${siteUrl}/it/risorse` }, { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/it/risorse/${guide.slug}` }] },
    ],
  };
  const related = resources.filter((resource) => resource.slug !== guide.slug).slice(0, 3);
  return <main lang="it" className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><Link href="/it" className="brand">Scrittore <span>Site</span></Link><nav aria-label="Navigazione articolo"><Link href="/it">Home</Link><Link href="/it/risorse">Risorse</Link><a href={appUrl} target="_blank" rel="noopener noreferrer">Apri l'app ↗</a></nav></header>
    <article className="resource-article"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/it">Home</Link><span>/</span><Link href="/it/risorse">Risorse</Link><span>/</span><span>{guide.title}</span></nav><p className="eyebrow">GUIDA SCRITTORE SITE</p><h1>{guide.title}</h1><p className="article-lead">{guide.intro}</p><div className="keyword-row">{guide.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>{guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}{section.note && <aside><b>Da ricordare.</b> {section.note}</aside>}</section>)}<section className="article-faq"><h2>Domande frequenti</h2>{guide.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section><section className="article-cta"><h2>Metti in pratica la guida</h2><p>Apri Scrittore Site e costruisci il tuo progetto editoriale passo dopo passo.</p><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">Inizia gratis con 50 crediti</a></section></article>
    <aside className="related-guides"><p className="eyebrow">CONTINUA A LEGGERE</p><h2>Altre guide utili</h2><div>{related.map((resource) => <Link key={resource.slug} href={`/it/risorse/${resource.slug}`}>{resource.title}<b>→</b></Link>)}</div></aside>
    <footer><span>© Scrittore Site {new Date().getFullYear()}</span><div><Link href="/it/risorse">Tutte le risorse</Link><Link href="/it/privacy">Privacy</Link><Link href="/it/termini">Termini</Link></div></footer>
  </main>;
}
