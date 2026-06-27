"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

/* Inline SVG icons (lucide v1 doesn't ship these) */
const IconGithub = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);
const IconLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);
const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);
const IconTwitter = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
);

const ArrowIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

type Experience = {
    company: string;
    title: string;
    timeframe: string;
    description: string;
    type?: string;
    skills?: string[];
    isCurrent?: boolean;
    /** Tailwind grid span class for desktop bento layout */
    span: string;
    featured?: boolean;
};

const experiences: Experience[] = [
    {
        company: "Algobiz",
        title: "Frontend Engineer",
        timeframe: "Jan 2026 – Present",
        type: "Full-time",
        description:
            "Building production-grade interfaces and AI-leaning workflows. Driving UI architecture, motion language, and the developer experience inside the codebase.",
        skills: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Framer Motion"],
        isCurrent: true,
        span: "lg:col-span-4",
        featured: true,
    },
    {
        company: "Software Solutions Firm",
        title: "UI Engineer · Level 2",
        timeframe: "May 2025 – Dec 2025",
        type: "Full-time",
        description:
            "Owned UI work across product surfaces — refactored shared components, tightened performance, and mentored on Next.js patterns inside the modular enterprise product suite.",
        span: "lg:col-span-2",
    },
    {
        company: "Steyp",
        title: "Software Engineer · Next.js Developer",
        timeframe: "Oct 2022 –  Apr 2025",
        type: "Full-time",
        description:
            "Led frontend builds across multiple products including Hosface, Tegain, and the Enterprise ERP. Set up component conventions used across the team.",
        span: "lg:col-span-2",
    },
    {
        company: "Steyp",
        title: "Software Engineer · Intern",
        timeframe: "Apr 2022 – Oct 2022",
        type: "Internship",
        description:
            "Started in React, picked up Redux and styled-components, and product fundamentals. Converted to full-time at the end of the internship.",
        span: "lg:col-span-4",
    },
];

