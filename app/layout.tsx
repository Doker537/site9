import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import GlowOrbs from "./_components/GlowOrbs";
import ParticlesClient from "./_components/ParticlesClient";

const sfPro = localFont({
  variable: "--font-sf-pro",
  display: "swap",
  src: [
    { path: "./fonts/SF-Pro-Display-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/SF-Pro-Display-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/SF-Pro-Display-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/SF-Pro-Display-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/SF-Pro-Display-Black.otf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "ChareX - Создание сайтов и ботов",
  description:
    "Создаю современные сайты, Telegram и VK ботов для вашего бизнеса. React, Next.js, адаптивный дизайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sfPro.variable} antialiased`}>
      <body className="relative flex min-h-screen flex-col bg-[#08080d]">
        <GlowOrbs />
        <ParticlesClient />
        <div className="relative z-10 flex flex-1 flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
