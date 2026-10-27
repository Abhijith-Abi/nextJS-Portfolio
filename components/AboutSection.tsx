"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

/**
 * AboutSection — editorial architecture.
 * Statement + philosophy on a 12-col grid, a bare hairline facts strip,
 * and chapters as ghost-numbered editorial entries (no card matrix).
 * Same copy and facts, new alignment and styling.
 */

const chapters = [
    {
        n: "01",
        kicker: "Origin & Vision",
        title: "Started with curiosity, engineered into mastery.",
        body: "I am Abhijith P A (also known as Abhijith PA or Abi). My journey began writing reactive user interfaces in 2022. Connecting frontend states with distributed cloud backends sparked my ambition, leading to the creation of Abi Solutions and architecting enterprise platforms.",
        highlights: [
            "React & Next.js Core",
            "State Architecture",
            "Modern TypeScript",
        ],
    },
    {
        n: "02",
        kicker: "Engineering & Craft",
        title: "Four years of shipping mission-critical software.",
        body: "Engineered scalable platforms spanning Healthcare, ERP systems, FinTech, and Travel Management. Every project honed my ability to design resilient component trees, robust API pipelines, and fluid motion systems.",
        highlights: [
            "Enterprise ERPs",
            "Automated Workflows",
            "Micro-frontends",
        ],
    },
    {
        n: "03",
        kicker: "Now & Horizon",
        title: "Full Stack Engineer & Founder at Abi Solutions.",
        body: "Directing UI architecture, AI automation pipelines, and full-stack solutions. Crafting high-performance web applications, Telegram/WhatsApp AI bots, and custom SaaS platforms that deliver measurable ROI.",
        highlights: [
            "Autonomous AI Systems",
            "Next.js 14 App Router",
            "Cloud Architecture",
        ],
    },
];

const facts = [
    { v: "4+", l: "Years Shipping", sub: "Production code" },
    { v: "20+", l: "Shipped Builds", sub: "Enterprise & SaaS" },
    { v: "Kerala, IN", l: "Origin Base", sub: "Wayanad / Remote" },
    { v: "100%", l: "Code Integrity", sub: "TypeScript strict" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AboutSection() {
    return (
        <SectionWrapper id="about" index="01" label="About">
            {/* Statement row — 12 col editorial grid */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-14">
                <motion.h2
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85, ease }}
                    className="font-display text-[clamp(2.1rem,4.8vw,3.9rem)] font-bold leading-[1.06] tracking-tight text-ink lg:col-span-7"
                >
                    A developer who thinks in{" "}
                    <span className="display-serif-italic text-accent">
                        scalable systems.
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85, ease, delay: 0.12 }}
                    className="lg:col-span-5"
                >
                    <p className="max-w-md text-sm sm:text-base leading-relaxed text-ink-muted">
                        Bridging elegant frontend aesthetics with
                        industrial-grade full-stack architecture. Every
                        component is crafted with performance, accessibility,
                        and intuitive motion.
                    </p>
                    {/* status line — was a boxed card, now bare type */}
                    <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 sm:text-[11px]">
                        <span className="text-ink/80">Currently</span>
                        <span className="text-accent">→</span>
                        <span>Founder @ Abi Solutions</span>
                        <span className="text-line2">/</span>
                        <span className="inline-flex items-center gap-1.5 text-accent-emerald">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                            </span>
                            Active
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* Facts strip — bare hairline cells, no cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.85, ease, delay: 0.1 }}
                className="mt-12 grid grid-cols-2 border-y border-line sm:mt-16 sm:grid-cols-4"
            >
                {facts.map((f, i) => (
                    <div
                        key={f.l}
                        className={`py-6 sm:py-8 ${
                            i > 0 ? "border-l border-line" : ""
                        } ${i > 1 ? "border-t border-line sm:border-t-0" : ""} ${
                            i === 2 ? "sm:border-l-0" : ""
                        } ${i === 3 ? "sm:border-l sm:border-l-border-line sm:border-line" : ""} group px-1 sm:px-2`}
                    >
                        <p className="font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                            {f.v}
                        </p>
                        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-muted sm:text-[10px]">
                            {f.l}
                        </p>
                        <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/40 sm:text-[9px]">
                            {f.sub}
                        </p>
                    </div>
                ))}
            </motion.div>

            {/* Chapters — ghost-numbered editorial entries */}
            <div className="mt-14 sm:mt-20">
                {chapters.map((c, i) => (
                    <motion.article
                        key={c.n}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.85, ease, delay: i * 0.06 }}
                        className="group grid gap-5 border-t border-line py-10 transition-colors duration-300 hover:border-line2 sm:gap-10 sm:py-14 md:grid-cols-[132px_1fr] lg:grid-cols-[168px_1fr]"
                    >
                        {/* Ghost index */}
                        <div className="flex items-start gap-4">
                            <span
                                aria-hidden
                                className="font-display text-6xl font-bold leading-none tracking-tight text-accent/10 transition-colors duration-500 group-hover:text-accent/25 md:text-7xl lg:text-[5.5rem]"
                            >
                                {c.n}
                            </span>
                        </div>

                        <div className="max-w-3xl">
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent sm:text-[11px]">
                                {c.kicker}
                            </p>
                            <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
                                {c.title}
                            </h3>
                            <p className="mt-3.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                                {c.body}
                            </p>

                            {/* highlights as inline mono list */}
                            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 sm:text-[11px]">
                                {c.highlights.map((h, hi) => (
                                    <span key={h} className="flex items-center gap-3">
                                        {hi > 0 && (
                                            <span className="text-accent">
                                                ·
                                            </span>
                                        )}
                                        <span>{h}</span>
                                    </span>
                                ))}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </SectionWrapper>
    );
}
