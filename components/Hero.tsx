"use client";

import Image from "next/image";
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
                { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
            )
                .fromTo(
                    ".hero-title",
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
                    "-=0.1",
                )
                .fromTo(
                    ".hero-sub",
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
                    "-=0.3",
                )
                .fromTo(
                    ".hero-cta",
                    { autoAlpha: 0, y: 12 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.05,
                    },
                    "-=0.4",
                );
        }, element);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="container-width flex min-h-[78vh] flex-col items-center justify-center gap-12 py-16 sm:py-20 lg:flex-row lg:items-center"
        >
            <div className="max-w-xl">
                <p className="hero-kicker text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Frontend Engineer · React · Next.js
                </p>
                <h1 className="hero-title mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.9rem]">
                    I craft clean, modern web experiences that feel{" "}
                    <span className="bg-gradient-to-tr from-accent to-accentSecondary bg-clip-text text-transparent">
                        fast, polished,
                    </span>{" "}
                    and reliable.
                </h1>
                <p className="hero-sub mt-5 max-w-xl text-sm text-muted sm:text-base">
                    I&apos;m Abhijith, a frontend engineer from Kerala, India
                    with 3+ years experience building production-ready
                    interfaces in React and Next.js – focused on performance,
                    motion, and developer-friendly UI systems.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                        type="button"
                        onClick={() => scrollToSection("projects")}
                        className="hero-cta inline-flex items-center gap-2 rounded-full bg-accent px-7 py-2.5 text-sm font-semibold text-black shadow-soft transition hover:bg-emerald-400"
                    >
                        View projects
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("contact")}
                        className="hero-cta inline-flex items-center gap-2 rounded-full border border-slate-800 px-7 py-2.5 text-sm font-medium text-slate-100 transition hover:border-accent hover:text-accent"
                    >
                        Contact me
                    </button>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-[11px] text-muted">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for frontend roles & freelance
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">
                        Next.js · React · Tailwind · GSAP
                    </span>
                </div>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <div className="card-surface mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/5 bg-black/60 p-4">
                    <div className="w-full rounded-xl bg-slate-900/70">
                        <Image
                            src="/profile.jpg"
                            alt="Abhijith P A"
                            width={640}
                            height={640}
                            className="h-auto w-full rounded-xl object-contain"
                        />
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-muted sm:justify-between">
                    <div>
                        <p className="font-semibold text-slate-100">
                            Abhijith P A
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                            Software Engineer · Steyp Private Limited
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/abhijith-pa/"
                            className="hover:text-accent"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Abhijith-Abi"
                            className="hover:text-accent"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
