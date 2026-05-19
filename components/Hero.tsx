"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import anime from "animejs";
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
            className="relative isolate min-h-[100svh] w-full overflow-hidden"
        >
            {/* Vignettes */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-background to-transparent"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent"
                aria-hidden
            />

            <motion.div
                style={{ y, opacity }}
                className="container-width relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36"
            >
                {/* Eyebrow */}
                <div className="hero-eyebrow surface mb-10 inline-flex w-fit items-center gap-2.5 rounded-full px-3.5 py-1.5 opacity-0 sm:mb-14 sm:px-4">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/80 sm:text-[11px] sm:tracking-[0.32em]">
                        Available for new work · 2026
                    </span>
                </div>

                {/* Cinematic UPPERCASE headline */}
                <h1 className="font-display text-[clamp(2.4rem,11vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                    <span className="block">
                        <AnimeText text="Building" delay={400} />
                    </span>
                    <span className="block">
                        <AnimeText text="modern" delay={650} />{" "}
                        <span className="text-accent">
                            <AnimeText text="digital" delay={850} />
                        </span>
                    </span>
                    <span className="block ghost-text">
                        <AnimeText
                            text="experiences."
                            delay={1050}
                            stagger={26}
                        />
                    </span>
                </h1>

                {/* Subtitle + meta row */}
                <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                    <p className="max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                        <AnimeText
                            text="Full Stack Developer crafting AI systems, ERP platforms, scalable applications, and immersive digital products."
                            split="word"
                            delay={1300}
                            stagger={22}
                            duration={900}
                        />
                    </p>

                    {/* Right meta */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:grid-cols-1 lg:gap-5 lg:text-right">
                        {[
                            { k: "Currently", v: "Algobiz" },
                            { k: "Based in", v: "Kerala, IN" },
                            { k: "Stack", v: "React · Next" },
                        ].map((m) => (
                            <div key={m.k} className="hero-meta opacity-0">
                                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink/40 sm:text-[10px] sm:tracking-[0.32em]">
                                    {m.k}
                                </p>
                                <p className="mt-1.5 font-display text-base font-semibold text-ink sm:text-lg">
                                    {m.v}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-12 flex flex-wrap items-center gap-3 sm:mt-14">
                    <MagneticButton
                        onClick={() => scrollToSection("projects")}
                        className="hero-cta btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-tight opacity-0 sm:px-7 sm:py-3"
                    >
                        <span>Explore work</span>
                        <span className="inline-block transition group-hover:translate-x-0.5">
                            →
                        </span>
                    </MagneticButton>
                    <MagneticButton
                        onClick={() => scrollToSection("contact")}
                        className="hero-cta btn-ghost group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium opacity-0 sm:px-7 sm:py-3"
                    >
                        Start a project
                    </MagneticButton>
                </div>

                {/* Stats strip */}
                <div className="mt-16 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 sm:grid-cols-4">
                    {[
                        { v: 3, suffix: "+", l: "Years shipping" },
                        { v: 20, suffix: "+", l: "Production builds" },
                        { v: 5, suffix: "", l: "Industries" },
                        { v: 100, suffix: "%", l: "Curiosity" },
                    ].map((s) => (
                        <div
                            key={s.l}
                            className="hero-stat surface px-4 py-5 opacity-0 sm:px-5 sm:py-6"
                        >
                            <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
                                <AnimeCounter to={s.v} suffix={s.suffix} />
                            </p>
                            <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-ink/40 sm:mt-2 sm:text-[10px] sm:tracking-[0.32em]">
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
