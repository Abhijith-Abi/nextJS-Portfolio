"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

const chapters = [
    {
        n: "01",
        kicker: "Origin",
        title: "Started with curiosity, not a plan.",
        body: "I am Abhijith P A (also known as Abhijith PA, Abi, or Abhi). I started learning React in 2022 as an intern at Steyp. Wiring a UI to real data clicked instantly, driving me to start Abi Solutions and build advanced software platforms.",
    },
    {
        n: "02",
        kicker: "Craft",
        title: "Four years of shipping real software.",
        body: "Frontend builds across learning, healthcare, ERP, and travel. Each one taught me how to think in components, motion, and systems — not just screens.",
    },
    {
        n: "03",
        kicker: "Now",
        title: "Frontend Engineer at Algobiz.",
        body: "Building AI-leaning products and immersive web experiences. Driving UI architecture, motion language, and the developer experience inside the codebase.",
    },
];

const facts = [
    { v: "4+", l: "Years shipping" },
    { v: "20+", l: "Production builds" },
    { v: "Kerala", l: "Based in" },
    { v: "Remote", l: "Open to" },
];

export function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(
        scrollYProgress,
        [0.2, 0.8],
        ["0%", "100%"],
    );

    return (
        <SectionWrapper id="about" index="02" label="About">
            <div
                ref={ref}
                className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
            >
                {/* LEFT: title + facts (sticks on lg+) */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="section-eyebrow">Profile</p>
                    <h2 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">A DEVELOPER</span>
                        <span className="block">WHO THINKS</span>
                        <span className="block">
                            IN <span className="text-accent">SYSTEMS.</span>
                        </span>
                    </h2>

                    <FadeIn className="mt-8 sm:mt-10">
                        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                            {facts.map((f) => (
                                <div
                                    key={f.l}
                                    className="surface px-4 py-4 sm:px-5 sm:py-5"
                                >
                                    <p className="font-display text-lg font-bold text-ink sm:text-xl">
                                        {f.v}
                                    </p>
                                    <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-ink/40 sm:text-[10px] sm:tracking-[0.32em]">
                                        {f.l}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* RIGHT: chapters with timeline */}
                <div className="relative">
                    <div className="absolute left-2 top-2 bottom-2 w-px bg-line sm:left-3">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute left-0 top-0 w-px bg-accent"
                        />
                    </div>

                    <div className="space-y-12 sm:space-y-16">
                        {chapters.map((c, i) => (
                            <FadeIn key={c.n} delay={i * 0.05}>
                                <article className="relative pl-9 sm:pl-12">
                                    <div className="absolute left-0.5 top-2 h-3 w-3 rounded-full border border-line bg-background sm:left-1.5">
                                        <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(96,165,250,0.7)]" />
                                    </div>

                                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent sm:text-[11px] sm:tracking-[0.32em]">
                                        {c.n} · {c.kicker}
                                    </p>
                                    <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink sm:mt-4 sm:text-2xl lg:text-3xl">
                                        {c.title}
                                    </h3>
                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65 sm:mt-4 sm:text-base lg:text-lg">
                                        {c.body}
                                    </p>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
