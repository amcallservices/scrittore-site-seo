import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resourceUi } from "../../lib/localized-resources";
import { appUrl, communityUrl, copy, instagramUrl, isLocale, locales, siteUrl, type Locale, whatsappUrl } from "../../lib/site";
import { functionPageContent } from "../../lib/function-content";

type Props = { params: Promise<{ locale: string }> };

const functionOverviewTitles: Record<Locale, string> = {
  it: "Tutte le funzioni per creare il tuo libro",
  en: "Every feature for creating your book",
  es: "Todas las funciones para crear tu libro",
  fr: "Toutes les fonctions pour créer votre livre",
  de: "Alle Funktionen für Ihr Buch",
  ro: "Toate funcțiile pentru a crea cartea ta",
  ru: "Все функции для создания вашей книги",
  ar: "كل الوظائف لإنشاء كتابك",
  zh: "创作图书所需的全部功能",
};

const madeInItaly: Record<Locale, string> = {
  it: "Progettato in Italia, per accompagnare autori e autrici dall'idea al manoscritto.",
  en: "Designed in Italy to guide authors from an idea to a manuscript.",
  es: "Diseñado en Italia para acompañar a autores y autoras de la idea al manuscrito.",
  fr: "Conçu en Italie pour accompagner les auteurs et autrices de l'idée au manuscrit.",
  de: "In Italien entwickelt, um Autorinnen und Autoren von der Idee bis zum Manuskript zu begleiten.",
  ro: "Creat în Italia pentru a însoți autorii de la idee la manuscris.",
  ru: "Создано в Италии, чтобы сопровождать авторов от идеи до рукописи.",
  ar: "صُمم في إيطاليا لمرافقة المؤلفين من الفكرة إلى المخطوطة.",
  zh: "在意大利设计，陪伴作者从想法走向手稿。",
};

const heroSeoTitles: Record<Locale, string> = {
  it: "Software AI italiano per scrivere libri e prepararli per Amazon KDP",
  en: "Italian AI software for writing books and preparing them for Amazon KDP",
  es: "Software de IA italiano para escribir libros y prepararlos para Amazon KDP",
  fr: "Logiciel d'IA italien pour écrire des livres et les préparer pour Amazon KDP",
  de: "Italienische KI-Software zum Schreiben von Büchern und zur Vorbereitung für Amazon KDP",
  ro: "Software AI italian pentru scrierea cărților și pregătirea lor pentru Amazon KDP",
  ru: "Итальянское ПО с ИИ для написания книг и подготовки к Amazon KDP",
  ar: "برنامج ذكاء اصطناعي إيطالي لكتابة الكتب وإعدادها لـ Amazon KDP",
  zh: "意大利 AI 写作软件：创作图书并为 Amazon KDP 做准备",
};

