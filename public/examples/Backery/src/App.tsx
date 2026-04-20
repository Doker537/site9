import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from './lib/utils';
import OrderModal from './components/OrderModal';

// Context for global order modal
const OrderContext = createContext<{ openOrderModal: () => void }>({ openOrderModal: () => {} });
export const useOrder = () => useContext(OrderContext);

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openOrderModal } = useOrder();
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Меню', path: '/catalog' },
    { name: 'Галерея', path: '/portfolio' },
    { name: 'О нас', path: '/about' },
    { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contacts' },
  ];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-ink/5 text-ink">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-serif text-4xl font-black tracking-[-1px] uppercase">Dolce Vita</span>
          <span className="text-[10px] uppercase tracking-[0.2em] -mt-1 opacity-60 font-sans font-bold">Pâtisserie & Café</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] font-sans font-bold uppercase tracking-widest transition-all hover:opacity-100 relative group",
                location.pathname === link.path ? "opacity-100" : "opacity-60"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navUnderline" 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink" 
                />
              )}
            </Link>
          ))}
          <motion.button
            onClick={openOrderModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="bg-ink text-white px-8 py-3 rounded-full text-[13px] font-sans font-bold uppercase tracking-widest hover:bg-accent hover:text-deep-brown transition-colors"
          >
            Заказать
          </motion.button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-pastal-cream border-b border-deep-brown/5 md:hidden h-screen overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-serif",
                    location.pathname === link.path ? "text-gold-accent" : "text-deep-brown"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 space-y-6">
                <Link 
                  to="/catalog"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-deep-brown text-white py-4 rounded-2xl text-center font-display uppercase tracking-widest"
                >
                  Перейти в меню
                </Link>
                <div className="flex justify-center space-x-6">
                  <Instagram size={24} />
                  <Phone size={24} />
                  <Mail size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/90 pt-24 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="inline-block mb-8">
            <span className="font-serif text-4xl font-black tracking-[-1px] uppercase text-white">Dolce Vita</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">Pâtisserie & Café</span>
          </Link>
          <p className="text-sm leading-relaxed opacity-60 mb-8 max-w-sm">
            Искусство создания авторских тортов и десертов. Мы используем только натуральные ингредиенты премиум-класса для ваших незабываемых моментов.
          </p>
          <div className="flex space-x-5">
            {[Instagram, Phone, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-accent hover:text-deep-brown transition-colors duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-8 text-accent uppercase tracking-widest font-bold">Продукция</h4>
          <ul className="space-y-4 text-sm opacity-60 font-bold">
            <li><Link to="/catalog" className="hover:text-accent transition-colors">Авторские торты</Link></li>
            <li><Link to="/catalog" className="hover:text-accent transition-colors">Свадебные коллекции</Link></li>
            <li><Link to="/catalog" className="hover:text-accent transition-colors">Детские десерты</Link></li>
            <li><Link to="/catalog" className="hover:text-accent transition-colors">Наборы макарун</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-8 text-accent uppercase tracking-widest font-bold">Навигация</h4>
          <ul className="space-y-4 text-sm opacity-60 font-bold">
            <li><Link to="/" className="hover:text-accent transition-colors">Главная страница</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Наше портфолио</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">О кондитерской</Link></li>
            <li><Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-8 text-accent uppercase tracking-widest font-bold">Локация</h4>
          <ul className="space-y-6 text-sm opacity-60 font-bold">
            <li className="flex items-start space-x-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span>ул. Кондитерская, 15, Москва, 123456</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>+7 (999) 123-45-67</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>@dolce_vita_patisserie</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 font-display">
          &copy; {new Date().getFullYear()} Dolce Vita Pâtisserie. Crafted with love & sugar.
        </p>
        <div className="flex space-x-8 text-[10px] uppercase tracking-[0.3em] opacity-30 font-display">
           <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
           <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <OrderContext.Provider value={{ openOrderModal }}>
      <Router>
        <div className="min-h-screen flex flex-col font-sans bg-pastal-cream text-deep-brown selection:bg-gold-accent/30">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
          <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
        </div>
      </Router>
    </OrderContext.Provider>
  );
}
