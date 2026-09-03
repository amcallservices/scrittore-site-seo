import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "../../../lib/resources";
import { appUrl, siteUrl } from "../../../lib/site";

type Props = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Risorse per scrivere, controllare ed esportare un libro",
  description: "Guide gratuite per usare Scrittore Site: sidebar, indice, fonti, scrittura, controlli, salvataggi e scelta del cervello AI.",
  keywords: ["guide per scrivere un libro", "come usare Scrittore Site", "software per creare un libro", "indice libro", "editoria con intelligenza artificiale"],
  alternates: { canonical: `${siteUrl}/it/risorse` },
};

export function generateStaticParams() {
  return [{ locale: "it" }];
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "it") notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Risorse Scrittore Site",
    description: "Guide pratiche per progettare, scrivere, controllare ed esportare un libro.",
    url: `${siteUrl}/it/risorse`,
    mainEntity: { "@type": "ItemList", itemListElement: resources.map((guide, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/it/risorse/${guide.slug}`, name: guide.title })) },
  };
  return <main lang="it" className="resources-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><Link href="/it" className="brand">Scrittore <span>Site</span></Link><nav aria-label="Navigazione risorse"><Link href="/it">Home</Link><Link href="/it/come-funziona">Come funziona</Link><a href={appUrl} target="_blank" rel="noopener noreferrer">Apri l'app ↗</a></nav></header>
    <section className="resources-hero"><p className="eyebrow">RISORSE GRATUITE</p><h1>Guide per portare la tua idea fino al libro</h1><p>Otto guide pratiche per usare Scrittore Site con più metodo: compila il progetto, costruisci l'indice, scrivi, controlla e conserva ogni versione.</p></section>
    <section className="resource-grid" aria-label="Guide Scrittore Site">{resources.map((guide, index) => <article key={guide.slug}><span>{String(index + 1).padStart(2, "0")}</span><h2>{guide.title}</h2><p>{guide.description}</p><div>{guide.keywords.slice(0, 2).map((keyword) => <small key={keyword}>{keyword}</small>)}</div><Link href={`/it/risorse/${guide.slug}`}>Leggi la guida <b>→</b></Link></article>)}</section>
    <section className="resource-cta"><h2>Vuoi iniziare dal tuo progetto?</h2><p>Apri Scrittore Site, compila la sidebar e crea una struttura su cui lavorare davvero.</p><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">Inizia gratis con 50 crediti</a></section>
    <footer><span>© Scrittore Site {new Date().getFullYear()}</span><div><Link href="/it">Home</Link><Link href="/it/privacy">Privacy</Link><Link href="/it/termini">Termini</Link></div></footer>
  </main>;
}
