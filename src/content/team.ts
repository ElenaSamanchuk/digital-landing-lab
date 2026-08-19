export type TeamMember = {
  role: string;
  name: string;
  experience: string;
  skills: string[];
  photo: string;
};

export const teamMembers: TeamMember[] = [
  {
    role: "Копирайтер",
    name: "Мария",
    experience: "3 года опыта работы",
    photo: "/assets/team-maria.webp",
    skills: [
      "UI/UX-копирайтинг",
      "SEO-копирайтинг",
      "Формирование УТП",
      "Интервьюирование",
      "Работа с экспертами",
      "Фактчекинг",
      "Грамотность",
      "Креативность",
      "Соблюдение ToV",
      "Анализ ЦА",
      "Figma",
      "Tilda",
    ],
  },
  {
    role: "Веб-дизайнер",
    name: "Ольга",
    experience: "4 года опыта работы",
    photo: "/assets/team-olga.webp",
    skills: [
      "UX (User Experience) Design",
      "UI (User Interface) Design",
      "Адаптивный дизайн",
      "Adobe Photoshop",
      "Figma",
      "Prototyping\nWireframing",
      "Tilda: zero-блоки",
      "Анимация",
      "Разработка адаптивных версий на Tilda",
      "Подключение домена",
      "Подключение платежных систем",
      "Поддержка сайта",
    ],
  },
  {
    role: "Верстальщик",
    name: "Елена",
    experience: "5 лет опыта работы",
    photo: "/assets/team-elena.webp",
    skills: [
      "HTML, CSS, JS",
      "Tilda: zero-блоки",
      "Figma",
      "SEO",
      "Брифинг",
      "Аналитика",
      "Анимация",
      "Разработка адаптивных версий",
      "Настройка и подключение ботов",
      "Подключение Api",
      "Подключение домена",
      "Подключение платежных систем",
      "Тестирование",
      "Поддержка сайта",
    ],
  },
];
