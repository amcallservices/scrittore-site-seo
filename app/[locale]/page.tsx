import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { appUrl, communityUrl, copy, isLocale, locales, siteUrl, type Locale, whatsappUrl } from "../../lib/site";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const item = copy[locale];
  const languages = Object.fromEntries(locales.map((code) => [copy[code].locale, `${siteUrl}/${code}`]));
  return {
    title: item.seoTitle,
    description: item.seoDescription,
    alternates: { canonical: `${siteUrl}/${locale}`, languages },
    openGraph: { title: item.seoTitle, description: item.seoDescription, url: `${siteUrl}/${locale}`, locale: item.locale, type: "website" },
  };
}

function Faq({ locale }: { locale: Locale }) {
  const entries: Record<Locale, [string, string][]> = {
    it: [["Cos'è Scrittore Site?", "È un ambiente guidato per progettare, scrivere, controllare e esportare libri."], ["Posso modificare i testi?", "Sì. L'editor permette di intervenire sulle sezioni e di salvare il progetto."], ["Il controllo copyright è una certificazione legale?", "No. È un controllo di supporto editoriale: verifica sempre il risultato prima della pubblicazione."]],
    en: [["What is Scrittore Site?", "It is a guided environment for planning, writing, reviewing and exporting books."], ["Can I edit the text?", "Yes. The editor lets you work on sections and save the project."], ["Is the copyright check a legal certification?", "No. It is editorial support: always review the result before publishing."]],
    es: [["¿Qué es Scrittore Site?", "Es un entorno guiado para planificar, escribir, revisar y exportar libros."], ["¿Puedo modificar el texto?", "Sí. El editor permite trabajar en las secciones y guardar el proyecto."], ["¿El control de copyright es una certificación legal?", "No. Es una ayuda editorial: revisa siempre el resultado antes de publicar."]],
    fr: [["Qu'est-ce que Scrittore Site ?", "C'est un environnement guidé pour concevoir, rédiger, contrôler et exporter des livres."], ["Puis-je modifier le texte ?", "Oui. L'éditeur permet d'intervenir sur les sections et de sauvegarder le projet."], ["Le contrôle du copyright est-il une certification juridique ?", "Non. C'est une aide éditoriale : vérifiez toujours le résultat avant publication."]],
    de: [["Was ist Scrittore Site?", "Eine geführte Umgebung zum Planen, Schreiben, Prüfen und Exportieren von Büchern."], ["Kann ich Texte ändern?", "Ja. Der Editor ermöglicht Änderungen an Abschnitten und das Speichern des Projekts."], ["Ist die Copyrightprüfung eine rechtliche Zertifizierung?", "Nein. Sie ist eine redaktionelle Hilfe: Prüfen Sie das Ergebnis vor der Veröffentlichung."]],
    ro: [["Ce este Scrittore Site?", "Este un mediu ghidat pentru planificarea, scrierea, verificarea și exportul cărților."], ["Pot modifica textul?", "Da. Editorul permite modificarea secțiunilor și salvarea proiectului."], ["Controlul copyright este o certificare juridică?", "Nu. Este un sprijin editorial: verifică mereu rezultatul înainte de publicare."]],
    ru: [["Что такое Scrittore Site?", "Это среда с подсказками для планирования, написания, проверки и экспорта книг."], ["Можно ли редактировать текст?", "Да. Редактор позволяет изменять разделы и сохранять проект."], ["Проверка copyright — это юридическая сертификация?", "Нет. Это редакторская поддержка: проверяйте результат перед публикацией."]],
    ar: [["ما هو Scrittore Site؟", "بيئة إرشادية لتخطيط الكتب وكتابتها ومراجعتها وتصديرها."], ["هل يمكنني تعديل النص؟", "نعم. يتيح المحرر تعديل الأقسام وحفظ المشروع."], ["هل فحص حقوق النشر شهادة قانونية؟", "لا. إنه دعم تحريري: راجع النتيجة دائماً قبل النشر."]],
    zh: [["Scrittore Site 是什么？", "它是用于规划、写作、检查和导出图书的引导式环境。"], ["我可以修改文本吗？", "可以。编辑器允许修改章节并保存项目。"], ["版权检查是法律认证吗？", "不是。它是编辑辅助：发布前请始终检查结果。"]],
  };
  return <div className="faq-list">{entries[locale].map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>;
}

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const dir = t.direction || "ltr";
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Scrittore Site", applicationCategory: "WritingApplication", operatingSystem: "Web", description: t.seoDescription, url: appUrl };

  return <main dir={dir} lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header">
      <Link href={`/${locale}`} className="brand">Scrittore <span>Site</span></Link>
      <nav aria-label="Main navigation"><a href="#features">{t.nav[0]}</a><Link href={`/${locale}/come-funziona`}>{t.nav[1]}</Link><a href="#engines">{t.nav[2]}</a><Link href={`/${locale}/prezzi`}>{t.nav[3]}</Link><a href="#faq">{t.nav[4]}</a></nav>
      <details className="language-picker"><summary>{t.language}</summary><div>{locales.map((code) => <Link href={`/${code}`} key={code}>{copy[code].language}</Link>)}</div></details>
    </header>

    <section className="demo demo-first" aria-label="Scrittore Site demo"><div className="frame-wrap"><iframe src={`${appUrl}?embed=true`} title="Scrittore Site demo" loading="eager" /></div></section>

    <section className="hero hero-after-demo">
      <div><p className="eyebrow">WRITING WORKSPACE</p><h1>{t.hero}</h1><p className="lead">{t.lead}</p><div className="actions"><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a><Link className="button ghost" href={`/${locale}/come-funziona`}>{t.secondary}</Link></div></div>
    </section>

    <section className="demo-link"><p>{t.demoText}</p><a className="button ghost" href={appUrl} target="_blank" rel="noopener noreferrer">{t.fullscreen} ↗</a></section>

    <section id="features" className="section section-compact"><p className="eyebrow">SCRITTORE SITE</p><h2>{t.featureTitle}</h2><p className="essential-copy">{t.features.join(" · ")}</p></section>

    <section id="engines" className="section engines section-compact"><p className="eyebrow">AI</p><h2>{t.engineTitle}</h2><div className="engine-grid"><article><h3>GPT-5.4</h3><p>{t.gpt}</p></article><article><h3>DeepSeek V4 Pro</h3><p>{t.deepseek}</p></article></div><p className="note">{t.creditNote}</p></section>

    <section id="faq" className="section faq section-compact"><p className="eyebrow">FAQ</p><h2>{t.faqTitle}</h2><Faq locale={locale} /></section>
    <section className="closing closing-compact"><h2>{t.finalTitle}</h2><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a></section>
    <footer><span>{t.copyright} {new Date().getFullYear()}</span><div><Link href={`/${locale}/funzioni`}>{t.nav[0]}</Link><Link href={`/${locale}/prezzi`}>{t.nav[3]}</Link><Link href={`/${locale}/faq`}>FAQ</Link><Link href={`/${locale}/privacy`}>Privacy</Link><a href={communityUrl} target="_blank" rel="noopener noreferrer">{t.community}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{t.support}</a></div></footer>
  </main>;
}
