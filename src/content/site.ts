export const site = {
  brand: "Digital Landing Lab",
  hero: {
    title: ["Сайт под ключ:", "от текста до верстки"],
    subtitle: "Для заказа — заполните короткий бриф",
    cta: "Заполнить бриф",
  },
  nav: [
    { label: "О нас", href: "#team" },
    { label: "Наши работы", href: "#cases" },
    { label: "Примеры механик", href: "#mechanics" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Этапы работы", href: "#steps" },
    { label: "Заполнить бриф", href: "#brief" },
    { label: "Контакты", href: "#contacts" },
  ],
  features: [
    {
      title: "SEO-оптимизация",
      description: "Чтобы сайт было видно в Google и Яндекс",
    },
    {
      title: "Адаптивный дизайн",
      description: "Проработаем версию для компьютера и смартфонов",
    },
    {
      title: "Интересные механики",
      description: "Повысим ваши конверсии через геймификацию",
    },
  ],
} as const;

export const heroFeatures = site.features;
