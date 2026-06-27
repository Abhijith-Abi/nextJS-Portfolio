"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type Project = {
    name: string;
    role: string;
    domain: string;
    year: string;
    description: string;
    tech: string[];
    live?: string;
    /** Tailwind grid span classes for desktop layout */
    span: string;
    /** Render as featured (extra emphasis) */
    featured?: boolean;
};

const projects: Project[] = [
    {
        name: "Talrop ERP",
        role: "Enterprise resource planning",
        domain: "ERP",
        year: "2025",
        description:
            "Front-end for an ERP covering inventory, finance, and HR with real-time insights, granular permissions, and a unified design language across modules.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Recharts"],
        live: "https://erp.talrop.com/",
        span: "lg:col-span-4 lg:row-span-2",
        featured: true,
    },
    {
        name: "Hosface",
        role: "Healthcare infrastructure",
        domain: "AI / Healthcare",
        year: "2024",
        description:
            "Pairing doctors and investors through a structured four-step clinic-setup model. Built marketing surfaces, dashboards, and onboarding flow.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        live: "https://www.hosface.com/",
        span: "lg:col-span-2",
    },
    {
        name: "Steyp",
        role: "Coding learning platform",
        domain: "E-learning",
        year: "2023",
        description:
            "Video-led coding education with structured tracks, exercises, and progress tracking.",
        tech: ["React", "Styled Components", "Redux"],
        live: "https://steyp.com/",
        span: "lg:col-span-2",
    },
    {
        name: "Tegain",
        role: "Company & community hub",
        domain: "CRM",
        year: "2024",
        description:
            "Brand site with community engagement and recruitment surfaces, tuned for SEO and Core Web Vitals.",
        tech: ["Next.js", "Tailwind", "Zustand"],
        live: "https://tegain.com/",
        span: "lg:col-span-3",
    },
    {
        name: "Somans",
        role: "Travel management platform",
        domain: "Scheduling",
        year: "2024",
        description:
            "Internal tooling for bookings, approvals, and analytics across HR and operations. Reduced manual workflows with role-based dashboards.",
        tech: ["Next.js", "Tailwind", "Zustand"],
        live: "https://www.somansleisuretours.com/",
        span: "lg:col-span-3",
    },
];

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

export function ProjectsSection() {
    return (
        <SectionWrapper id="projects" index="04" label="Work">
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <h2 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                    <span className="block">SELECTED</span>
                    <span className="block ghost-text">WORK.</span>
                </h2>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/65 sm:text-base md:text-right lg:text-lg">
                        A reading list of products I&apos;ve shipped. Each one
                        is live software with real users — built alongside
                        designers, engineers, and operators.
                    </p>
                </FadeIn>
            </div>

            {/* Bento grid: 6 columns on lg, single column on mobile */}
            <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 lg:grid-cols-6">
                {projects.map((p, i) => (
                    <FadeIn key={p.name} delay={i * 0.05} className={p.span}>
                        <motion.a
                            href={p.live ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`bento-card group flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
                                p.featured ? "lg:p-8" : ""
                            }`}
                        >
                            {/* Top row: number + arrow */}
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/30 group-hover:text-accent">
                                    0{i + 1}
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowIcon />
                                </span>
                            </div>

                            {/* Body */}
                            <div className="mt-auto pt-8">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <h3
                                        className={`font-display font-extrabold tracking-tight text-ink transition group-hover:text-accent ${
                                            p.featured
                                                ? "text-3xl sm:text-4xl lg:text-5xl"
                                                : "text-xl sm:text-2xl"
                                        }`}
                                    >
                                        {p.name}
                                    </h3>
                                </div>
                                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40 sm:text-[11px]">
                                    {p.role}
                                </p>

                                <p
                                    className={`mt-4 leading-relaxed text-ink/60 ${
                                        p.featured
                                            ? "max-w-xl text-sm sm:text-base"
                                            : "text-[13px] sm:text-sm"
                                    }`}
                                >
                                    {p.description}
                                </p>

                                <div className="mt-5 flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                                        {p.domain}
                                    </span>
                                    <span className="font-mono text-[10px] text-ink/40">
                                        · {p.year}
                                    </span>
                                </div>

                                {p.featured && (
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {p.tech.map((stack) => (
                                            <span
                                                key={stack}
                                                className="inline-flex items-center rounded-md border border-line bg-background px-2 py-0.5 font-mono text-[10px] text-ink/70"
                                            >
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.a>
                    </FadeIn>
                ))}
            </div>

            {/* Open Source Projects Section */}
            <div className="mt-24 mb-6">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink sm:text-3xl">
                    Open Source <span className="text-accent">Templates & Boilerplates</span>
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65 sm:text-sm lg:text-base max-w-2xl">
                    A curated collection of developer starter kits, components libraries, and system boilerplates published to GitHub. Free, open source, and production-ready.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        name: "React Admin Dashboard",
                        description: "A modular, premium, and fully accessible admin panel dashboard template with built-in dark mode and Recharts telemetry.",
                        tech: ["React", "TypeScript", "Tailwind", "Recharts"],
                        link: "https://github.com/Abhijith-Abi/react-admin-dashboard",
                    },
                    {
                        name: "Tailwind Component Library",
                        description: "Headless, accessible (WAI-ARIA compliant) layout components and custom utility plugins for Tailwind CSS projects.",
                        tech: ["Tailwind CSS", "Radix UI", "React"],
                        link: "https://github.com/Abhijith-Abi/tailwind-component-library",
                    },
                    {
                        name: "Next.js Starter",
                        description: "Production-ready boilerplate configured with Next.js App Router, strict type-checking, dynamic sitemaps, and SEO presets.",
                        tech: ["Next.js 14", "TypeScript", "Tailwind", "SEO"],
                        link: "https://github.com/Abhijith-Abi/nextjs-starter",
                    },
                    {
                        name: "React Boilerplate",
                        description: "Lightweight SPA starting kit preconfigured with Vite, Zustand state management, Tailwind variables, and Vitest testing.",
                        tech: ["React", "Vite", "Zustand", "Tailwind"],
                        link: "https://github.com/Abhijith-Abi/react-boilerplate",
                    },
                    {
                        name: "Django Boilerplate",
                        description: "Scalable backend skeleton prebuilt with JWT auth, custom middlewares, PostgreSQL schemas, Celery tasks, and Docker settings.",
                        tech: ["Django", "Python", "PostgreSQL", "Docker"],
                        link: "https://github.com/Abhijith-Abi/django-boilerplate",
                    },
                    {
                        name: "Authentication Template",
                        description: "Multi-provider passwordless authentication flow template configured with next-auth (Auth.js) and session tokens database storage.",
                        tech: ["Auth.js", "Next.js", "TypeScript", "PostgreSQL"],
                        link: "https://github.com/Abhijith-Abi/auth-template",
                    },
                ].map((repo, idx) => (
                    <FadeIn key={repo.name} delay={idx * 0.05}>
                        <motion.a
                            href={repo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="surface group flex h-full flex-col justify-between rounded-3xl border border-line p-6 sm:p-7 hover:border-accent/40"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent/85 bg-accent/5 border border-accent/20 px-2 py-0.5 rounded">
                                        Open Source
                                    </span>
                                    <span className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200">
                                        <ArrowIcon />
                                    </span>
                                </div>
                                <h4 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-accent transition">
                                    {repo.name}
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-ink/60">
                                    {repo.description}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-1.5">
                                {repo.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded bg-background border border-line px-2 py-0.5 font-mono text-[9px] text-ink/50"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
}
