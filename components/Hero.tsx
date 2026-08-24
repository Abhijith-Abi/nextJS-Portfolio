"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import { AnimeText } from "./motion/AnimeText";
import { AnimeCounter } from "./motion/AnimeCounter";
import { ArrowRight, Code2, Cpu, Flame, Layers, MapPin, Sparkles } from "lucide-react";

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

    useEffect(() => {
        anime
            .timeline({ easing: "cubicBezier(.22,1,.36,1)" })
            .add({
                targets: ".hero-eyebrow",
                translateY: [16, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 600,
            })
            .add(
                {
                    targets: ".hero-left-item",
                    translateY: [16, 0],
                    opacity: [0, 1],
                    duration: 700,
                    delay: anime.stagger(70, { start: 0 }),
                },
                "-=400",
            )
            .add(
                {
                    targets: ".hero-photo-card",
                    scale: [0.95, 1],
                    opacity: [0, 1],
                    duration: 900,
                },
                "-=500",
            )
            .add(
                {
                    targets: ".hero-stat",
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 700,
                    delay: anime.stagger(60, { start: 0 }),
                },
                "-=300",
            );
    }, []);

    return (
        <section
            id="home"
            ref={ref}
            className="relative isolate min-h-[100svh] w-full overflow-hidden flex items-center bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
        >
            {/* Ambient Radial Background Glows */}
            <div
                className="pointer-events-none absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px] animate-pulse_glow"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute top-1/2 right-10 h-[450px] w-[450px] rounded-full bg-accent2/10 blur-[150px] animate-pulse_glow"
                aria-hidden
            />

            <motion.div
                style={{ y, opacity }}
                className="container-width relative z-10 w-full flex flex-col justify-center"
            >
                {/* Top status bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div className="hero-eyebrow surface inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 opacity-0 border border-white/10 shadow-glow-sm backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink/90 sm:text-[10px] sm:tracking-[0.28em] lg:text-[11px]">
                            Available for new projects · 2026
                        </span>
                    </div>

                    <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/60 sm:flex">
                        <span className="text-accent">●</span>
                        <span>Full Stack Developer & AI Engineer</span>
                    </div>
                </div>

                {/* Main 2-Column Hero Grid */}
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16 items-center">
                    {/* Left Column: Headlines, Bio, Tech Stack & CTAs */}
                    <div className="space-y-6">
                        <div>
                            <p className="hero-left-item font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent opacity-0 sm:text-sm mb-3">
                                <AnimeText text="Hi, I'm Abhijith P A" delay={200} />
                            </p>

                            <h1 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-ink">
                                <span className="sr-only">
                                    Abhijith P A — Full Stack Developer & AI Engineer | Abi Solutions
                                </span>
                                <span className="block text-white" aria-hidden="true">
                                    <AnimeText text="FULL STACK" delay={300} />
                                </span>
                                <span className="block text-accent" aria-hidden="true">
                                    <AnimeText text="DEVELOPER &" delay={500} />
                                </span>
                                <span className="block text-white" aria-hidden="true">
                                    <AnimeText text="AI ENGINEER." delay={700} stagger={20} />
                                </span>
                            </h1>
                        </div>

                        <p className="hero-left-item max-w-xl text-sm leading-relaxed text-ink/80 sm:text-base lg:text-lg opacity-0">
                            Founder of <strong className="text-white font-bold">Abi Solutions</strong>. 4+ years engineering high-performance ERP platforms, autonomous AI workflows, and modern web applications with React, Next.js, Django & AWS.
                        </p>

                        {/* Tech Chips */}
                        <div className="hero-left-item flex flex-wrap gap-2 opacity-0">
                            {[
                                "React 18 / 19",
                                "Next.js 14",
                                "TypeScript",
                                "Django & Python",
                                "AWS Cloud",
                                "AI Automation",
                            ].map((chip) => (
                                <span
                                    key={chip}
                                    className="inline-flex items-center rounded-xl border border-white/10 bg-surface/90 px-3 py-1.5 font-mono text-[11px] text-ink/80 backdrop-blur-md hover:border-accent/50 hover:text-accent transition-colors"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="hero-left-item pt-2 flex flex-wrap items-center gap-3.5 opacity-0">
                            <button
                                type="button"
                                onClick={() => scrollToSection("projects")}
                                className="hero-btn-primary group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold tracking-tight shadow-glow-sm cursor-pointer"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollToSection("contact")}
                                className="hero-btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold cursor-pointer"
                            >
                                <span>Start a Project</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Clean, Elegant Portrait Showcase Card */}
                    <div className="hero-photo-card opacity-0 flex justify-center lg:justify-end">
                        <div className="surface relative w-full max-w-[420px] overflow-hidden rounded-[2.5rem] border border-white/15 p-4 sm:p-5 shadow-glow">
                            {/* Photo Container with subtle inner border and rounded corners */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-surface2 border border-white/10">
                                <Image
                                    src="/photos/abhijith-pa-founder-portrait.jpg"
                                    alt="Abhijith P A — Founder of Abi Solutions"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 420px"
                                    className="object-cover object-top filter contrast-105"
                                    quality={95}
                                    priority
                                />
                                {/* Bottom soft dark gradient for text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                                {/* Floating Top Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-background/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-accent backdrop-blur-md font-semibold">
                                        <Sparkles className="h-3 w-3" />
                                        Abi Solutions
                                    </span>
                                </div>

                                {/* Bottom Name & Title Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                                    <h2 className="font-display text-2xl font-black text-white">
                                        Abhijith P A
                                    </h2>
                                    <p className="mt-1 font-mono text-xs text-accent flex items-center gap-1.5">
                                        <MapPin className="h-3.5 w-3.5 text-accent" />
                                        Kerala, India · Founder & Engineer
                                    </p>
                                </div>
                            </div>

                            {/* Meta Info Strip Below Photo */}
                            <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                                <div className="rounded-2xl border border-white/[0.06] bg-background/70 p-2.5">
                                    <p className="font-mono text-[8px] uppercase tracking-wider text-accent font-semibold">Company</p>
                                    <p className="mt-0.5 font-display text-xs font-bold text-ink truncate">Abi Solutions</p>
                                </div>
                                <div className="rounded-2xl border border-white/[0.06] bg-background/70 p-2.5">
                                    <p className="font-mono text-[8px] uppercase tracking-wider text-accent font-semibold">Location</p>
                                    <p className="mt-0.5 font-display text-xs font-bold text-ink">Kerala, IN</p>
                                </div>
                                <div className="rounded-2xl border border-white/[0.06] bg-background/70 p-2.5">
                                    <p className="font-mono text-[8px] uppercase tracking-wider text-accent font-semibold">Focus</p>
                                    <p className="mt-0.5 font-display text-xs font-bold text-accent">Full Stack & AI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Matrix */}
                <div className="mt-14 sm:mt-16 lg:mt-20 grid w-full grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
                    {[
                        { v: 4, suffix: "+", l: "Years Shipping", icon: Flame },
                        { v: 20, suffix: "+", l: "Production Builds", icon: Code2 },
                        { v: 5, suffix: "+", l: "Industry Sectors", icon: Layers },
                        { v: 100, suffix: "%", l: "Client Commitment", icon: Cpu },
                    ].map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.l}
                                className="hero-stat surface relative overflow-hidden rounded-3xl p-5 sm:p-6 opacity-0 border border-white/[0.08] hover:border-accent/40 transition-all duration-300 hover:shadow-glow-sm backdrop-blur-md"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-display text-2xl font-black text-ink sm:text-3xl lg:text-4xl">
                                        <AnimeCounter to={s.v} suffix={s.suffix} />
                                    </p>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                </div>
                                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/70 sm:text-[10px] sm:tracking-[0.28em]">
                                    {s.l}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