const heroSeoLeads: Record<Locale, string> = {
  it: "Scrittore Site è un software AI italiano che ti accompagna dall'idea al manoscritto: definisci il progetto, crea l'indice, scrivi e revisiona i capitoli, controlla i contenuti ed esporta il libro in Word o PDF. È pensato anche per autori e self publisher che preparano libri destinati ad Amazon KDP, senza richiedere prompt complessi.",
  en: "Scrittore Site is Italian AI software that guides you from an idea to a manuscript: define the project, create the outline, write and revise chapters, review the content and export the book in Word or PDF. It is also designed for authors and self-publishers preparing books for Amazon KDP, without requiring complex prompts.",
  es: "Scrittore Site es un software de IA italiano que te acompaña de la idea al manuscrito: define el proyecto, crea el índice, escribe y revisa los capítulos, controla el contenido y exporta el libro en Word o PDF. También está pensado para autores y autopublicadores que preparan libros para Amazon KDP, sin necesitar prompts complejos.",
  fr: "Scrittore Site est un logiciel d'IA italien qui vous accompagne de l'idée au manuscrit : définissez le projet, créez le plan, rédigez et révisez les chapitres, contrôlez le contenu et exportez le livre en Word ou PDF. Il est aussi pensé pour les auteurs et autoéditeurs qui préparent des livres pour Amazon KDP, sans prompts complexes.",
  de: "Scrittore Site ist eine italienische KI-Software, die Sie von der Idee bis zum Manuskript begleitet: Projekt definieren, Gliederung erstellen, Kapitel schreiben und überarbeiten, Inhalte prüfen und das Buch als Word oder PDF exportieren. Sie richtet sich auch an Autorinnen, Autoren und Selfpublisher, die Bücher für Amazon KDP vorbereiten – ohne komplexe Prompts.",
  ro: "Scrittore Site este un software AI italian care te însoțește de la idee la manuscris: definești proiectul, creezi cuprinsul, scrii și revizuiești capitolele, verifici conținutul și exporți cartea în Word sau PDF. Este conceput și pentru autori și self-publisheri care pregătesc cărți pentru Amazon KDP, fără prompturi complexe.",
  ru: "Scrittore Site — итальянское ПО с ИИ, которое сопровождает вас от идеи до рукописи: определите проект, создайте структуру, напишите и отредактируйте главы, проверьте содержание и экспортируйте книгу в Word или PDF. Оно также создано для авторов и самиздателей, готовящих книги для Amazon KDP, без сложных промптов.",
  ar: "Scrittore Site هو برنامج ذكاء اصطناعي إيطالي يرافقك من الفكرة إلى المخطوطة: حدّد المشروع، أنشئ الفهرس، اكتب الفصول وراجعها، تحقق من المحتوى وصدّر الكتاب بصيغة Word أو PDF. وهو مصمم أيضاً للمؤلفين والناشرين المستقلين الذين يعدّون كتباً لـ Amazon KDP، من دون الحاجة إلى مطالبات معقدة.",
  zh: "Scrittore Site 是一款意大利 AI 软件，陪伴您从想法走向手稿：确定项目、创建目录、撰写并修订章节、检查内容，并将图书导出为 Word 或 PDF。它同样适合为 Amazon KDP 准备图书的作者和自出版者，无需复杂提示词。",
};

const editorialMemory: Record<Locale, string> = {
  it: "Un libro, non una raccolta di risposte AI: la memoria editoriale aiuta a mantenere il filo del progetto e a ridurre ripetizioni e incoerenze tra le sezioni.",
  en: "A book, not a collection of AI answers: editorial memory helps preserve the thread of the project and reduce repetition and inconsistency between sections.",
  es: "Un libro, no una colección de respuestas de IA: la memoria editorial ayuda a mantener el hilo del proyecto y a reducir repeticiones e incoherencias entre secciones.",
  fr: "Un livre, pas une collection de réponses d'IA : la mémoire éditoriale aide à préserver le fil du projet et à réduire répétitions et incohérences entre les sections.",
  de: "Ein Buch, keine Sammlung von KI-Antworten: Das redaktionelle Gedächtnis hilft, den roten Faden zu bewahren und Wiederholungen sowie Unstimmigkeiten zwischen Abschnitten zu verringern.",
  ro: "O carte, nu o colecție de răspunsuri AI: memoria editorială ajută la păstrarea firului proiectului și la reducerea repetițiilor și incoerențelor dintre secțiuni.",
  ru: "Книга, а не набор ответов ИИ: редакторская память помогает сохранять нить проекта и уменьшать повторы и несоответствия между разделами.",
  ar: "كتاب، وليس مجموعة من إجابات الذكاء الاصطناعي: تساعد الذاكرة التحريرية على الحفاظ على خيط المشروع وتقليل التكرار وعدم الاتساق بين الأقسام.",
  zh: "一本书，而不是一组 AI 回答：编辑记忆有助于保持项目脉络，减少章节之间的重复和不一致。",
};

