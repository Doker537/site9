/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-[#00f0ff] selection:text-black">
      <div className="atmosphere" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
