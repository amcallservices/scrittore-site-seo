import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { appUrl, copy, isLocale, locales, packages, siteUrl, type Locale } from "../../../lib/site";

const pages = ["funzioni", "prezzi", "come-funziona", "faq", "privacy", "termini"] as const;
type PageName = (typeof pages)[number];
type Props = { params: Promise<{ locale: string; page: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => pages.map((page) => ({ locale, page })));
}

function titleFor(locale: Locale, page: PageName) {
  const local: Record<PageName, string> = {
    funzioni: copy[locale].nav[0], prezzi: copy[locale].pricingTitle, "come-funziona": copy[locale].nav[1], faq: copy[locale].faqTitle, privacy: "Privacy", termini: "Termini",
  };
  return local[page];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as PageName)) return {};
  const title = titleFor(locale, page as PageName);
  return { title, description: `${title} — ${copy[locale].seoDescription}`, alternates: { canonical: `${siteUrl}/${locale}/${page}` } };
}

export default async function InformationPage({ params }: Props) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as PageName)) notFound();
  const t = copy[locale]; const name = page as PageName; const dir = t.direction || "ltr";
  const title = titleFor(locale, name);
  const body: Record<PageName, React.ReactNode> = {
    funzioni: <ul>{t.features.map((item) => <li key={item}>{item}</li>)}</ul>,
    prezzi: <div className="simple-packages">{packages.map(([name, credits, price, description]) => <article key={name}><h2>{name}</h2><b>{credits} crediti · {price}</b><p>{description}</p></article>)}</div>,
    "come-funziona": <ol>{t.flow.map((step) => <li key={step}>{step}</li>)}</ol>,
    faq: <><h2>{t.faqTitle}</h2><p>{t.creditNote}</p><p>Puoi modificare il testo, salvare il progetto e controllare il risultato prima dell&apos;esportazione.</p></>,
    privacy: <><p>Scrittore Site tratta i dati necessari al funzionamento dell&apos;account e del progetto editoriale. Prima della pubblicazione, completa questa pagina con l&apos;informativa privacy definitiva, i dati del titolare e i riferimenti di contatto effettivi.</p><p>Non inserire in questa pagina affermazioni legali non verificate.</p></>,
    termini: <><p>Questa pagina è predisposta per i termini di utilizzo. Prima della pubblicazione, inserisci condizioni commerciali, rimborsi, limiti del servizio e dati del titolare verificati da un professionista competente.</p><p>Il sito non presenta queste informazioni come consulenza legale.</p></>,
  };
  return <main dir={dir} lang={locale} className="legal-page"><header className="site-header"><Link href={`/${locale}`} className="brand">Scrittore <span>Site</span></Link><Link className="back" href={`/${locale}`}>← Home</Link></header><article><p className="eyebrow">SCRITTORE SITE</p><h1>{title}</h1>{body[name]}<a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a></article></main>;
}
