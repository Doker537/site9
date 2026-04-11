export type ProjectCategory = "sites" | "site-bot" | "bots";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  emoji: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
  color: string;
  results?: string[];
}

export const projects: Project[] = [
  {
    id: "10",
    title: "Детейлинг-студия",
    description:
      "Премиальный лендинг для детейлинг-студии: плавные анимации, светящиеся эффекты и форма записи на услуги.",
    image: "/projects/placeholder.svg",
    emoji: "🚗",
    tags: ["React", "Tailwind CSS", "Framer"],
    category: "sites",
    link: "/examples/Detailing/index.html",
    color: "#00f0ff",
    results: ["Форма онлайн-записи", "Глоу-эффекты", "Mobile-first"],
  },
  {
    id: "11",
    title: "Сайт адвоката",
    description:
      "Премиальный лендинг для юридической практики: тёмная тема, золотые акценты, анимации и форма обратной связи.",
    image: "/projects/placeholder.svg",
    emoji: "⚖️",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    category: "sites",
    link: "/examples/advokat/index.html",
    color: "#c9a84c",
    results: ["Доверие с первого взгляда", "Форма консультации", "SEO-оптимизация"],
  },
  {
    id: "7",
    title: "Сайт для барбершопа",
    description:
      "Стильный лендинг с прайс-листом, галереей работ и формой онлайн-записи.",
    image:
      "/examples/barbershop5/slpbi9k2xy0mPA_p3RbiL4n00anSIHAO48wsXKMp5P7EiUh53eyFMWNi0qRokX_aPsUJD16-ghyTei1usV84B4LH.jpg",
    emoji: "✂️",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "sites",
    link: "/examples/barbershop5/index.html",
    color: "#facc15",
    results: ["+120% онлайн-записей", "Рост узнаваемости", "Скорость < 1 сек"],
  },
  {
    id: "8",
    title: "Свадебное приглашение",
    description:
      "Элегантная онлайн-страница с деталями торжества и формой подтверждения присутствия.",
    image:
      "/examples/wedding/wrYIEu4QQi477yPZVBlZ9UfsOp5y8V2OusrO-aOOo41VXabHmI7TqRShaQxESl_WzCSeFcWiySFFpi0TqWEBORDA.jpg",
    emoji: "💍",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "sites",
    link: "/examples/wedding/index.html",
    color: "#f9a8d4",
    results: ["100% гостей ответили", "Дизайн под стиль свадьбы", "Анимации и countdown"],
  },
  {
    id: "9",
    title: "Свадебное приглашение v2",
    description:
      "Альтернативный дизайн — другая стилистика, анимации и структура подачи информации.",
    image:
      "/examples/wedding9/gJfODKeiX2XRrWC7AO-DzO3P4SJcsS0bCkk0Qy18zITp9G4d27oW04MUerf6zcugFZqatGUXK90e6DxyzY8PIv2P.jpg",
    emoji: "🌸",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "sites",
    link: "/examples/wedding9/index.html",
    color: "#c084fc",
    results: ["Нежная анимация", "Мобильная адаптация", "Форма RSVP"],
  },
  {
    id: "1",
    title: "Интернет-магазин TechStore",
    description:
      "Полнофункциональный магазин электроники с каталогом, корзиной и онлайн-оплатой.",
    image: "/projects/placeholder.svg",
    emoji: "🛒",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    category: "sites",
    link: "#",
    color: "#60a5fa",
    results: ["+200% конверсия", "Среднее время загрузки 0.8 сек", "Интеграция с эквайрингом"],
  },
  {
    id: "2",
    title: "Лендинг для фитнес-студии",
    description:
      "Современный одностраничник с анимациями, расписанием занятий и формой записи.",
    image: "/projects/placeholder.svg",
    emoji: "💪",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    category: "sites",
    link: "#",
    color: "#4ade80",
    results: ["+85% заявок", "Bounce rate снизился на 40%", "Адаптив 100%"],
  },
  {
    id: "3",
    title: "Сайт + Telegram-бот для доставки",
    description:
      "Сайт-каталог с меню и Telegram-бот для оформления заказов, отслеживания статуса и уведомлений.",
    image: "/projects/placeholder.svg",
    emoji: "🍕",
    tags: ["Next.js", "Node.js", "Telegram Bot API", "MongoDB"],
    category: "site-bot",
    link: "#",
    color: "#fb923c",
    results: ["500+ заказов в день", "Нет пропущенных заявок", "Экономия 2 менеджера"],
  },
  {
    id: "4",
    title: "Корпоративный сайт + VK бот",
    description:
      "Корпоративный сайт с VK-ботом для автоматической обработки заявок клиентов.",
    image: "/projects/placeholder.svg",
    emoji: "🏢",
    tags: ["React", "VK Bot API", "Express", "PostgreSQL"],
    category: "site-bot",
    link: "#",
    color: "#4680C2",
    results: ["85 заявок за месяц", "Стоимость лида -60%", "Интеграция с CRM"],
  },
  {
    id: "5",
    title: "Telegram-бот для записи",
    description:
      "Бот с интерактивным календарём, напоминаниями и интеграцией с Google Calendar.",
    image: "/projects/placeholder.svg",
    emoji: "📅",
    tags: ["Node.js", "Telegram Bot API", "Google Calendar API"],
    category: "bots",
    link: "#",
    color: "#22d3ee",
    results: ["+340% записей онлайн", "0 пропущенных слотов", "Напоминания клиентам"],
  },
  {
    id: "6",
    title: "VK-бот для информирования",
    description:
      "Автоматизированный бот для рассылок, ответов на FAQ и сбора обратной связи.",
    image: "/projects/placeholder.svg",
    emoji: "📢",
    tags: ["Node.js", "VK Bot API", "Redis"],
    category: "bots",
    link: "#",
    color: "#a78bfa",
    results: ["2 000 подписчиков", "Открываемость рассылок 68%", "ROI 520%"],
  },
];

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "Все",
  sites: "Сайты",
  "site-bot": "Сайт + Бот",
  bots: "Боты",
};
