import type { Locale } from "./site";

type PageContent = {
  home: string;
  packageDescriptions: [string, string, string, string];
};

export const pageContent: Record<Locale, PageContent> = {
  it: {
    home: "← Home",
    packageDescriptions: ["Per un progetto breve o lavorazioni distribuite.", "Per più progetti o una stesura articolata.", "Per chi lavora con continuità.", "Per utilizzo intensivo o più manoscritti."],
  },
  en: {
    home: "← Home",
    packageDescriptions: ["For a short project or work spread over time.", "For multiple projects or a structured draft.", "For ongoing work.", "For intensive use or multiple manuscripts."],
  },
  es: {
    home: "← Inicio",
    packageDescriptions: ["Para un proyecto breve o trabajo distribuido.", "Para varios proyectos o una redacción estructurada.", "Para trabajar de forma continua.", "Para uso intensivo o varios manuscritos."],
  },
  fr: {
    home: "← Accueil",
    packageDescriptions: ["Pour un projet court ou un travail réparti.", "Pour plusieurs projets ou une rédaction structurée.", "Pour travailler régulièrement.", "Pour une utilisation intensive ou plusieurs manuscrits."],
  },
  de: {
    home: "← Startseite",
    packageDescriptions: ["Für ein kurzes Projekt oder verteilte Arbeit.", "Für mehrere Projekte oder einen umfangreicheren Entwurf.", "Für kontinuierliches Arbeiten.", "Für intensive Nutzung oder mehrere Manuskripte."],
  },
  ro: {
    home: "← Acasă",
    packageDescriptions: ["Pentru un proiect scurt sau lucru distribuit.", "Pentru mai multe proiecte sau o redactare structurată.", "Pentru lucru constant.", "Pentru utilizare intensivă sau mai multe manuscrise."],
  },
  ru: {
    home: "← Главная",
    packageDescriptions: ["Для короткого проекта или работы поэтапно.", "Для нескольких проектов или структурированной рукописи.", "Для постоянной работы.", "Для интенсивного использования или нескольких рукописей."],
  },
  ar: {
    home: "الرئيسية ←",
    packageDescriptions: ["لمشروع قصير أو عمل موزع على مراحل.", "لعدة مشاريع أو مسودة منظمة.", "للعمل المستمر.", "للاستخدام المكثف أو عدة مخطوطات."],
  },
  zh: {
    home: "← 首页",
    packageDescriptions: ["适用于短项目或分阶段工作。", "适用于多个项目或结构化写作。", "适用于持续工作。", "适用于高强度使用或多个手稿。"],
  },
};
