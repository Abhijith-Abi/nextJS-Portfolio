"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import { Sparkles, MapPin, Terminal, Compass, CheckCircle2 } from "lucide-react";

const chapters = [
    {
        n: "01",
        kicker: "Origin & Vision",
        title: "Started with curiosity, engineered into mastery.",
        body: "I am Abhijith P A (also known as Abhijith PA or Abi). My journey began writing reactive user interfaces in 2022. Connecting frontend states with distributed cloud backends sparked my ambition, leading to the creation of Abi Solutions and architecting enterprise platforms.",
        highlights: ["React & Next.js Core", "State Architecture", "Modern TypeScript"],
    },
    {
        n: "02",
        kicker: "Engineering & Craft",
        title: "Four years of shipping mission-critical software.",
        body: "Engineered scalable platforms spanning Healthcare, ERP systems, FinTech, and Travel Management. Every project honed my ability to design resilient component trees, robust API pipelines, and fluid motion systems.",
        highlights: ["Enterprise ERPs", "Automated Workflows", "Micro-frontends"],
    },
    {
        n: "03",
        kicker: "Now & Horizon",
        title: "Full Stack Engineer & Founder at Abi Solutions.",
        body: "Directing UI architecture, AI automation pipelines, and full-stack solutions. Crafting high-performance web applications, Telegram/WhatsApp AI bots, and custom SaaS platforms that deliver measurable ROI.",
        highlights: ["Autonomous AI Systems", "Next.js 14 App Router", "Cloud Architecture"],
    },
];

const facts = [
    { v: "4+", l: "Years Shipping", sub: "Production code" },
    { v: "20+", l: "Shipped Builds", sub: "Enterprise & SaaS" },
    { v: "Kerala, IN", l: "Origin Base", sub: "Wayanad / Remote" },
    { v: "100%", l: "Code Integrity", sub: "TypeScript strict" },
];

export function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(
        scrollYProgress,
        [0.15, 0.85],
        ["0%", "100%"],
    );

    return (
        <SectionWrapper id="about" index="02" label="About">
            <div
                ref={ref}
                className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start"
            >
                {/* LEFT: sticky profile highlight */}
                <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                            <Sparkles className="h-3 w-3" />
                            Engineering Philosophy
                        </div>
                        <h2 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">A DEVELOPER</span>
                            <span className="block">WHO THINKS IN</span>
                            <span className="block text-accent">
                                SCALABLE SYSTEMS.
                            </span>
                        </h2>
                        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ink/75 sm:text-base max-w-lg">
                            Bridging elegant frontend aesthetics with industrial-grade full-stack architecture. Every component is crafted with performance, accessibility, and intuitive motion.
                        </p>
                    </div>

                    {/* Stats Matrix */}
                    <FadeIn>
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                            {facts.map((f) => (
                                <div
                                    key={f.l}
                                    className="surface relative overflow-hidden rounded-2xl p-3.5 sm:p-4 border border-white/[0.08] hover:border-accent/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="font-display text-lg sm:text-xl font-black text-ink group-hover:text-accent transition-colors">
                                            {f.v}
                                        </p>
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                    </div>
                                    <p className="mt-1 font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-ink/70 truncate">
                                        {f.l}
                                    </p>
                                    <p className="font-mono text-[8px] text-ink/40 truncate">
                                        {f.sub}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Quick Dev Badge */}
                    <div className="surface flex items-center justify-between rounded-2xl p-3.5 sm:p-4 border border-white/[0.08]">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                                <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
                            </span>
                            <div>
                                <p className="font-display text-xs font-bold text-ink">
                                    Founder @ Abi Solutions
                                </p>
                                <p className="font-mono text-[9.5px] sm:text-[10px] text-ink/50 flex items-center gap-1">
                                    <MapPin className="h-3 w-3 text-accent shrink-0" /> Wayanad, Kerala, India
                                </p>
                            </div>
                        </div>
                        <span className="font-mono text-[9px] sm:text-[10px] text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/30 px-2 py-0.5 rounded-full shrink-0">
                            Active
                        </span>
                    </div>
                </div>

                {/* RIGHT: timeline chapters */}
                <div className="relative pl-0 sm:pl-2">
                    {/* Animated vertical track */}
                    <div className="absolute left-3.5 sm:left-6 top-3 bottom-3 w-[2px] bg-white/[0.08]">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent via-accent2 to-accent-ocean shadow-[0_0_8px_rgba(47,107,255,0.8)]"
                        />
                    </div>

                    <div className="space-y-8 sm:space-y-12">
                        {chapters.map((c, i) => (
                            <FadeIn key={c.n} delay={i * 0.08}>
                                <article className="relative pl-9 sm:pl-16 group">
                                    {/* Timeline node */}
                                    <div className="absolute left-3.5 sm:left-6 top-1.5 -translate-x-1/2 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-white/20 bg-background shadow-glow-sm">
                                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                                    </div>

                                    <div className="surface rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.08] group-hover:border-accent/40 group-hover:shadow-glow-sm transition-all duration-300">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-accent font-semibold">
                                                {c.n} · {c.kicker}
                                            </span>
                                            <span className="font-mono text-[8px] sm:text-[9px] text-ink/40 uppercase">
                                                milestone
                                            </span>
                                        </div>

                                        <h3 className="mt-2.5 font-display text-lg sm:text-xl md:text-2xl font-bold leading-tight text-ink group-hover:text-accent transition-colors">
                                            {c.title}
                                        </h3>

                                        <p className="mt-2.5 text-xs sm:text-sm md:text-base leading-relaxed text-ink/70">
                                            {c.body}
                                        </p>

                                        {/* Highlights pills */}
                                        <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 pt-3.5 sm:pt-4 border-t border-white/[0.06]">
                                            {c.highlights.map((h) => (
                                                <span
                                                    key={h}
                                                    className="inline-flex items-center gap-1 rounded-lg border border-white/[0.08] bg-background/60 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[9.5px] sm:text-[10px] text-ink/80"
                                                >
                                                    <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-accent" />
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
