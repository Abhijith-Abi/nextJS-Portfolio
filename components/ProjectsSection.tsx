"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";

type Project = {
    name: string;
    domain: string;
    category: string;
    description: string;
    image: string;
    url: string;
    tech: string[];
    role: string;
    metrics: string[];
    featured?: boolean;
};

const projects: Project[] = [
    {
        name: "Start Visa",
        domain: "AI Immigration & Visa Platform",
        category: "AI SaaS & Global Workflows",
        role: "Lead Full Stack Architect",
        description:
            "A global immigration platform powered by AI. Evaluates applicant eligibility against multi-country regulatory criteria, automates complex intake documentation, and delivers real-time application status tracking.",
        image: "/projects/startvisa.webp",
        url: "https://www.startvisa.com/",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cloudflare"],
        metrics: ["Multi-country rules engine", "Automated intake", "Global edge routing"],
        featured: true,
    },
    {
        name: "House of Vaz",
        domain: "Luxury E-Commerce & Retail",
        category: "High-Performance Commerce",
        role: "Lead Frontend Engineer",
        description:
            "Bespoke luxury lifestyle and fashion storefront engineered for sub-second checkout. Features client-side faceted filtering, persistent basket state, and Stripe payment processing.",
        image: "/projects/houseofvaz.webp",
        url: "https://houseofvaz.com/",
        tech: ["Next.js", "React", "Tailwind CSS", "Zustand", "Stripe"],
        metrics: ["<0.8s Page load", "Dynamic inventory", "Stripe processing"],
    },
    {
        name: "Palana Neuro Sync",
        domain: "Clinical Healthcare & Telemetry",
        category: "HealthTech & Patient Care",
        role: "Healthcare Systems Lead",
        description:
            "Rehabilitation telemetry and patient management portal for neuro-specialty clinics. Bridges doctor-patient communication with real-time recovery data tracking and scheduling.",
        image: "/projects/palananeurosync.webp",
        url: "https://palananeurosync.com/",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
        metrics: ["Real-time telemetry", "HIPAA-grade security", "Direct scheduling"],
    },
    {
        name: "Yuva Paripalan",
        domain: "Youth Empowerment Platform",
        category: "Civic Community Platform",
        role: "Full Stack Developer",
        description:
            "Civic engagement and youth enablement portal. Coordinates community initiatives, volunteer registration, feedback aggregation, and live public engagement metrics.",
        image: "/projects/yuvaparipalan.webp",
        url: "https://www.yuvaparipalan.com/",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
        metrics: ["Volunteer onboarding", "Live participation data", "Event pipelines"],
    },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProjectsSection() {
    return (
        <SectionWrapper
            id="projects"
            index="03"
            label="Selected Work"
            labelledBy="projects-heading"
        >
            {/* Section Header */}
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14 sm:mb-16">
                <div className="lg:col-span-7">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-3 block">
                        Case Studies & Deployments
                    </span>
                    <h2
                        id="projects-heading"
                        className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.08] tracking-tight text-ink"
                    >
                        Selected Production Work
                    </h2>
                </div>
                <div className="lg:col-span-5">
                    <p className="max-w-md text-sm sm:text-base leading-relaxed text-ink-muted">
                        Live production platforms, e-commerce stores, and clinical systems. Each engineered for speed, high uptime, and real user scale.
                    </p>
                </div>
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* 1. START VISA — Large Hero Bento Cell (7 Columns) */}
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-line2 lg:col-span-7"
                >
                    <div className="p-6 sm:p-8 pb-5">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded">
                                {projects[0].category}
                            </span>
                            <span className="font-mono text-xs text-ink/40">
                                01 / 04
                            </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                            {projects[0].name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted max-w-xl">
                            {projects[0].description}
                        </p>
                        
                        {/* Key Metrics */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {projects[0].metrics.map((m) => (
                                <span
                                    key={m}
                                    className="font-mono text-[10.5px] text-ink/75 bg-surface2 border border-line px-2 py-0.5 rounded"
                                >
                                    ✓ {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Window Preview */}
                    <div className="px-5 sm:px-8 pb-6 sm:pb-8">
                        <a
                            href={projects[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-lg border border-line bg-background transition-colors hover:border-line2"
                            aria-label={`Visit ${projects[0].name}`}
                        >
                            <div className="flex items-center justify-between border-b border-line bg-surface px-3.5 py-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="ml-2 font-mono text-[10px] text-ink/40 truncate max-w-[160px] sm:max-w-xs">
                                        startvisa.com
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                                    <span>Live Site</span>
                                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <Image
                                    src={projects[0].image}
                                    alt={`${projects[0].name} Web Application`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 720px"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                            </div>
                        </a>

                        {/* Tech tags */}
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[10.5px] text-accent/80 mr-1">
                                {projects[0].role}:
                            </span>
                            {projects[0].tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-ink/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.article>

                {/* 2. HOUSE OF VAZ — Dynamic Bento Cell (5 Columns) */}
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease, delay: 0.1 }}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-line2 lg:col-span-5"
                >
                    <div className="p-6 sm:p-7 pb-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded">
                                {projects[1].category}
                            </span>
                            <span className="font-mono text-xs text-ink/40">
                                02 / 04
                            </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                            {projects[1].name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                            {projects[1].description}
                        </p>
                        
                        {/* Key Metrics */}
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {projects[1].metrics.map((m) => (
                                <span
                                    key={m}
                                    className="font-mono text-[10.5px] text-ink/75 bg-surface2 border border-line px-2 py-0.5 rounded"
                                >
                                    ✓ {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Window Preview */}
                    <div className="px-5 sm:px-7 pb-6 sm:pb-7">
                        <a
                            href={projects[1].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-lg border border-line bg-background transition-colors hover:border-line2"
                            aria-label={`Visit ${projects[1].name}`}
                        >
                            <div className="flex items-center justify-between border-b border-line bg-surface px-3 py-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="ml-2 font-mono text-[10px] text-ink/40 truncate max-w-[130px]">
                                        houseofvaz.com
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                                    <span>Live Site</span>
                                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                            <div className="relative aspect-[16/11] w-full overflow-hidden">
                                <Image
                                    src={projects[1].image}
                                    alt={`${projects[1].name} Online Store`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 520px"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                            </div>
                        </a>

                        {/* Tech tags */}
                        <div className="mt-4 flex flex-wrap items-center gap-1.5">
                            {projects[1].tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-ink/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.article>

                {/* 3. PALANA NEURO SYNC — Clinical Systems Bento Cell (5 Columns) */}
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease, delay: 0.15 }}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-line2 lg:col-span-5"
                >
                    <div className="p-6 sm:p-7 pb-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded">
                                {projects[2].category}
                            </span>
                            <span className="font-mono text-xs text-ink/40">
                                03 / 04
                            </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                            {projects[2].name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                            {projects[2].description}
                        </p>
                        
                        {/* Key Metrics */}
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {projects[2].metrics.map((m) => (
                                <span
                                    key={m}
                                    className="font-mono text-[10.5px] text-ink/75 bg-surface2 border border-line px-2 py-0.5 rounded"
                                >
                                    ✓ {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Window Preview */}
                    <div className="px-5 sm:px-7 pb-6 sm:pb-7">
                        <a
                            href={projects[2].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-lg border border-line bg-background transition-colors hover:border-line2"
                            aria-label={`Visit ${projects[2].name}`}
                        >
                            <div className="flex items-center justify-between border-b border-line bg-surface px-3 py-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="ml-2 font-mono text-[10px] text-ink/40 truncate max-w-[140px]">
                                        palananeurosync.com
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                                    <span>Live Site</span>
                                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                            <div className="relative aspect-[16/11] w-full overflow-hidden">
                                <Image
                                    src={projects[2].image}
                                    alt={`${projects[2].name} Portal`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 520px"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                            </div>
                        </a>

                        {/* Tech tags */}
                        <div className="mt-4 flex flex-wrap items-center gap-1.5">
                            {projects[2].tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-ink/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.article>

                {/* 4. YUVA PARIPALAN — Community & Scale Bento Cell (7 Columns) */}
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease, delay: 0.2 }}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-line2 lg:col-span-7"
                >
                    <div className="p-6 sm:p-8 pb-5">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded">
                                {projects[3].category}
                            </span>
                            <span className="font-mono text-xs text-ink/40">
                                04 / 04
                            </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                            {projects[3].name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted max-w-xl">
                            {projects[3].description}
                        </p>
                        
                        {/* Key Metrics */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {projects[3].metrics.map((m) => (
                                <span
                                    key={m}
                                    className="font-mono text-[10.5px] text-ink/75 bg-surface2 border border-line px-2 py-0.5 rounded"
                                >
                                    ✓ {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Window Preview */}
                    <div className="px-5 sm:px-8 pb-6 sm:pb-8">
                        <a
                            href={projects[3].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-lg border border-line bg-background transition-colors hover:border-line2"
                            aria-label={`Visit ${projects[3].name}`}
                        >
                            <div className="flex items-center justify-between border-b border-line bg-surface px-3.5 py-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="ml-2 font-mono text-[10px] text-ink/40 truncate max-w-[160px] sm:max-w-xs">
                                        yuvaparipalan.com
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                                    <span>Live Site</span>
                                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <Image
                                    src={projects[3].image}
                                    alt={`${projects[3].name} Platform`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 720px"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                            </div>
                        </a>

                        {/* Tech tags */}
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[10.5px] text-accent/80 mr-1">
                                {projects[3].role}:
                            </span>
                            {projects[3].tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-ink/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.article>
            </div>

            {/* Quick Overview Table */}
            <div className="mt-14 overflow-x-auto rounded-xl border border-line sm:mt-18">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <caption className="border-b border-line px-5 py-3.5 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        System Specifications & Architecture Overview
                    </caption>
                    <thead>
                        <tr className="border-b border-line bg-surface font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                            <th scope="col" className="px-5 py-3 font-medium">
                                Application
                            </th>
                            <th scope="col" className="px-5 py-3 font-medium">
                                Industry Sector
                            </th>
                            <th scope="col" className="px-5 py-3 font-medium">
                                Engineering Role
                            </th>
                            <th scope="col" className="px-5 py-3 font-medium">
                                Core Technologies
                            </th>
                            <th scope="col" className="px-5 py-3 font-medium text-right">
                                Deployment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p) => (
                            <tr
                                key={p.name}
                                className="border-b border-line last:border-b-0 transition-colors hover:bg-surface/30"
                            >
                                <th
                                    scope="row"
                                    className="px-5 py-3.5 font-display font-bold text-ink"
                                >
                                    <a
                                        href={p.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                                    >
                                        <span>{p.name}</span>
                                        <ExternalLink className="h-3 w-3 text-ink/40" />
                                    </a>
                                </th>
                                <td className="px-5 py-3.5 text-ink-muted text-xs">
                                    {p.domain}
                                </td>
                                <td className="px-5 py-3.5 text-ink-muted text-xs">
                                    {p.role}
                                </td>
                                <td className="px-5 py-3.5 font-mono text-xs text-ink/70">
                                    {p.tech.slice(0, 3).join(", ")}
                                </td>
                                <td className="px-5 py-3.5 text-right font-mono text-xs text-accent">
                                    Live Production
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionWrapper>
    );
}
