"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Terminal } from "lucide-react";
import { AnimeCounter } from "./motion/AnimeCounter";
import Marquee from "./ui/Marquee";
import { MovingBorderButton } from "./ui/MovingBorder";

/**
 * Hero — "portrait editorial" model.
 * A confident split composition: oversized founder type on the left,
 * a full-bleed B&W studio portrait on the right framed by hairlines and
 * lime registration marks. No fullscreen effect layers — every element
 * is local, cheap to composite, and renders identically everywhere.
 */

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TICKER_ITEMS = [
    "React",
    "Next.js",
    "TypeScript",
    "Django & Python",
    "AWS",
    "AI Automation",
    "ERP Systems",
    "PostgreSQL",
    "Three.js",
    "Motion Design",
];

const FIGURES = [
    { v: 4, suffix: "+", label: "Years in production" },
    { v: 20, suffix: "+", label: "Systems shipped" },
    { v: 5, suffix: "+", label: "Sectors served" },
    { v: 100, suffix: "%", label: "Founder attention" },
];

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
    return (
        <section
            id="home"
            className="relative isolate flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-16"
        >
            <div className="container-width relative z-10 flex w-full flex-1 flex-col">
                <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-8">
                    {/* LEFT — editorial founder block */}
                    <div className="flex min-w-0 flex-col items-start justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.15 }}
                            className="section-eyebrow mb-5"
                        >
                            Founder · Lead Engineer
                        </motion.p>

                        <h1 className="w-full">
                            <span className="sr-only">
                                Abhijith P A — web developer in Wayanad,
                                Kerala. Full Stack Developer &amp; AI
                                Engineer, founder of Abi Solutions. Building
                                websites, ERP systems and AI automation for
                                Kalpetta, Sulthan Bathery, Mananthavady,
                                Kozhikode, Kochi and remote clients worldwide.
                            </span>
                            <span aria-hidden="true">
                                <span className="reveal-mask block">
                                    <motion.span
                                        initial={{ y: "110%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease,
                                            delay: 0.28,
                                        }}
                                        className="block font-display text-[clamp(2.5rem,6.4vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink"
                                    >
                                        ABHIJITH
                                    </motion.span>
                                </span>
                                <span className="reveal-mask block">
                                    <motion.span
                                        initial={{ y: "110%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease,
                                            delay: 0.4,
                                        }}
                                        className="block font-display text-[clamp(2.5rem,6.4vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink"
                                    >
                                        P A
                                        <span className="text-accent">.</span>
                                    </motion.span>
                                </span>
                                <span className="reveal-mask mt-2 block">
                                    <motion.span
                                        initial={{ y: "110%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease,
                                            delay: 0.52,
                                        }}
                                        className="display-serif-italic block text-[clamp(1.25rem,2.9vw,2.05rem)] leading-tight text-accent"
                                    >
                                        builds quietly, ships boldly.
                                    </motion.span>
                                </span>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease, delay: 0.68 }}
                            className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
                        >
                            ERP platforms, high-performance web applications
                            and AI workflows that quietly run businesses —{" "}
                            <strong className="font-semibold text-ink">
                                Abi Solutions
                            </strong>
                            , from Wayanad, Kerala to wherever the work goes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease, delay: 0.84 }}
                            className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center"
                        >
                            <button
                                type="button"
                                onClick={() => scrollToSection("projects")}
                                className="btn-primary group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm"
                            >
                                <span>View selected work</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <MovingBorderButton
                                type="button"
                                onClick={() => scrollToSection("contact")}
                            >
                                <span>Start a commission</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </MovingBorderButton>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease, delay: 1 }}
                            className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/40 sm:text-[10px]"
                        >
                            <MapPin className="h-3 w-3 shrink-0 text-accent" />
                            11.6854° N, 76.132° E — Wayanad, Kerala
                        </motion.p>
                    </div>

                    {/* RIGHT — portrait plate */}
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease, delay: 0.45 }}
                        className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
                    >
                        {/* lime registration marks */}
                        <span
                            aria-hidden
                            className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-accent"
                        />
                        <span
                            aria-hidden
                            className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-accent"
                        />

                        {/* portrait frame */}
                        <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface2">
                            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-[min(52vh,520px)]">
                                <Image
                                    src="/photos/abhijith-pa-founder-portrait.jpg"
                                    alt="Abhijith P A — web developer in Wayanad, Kerala | Full Stack Developer & AI Engineer"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 90vw, 520px"
                                    className="object-cover object-[50%_18%] grayscale transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                                />
                                {/* subtle bottom fade for depth */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
                            </div>
                        </div>

                        {/* floating status card */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 1.1 }}
                            className="surface absolute -bottom-6 -left-4 z-10 flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-card sm:-left-8"
                        >
                            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                            </span>
                            <span>
                                <span className="block font-display text-[13px] font-bold leading-tight text-ink">
                                    Open for projects
                                </span>
                                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-muted">
                                    Booking Q2 · Remote / On-site
                                </span>
                            </span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Figures strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 1.05 }}
                    className="mt-10 grid grid-cols-2 border-t border-line sm:mt-12 sm:grid-cols-4"
                >
                    {FIGURES.map((f, i) => (
                        <div
                            key={f.label}
                            className={`px-1 py-5 sm:px-7 sm:py-6 ${
                                i % 2 === 1 ? "border-l border-line" : ""
                            } ${
                                i > 0
                                    ? "border-t border-line sm:border-t-0"
                                    : ""
                            } ${i === 2 ? "sm:border-l" : ""}`}
                        >
                            <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                                <AnimeCounter to={f.v} suffix={f.suffix} />
                            </p>
                            <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-muted sm:text-[10px]">
                                {f.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Skills ticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease, delay: 1.15 }}
                className="relative z-10 mt-8 flex w-full items-center gap-4 border-y border-line bg-surface2/60 lg:mt-10"
            >
                <span className="hidden shrink-0 items-center gap-2 border-r border-line px-5 py-4 font-mono text-[10px] uppercase tracking-[0.26em] text-accent sm:flex">
                    <Terminal className="h-3.5 w-3.5" />
                    Stack
                </span>
                <Marquee className="marquee-fade py-3.5" pauseOnHover>
                    {TICKER_ITEMS.map((item) => (
                        <span
                            key={item}
                            className="mx-5 inline-flex items-baseline gap-5 font-mono text-xs uppercase tracking-[0.18em] text-ink/60 sm:text-[13px]"
                        >
                            {item}
                            <span className="text-accent">///</span>
                        </span>
                    ))}
                </Marquee>
            </motion.div>
        </section>
    );
}
