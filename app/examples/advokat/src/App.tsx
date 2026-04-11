/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-dark-bg text-gray-200 font-sans selection:bg-gold-accent/30 selection:text-gold-300">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
