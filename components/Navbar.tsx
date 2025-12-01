"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
  <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <nav className="container-width flex items-center justify-between py-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-slate-900/70">
            <Image
              src="/profile.png"
              alt="Abhijith P A logo"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-sm font-medium text-slate-200">
            Abhijith P A
            <span className="block text-xs text-muted">Frontend Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick("contact");
            }}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-slate-900/40 text-slate-200 backdrop-blur-xl md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-200" />
            <span className="block h-0.5 w-5 bg-slate-200" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-900/80 backdrop-blur-xl md:hidden">
          <div className="container-width py-4">
            <ul className="space-y-3 text-sm font-medium text-slate-200">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="w-full rounded-lg px-3 py-2 text-left transition hover:bg-slate-800/70"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}



