"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import { AnimeText } from "./motion/AnimeText";
import { AnimeCounter } from "./motion/AnimeCounter";
import { MagneticButton } from "./motion/MagneticButton";

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

    const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    useEffect(() => {
        anime
            .timeline({ easing: "cubicBezier(.22,1,.36,1)" })
            .add({
                targets: ".hero-eyebrow",
                translateY: [16, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 1700,
            })
            .add(
                {
                    targets: ".hero-meta",
                    translateY: [12, 0],
                    opacity: [0, 1],
                    duration: 700,
                    delay: anime.stagger(60, { start: 0 }),
                },
                "-=400",
            )
            .add(
                {
                    targets: ".hero-cta",
                    translateY: [16, 0],
                    opacity: [0, 1],
                    duration: 700,
                    delay: anime.stagger(80, { start: 0 }),
                },
                "-=300",
            )
            .add(
                {
                    targets: ".hero-stat",
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 700,
                    delay: anime.stagger(70, { start: 0 }),
                },
                "-=300",
            );
    }, []);

    return (
        <section
            id="home"
            ref={ref}
            className="relative isolate h-[100svh] min-h-[600px] w-full overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0" aria-hidden>
                <Image
                    src="/profile.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center opacity-60"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
            </div>

            {/* Vignettes */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background via-background/50 to-transparent"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent"
                aria-hidden
            />

            <motion.div
                style={{ y, opacity }}
                className="container-width relative z-10 flex h-full flex-col justify-center pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
            >
                {/* Top row: Eyebrow */}
                <div className="flex items-start justify-between gap-4">
                    {/* Eyebrow */}
                    <div className="hero-eyebrow surface mb-8 inline-flex w-fit items-center gap-2.5 rounded-full px-3 py-1.5 opacity-0 sm:mb-12 sm:px-4 lg:mb-14">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink/80 sm:text-[10px] sm:tracking-[0.28em] lg:text-[11px] lg:tracking-[0.32em]">
                            Available for new work · 2026
                        </span>
                    </div>
                </div>

                {/* Name intro */}
                <div className="mb-3 sm:mb-5">
                    <p className="hero-meta font-mono text-xs tracking-wide text-ink/70 opacity-0 sm:text-sm lg:text-base">
                        <AnimeText text="Hi, I'm" delay={300} />
                    </p>
                </div>

                {/* Cinematic UPPERCASE headline — Name + Role */}
                <h1 className="font-display text-[clamp(2.2rem,10vw,7rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.02em] text-ink">
                    <span className="block">
                        <AnimeText text="Abi" delay={400} />
                    </span>
                    <span className="block">
                        <span className="text-accent">
                            <AnimeText text="Full Stack" delay={650} />
                        </span>
                    </span>
                    <span className="block ghost-text">
                        <AnimeText text="Developer." delay={900} stagger={26} />
                    </span>
                </h1>

                {/* Subtitle + meta row */}
                <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                    <p className="max-w-xl text-sm leading-relaxed text-ink/80 sm:text-base lg:text-lg">
                        <AnimeText
                            text="I craft AI systems, ERP platforms, scalable web applications, and immersive digital products that solve real problems."
                            split="word"
                            delay={1300}
                            stagger={22}
                            duration={900}
                        />
                    </p>

                    {/* Right meta */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-1 lg:gap-4 lg:text-right">
                        {[
                            { k: "Currently", v: "Algobiz" },
                            { k: "Based in", v: "Kerala, IN" },
                            { k: "Stack", v: "React · Next" },
                        ].map((m) => (
                            <div key={m.k} className="hero-meta opacity-0">
                                <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-ink/55 sm:text-[9px] sm:tracking-[0.28em] lg:text-[10px] lg:tracking-[0.32em]">
                                    {m.k}
                                </p>
                                <p className="mt-1 font-display text-sm font-semibold text-ink sm:mt-1.5 sm:text-base lg:text-lg">
                                    {m.v}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 lg:mt-14">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="hero-cta hero-btn-primary group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold tracking-tight opacity-0 sm:px-8 sm:py-3 sm:text-base"
                    >
                        <span className="relative z-10">Explore work</span>
                        <span className="relative z-10 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="hero-cta hero-btn-ghost group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium opacity-0 sm:px-8 sm:py-3 sm:text-base"
                    >
                        <span className="relative z-10">Start a project</span>
                    </button>
                </div>

                {/* Stats strip */}
                <div className="mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-16 sm:rounded-2xl lg:mt-20 lg:grid-cols-4">
                    {[
                        { v: 4, suffix: "+", l: "Years shipping" },
                        { v: 20, suffix: "+", l: "Production builds" },
                        { v: 5, suffix: "", l: "Industries" },
                        { v: 100, suffix: "%", l: "Curiosity" },
                    ].map((s) => (
                        <div
                            key={s.l}
                            className="hero-stat surface px-3 py-4 opacity-0 sm:px-5 sm:py-6"
                        >
                            <p className="font-display text-xl font-extrabold text-ink sm:text-2xl lg:text-3xl xl:text-4xl">
                                <AnimeCounter to={s.v} suffix={s.suffix} />
                            </p>
                            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-ink/40 sm:mt-2 sm:text-[9px] sm:tracking-[0.28em] lg:text-[10px] lg:tracking-[0.32em]">
                                {s.l}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
            >
                <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                    <span>Scroll</span>
                    <div className="relative h-8 w-px overflow-hidden bg-ink/10">
                        <motion.span
                            initial={{ y: "-100%" }}
                            animate={{ y: "100%" }}
                            transition={{
                                duration: 1.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-accent to-transparent"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
