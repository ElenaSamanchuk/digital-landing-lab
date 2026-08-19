export type CaseItem = {
  title: string;
  category?: string;
  tag?: string;
  tagDark?: boolean;
  url: string;
  image: string;
  description?: string;
  wide?: boolean;
  tall?: boolean;
};

export const cases: CaseItem[] = [
  {
    title: "Презентация приложения",
    tag: "Цифровая медитация",
    tagDark: true,
    url: "https://apsy-digital.com",
    image: "/assets/case-apsy.webp",
    description:
      "Разработали дизайн сочетающийся с представляемым приложением для медитаций. Добавили спокойные цвета и плавную анимацию.",
    wide: true,
  },
  {
    title: "Онлайн-школы",
    category: "Онлайн-школы",
    tag: "Контент-маркетинг",
    url: "https://tha-text.com",
    image: "/assets/case-tha.webp",
    description: "Проработали тарифы и кратко описали программу каждого курса",
    wide: true,
  },
  {
    title: "Эзотерика",
    category: "Эзотерика",
    tag: "Расклад Таро в Турции",
    tagDark: true,
    url: "https://pinarin-bakislari.com",
    image: "/assets/case-pinarin.webp",
    description: "Продумали лаконичный дизайн, расставили акценты с плавной анимацией.",
    wide: true,
  },
  {
    title: "",
    tag: "Креативный проект",
    tagDark: true,
    url: "https://ezo-help.com",
    image: "/assets/case-ezo.webp",
    description: "Подобрали интересные иллюстрации и добавили простую анимацию.",
    tall: true,
  },
  {
    title: "",
    tag: "ШколаSMM",
    tagDark: true,
    url: "https://mostovoyvv.com",
    image: "/assets/case-mostovoy.webp",
    description: "Сделали яркий и красочный дизайн, чтобы подчеркнуть отличия от других школ.",
    wide: true,
  },
  {
    title: "",
    tag: "Астротаролог из Испании",
    url: "https://celineastrologa.com",
    image: "/assets/case-celine.webp",
    description: "Отразили в дизайне особенность эксперта: астрологию+тарологию, придали динамику проекту.",
    wide: true,
  },
  {
    title: "",
    tag: "ДляHR",
    url: "https://example.com",
    image: "/assets/case-hr.webp",
    description: "Сделали яркий и лаконичный дизайн для привлечения внимания молодых кандидатов.",
    tall: true,
  },
];