export function ExperienceSection() {
    const [years, setYears] = useState(4);

    useEffect(() => {
        const start = new Date("2022-04-01");
        const now = new Date();
        const diff = now.getFullYear() - start.getFullYear();
        const adjusted = now.getMonth() < start.getMonth() ? diff - 1 : diff;
        setYears(Math.max(adjusted, 4));
    }, []);

    return (
        <SectionWrapper id="experience" index="05" label="Path">
            <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14 xl:grid-cols-[360px_1fr]">
                {/* LEFT: profile card */}
                <FadeIn>
                    <div className="lg:sticky lg:top-32">
                        <div className="surface relative overflow-hidden rounded-3xl p-6 sm:p-7">
                            {/* Portrait — flip card. Front: description. Back: photo */}
                            <div className="flip-card relative mx-auto aspect-[4/5] w-full max-w-[260px]">
                                <div className="flip-card-inner h-full w-full">
                                    {/* FRONT: description */}
                                    <div className="flip-face flex flex-col justify-between rounded-[2rem] border border-line bg-background p-5 sm:p-6">
                                        <div className="flex items-start justify-between">
                                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                                                · About
                                            </span>
                                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                                                hover
                                            </span>
                                        </div>

                                        <div>
                                            <p className="font-display text-3xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-[2rem]">
                                                Crafting{" "}
                                                <span className="text-accent">
                                                    interfaces
                                                </span>{" "}
                                                that ship.
                                            </p>
                                            <p className="mt-4 text-[13px] leading-relaxed text-ink/65">
                                                Frontend Engineer based in
                                                Kerala. React, Next.js, motion,
                                                and design systems — four years
                                                of building real software for
                                                real users.
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40">
                                            <span>Algobiz · 2026</span>
                                            <span className="text-accent">
                                                ↻
                                            </span>
                                        </div>
                                    </div>

                                    {/* BACK: photo */}
                                    <div className="flip-face flip-face-back overflow-hidden rounded-[2rem] bg-background">
                                        <Image
                                            src="/me.jpeg"
                                            alt="Abhijith P A"
                                            fill
                                            priority
                                            sizes="(max-width: 1024px) 260px, 280px"
                                            className="object-cover"
                                        />
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-5 pt-16">
                                            <p className="font-display text-lg font-bold text-ink">
                                                Abhijith P A
                                            </p>
                                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                                                Frontend Engineer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-6 text-center font-display text-2xl font-extrabold tracking-tight text-ink">
                                Abhijith P A
                            </h3>

                            <div className="mt-3 flex items-center justify-center">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base">
                                    🔥
                                </span>
                            </div>

                            <p className="mt-3 text-center text-sm leading-relaxed text-ink/65">
                                A Frontend Engineer who has shipped countless
                                modern, motion-rich digital products.
                            </p>

                            <div className="mt-5 flex items-center justify-center gap-2.5">
                                <a
                                    href="https://github.com/Abhijith-Abi"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/80 transition hover:border-accent hover:bg-accent hover:text-white"
                                >
                                    <IconGithub className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abhijith-pa/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/80 transition hover:border-accent hover:bg-accent hover:text-white"
                                >
                                    <IconLinkedin className="h-4 w-4" />
                                </a>
                                <a
                                    href="mailto:abhijithabhijith1999@gmail.com"
                                    aria-label="Email"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/80 transition hover:border-accent hover:bg-accent hover:text-white"
                                >
                                    <IconMail className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/80 transition hover:border-accent hover:bg-accent hover:text-white"
                                >
                                    <IconTwitter className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* RIGHT: headline + bento grid */}
                <div>
                    <FadeIn>
                        <h2 className="font-display text-[clamp(2.4rem,8vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">{years}+ YEARS OF</span>
                            <span className="block ghost-text">EXPERIENCE</span>
                        </h2>
                    </FadeIn>

                    {/* Bento grid: 4 cols on desktop */}
                    <div className="mt-10 grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 lg:grid-cols-4">
                        {experiences.map((exp, i) => (
                            <FadeIn
                                key={`${exp.company}-${i}`}
                                delay={i * 0.05}
                                className={exp.span}
                            >
                                <motion.article
                                    whileHover={{ y: -2 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`bento-card group relative flex h-full cursor-pointer flex-col rounded-3xl p-5 sm:p-6 ${
                                        exp.featured ? "lg:p-8" : ""
                                    }`}
                                >
                                    {/* Top row */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-2.5">
                                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/30 group-hover:text-accent">
                                                0{i + 1}
                                            </span>
                                            {exp.isCurrent && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                                                    <motion.span
                                                        animate={{
                                                            scale: [1, 1.4, 1],
                                                            opacity: [
                                                                1, 0.6, 1,
                                                            ],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                        className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(96,165,250,0.7)]"
                                                    />
                                                    Now
                                                </span>
                                            )}
                                        </div>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            <ArrowIcon />
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="mt-auto pt-6">
                                        <h3
                                            className={`font-display font-extrabold tracking-tight text-ink transition group-hover:text-accent ${
                                                exp.featured
                                                    ? "text-3xl sm:text-4xl lg:text-5xl"
                                                    : "text-xl sm:text-2xl"
                                            }`}
                                        >
                                            {exp.company}
                                        </h3>
                                        <p
                                            className={`mt-1.5 font-medium text-ink/85 ${
                                                exp.featured
                                                    ? "text-base sm:text-lg"
                                                    : "text-[13px] sm:text-sm"
                                            }`}
                                        >
                                            {exp.title}
                                        </p>

                                        <p
                                            className={`mt-4 leading-relaxed text-ink/55 ${
                                                exp.featured
                                                    ? "max-w-2xl text-sm sm:text-base"
                                                    : "text-[13px] sm:text-sm"
                                            }`}
                                        >
                                            {exp.description}
                                        </p>

                                        <p className="mt-5 font-mono text-[11px] text-ink/40">
                                            {exp.timeframe}
                                            {exp.type && (
                                                <>
                                                    <span className="mx-2 text-accent">
                                                        ·
                                                    </span>
                                                    {exp.type}
                                                </>
                                            )}
                                        </p>

                                        {exp.featured && exp.skills && (
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {exp.skills.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="inline-flex items-center rounded-md border border-line bg-background px-2 py-0.5 font-mono text-[10px] text-ink/70"
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
