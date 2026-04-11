"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#about", label: "О нас" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLanding = pathname === "/";

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (isLanding && href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-yellow-400">Chare</span>X
          </Link>

          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isLanding ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isLanding && link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNav(link.href);
                  }
                }}
                className="nav-link text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 md:block"
          >
            Сделать заказ
          </a>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isLanding ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isLanding && link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNav(link.href);
                  }
                }}
                className="text-base font-medium text-zinc-400 transition-colors hover:text-yellow-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-yellow-400 px-4 py-2 text-center text-sm font-semibold text-black"
            >
              Сделать заказ
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
