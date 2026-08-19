export type WorkStep = {
  number: string;
  title: string;
  description: string;
};

export const workSteps: WorkStep[] = [
  {
    number: "01",
    title: "Заполните короткий бриф",
    description:
      "Он поможет определиться с целями разработки сайта, объемом работы и итоговой стоимостью",
  },
  {
    number: "02",
    title: "Проработка технического задания",
    description:
      "Договор помогает двум сторонам гарантировать своевременное и качественное выполнение работ",
  },
  {
    number: "03",
    title: "Подписание договора",
    description:
      "Договор помогает двум сторонам гарантировать своевременное и качественное выполнение работ",
  },
  {
    number: "04",
    title: "Согласование текста",
    description: "В зависимости от объема работы занимает от 1 до 2 недель",
  },
  {
    number: "05",
    title: "Согласование дизайна",
    description: "В зависимости от объема работы занимает от 1 до 2 недель",
  },
  {
    number: "06",
    title: "Вёрстка сайта",
    description: "В зависимости от объема работы занимает от 1 до 2 недель",
  },
];

export type ContactAction = {
  label: string;
  photo: string;
  cta: string;
};

export const contactActions: ContactAction[] = [
  {
    label: "Разработать структуру сайта и прописать текст",
    photo: "/assets/team-maria.webp",
    cta: "Обратиться к копирайтеру",
  },
  {
    label: "Продумать дизайн и сделать адаптивные версии",
    photo: "/assets/team-olga.webp",
    cta: "Обратиться к дизайнеру",
  },
  {
    label: "Собрать сайт по вашему контенту на Tilda",
    photo: "/assets/team-elena.webp",
    cta: "Обратиться к верстальщику",
  },
];
