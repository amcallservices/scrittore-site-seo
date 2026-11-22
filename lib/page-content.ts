import type { Locale } from "./site";

type PageContent = {
  home: string;
  privacyTitle: string;
  faqText: string;
  privacy: [string, string];
  packageDescriptions: [string, string, string, string];
};

export const pageContent: Record<Locale, PageContent> = {
  it: {
    home: "← Home", privacyTitle: "Privacy", faqText: "Puoi modificare il testo, salvare il progetto e controllare il risultato prima dell'esportazione.",
    privacy: ["Scrittore Site tratta i dati necessari al funzionamento dell'account e del progetto editoriale. Prima della pubblicazione, completa questa pagina con l'informativa privacy definitiva, i dati del titolare e i riferimenti di contatto effettivi.", "Non inserire in questa pagina affermazioni legali non verificate."],
    packageDescriptions: ["Per un progetto breve o lavorazioni distribuite.", "Per più progetti o una stesura articolata.", "Per chi lavora con continuità.", "Per utilizzo intensivo o più manoscritti."],
  },
  en: {
    home: "← Home", privacyTitle: "Privacy", faqText: "You can edit the text, save the project and review the result before exporting.",
    privacy: ["Scrittore Site processes the data needed to operate the account and editorial project. Before publication, complete this page with the final privacy notice, controller details and real contact information.", "Do not add unverified legal statements to this page."],
    packageDescriptions: ["For a short project or work spread over time.", "For multiple projects or a structured draft.", "For ongoing work.", "For intensive use or multiple manuscripts."],
  },
  es: {
    home: "← Inicio", privacyTitle: "Privacidad", faqText: "Puedes modificar el texto, guardar el proyecto y revisar el resultado antes de exportarlo.",
    privacy: ["Scrittore Site trata los datos necesarios para el funcionamiento de la cuenta y del proyecto editorial. Antes de publicar, completa esta página con el aviso de privacidad definitivo, los datos del responsable y contactos reales.", "No añadas afirmaciones legales no verificadas en esta página."],
    packageDescriptions: ["Para un proyecto breve o trabajo distribuido.", "Para varios proyectos o una redacción estructurada.", "Para trabajar de forma continua.", "Para uso intensivo o varios manuscritos."],
  },
  fr: {
    home: "← Accueil", privacyTitle: "Confidentialité", faqText: "Vous pouvez modifier le texte, sauvegarder le projet et contrôler le résultat avant l'exportation.",
    privacy: ["Scrittore Site traite les données nécessaires au fonctionnement du compte et du projet éditorial. Avant publication, complétez cette page avec la politique de confidentialité définitive, les données du responsable et les contacts réels.", "N'ajoutez pas d'affirmations juridiques non vérifiées sur cette page."],
    packageDescriptions: ["Pour un projet court ou un travail réparti.", "Pour plusieurs projets ou une rédaction structurée.", "Pour travailler régulièrement.", "Pour une utilisation intensive ou plusieurs manuscrits."],
  },
  de: {
    home: "← Startseite", privacyTitle: "Datenschutz", faqText: "Sie können den Text bearbeiten, das Projekt speichern und das Ergebnis vor dem Export prüfen.",
    privacy: ["Scrittore Site verarbeitet die Daten, die für das Konto und das Buchprojekt erforderlich sind. Ergänzen Sie diese Seite vor der Veröffentlichung mit der endgültigen Datenschutzerklärung, Angaben zum Verantwortlichen und echten Kontaktdaten.", "Fügen Sie auf dieser Seite keine ungeprüften rechtlichen Aussagen ein."],
    packageDescriptions: ["Für ein kurzes Projekt oder verteilte Arbeit.", "Für mehrere Projekte oder einen umfangreicheren Entwurf.", "Für kontinuierliches Arbeiten.", "Für intensive Nutzung oder mehrere Manuskripte."],
  },
  ro: {
    home: "← Acasă", privacyTitle: "Confidențialitate", faqText: "Poți modifica textul, salva proiectul și verifica rezultatul înainte de export.",
    privacy: ["Scrittore Site prelucrează datele necesare funcționării contului și proiectului editorial. Înainte de publicare, completează această pagină cu informarea finală privind confidențialitatea, datele operatorului și datele reale de contact.", "Nu introduce pe această pagină afirmații juridice neverificate."],
    packageDescriptions: ["Pentru un proiect scurt sau lucru distribuit.", "Pentru mai multe proiecte sau o redactare structurată.", "Pentru lucru constant.", "Pentru utilizare intensivă sau mai multe manuscrise."],
  },
  ru: {
    home: "← Главная", privacyTitle: "Конфиденциальность", faqText: "Вы можете редактировать текст, сохранять проект и проверять результат перед экспортом.",
    privacy: ["Scrittore Site обрабатывает данные, необходимые для работы аккаунта и издательского проекта. Перед публикацией дополните эту страницу окончательной политикой конфиденциальности, данными оператора и реальными контактами.", "Не добавляйте на эту страницу непроверенные юридические утверждения."],
    packageDescriptions: ["Для короткого проекта или работы поэтапно.", "Для нескольких проектов или структурированной рукописи.", "Для постоянной работы.", "Для интенсивного использования или нескольких рукописей."],
  },
  ar: {
    home: "الرئيسية ←", privacyTitle: "الخصوصية", faqText: "يمكنك تعديل النص وحفظ المشروع ومراجعة النتيجة قبل التصدير.",
    privacy: ["يعالج Scrittore Site البيانات اللازمة لتشغيل الحساب والمشروع التحريري. قبل النشر، أكمل هذه الصفحة بإشعار الخصوصية النهائي وبيانات المسؤول ووسائل الاتصال الفعلية.", "لا تضف إلى هذه الصفحة ادعاءات قانونية غير متحقق منها."],
    packageDescriptions: ["لمشروع قصير أو عمل موزع على مراحل.", "لعدة مشاريع أو مسودة منظمة.", "للعمل المستمر.", "للاستخدام المكثف أو عدة مخطوطات."],
  },
  zh: {
    home: "← 首页", privacyTitle: "隐私", faqText: "您可以编辑文本、保存项目，并在导出前检查结果。",
    privacy: ["Scrittore Site 会处理运行帐户和编辑项目所需的数据。发布前，请在本页面补充最终隐私声明、数据控制者资料和真实联系方式。", "请勿在本页面添加未经核实的法律声明。"],
    packageDescriptions: ["适用于短项目或分阶段工作。", "适用于多个项目或结构化写作。", "适用于持续工作。", "适用于高强度使用或多个手稿。"],
  },
};
