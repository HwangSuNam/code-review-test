"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#hero", label: "홈" },
  { href: "#about", label: "소개" },
  { href: "#music", label: "음악" },
  { href: "#gallery", label: "갤러리" },
  { href: "#timeline", label: "연혁" },
  { href: "#events", label: "이벤트" },
  { href: "#quiz", label: "퀴즈" },
  { href: "#fan-messages", label: "팬 메시지" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-accent-dark">
          수남 Fan Page
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium hover:text-accent-dark transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-background border-t border-accent/20 px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm hover:text-accent-dark transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
