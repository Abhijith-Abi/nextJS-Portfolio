"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-kicker",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.1"
        )
        .fromTo(
          ".hero-sub",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.05
          },
          "-=0.4"
        );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="container-width flex min-h-[70vh] flex-col items-start justify-center gap-10 py-20 sm:py-24 lg:flex-row lg:items-center"
    >
      <div className="max-w-xl">
        <p className="hero-kicker text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Frontend Engineer · React · Next.js
        </p>
        <h1 className="hero-title mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-tr from-accent to-accentSecondary bg-clip-text text-transparent">
            Abhijith P A
          </span>
          .
          <br className="hidden sm:block" /> I build modern, immersive web
          experiences.
        </h1>
        <p className="hero-sub mt-5 max-w-xl text-sm text-muted sm:text-base">
          Frontend developer with 3+ years of experience crafting responsive,
          user-centric interfaces using React, Next.js, Tailwind CSS, and
          modern tooling. I turn ideas into polished products that feel fast,
          intuitive, and delightful.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="hero-cta rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hero-cta rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-100 transition hover:border-accent hover:text-accent"
          >
            Contact Me
          </button>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/70 px-3 py-1">
            Next.js · React · Tailwind · GSAP
          </span>
        </div>
      </div>

      <div className="mt-8 w-full max-w-sm self-center rounded-2xl border border-white/10 bg-slate-900/30 p-6 shadow-soft backdrop-blur-xl sm:mt-0 lg:max-w-md">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Kerala, India</span>
          <span>3+ years experience</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
          <div className="card-surface p-4">
            <p className="text-[11px] font-semibold text-slate-400">
              Current role
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100">
              Software Engineer
            </p>
            <p className="mt-1 text-[11px] text-muted">
              Steyp Private Limited · Jun 2022 – Nov 2025
            </p>
          </div>
          <div className="card-surface p-4">
            <p className="text-[11px] font-semibold text-slate-400">
              Tech focus
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100">
              Frontend · UI
            </p>
            <p className="mt-1 text-[11px] text-muted">
              React, Next.js, Tailwind CSS, GSAP
            </p>
          </div>
          <div className="card-surface col-span-2 flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-[11px] font-semibold text-slate-400">
                Contact
              </p>
              <p className="mt-1 text-sm text-slate-100">
                abhijithabhijith1999@gmail.com
              </p>
              <p className="mt-1 text-[11px] text-muted">+91 99613 16468</p>
            </div>
            <div className="flex flex-col gap-1 text-[11px] text-muted">
              <a
                href="https://linkedin.com"
                className="hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                className="hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


