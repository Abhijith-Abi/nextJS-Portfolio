"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Terminal } from "lucide-react";
import { AnimeCounter } from "./motion/AnimeCounter";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STACK_ITEMS = [
    "React",
    "Next.js",
    "TypeScript",
    "Python & Django",
    "AWS",
    "PostgreSQL",
    "AI Automation",
    "ERP Systems",
];

const FIGURES = [
    { v: 4, suffix: "+", label: "Years in production" },
    { v: 20, suffix: "+", label: "Systems shipped" },
    { v: 5, suffix: "+", label: "Sectors served" },
    { v: 100, suffix: "%", label: "Founder attention" },
];

/** Smooth-scroll for in-page anchors; the href still works without JS. */
function smoothScroll(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
}

export function Hero() {
    return (
        <section
            id="home"
            className="relative isolate flex min-h-[92svh] w-full flex-col justify-between overflow-hidden bg-background pt-20 sm:pt-24 lg:pt-20"
        >
            <div className="container-width relative z-10 flex w-full flex-1 flex-col">
                <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-10">
                    {/* LEFT — founder intro */}
                    <div className="flex min-w-0 flex-col items-start justify-center">
                        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                            <nav
                                aria-label="Breadcrumb"
                                className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/40"
                            >
                                <ol className="flex items-center gap-2">
                                    <li>
                                        <a
                                            href="/"
                                            aria-current="page"
                                            className="transition-colors hover:text-ink"
                                        >
                                            Home
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                            <span aria-hidden className="text-line2">
                                /
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                                Founder · Lead Engineer
                            </span>
                        </div>

                        <h1 id="hero-title" className="w-full">
                            <span className="block font-display text-[clamp(2.5rem,5.8vw,4.4rem)] font-bold leading-[1.04] tracking-tight text-ink">
                                Abhijith P A<span className="text-accent">.</span>
                            </span>
                            <span className="mt-2 block text-[clamp(1.15rem,2.4vw,1.65rem)] font-medium text-ink-muted">
                                Full stack developer & AI engineer
                            </span>
                        </h1>

                        <p
                            id="hero-summary"
                            className="mt-5 max-w-xl text-base leading-relaxed text-ink/75"
                        >
                            Founder of{" "}
                            <strong className="font-semibold text-ink">
                                Abi Solutions
                            </strong>
                            , based in Wayanad, Kerala. Building high-throughput ERP tools, web applications, and autonomous AI automation for businesses globally.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                onClick={(e) => smoothScroll(e, "projects")}
                                className="btn-primary group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
                            >
                                <span>View selected work</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => smoothScroll(e, "contact")}
                                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
                            >
                                <span>Start a commission</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-ink/45">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                            11.6854° N, 76.132° E — Wayanad, Kerala
                        </div>
                    </div>

                    {/* RIGHT — portrait plate */}
                    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                        {/* portrait frame */}
                        <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
                            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-[min(52vh,500px)]">
                                <Image
                                    src="/photos/abhijith-pa-founder-portrait.webp"
                                    alt="Abhijith P A — web developer in Wayanad, Kerala"
                                    fill
                                    priority
                                    unoptimized
                                    sizes="(max-width: 1024px) 90vw, 520px"
                                    className="object-cover object-[50%_18%] grayscale transition-all duration-500 hover:grayscale-0"
                                />
                            </div>
                        </div>

                        {/* docked status card */}
                        <div className="absolute -bottom-4 left-4 z-10 flex items-center gap-3 rounded-lg border border-line bg-surface p-2.5 px-3.5">
                            <span className="h-2 w-2 rounded-full bg-accent-emerald shrink-0" />
                            <span>
                                <span className="block font-medium text-xs text-ink leading-tight">
                                    Open for projects
                                </span>
                                <span className="block font-mono text-[10px] text-ink-muted">
                                    Booking Q2 · Remote / On-site
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Figures strip */}
                <div className="mt-12 grid grid-cols-2 border-t border-line sm:mt-14 sm:grid-cols-4">
                    {FIGURES.map((f, i) => (
                        <div
                            key={f.label}
                            className={`px-3 py-5 sm:px-6 sm:py-6 ${
                                i % 2 === 1 ? "border-l border-line" : ""
                            } ${
                                i > 0
                                    ? "border-t border-line sm:border-t-0"
                                    : ""
                            } ${i === 2 ? "sm:border-l" : ""}`}
                        >
                            <div className="font-display tabular-nums text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.4rem]">
                                <AnimeCounter to={f.v} suffix={f.suffix} />
                            </div>
                            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                                {f.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stack bar */}
            <div className="relative z-10 mt-8 border-y border-line bg-surface/80 lg:mt-10">
                <div className="container-width flex flex-wrap items-center gap-3 py-3">
                    <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent mr-3">
                        <Terminal className="h-3.5 w-3.5" />
                        Stack
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                        {STACK_ITEMS.map((item) => (
                            <span
                                key={item}
                                className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-ink/70"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
