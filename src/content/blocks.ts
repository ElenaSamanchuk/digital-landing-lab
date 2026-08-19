export type BlockType = {
  title: string;
  image: string;
  pros: string;
  cons: string;
};

export const blockTypes: BlockType[] = [
  {
    title: "Стандартные блоки",
    image: "/assets/block-standard.webp",
    pros: "Позволяют собрать интересный дизайн, добавить анимацию на текст и фото.",
    cons: "Есть множество ограничений по кастомизации.",
  },
  {
    title: "Zero-блок",
    image: "/assets/block-zero.webp",
    pros: "Позволяют воплотить в жизнь дизайн любой сложности.",
    cons: "Труднее адаптировать под все разрешения устройств, что добавляет времени к верстке сайта.",
  },
  {
    title: "Блок с механикой",
    image: "/assets/block-mechanic.webp",
    pros: "Можно добавить на сайт мини-игру, расчет стоимости сметы продукта и многие другие интерактивные элементы для пользователей.",
    cons: "Требует объемной работы с кодом, что отражается на стоимости и времени реализации.",
  },
];

export type MechanicSlide = {
  title: string;
  image: string;
  link?: string;
};

export const mechanicSlides: MechanicSlide[] = [
  {
    title: "Встроенный проигрыватель",
    image: "/assets/mechanic-player.webp",
    link: "#",
  },
  {
    title: "Колесо удачи",
    image: "/assets/mechanic-wheel.webp",
    link: "#",
  },
  {
    title: "Калькулятор стоимости",
    image: "/assets/mechanic-calc.webp",
    link: "#",
  },
  {
    title: "Интерактивный квиз",
    image: "/assets/mechanic-quiz.webp",
    link: "#",
  },
];
