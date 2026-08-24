"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import {
    ArrowUpRight,
    Sparkles,
    ExternalLink,
    Layers,
    Activity,
    Shield,
    Calendar,
} from "lucide-react";
import Link from "next/link";

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

type Project = {
    name: string;
    role: string;
    domain: string;
    year: string;
    description: string;
    metric: string;
    tech: string[];
    live?: string;
    internalUrl?: string;
    span: string;
    featured?: boolean;
};

const projects: Project[] = [
    {
        name: "Enterprise ERP",
        role: "Architecture & Frontend Lead",
        domain: "Enterprise SaaS",
        year: "2025 – 2026",
        metric: "Multi-tenant ERP · 99.9% Uptime",
        description:
            "Modular ERP architecture unifying multi-location inventory, finance accounting, payroll, and role-based access control with real-time telemetry dashboards.",
        tech: ["Next.js 14", "TypeScript", "Tailwind", "Zustand", "Recharts", "PostgreSQL"],
        live: "https://abisolutions.online/projects/enterprise-erp",
        internalUrl: "/projects/enterprise-erp",
        span: "lg:col-span-4 lg:row-span-2",
        featured: true,
    },
    {
        name: "Hosface",
        role: "Healthcare Platform",
        domain: "HealthTech / AI",
        year: "2024",
        metric: "Clinical Onboarding Engine",
        description:
            "Connecting physicians, clinics, and health investors through a 4-step clinic launch model with interactive marketing funnels and patient portals.",
        tech: ["Next.js", "TypeScript", "Tailwind", "REST APIs"],
        live: "https://www.hosface.com/",
        internalUrl: "/projects/hosface",
        span: "lg:col-span-2",
    },
    {
        name: "Steyp",
        role: "EdTech Learning Platform",
        domain: "E-Learning",
        year: "2023",
        metric: "Video Tracks & Exercises",
        description:
            "Interactive video-driven software engineering education platform featuring guided coding tracks, student progress metrics, and live exercises.",
        tech: ["React", "Styled Components", "Redux", "Node.js"],
        live: "https://steyp.com/",
        internalUrl: "/projects/steyp",
        span: "lg:col-span-2",
    },
    {
        name: "Tegain",
        role: "Company & Community Hub",
        domain: "Corporate / CRM",
        year: "2024",
        metric: "100/100 Core Web Vitals",
        description:
            "High-converting brand platform with integrated recruitment workflows and community surfaces, optimized for extreme search visibility and rapid loads.",
        tech: ["Next.js", "Tailwind", "Zustand", "SEO"],
        live: "https://tegain.com/",
        internalUrl: "/projects/tegain",
        span: "lg:col-span-3",
    },
    {
        name: "Somans Leisure Tours",
        role: "Travel ERP & Operations",
        domain: "Logistics / Travel",
        year: "2024",
        metric: "Automated Itineraries & Bookings",
        description:
            "Internal operations and booking management suite reducing manual administrative overhead through automated approval workflows and customer portals.",
        tech: ["Next.js", "Tailwind", "Zustand", "Cloudflare"],
        live: "https://www.somansleisuretours.com/",
        internalUrl: "/projects/somans",
        span: "lg:col-span-3",
    },
];

const openSourceProjects = [
    {
        name: "React Admin Dashboard",
        description:
            "Modular, high-performance admin template pre-built with dark mode, Recharts telemetry, and accessible components.",
        tech: ["React", "TypeScript", "Tailwind", "Recharts"],
        link: "https://github.com/Abhijith-Abi/react-admin-dashboard",
    },
    {
        name: "Tailwind Component Library",
        description:
            "Accessible WAI-ARIA compliant UI components and custom utility plugins for production Tailwind projects.",
        tech: ["Tailwind CSS", "Radix UI", "React"],
        link: "https://github.com/Abhijith-Abi/tailwind-component-library",
    },
    {
        name: "Next.js Starter Boilerplate",
        description:
            "Production boilerplate configured with App Router, strict TypeScript, dynamic XML sitemaps, and Schema.org SEO.",
        tech: ["Next.js 14", "TypeScript", "Tailwind", "SEO"],
        link: "https://github.com/Abhijith-Abi/nextjs-starter",
    },
    {
        name: "React Vite SPA Boilerplate",
        description:
            "Lightweight single page app skeleton with Vite, Zustand state, Tailwind variables, and Vitest test runner.",
        tech: ["React", "Vite", "Zustand", "Tailwind"],
        link: "https://github.com/Abhijith-Abi/react-boilerplate",
    },
    {
        name: "Django Backend Skeleton",
        description:
            "Scalable Django architecture with JWT auth, PostgreSQL schemas, Celery tasks, and Docker setup.",
        tech: ["Django", "Python", "PostgreSQL", "Docker"],
        link: "https://github.com/Abhijith-Abi/django-boilerplate",
    },
    {
        name: "Authentication Template",
        description:
            "Passwordless multi-provider authentication flow configured with NextAuth (Auth.js) and token storage.",
        tech: ["Auth.js", "Next.js", "TypeScript", "PostgreSQL"],
        link: "https://github.com/Abhijith-Abi/auth-template",
    },
];

