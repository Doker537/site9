import { Product, Review, BlogPost } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Торт "Ванильный шифон"',
    category: 'cakes',
    description: 'Нежный бисквит с прослойкой из натуральной ванили и сливочного крема.',
    price: 2500,
    image: './images/product-cake1.jpg',
    minWeight: 1.5,
    fillings: ['Клубника', 'Манго', 'Лесные ягоды'],
    features: ['Натуральные ингредиенты', 'Ручная работа']
  },
  {
    id: '2',
    name: 'Свадебный торт "Белый мрамор"',
    category: 'wedding',
    description: 'Элегантный трехъярусный торт с минималистичным декором и изысканным вкусом.',
    price: 3500,
    image: './images/product-wedding1.jpg',
    minWeight: 5,
    fillings: ['Шоколадный ганаш', 'Карамель', 'Фисташка'],
    features: ['Премиальный декор', 'Доставка в холодильнике']
  },
  {
    id: '3',
    name: 'Набор Макарун "Весенний сад"',
    category: 'macarons',
    description: 'Ассорти из 12 нежнейших макарун с авторскими начинками.',
    price: 1800,
    image: './images/portfolio-5.jpg',
    features: ['Подарочная упаковка', 'Свежее приготовление']
  },
  {
    id: '4',
    name: 'Детский торт "Космическое приключение"',
    category: 'kids',
    description: 'Яркий торт для маленьких исследователей с фигурками из мастики.',
    price: 2800,
    image: './images/product-kids1.jpg',
    minWeight: 2,
    fillings: ['Банан в карамели', 'Йогуртовый крем'],
    features: ['Гипоаллергенно', 'Индивидуальный дизайн']
  },
  {
    id: '5',
    name: 'Капкейки "Шоколадный взрыв"',
    category: 'cupcakes',
    description: 'Набор из 6 шоколадных капкейков с насыщенным кремом и ягодным центром.',
    price: 1200,
    image: './images/product-cupcake1.jpg',
    features: ['Порционные десерты', '6 штук в наборе']
  },
  {
    id: '6',
    name: 'Торт "Ягодный мусс"',
    category: 'cakes',
    description: 'Легкий муссовый торт с зеркальной глазурью и свежими ягодами.',
    price: 2700,
    image: './images/product-cake2.jpg',
    minWeight: 1,
    fillings: ['Черника-тимьян', 'Малина-роза'],
    features: ['Низкокалорийно', 'Современный дизайн']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    userName: 'Анна Петрова',
    rating: 5,
    text: 'Заказывали торт на свадьбу. Это было просто великолепно! Гости были в восторге от вкуса и оформления.',
    date: '12.03.2024',
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    id: '2',
    userName: 'Михаил Иванов',
    rating: 5,
    text: 'Лучшие макаруны, которые я пробовал в городе. Очень свежие и качественные ингредиенты.',
    date: '10.03.2024',
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Как выбрать идеальную начинку для торта?',
    excerpt: 'Рассказываем о самых популярных сочетаниях вкусов и на что обратить внимание при выборе.',
    content: '...',
    date: '15.03.2024',
    image: './images/blog-1.jpg',
    slug: 'kak-vybrat-nachinku'
  },
  {
    id: '2',
    title: 'Тренды в свадебных тортах 2024',
    excerpt: 'Минимализм, живые цветы и текстурные поверхности — что сейчас в моде.',
    content: '...',
    date: '10.03.2024',
    image: './images/blog-2.jpg',
    slug: 'svadebnye-trendy-2024'
  }
];
