import type { Locale } from "./site";

type TourText = {
  launch: string; next: string; back: string; skip: string; finish: string; close: string; stepOf: string;
  steps: [title: string, text: string][];
};

/** Ordine dei passi = ordine dei data-tour nella home: hero, demo, features, functions, engines, resources, faq, start. */
export const tourTargets = ["hero", "demo", "features", "functions", "engines", "resources", "faq", "start"] as const;

export const tourContent: Record<Locale, TourText> = {
  it: { launch: "Visita guidata", next: "Avanti", back: "Indietro", skip: "Salta", finish: "Fine", close: "Chiudi la visita guidata", stepOf: "Passo {n} di {m}", steps: [
    ["Benvenuto in Scrittore Site", "Qui porti il tuo libro dall'idea al manoscritto, mantenendo il controllo di ogni passaggio."],
    ["Prova subito la demo", "L'applicazione è incorporata nella pagina: esplorala qui oppure aprila a schermo intero."],
    ["Gli strumenti essenziali", "Indice, scrittura per capitoli, controlli di originalità ed esportazione in Word, PDF e CSV."],
    ["Tutte le funzioni, fase per fase", "Le funzioni sono raggruppate secondo il lavoro editoriale: apri una scheda per vedere il dettaglio."],
    ["Due cervelli AI: costoso o economico", "Scegli il cervello più adatto al lavoro. Il preventivo dei crediti è sempre mostrato prima dell'avvio."],
    ["Guide gratuite", "Risorse pratiche per configurare il progetto, costruire l'indice e preparare il libro alla pubblicazione."],
    ["Domande frequenti", "Risposte rapide ai dubbi più comuni, dal copyright alla modifica dei testi."],
    ["Inizia gratis", "Parti con 50 crediti gratuiti: la tua idea merita una struttura, non un foglio bianco."],
  ] },
  en: { launch: "Guided tour", next: "Next", back: "Back", skip: "Skip", finish: "Done", close: "Close the guided tour", stepOf: "Step {n} of {m}", steps: [
    ["Welcome to Scrittore Site", "Take your book from idea to manuscript while staying in control of every step."],
    ["Try the live demo", "The app is embedded in the page: explore it here or open it in full screen."],
    ["The essential tools", "Outline, chapter-by-chapter writing, originality checks and export to Word, PDF and CSV."],
    ["Every feature, stage by stage", "Features are grouped by editorial workflow: open a card to see the details."],
    ["Two AI engines: expensive or economical", "Pick the engine that suits the job. A credit estimate is always shown before you start."],
    ["Free guides", "Practical resources to set up your project, build the outline and prepare your book for publishing."],
    ["Frequently asked questions", "Quick answers to common doubts, from copyright to editing your text."],
    ["Start for free", "Begin with 50 free credits: your idea deserves structure, not a blank page."],
  ] },
  es: { launch: "Visita guiada", next: "Siguiente", back: "Atrás", skip: "Omitir", finish: "Fin", close: "Cerrar la visita guiada", stepOf: "Paso {n} de {m}", steps: [
    ["Bienvenido a Scrittore Site", "Lleva tu libro de la idea al manuscrito manteniendo el control de cada paso."],
    ["Prueba la demo", "La aplicación está integrada en la página: explórala aquí o ábrela a pantalla completa."],
    ["Las herramientas esenciales", "Índice, redacción por capítulos, control de originalidad y exportación a Word, PDF y CSV."],
    ["Todas las funciones, etapa por etapa", "Las funciones se agrupan según el trabajo editorial: abre una ficha para ver el detalle."],
    ["Dos motores IA: costoso o económico", "Elige el motor adecuado para cada tarea. El presupuesto de créditos se muestra siempre antes de empezar."],
    ["Guías gratuitas", "Recursos prácticos para configurar el proyecto, crear el índice y preparar el libro para publicar."],
    ["Preguntas frecuentes", "Respuestas rápidas a las dudas habituales, del copyright a la edición del texto."],
    ["Empieza gratis", "Comienza con 50 créditos gratuitos: tu idea merece estructura, no una página en blanco."],
  ] },
  fr: { launch: "Visite guidée", next: "Suivant", back: "Retour", skip: "Passer", finish: "Terminer", close: "Fermer la visite guidée", stepOf: "Étape {n} sur {m}", steps: [
    ["Bienvenue sur Scrittore Site", "Menez votre livre de l'idée au manuscrit en gardant le contrôle de chaque étape."],
    ["Essayez la démo", "L'application est intégrée à la page : explorez-la ici ou ouvrez-la en plein écran."],
    ["Les outils essentiels", "Plan, rédaction chapitre par chapitre, contrôle d'originalité et export Word, PDF et CSV."],
    ["Toutes les fonctions, étape par étape", "Les fonctions sont regroupées selon le travail éditorial : ouvrez une carte pour voir le détail."],
    ["Deux IA : coûteuse ou économique", "Choisissez l'IA adaptée à la tâche. L'estimation des crédits est toujours affichée avant de commencer."],
    ["Guides gratuits", "Des ressources pratiques pour configurer le projet, créer le plan et préparer le livre à la publication."],
    ["Questions fréquentes", "Des réponses rapides aux doutes courants, du copyright à la modification du texte."],
    ["Commencez gratuitement", "Démarrez avec 50 crédits offerts : votre idée mérite une structure, pas une page blanche."],
  ] },
  de: { launch: "Geführte Tour", next: "Weiter", back: "Zurück", skip: "Überspringen", finish: "Fertig", close: "Geführte Tour schließen", stepOf: "Schritt {n} von {m}", steps: [
    ["Willkommen bei Scrittore Site", "Führen Sie Ihr Buch von der Idee zum Manuskript und behalten Sie jeden Schritt unter Kontrolle."],
    ["Demo ausprobieren", "Die App ist in die Seite eingebettet: Erkunden Sie sie hier oder öffnen Sie sie im Vollbild."],
    ["Die wichtigsten Werkzeuge", "Gliederung, Schreiben Kapitel für Kapitel, Originalitätsprüfung und Export als Word, PDF und CSV."],
    ["Alle Funktionen, Phase für Phase", "Die Funktionen sind nach dem redaktionellen Ablauf gruppiert: Öffnen Sie eine Karte für Details."],
    ["Zwei KI-Engines: teuer oder günstig", "Wählen Sie die passende Engine. Die Credit-Schätzung wird immer vor dem Start angezeigt."],
    ["Kostenlose Leitfäden", "Praktische Ressourcen zum Einrichten des Projekts, Erstellen der Gliederung und Vorbereiten der Veröffentlichung."],
    ["Häufige Fragen", "Schnelle Antworten auf typische Fragen, vom Urheberrecht bis zur Textbearbeitung."],
    ["Kostenlos starten", "Starten Sie mit 50 kostenlosen Credits: Ihre Idee verdient Struktur, keine leere Seite."],
  ] },
  ro: { launch: "Tur ghidat", next: "Înainte", back: "Înapoi", skip: "Sari peste", finish: "Gata", close: "Închide turul ghidat", stepOf: "Pasul {n} din {m}", steps: [
    ["Bun venit la Scrittore Site", "Du-ți cartea de la idee la manuscris, păstrând controlul fiecărui pas."],
    ["Încearcă demo-ul", "Aplicația este integrată în pagină: explorează-o aici sau deschide-o pe tot ecranul."],
    ["Instrumentele esențiale", "Cuprins, scriere capitol cu capitol, verificarea originalității și export în Word, PDF și CSV."],
    ["Toate funcțiile, etapă cu etapă", "Funcțiile sunt grupate după munca editorială: deschide o carte pentru detalii."],
    ["Două motoare IA: costisitor sau economic", "Alege motorul potrivit lucrării. Estimarea creditelor apare mereu înainte de pornire."],
    ["Ghiduri gratuite", "Resurse practice pentru configurarea proiectului, crearea cuprinsului și pregătirea cărții pentru publicare."],
    ["Întrebări frecvente", "Răspunsuri rapide la nelămuririle comune, de la copyright la editarea textului."],
    ["Începe gratuit", "Pornește cu 50 de credite gratuite: ideea ta merită structură, nu o pagină goală."],
  ] },
  ru: { launch: "Обзор сайта", next: "Далее", back: "Назад", skip: "Пропустить", finish: "Готово", close: "Закрыть обзор", stepOf: "Шаг {n} из {m}", steps: [
    ["Добро пожаловать в Scrittore Site", "Доведите книгу от идеи до рукописи, сохраняя контроль над каждым шагом."],
    ["Попробуйте демо", "Приложение встроено в страницу: изучите его здесь или откройте во весь экран."],
    ["Главные инструменты", "Оглавление, написание по главам, проверка оригинальности и экспорт в Word, PDF и CSV."],
    ["Все функции по этапам", "Функции сгруппированы по этапам работы над книгой: откройте карточку, чтобы увидеть детали."],
    ["Два ИИ: дорогой или экономичный", "Выберите подходящий движок. Оценка расхода кредитов всегда показывается до запуска."],
    ["Бесплатные руководства", "Практические материалы: настройка проекта, оглавление и подготовка книги к публикации."],
    ["Частые вопросы", "Быстрые ответы на частые сомнения: от copyright до редактирования текста."],
    ["Начните бесплатно", "Начните с 50 бесплатных кредитов: вашей идее нужна структура, а не пустая страница."],
  ] },
  ar: { launch: "جولة إرشادية", next: "التالي", back: "السابق", skip: "تخطي", finish: "إنهاء", close: "إغلاق الجولة الإرشادية", stepOf: "الخطوة {n} من {m}", steps: [
    ["مرحباً بك في Scrittore Site", "انقل كتابك من الفكرة إلى المخطوطة مع الاحتفاظ بالتحكم في كل خطوة."],
    ["جرّب العرض التجريبي", "التطبيق مدمج في الصفحة: استكشفه هنا أو افتحه بملء الشاشة."],
    ["الأدوات الأساسية", "فهرس وكتابة فصلاً بفصل وفحص الأصالة والتصدير إلى Word وPDF وCSV."],
    ["كل الميزات مرحلة بمرحلة", "الميزات مجمّعة حسب سير العمل التحريري: افتح بطاقة لعرض التفاصيل."],
    ["محركا ذكاء اصطناعي: مرتفع التكلفة أو اقتصادي", "اختر المحرك المناسب للمهمة. يظهر تقدير الأرصدة دائماً قبل البدء."],
    ["أدلة مجانية", "موارد عملية لإعداد المشروع وبناء الفهرس وتجهيز الكتاب للنشر."],
    ["أسئلة شائعة", "إجابات سريعة عن الأسئلة المعتادة، من حقوق النشر إلى تعديل النص."],
    ["ابدأ مجاناً", "ابدأ بـ50 رصيداً مجانياً: فكرتك تستحق بنية، لا صفحة فارغة."],
  ] },
  zh: { launch: "导览", next: "下一步", back: "上一步", skip: "跳过", finish: "完成", close: "关闭导览", stepOf: "第 {n} 步，共 {m} 步", steps: [
    ["欢迎来到 Scrittore Site", "让您的书从想法走到手稿，并始终掌控每一步。"],
    ["试用演示", "应用已嵌入页面：可在此探索，或全屏打开。"],
    ["核心工具", "目录、逐章写作、原创性检查，以及 Word、PDF 和 CSV 导出。"],
    ["按阶段查看全部功能", "功能按编辑流程分组：展开卡片即可查看详情。"],
    ["两种 AI 引擎：高成本或经济", "选择适合任务的引擎。开始前总会显示积分预估。"],
    ["免费指南", "实用资源：配置项目、创建目录并为出版做好准备。"],
    ["常见问题", "快速解答常见疑问，从版权到文本修改。"],
    ["免费开始", "赠送 50 积分起步：您的想法值得一套结构，而不是一张空白页。"],
  ] },
};