export function ProjectsSection() {
    return (
        <SectionWrapper id="projects" index="05" label="Selected Work">
            {/* Header */}
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Sparkles className="h-3 w-3" />
                        Proven Production Deliveries
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,6.5vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">FEATURED</span>
                        <span className="block text-accent">
                            PRODUCTS & SOFTWARE.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/75 sm:text-base md:text-right lg:text-lg">
                        Selected production applications deployed for real clients and thousands of active users. Built for performance, security, and exceptional UX.
                    </p>
                </FadeIn>
            </div>

            {/* Bento Grid */}
            <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 lg:grid-cols-6">
                {projects.map((p, i) => (
                    <FadeIn key={p.name} delay={i * 0.06} className={p.span}>
                        <div
                            className={`bento-card group flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7 ${
                                p.featured ? "lg:p-9" : ""
                            }`}
                        >
                            {/* Browser Mockup Top Bar */}
                            <div>
                                <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                                        <span className="ml-2 font-mono text-[10px] text-ink/40">
                                            0{i + 1} · {p.domain}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {p.internalUrl && (
                                            <Link
                                                href={p.internalUrl}
                                                className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.05] text-ink/60 transition hover:bg-accent hover:text-black"
                                                title="View Case Study"
                                            >
                                                <Layers className="h-4 w-4" />
                                            </Link>
                                        )}
                                        {p.live && (
                                            <a
                                                href={p.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent transition hover:bg-accent hover:text-black hover:shadow-glow-sm"
                                                title="Open Live Website"
                                            >
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-6">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                                            <Activity className="h-2.5 w-2.5" />
                                            {p.metric}
                                        </span>
                                        <span className="font-mono text-[10px] text-ink/40">
                                            {p.year}
                                        </span>
                                    </div>

                                    <h3
                                        className={`font-display font-extrabold tracking-tight text-ink group-hover:text-accent transition-colors ${
                                            p.featured
                                                ? "text-2xl sm:text-3xl lg:text-4xl"
                                                : "text-xl sm:text-2xl"
                                        }`}
                                    >
                                        {p.name}
                                    </h3>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent2">
                                        {p.role}
                                    </p>

                                    <p
                                        className={`mt-3.5 leading-relaxed text-ink/70 ${
                                            p.featured
                                                ? "text-sm sm:text-base max-w-xl"
                                                : "text-xs sm:text-sm"
                                        }`}
                                    >
                                        {p.description}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center rounded-lg border border-white/[0.08] bg-background/80 px-2.5 py-1 font-mono text-[10px] text-ink/80"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* Open Source Ecosystem Section */}
            <div className="mt-20 sm:mt-24">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent-emerald/20 bg-accent-emerald/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent-emerald mb-3">
                            <IconGithub className="h-3 w-3" />
                            Open Source Ecosystem
                        </div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink sm:text-3xl">
                            Developer Boilerplates &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-emerald">
                                Starter Kits
                            </span>
                        </h3>
                    </div>
                    <a
                        href="https://github.com/Abhijith-Abi"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                    >
                        <span>View GitHub Profile</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {openSourceProjects.map((repo, idx) => (
                        <FadeIn key={repo.name} delay={idx * 0.05}>
                            <a
                                href={repo.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface group flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow-sm"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-lg">
                                            Open Source
                                        </span>
                                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04] text-ink/60 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                    <h4 className="mt-4 font-display text-base font-bold text-ink group-hover:text-accent transition-colors">
                                        {repo.name}
                                    </h4>
                                    <p className="mt-2 text-xs leading-relaxed text-ink/65">
                                        {repo.description}
                                    </p>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                                    {repo.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md bg-background border border-white/[0.06] px-2 py-0.5 font-mono text-[9px] text-ink/60"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
