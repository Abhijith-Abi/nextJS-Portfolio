"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import {
    Sparkles,
    Briefcase,
    Calendar,
    ArrowUpRight,
    MapPin,
    Clock,
    Flame,
} from "lucide-react";

/* Inline SVG icons */
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

type Experience = {
    company: string;
    title: string;
    timeframe: string;
    description: string;
    type?: string;
    skills?: string[];
    isCurrent?: boolean;
    span: string;
    featured?: boolean;
};

const experiences: Experience[] = [
    {
        company: "Abi Solutions",
        title: "Founder & Lead Full Stack Engineer",
        timeframe: "Jan 2026 – Present",
        type: "Full-time",
        description:
            "Directing technical architecture and product builds across AI automation, custom ERP platforms, and enterprise React/Next.js systems. Mentoring engineering workflows and maintaining client delivery standards.",
        skills: ["Next.js 14", "TypeScript", "Django", "AWS", "OpenAI APIs", "PostgreSQL"],
        isCurrent: true,
        span: "lg:col-span-4",
        featured: true,
    },
    {
        company: "Enterprise Software Solutions Firm",
        title: "Senior UI Engineer · Level 2",
        timeframe: "May 2025 – Dec 2025",
        type: "Full-time",
        description:
            "Led frontend engineering across modular enterprise suites. Refactored high-traffic dashboards, improved rendering benchmarks by 40%, and established strict TypeScript design systems.",
        skills: ["React", "TypeScript", "Next.js", "Zustand", "Tailwind"],
        span: "lg:col-span-2",
    },
    {
        company: "Steyp",
        title: "Software Engineer · Next.js Developer",
        timeframe: "Oct 2022 – Apr 2025",
        type: "Full-time",
        description:
            "Engineered core web platforms including Hosface, Tegain, and Enterprise ERP. Established reusable component standards and implemented responsive UI flows across multiple products.",
        skills: ["Next.js", "React", "Redux", "Tailwind", "REST APIs"],
        span: "lg:col-span-2",
    },
    {
        company: "Steyp",
        title: "Software Engineer · Intern",
        timeframe: "Apr 2022 – Oct 2022",
        type: "Internship",
        description:
            "Gained deep foundation in React component trees, data flow paradigms, and interface motion. Converted to full-time engineer following rapid feature deliveries.",
        skills: ["JavaScript", "React", "CSS3", "Git"],
        span: "lg:col-span-4",
    },
];

