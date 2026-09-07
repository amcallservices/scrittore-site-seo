import type { Locale } from "./site";

type PageContent = {
  home: string;
  privacyTitle: string;
  termsTitle: string;
  faqText: string;
  privacy: [string, string];
  terms: [string, string];
  packageDescriptions: [string, string, string, string, string];
};

export const pageContent: Record<Locale, PageContent> = {
  it: {
    home: "← Home", privacyTitle: "Privacy", termsTitle: "Termini", faqText: "Puoi modificare il testo, salvare il progetto e controllare il risultato prima dell'esportazione.",
    privacy: ["Scrittore Site tratta i dati necessari al funzionamento dell'account e del progetto editoriale. Prima della pubblicazione, completa questa pagina con l'informativa privacy definitiva, i dati del titolare e i riferimenti di contatto effettivi.", "Non inserire in questa pagina affermazioni legali non verificate."],
    terms: ["Questa pagina è predisposta per i termini di utilizzo. Prima della pubblicazione, inserisci condizioni commerciali, rimborsi, limiti del servizio e dati del titolare verificati da un professionista competente.", "Il sito non presenta queste informazioni come consulenza legale."],
    packageDescriptions: ["Per provare funzioni e piccoli interventi.", "Per un progetto breve o lavorazioni distribuite.", "Per più progetti o una stesura articolata.", "Per chi lavora con continuità.", "Per utilizzo intensivo o più manoscritti."],
  },
  en: {
    home: "← Home", privacyTitle: "Privacy", termsTitle: "Terms of use", faqText: "You can edit the text, save the project and review the result before exporting.",
    privacy: ["Scrittore Site processes the data needed to operate the account and editorial project. Before publication, complete this page with the final privacy notice, controller details and real contact information.", "Do not add unverified legal statements to this page."],
    terms: ["This page is prepared for the terms of use. Before publication, add commercial conditions, refunds, service limits and controller details verified by a qualified professional.", "This site does not present this information as legal advice."],
    packageDescriptions: ["To try features and small tasks.", "For a short project or work spread over time.", "For multiple projects or a structured draft.", "For ongoing work.", "For intensive use or multiple manuscripts."],
  },
  es: {
    home: "← Inicio", privacyTitle: "Privacidad", termsTitle: "Términos de uso", faqText: "Puedes modificar el texto, guardar el proyecto y revisar el resultado antes de exportarlo.",
    privacy: ["Scrittore Site trata los datos necesarios para el funcionamiento de la cuenta y del proyecto editorial. Antes de publicar, completa esta página con el aviso de privacidad definitivo, los datos del responsable y contactos reales.", "No añadas afirmaciones legales no verificadas en esta página."],
    terms: ["Esta página está preparada para los términos de uso. Antes de publicar, añade condiciones comerciales, reembolsos, límites del servicio y datos del responsable verificados por un profesional competente.", "El sitio no presenta esta información como asesoramiento jurídico."],
    packageDescriptions: ["Para probar funciones y pequeñas tareas.", "Para un proyecto breve o trabajo distribuido.", "Para varios proyectos o una redacción estructurada.", "Para trabajar de forma continua.", "Para uso intensivo o varios manuscritos."],
  },
  fr: {
    home: "← Accueil", privacyTitle: "Confidentialité", termsTitle: "Conditions d'utilisation", faqText: "Vous pouvez modifier le texte, sauvegarder le projet et contrôler le résultat avant l'exportation.",
    privacy: ["Scrittore Site traite les données nécessaires au fonctionnement du compte et du projet éditorial. Avant publication, complétez cette page avec la politique de confidentialité définitive, les données du responsable et les contacts réels.", "N'ajoutez pas d'affirmations juridiques non vérifiées sur cette page."],
    terms: ["Cette page est prévue pour les conditions d'utilisation. Avant publication, ajoutez les conditions commerciales, remboursements, limites du service et données du responsable vérifiés par un professionnel compétent.", "Le site ne présente pas ces informations comme un conseil juridique."],
    packageDescriptions: ["Pour essayer les fonctions et de petites interventions.", "Pour un projet court ou un travail réparti.", "Pour plusieurs projets ou une rédaction structurée.", "Pour travailler régulièrement.", "Pour une utilisation intensive ou plusieurs manuscrits."],
  },
  de: {
    home: "← Startseite", privacyTitle: "Datenschutz", termsTitle: "Nutzungsbedingungen", faqText: "Sie können den Text bearbeiten, das Projekt speichern und das Ergebnis vor dem Export prüfen.",
    privacy: ["Scrittore Site verarbeitet die Daten, die für das Konto und das Buchprojekt erforderlich sind. Ergänzen Sie diese Seite vor der Veröffentlichung mit der endgültigen Datenschutzerklärung, Angaben zum Verantwortlichen und echten Kontaktdaten.", "Fügen Sie auf dieser Seite keine ungeprüften rechtlichen Aussagen ein."],
    terms: ["Diese Seite ist für die Nutzungsbedingungen vorgesehen. Ergänzen Sie vor der Veröffentlichung Geschäftsbedingungen, Erstattungen, Leistungsgrenzen und von einer qualifizierten Fachperson geprüfte Angaben zum Verantwortlichen.", "Diese Website stellt diese Informationen nicht als Rechtsberatung dar."],
    packageDescriptions: ["Zum Ausprobieren von Funktionen und kleinen Aufgaben.", "Für ein kurzes Projekt oder verteilte Arbeit.", "Für mehrere Projekte oder einen umfangreicheren Entwurf.", "Für kontinuierliches Arbeiten.", "Für intensive Nutzung oder mehrere Manuskripte."],
  },
  ro: {
    home: "← Acasă", privacyTitle: "Confidențialitate", termsTitle: "Termeni de utilizare", faqText: "Poți modifica textul, salva proiectul și verifica rezultatul înainte de export.",
    privacy: ["Scrittore Site prelucrează datele necesare funcționării contului și proiectului editorial. Înainte de publicare, completează această pagină cu informarea finală privind confidențialitatea, datele operatorului și datele reale de contact.", "Nu introduce pe această pagină afirmații juridice neverificate."],
    terms: ["Această pagină este pregătită pentru termenii de utilizare. Înainte de publicare, adaugă condițiile comerciale, rambursările, limitele serviciului și datele operatorului verificate de un profesionist competent.", "Site-ul nu prezintă aceste informații drept consultanță juridică."],
    packageDescriptions: ["Pentru a testa funcții și intervenții mici.", "Pentru un proiect scurt sau lucru distribuit.", "Pentru mai multe proiecte sau o redactare structurată.", "Pentru lucru constant.", "Pentru utilizare intensivă sau mai multe manuscrise."],
  },
  ru: {
    home: "← Главная", privacyTitle: "Конфиденциальность", termsTitle: "Условия использования", faqText: "Вы можете редактировать текст, сохранять проект и проверять результат перед экспортом.",
    privacy: ["Scrittore Site обрабатывает данные, необходимые для работы аккаунта и издательского проекта. Перед публикацией дополните эту страницу окончательной политикой конфиденциальности, данными оператора и реальными контактами.", "Не добавляйте на эту страницу непроверенные юридические утверждения."],
    terms: ["Эта страница подготовлена для условий использования. Перед публикацией добавьте коммерческие условия, возвраты, ограничения сервиса и данные оператора, проверенные компетентным специалистом.", "Сайт не представляет эту информацию как юридическую консультацию."],
    packageDescriptions: ["Чтобы попробовать функции и небольшие задачи.", "Для короткого проекта или работы поэтапно.", "Для нескольких проектов или структурированной рукописи.", "Для постоянной работы.", "Для интенсивного использования или нескольких рукописей."],
  },
  ar: {
    home: "الرئيسية ←", privacyTitle: "الخصوصية", termsTitle: "شروط الاستخدام", faqText: "يمكنك تعديل النص وحفظ المشروع ومراجعة النتيجة قبل التصدير.",
    privacy: ["يعالج Scrittore Site البيانات اللازمة لتشغيل الحساب والمشروع التحريري. قبل النشر، أكمل هذه الصفحة بإشعار الخصوصية النهائي وبيانات المسؤول ووسائل الاتصال الفعلية.", "لا تضف إلى هذه الصفحة ادعاءات قانونية غير متحقق منها."],
    terms: ["هذه الصفحة مخصصة لشروط الاستخدام. قبل النشر، أضف الشروط التجارية وسياسة الاسترداد وحدود الخدمة وبيانات المسؤول التي تحقق منها مختص مؤهل.", "لا يقدم الموقع هذه المعلومات بوصفها استشارة قانونية."],
    packageDescriptions: ["لتجربة الميزات والمهام الصغيرة.", "لمشروع قصير أو عمل موزع على مراحل.", "لعدة مشاريع أو مسودة منظمة.", "للعمل المستمر.", "للاستخدام المكثف أو عدة مخطوطات."],
  },
  zh: {
    home: "← 首页", privacyTitle: "隐私", termsTitle: "使用条款", faqText: "您可以编辑文本、保存项目，并在导出前检查结果。",
    privacy: ["Scrittore Site 会处理运行帐户和编辑项目所需的数据。发布前，请在本页面补充最终隐私声明、数据控制者资料和真实联系方式。", "请勿在本页面添加未经核实的法律声明。"],
    terms: ["本页面用于填写使用条款。发布前，请加入经合格专业人士核实的商业条款、退款政策、服务限制和数据控制者资料。", "本网站不将这些信息视为法律建议。"],
    packageDescriptions: ["用于试用功能和小型任务。", "适用于短项目或分阶段工作。", "适用于多个项目或结构化写作。", "适用于持续工作。", "适用于高强度使用或多个手稿。"],
  },
};