const gptEngineDescriptions: Record<Locale, string> = {
  it: "Funzioni complete e controllo copyright web. Le immagini possono essere caricate dall'esterno nel progetto.",
  en: "Complete features and web copyright checks. Images can be uploaded from external sources into the project.",
  es: "Funciones completas y control de copyright web. Las imágenes se pueden cargar desde fuentes externas al proyecto.",
  fr: "Fonctions complètes et contrôle du copyright web. Les images peuvent être importées depuis des sources externes dans le projet.",
  de: "Umfassende Funktionen und Web-Copyrightprüfung. Bilder können aus externen Quellen in das Projekt hochgeladen werden.",
  ro: "Funcții complete și control de copyright web. Imaginile pot fi încărcate din surse externe în proiect.",
  ru: "Полный набор функций и проверка веб-копирайта. Изображения можно загружать в проект из внешних источников.",
  ar: "ميزات كاملة وفحص حقوق النشر على الويب. يمكن تحميل الصور من مصادر خارجية إلى المشروع.",
  zh: "完整功能与网页版权检查。图片可从外部来源上传至项目。",
};

const reviewLabels: Record<Locale, string> = {
  it: "Lascia una recensione",
  en: "Leave a review",
  es: "Deja una reseña",
  fr: "Laisser un avis",
  de: "Bewertung schreiben",
  ro: "Lasă o recenzie",
  ru: "Оставить отзыв",
  ar: "اترك مراجعة",
  zh: "留下评价",
};

const menuLabels: Record<Locale, string> = {
  it: "Menu",
  en: "Menu",
  es: "Menú",
  fr: "Menu",
  de: "Menü",
  ro: "Meniu",
  ru: "Меню",
  ar: "القائمة",
  zh: "菜单",
};

const trustpilotReviewUrl = "https://it.trustpilot.com/review/scrittore.site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const item = copy[locale];
  const title = heroSeoTitles[locale];
  const description = heroSeoLeads[locale];
  const languages = { ...Object.fromEntries(locales.map((code) => [copy[code].locale, `${siteUrl}/${code}`])), "x-default": `${siteUrl}/it` };
  return {
    title,
    description,
    keywords: ["Scrittore Site", ...item.features, item.flowTitle],
    alternates: { canonical: `${siteUrl}/${locale}`, languages },
    openGraph: { title, description, url: `${siteUrl}/${locale}`, locale: item.locale, type: "website" },
  };
}

function faqEntries(locale: Locale): [string, string][] {
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
  return entries[locale];
}