export function ExperienceSection() {
    const [years, setYears] = useState(4);
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const start = new Date("2022-04-01");
        const now = new Date();
        const diff = now.getFullYear() - start.getFullYear();
        const adjusted = now.getMonth() < start.getMonth() ? diff - 1 : diff;
        setYears(Math.max(adjusted, 4));

        // Format IST time
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            };
            setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
        };
        updateTime();
        const interval = setInterval(updateTime, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SectionWrapper id="experience" index="06" label="Career Path">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[320px_1fr] lg:gap-12 xl:grid-cols-[360px_1fr] items-start">
                {/* LEFT: interactive 3D profile flip card */}
                <FadeIn>
                    <div className="lg:sticky lg:top-28">
                        <div className="surface relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.08] shadow-glow-sm">
                            {/* Flip Card */}
                            <div className="flip-card relative mx-auto aspect-[4/5] w-full max-w-[260px] sm:max-w-[280px]">
                                <div className="flip-card-inner h-full w-full">
                                    {/* FRONT */}
                                    <div className="flip-face flex flex-col justify-between rounded-[1.8rem] sm:rounded-[2rem] border border-white/10 bg-background/95 p-5 sm:p-6">
                                        <div className="flex items-start justify-between">
                                            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] text-accent font-bold">
                                                · Profile
                                            </span>
                                            <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-ink/40 bg-white/[0.05] px-2 py-0.5 rounded-full">
                                                Hover Photo
                                            </span>
                                        </div>

                                        <div>
                                            <p className="font-display text-xl sm:text-2xl font-black leading-tight text-ink">
                                                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">intelligent</span> software.
                                            </p>
                                            <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-ink/70">
                                                Full Stack Developer & AI Engineer based in Kerala, India. React, Next.js, Django, AWS & AI Automation.
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between border-t border-white/[0.08] pt-2.5 sm:pt-3 font-mono text-[9.5px] sm:text-[10px] text-ink/50">
                                            <span>Abi Solutions · 2026</span>
                                            <span className="text-accent">↻ Flip</span>
                                        </div>
                                    </div>

                                    {/* BACK: photo */}
                                    <div className="flip-face flip-face-back overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] bg-background border border-white/10">
                                        <Image
                                            src="/me.jpeg"
                                            alt="Abhijith P A"
                                            fill
                                            sizes="(max-width: 1024px) 280px, 320px"
                                            className="object-cover"
                                        />
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 sm:p-5 pt-12 sm:pt-16">
                                            <p className="font-display text-sm sm:text-base font-bold text-ink">
                                                Abhijith P A
                                            </p>
                                            <p className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-accent">
                                                Full Stack & AI Engineer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 sm:mt-6 text-center">
                                <h3 className="font-display text-lg sm:text-xl font-black tracking-tight text-ink">
                                    Abhijith P A
                                </h3>
                                <p className="mt-1 font-mono text-[11px] sm:text-xs text-accent">
                                    Founder @ Abi Solutions
                                </p>
                            </div>

                            {/* Local Time Widget */}
                            <div className="mt-3.5 sm:mt-4 flex items-center justify-center gap-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-2 sm:p-2.5 font-mono text-[10.5px] sm:text-[11px] text-ink/70">
                                <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                                <span className="truncate">Kerala (IST): {currentTime || "GMT+5:30"}</span>
                            </div>

                            {/* Social Connectors */}
                            <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2.5">
                                <a
                                    href="https://github.com/Abhijith-Abi"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink/80 transition hover:border-accent hover:bg-accent hover:text-black"
                                >
                                    <IconGithub className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abhijith-pa/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink/80 transition hover:border-accent hover:bg-accent hover:text-black"
                                >
                                    <IconLinkedin className="h-4 w-4" />
                                </a>
                                <a
                                    href="mailto:abhijithabhijith1999@gmail.com"
                                    aria-label="Email"
                                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink/80 transition hover:border-accent hover:bg-accent hover:text-black"
                                >
                                    <IconMail className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* RIGHT: timeline headline + experience bento cards */}
                <div>
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                            <Briefcase className="h-3 w-3" />
                            Work History & Roles
                        </div>
                        <h2 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">{years}+ YEARS OF</span>
                            <span className="block text-accent">
                                PROFESSIONAL CRAFT.
                            </span>
                        </h2>
                    </FadeIn>

                    {/* Timeline Bento Grid */}
                    <div className="mt-8 sm:mt-10 grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-4">
                        {experiences.map((exp, i) => (
                            <FadeIn
                                key={`${exp.company}-${i}`}
                                delay={i * 0.06}
                                className={exp.span}
                            >
                                <article
                                    className={`bento-card group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-7 ${
                                        exp.featured ? "lg:p-8" : ""
                                    }`}
                                >
                                    {/* Top row */}
                                    <div>
                                        <div className="flex items-center justify-between gap-2 sm:gap-3 border-b border-white/[0.06] pb-3 sm:pb-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-ink/40">
                                                    0{i + 1}
                                                </span>
                                                {exp.isCurrent && (
                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-emerald/40 bg-accent-emerald/10 px-2 sm:px-2.5 py-0.5 font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.18em] text-accent-emerald font-semibold">
                                                        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent-emerald" />
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <span className="font-mono text-[9.5px] sm:text-[10px] text-ink/40">
                                                {exp.timeframe}
                                            </span>
                                        </div>

                                        <div className="pt-3.5 sm:pt-4">
                                            <h3
                                                className={`font-display font-extrabold tracking-tight text-ink group-hover:text-accent transition-colors ${
                                                    exp.featured
                                                        ? "text-xl sm:text-2xl lg:text-3xl"
                                                        : "text-base sm:text-lg lg:text-xl"
                                                }`}
                                            >
                                                {exp.company}
                                            </h3>
                                            <p className="mt-1 font-mono text-[11px] sm:text-xs font-semibold text-accent2">
                                                {exp.title}
                                            </p>
                                            <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-ink/70 sm:text-sm">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skill pills */}
                                    {exp.skills && (
                                        <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                                            {exp.skills.map((s) => (
                                                <span
                                                    key={s}
                                                    className="inline-flex items-center rounded-lg border border-white/[0.08] bg-background/80 px-2 py-0.5 font-mono text-[8.5px] sm:text-[9px] text-ink/70"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
