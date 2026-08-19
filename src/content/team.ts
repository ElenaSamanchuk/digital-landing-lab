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
    photo: "/assets/team-maria.png",
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
    photo: "/assets/team-olga.png",
    skills: [
      "UI/UX-дизайн",
      "Адаптивная верстка",
      "Прототипирование",
      "Figma",
      "Tilda",
      "Анимация",
      "Брендинг",
      "Wireframes",
    ],
  },
  {
    role: "Верстальщик",
    name: "Александр",
    experience: "5 лет опыта работы",
    photo: "/assets/team-alex.png",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "Tilda Zero Block",
      "Адаптив",
      "SEO-разметка",
      "Подключение домена",
      "Подключение платежных систем",
      "Тестирование",
      "Поддержка сайта",
    ],
  },
];
