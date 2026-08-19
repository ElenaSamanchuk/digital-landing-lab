export type CaseItem = {
  tag?: string;
  tagDark?: boolean;
  url: string;
  image: string;
  description?: string;
  tall?: boolean;
};

export type CaseBlock =
  | { type: "heading"; title: string; kicker?: string }
  | { type: "text"; text?: string; accent?: string }
  | { type: "wide-left"; title?: string; description?: string; item: CaseItem }
  | { type: "wide-right"; title?: string; description?: string; item: CaseItem }
  | { type: "pair"; items: [CaseItem, CaseItem]; descriptions?: [string, string] };

export const caseBlocks: CaseBlock[] = [
  {
    type: "heading",
    title: "Сайты с вакансиями",
  },
  {
    type: "pair",
    items: [
      {
        tag: "Эзотерика и продажи",
        tagDark: true,
        url: "https://callcenteremote.com",
        image: "/assets/case-callcenter.webp",
        tall: true,
      },
      {
        tag: "ДляHR",
        url: "https://sales-manager-chat.com",
        image: "/assets/case-sales-manager.webp",
        tall: true,
      },
    ],
    descriptions: [
      "Выделили преимущества вакансии, добавили удобную форму приема заявок.",
      "Сделали яркий и лаконичный дизайн для привлечения внимания молодых кандидатов.",
    ],
  },
  {
    type: "wide-left",
    title: "Презентация приложения",
    description:
      "Разработали дизайн сочетающийся с представляемым приложением для медитаций. Добавили спокойные цвета и плавную анимацию.",
    item: {
      tag: "Цифровая медитация",
      tagDark: true,
      url: "https://apsy-digital.com",
      image: "/assets/case-apsy.webp",
    },
  },
  {
    type: "wide-right",
    title: "Онлайн-школы",
    description: "Проработали тарифы и кратко описали программу каждого курса",
    item: {
      tag: "Контент-маркетинг",
      url: "https://tha-text.com",
      image: "/assets/case-tha.webp",
    },
  },
  {
    type: "text",
    text: "Проработали строгий и лаконичный дизайн с минимальным добавлением цветовых акцентов.",
  },
  {
    type: "pair",
    items: [
      {
        tag: "Креативный проект",
        tagDark: true,
        url: "https://ezo-help.com",
        image: "/assets/case-ezo.webp",
        tall: true,
      },
      {
        tag: "Маркетинг и дизайн",
        url: "https://agentezzo.com",
        image: "/assets/case-agentezzo.webp",
        tall: true,
      },
    ],
    descriptions: [
      "Подобрали интересные иллюстрации и добавили простую анимацию.",
      "По задаче заказчика продумали дизайн в фирменной палитре, а также добавили плавную анимацию.",
    ],
  },
  {
    type: "wide-right",
    description: "Сделали яркий и красочный дизайн, чтобы подчеркнуть отличия от других школ.",
    item: {
      tag: "ШколаSMM",
      tagDark: true,
      url: "https://mostovoyvv.com",
      image: "/assets/case-mostovoy.webp",
    },
  },
  {
    type: "wide-left",
    title: "Эзотерика",
    description: "Продумали лаконичный дизайн, расставили акценты с плавной анимацией.",
    item: {
      tag: "Расклад Таро в Турции",
      tagDark: true,
      url: "https://pinarin-bakislari.com",
      image: "/assets/case-pinarin.webp",
    },
  },
  {
    type: "text",
    accent: "Зарубежные сайты",
  },
  {
    type: "wide-right",
    description:
      "Отразили в дизайне особенность эксперта: астрологию+тарологию, придали динамику проекту.",
    item: {
      tag: "Астротаролог из Испании",
      url: "https://celineastrologa.com",
      image: "/assets/case-celine.webp",
    },
  },
  {
    type: "pair",
    items: [
      {
        tag: "Фея Таро",
        tagDark: true,
        url: "https://tarot-melek.com/",
        image: "/assets/case-tarot-melek.webp",
        tall: true,
      },
      {
        tag: "Таро-консультации",
        tagDark: true,
        url: "https://hera-tarolog.com",
        image: "/assets/case-hera-tarolog.webp",
        tall: true,
      },
    ],
    descriptions: [
      "Сделали полный редизайн с учетом пожеланий заказчика, добавили интересные анимации.",
      "Сделали дизайн сайта небесно-голубой гамме по просьбе заказчика.",
    ],
  },
];
