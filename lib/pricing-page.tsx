import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { pageContent } from "./page-content";
import { pricingUi } from "./pricing-ui";
import { appUrl, copy, packages, type Locale } from "./site";

/** Pagina dei crediti: schede dei pacchetti con barra proporzionale, spiegazione e invito finale. */
export function PricingPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const ui = pricingUi[locale];
  const content = pageContent[locale];
  const dir = t.direction || "ltr";
  const max = Math.max(...packages.map(([, credits]) => Number(credits.replace(/\./g, ""))));

  return (
    <main dir={dir} lang={locale} className="pricing-page">
      <header className="site-header">
        <BrandLogo locale={locale} />
        <Link className="back" href={`/${locale}`}>{content.home}</Link>
      </header>

      <section className="pricing-hero">
        <p className="eyebrow">SCRITTORE SITE</p>
        <h1>{t.pricingTitle}</h1>
        <p>{t.pricingLead}</p>
        <a className="pricing-free" href={appUrl} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">✦</span> {t.primary}</a>
      </section>

      <section className="pricing-grid" aria-label={t.pricingTitle}>
        {packages.map(([name, credits, price], index) => {
          const share = Math.max(8, Math.round((Number(credits.replace(/\./g, "")) / max) * 100));
          return (
            <article key={name} className={`pricing-card tier-${index + 1}`}>
              <h2>{name}</h2>
              <p className="pricing-credits"><b>{credits}</b> <span>{ui.credits}</span></p>
              <div className="pricing-meter" aria-hidden="true"><i style={{ width: `${share}%` }} /></div>
              <p className="pricing-price">{price}</p>
              <p className="pricing-desc">{content.packageDescriptions[index]}</p>
              <a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{ui.choose} {name}</a>
            </article>
          );
        })}
      </section>

      <section className="pricing-how">
        <h2>{ui.howTitle}</h2>
        <ol>{ui.points.map((point, i) => <li key={point}><span>{i + 1}</span><p>{point}</p></li>)}</ol>
        <p className="pricing-note">{t.creditNote}</p>
      </section>

      <section className="pricing-cta">
        <h2>{t.finalTitle}</h2>
        <a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a>
      </section>

      <footer><span>{t.copyright} {new Date().getFullYear()}</span><div><Link href={`/${locale}/privacy`}>Privacy</Link><Link href={`/${locale}/termini`}>{ui.legal}</Link><Link href={`/${locale}/faq`}>FAQ</Link></div></footer>
    </main>
  );
}