function Faq({ locale }: { locale: Locale }) {
  return <div className="faq-list">{faqEntries(locale).map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>;
}

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const resources = resourceUi[locale];
  const functionOverview = functionPageContent[locale];
  const dir = t.direction || "ltr";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Scrittore Site", applicationCategory: "WritingApplication", operatingSystem: "Web", description: heroSeoLeads[locale], url: appUrl, applicationSubCategory: "Book writing and editorial workspace", featureList: functionOverview.groups.flatMap((group) => group.items) },
      { "@type": "Organization", name: "Scrittore Site", url: siteUrl, logo: `${siteUrl}/brand/scrittore-site-logo.png`, sameAs: [instagramUrl], contactPoint: { "@type": "ContactPoint", contactType: "customer support", url: whatsappUrl } },
      { "@type": "WebSite", name: "Scrittore Site", url: siteUrl, inLanguage: t.locale },
      { "@type": "FAQPage", mainEntity: faqEntries(locale).map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return <main dir={dir} lang={locale} className="site-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header">
      <Link href={`/${locale}`} className="brand brand-logo" aria-label="Scrittore Site"><img src="/brand/scrittore-site-logo.png" alt="Scrittore Site" /></Link>
      <nav aria-label="Main navigation"><a href="#features">{t.nav[0]}</a><Link href={`/${locale}/come-funziona`}>{t.nav[1]}</Link><a href="#engines">{t.nav[2]}</a><Link href={`/${locale}/prezzi`}>{t.nav[3]}</Link><Link href={`/${locale}/risorse`}>{resources.nav}</Link><a href={trustpilotReviewUrl} target="_blank" rel="noopener noreferrer">{reviewLabels[locale]}</a><a href="#faq">{t.nav[4]}</a></nav>
      <details className="mobile-menu"><summary>☰ {menuLabels[locale]}</summary><nav aria-label={menuLabels[locale]}><a href="#features">{t.nav[0]}</a><Link href={`/${locale}/come-funziona`}>{t.nav[1]}</Link><a href="#engines">{t.nav[2]}</a><Link href={`/${locale}/prezzi`}>{t.nav[3]}</Link><Link href={`/${locale}/risorse`}>{resources.nav}</Link><a href={trustpilotReviewUrl} target="_blank" rel="noopener noreferrer">{reviewLabels[locale]}</a><a href="#faq">{t.nav[4]}</a></nav></details>
      <details className="language-picker"><summary>{t.language}</summary><div>{locales.map((code) => <Link href={`/${code}`} key={code}>{copy[code].language}</Link>)}</div></details>
    </header>

    <section className="hero hero-after-demo">
      <div><p className="eyebrow">WRITING WORKSPACE</p><h1>{heroSeoTitles[locale]}</h1><p className="hero-slogan">{t.hero}</p><p className="lead">{heroSeoLeads[locale]}</p><p className="made-in-italy">🇮🇹 {madeInItaly[locale]}</p><p className="editorial-memory">🧠 {editorialMemory[locale]}</p><div className="actions"><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a><Link className="button ghost" href={`/${locale}/come-funziona`}>{t.secondary}</Link></div></div>
    </section>

    <section className="demo demo-first" aria-label="Scrittore Site demo"><div className="demo-intro"><p className="eyebrow">LIVE DEMO</p><h2>{t.demoTitle}</h2><p>{t.demoText}</p></div><div className="frame-wrap"><iframe src={`${appUrl}?embed=true`} title="Scrittore Site demo" loading="eager" /></div></section>

    <section className="demo-link"><p>{t.demoText}</p><a className="button ghost" href={appUrl} target="_blank" rel="noopener noreferrer">{t.fullscreen} ↗</a></section>

    <section id="features" className="section section-compact"><p className="eyebrow">SCRITTORE SITE</p><h2>{t.featureTitle}</h2><ul className="feature-list">{t.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>

    <section className="section function-overview" aria-labelledby="function-overview-title"><p className="eyebrow">{functionOverview.eyebrow}</p><h2 id="function-overview-title">{functionOverviewTitles[locale]}</h2><p className="function-overview-lead">{functionOverview.intro}</p><div className="home-function-grid">{functionOverview.groups.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><p className="function-overview-note">{functionOverview.closing}</p><Link className="button ghost" href={`/${locale}/funzioni`}>{t.nav[0]} →</Link></section>

    <section id="engines" className="section engines section-compact"><p className="eyebrow">AI</p><h2>{t.engineTitle}</h2><div className="engine-grid"><article><h3>GPT-5.4</h3><p>{gptEngineDescriptions[locale]}</p></article><article><h3>DeepSeek V4 Pro</h3><p>{t.deepseek}</p></article></div><p className="note">{t.creditNote}</p></section>

    <section className="section resources-promo section-compact"><p className="eyebrow">{resources.eyebrow}</p><h2>{resources.indexTitle}</h2><p className="essential-copy">{resources.indexLead}</p><Link className="button ghost" href={`/${locale}/risorse`}>{resources.all} →</Link></section>
    <section id="faq" className="section faq section-compact"><p className="eyebrow">FAQ</p><h2>{t.faqTitle}</h2><Faq locale={locale} /></section>
    <section className="closing closing-compact"><h2>{t.finalTitle}</h2><a className="button primary" href={appUrl} target="_blank" rel="noopener noreferrer">{t.primary}</a></section>
    <footer><span>{t.copyright} {new Date().getFullYear()}</span><div><Link href={`/${locale}/risorse`}>{resources.nav}</Link><Link href={`/${locale}/funzioni`}>{t.nav[0]}</Link><Link href={`/${locale}/prezzi`}>{t.nav[3]}</Link><Link href={`/${locale}/faq`}>FAQ</Link><Link href={`/${locale}/privacy`}>Privacy</Link><a href={communityUrl} target="_blank" rel="noopener noreferrer">{t.community}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{t.support}</a></div></footer>
  </main>;
}
