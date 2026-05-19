"use client";

import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type Cell = {
    kind: "group" | "stat" | "feature";
    span: string;
    // group
    category?: string;
    blurb?: string;
    items?: string[];
    featured?: boolean;
    // stat
    label?: string;
    value?: string;
    sub?: string;
    // feature
    title?: string;
    body?: string;
};

const cells: Cell[] = [
    // Featured frontend group — large
    {
        kind: "group",
        span: "lg:col-span-4 lg:row-span-2",
        category: "Frontend",
        blurb: "Where I spend most of my time. Component design, motion, and state.",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP",
            "anime.js",
            "Three.js",
            "Zustand",
            "Redux",
            "Styled Components",
        ],
        featured: true,
    },
    // Years shipping stat
    {
        kind: "stat",
        span: "lg:col-span-2",
        value: "3+",
        label: "Years shipping",
        sub: "React & Next.js",
    },
    // Featured TypeScript callout
    {
        kind: "feature",
        span: "lg:col-span-2",
        title: "TypeScript-first",
        body: "Strict types, narrow inference, and a small set of trusted libraries.",
    },
    // Backend group
    {
        kind: "group",
        span: "lg:col-span-3",
        category: "Backend & AI",
        blurb: "APIs, auth, persistence, and AI-leaning workflows.",
        items: [
            "Node.js",
            "Express",
            "REST",
            "PostgreSQL",
            "Firebase",
            "OpenAI APIs",
            "EmailJS",
            "Recharts",
        ],
    },
    // Tooling group
    {
        kind: "group",
        span: "lg:col-span-3",
        category: "Tooling & Cloud",
        blurb: "What keeps the work sharp, fast, and shippable.",
        items: [
            "Git",
            "GitHub",
            "Figma",
            "Vercel",
            "AWS",
            "Docker",
            "CI/CD",
            "Vitest",
        ],
    },
];

export function SkillsSection() {
    return (
        <SectionWrapper id="skills" index="03" label="Stack">
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <h2 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                    <span className="block">THE TOOLKIT</span>
                    <span className="block ghost-text">EVERY BUILD.</span>
                </h2>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/65 sm:text-base md:text-right lg:text-lg">
                        TypeScript-first. A small set of libraries I trust. Most
                        importantly — a focus on motion, performance, and clean
                        component architecture.
                    </p>
                </FadeIn>
            </div>

            {/* Bento grid */}
            <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 lg:grid-cols-6">
                {cells.map((cell, i) => (
                    <FadeIn key={i} delay={i * 0.05} className={cell.span}>
                        <div
                            className={`bento-card group relative flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
                                cell.featured ? "lg:p-8" : ""
                            }`}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/30 group-hover:text-accent">
                                    0{i + 1}
                                </span>
                                <span className="text-accent">●</span>
                            </div>

                            {/* Body — varies by kind */}
                            {cell.kind === "group" && (
                                <div className="mt-auto pt-8">
                                    <h3
                                        className={`font-display font-extrabold tracking-tight text-ink transition group-hover:text-accent ${
                                            cell.featured
                                                ? "text-3xl sm:text-4xl lg:text-5xl"
                                                : "text-xl sm:text-2xl"
                                        }`}
                                    >
                                        {cell.category}
                                    </h3>
                                    <p
                                        className={`mt-3 leading-relaxed text-ink/60 ${
                                            cell.featured
                                                ? "max-w-md text-sm sm:text-base"
                                                : "text-[13px] sm:text-sm"
                                        }`}
                                    >
                                        {cell.blurb}
                                    </p>
                                    <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                                        {cell.items?.map((item) => (
                                            <li
                                                key={item}
                                                className="inline-flex items-center rounded-md border border-line bg-background px-2.5 py-1 font-mono text-[11px] text-ink/85 transition hover:border-accent hover:text-accent"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {cell.kind === "stat" && (
                                <div className="mt-auto pt-8">
                                    <p className="font-display text-5xl font-extrabold tracking-tight text-accent sm:text-6xl">
                                        {cell.value}
                                    </p>
                                    <p className="mt-3 font-display text-lg font-bold text-ink sm:text-xl">
                                        {cell.label}
                                    </p>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/40">
                                        {cell.sub}
                                    </p>
                                </div>
                            )}

                            {cell.kind === "feature" && (
                                <div className="mt-auto pt-8">
                                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink transition group-hover:text-accent sm:text-3xl">
                                        {cell.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                                        {cell.body}
                                    </p>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
}
