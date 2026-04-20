import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationFAB } from '@/components/ConsultationFAB';
import ScrollToTop from '@/components/ScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const About = lazy(() => import('@/pages/About'));
const Cases = lazy(() => import('@/pages/Cases'));
const Blog = lazy(() => import('@/pages/Blog'));
const Contacts = lazy(() => import('@/pages/Contacts'));

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div className="flex-grow" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ConsultationFAB />
    </div>
  );
}
