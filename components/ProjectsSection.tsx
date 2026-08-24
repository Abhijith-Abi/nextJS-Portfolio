"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import {
    ArrowUpRight,
    Sparkles,
    Globe,
    ShoppingBag,
    Users,
    Activity,
} from "lucide-react";
import Image from "next/image";

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
    domain: string;
    description: string;
    image: string;
    url: string;
    tech: string[];
    role: string;
};

const projects: Project[] = [
    {
        name: "Start Visa",
        domain: "AI Immigration & Visa Platform",
        role: "Lead Full Stack Architect",
        description:
            "Global digital visa processing platform with AI eligibility scoring, multi-country requirement engines, and automated application tracking.",
        image: "/projects/startvisa.jpg",
        url: "https://www.startvisa.com/",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cloudflare"],
    },
    {
        name: "House of Vaz",
        domain: "Luxury E-Commerce & Retail",
        role: "Lead Frontend Engineer",
        description:
            "High-end fashion and lifestyle storefront built with sub-second checkout speeds, dynamic product filtering, and persistent cart architecture.",
        image: "/projects/houseofvaz.jpg",
        url: "https://houseofvaz.com/",
        tech: ["Next.js", "React", "Tailwind CSS", "Zustand", "Stripe"],
    },
    {
        name: "Yuva Paripalan",
        domain: "Youth Empowerment Platform",
        role: "Full Stack Developer",
        description:
            "Social empowerment portal supporting volunteer onboarding, community events, feedback funnels, and real-time engagement telemetry.",
        image: "/projects/yuvaparipalan.jpg",
        url: "https://www.yuvaparipalan.com/",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    },
    {
        name: "Palana Neuro Sync",
        domain: "Clinical Healthcare & Telemetry",
        role: "Healthcare Systems Lead",
        description:
            "Clinical rehabilitation portal synchronizing patient telemetry, neurological therapy progress, and direct specialist booking funnels.",
        image: "/projects/palananeurosync.jpg",
        url: "https://palananeurosync.com/",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
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
            {/* Minimal Header */}
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent font-semibold">
                        // Featured Case Studies
                    </span>
                    <h2 className="mt-2 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-white">
                        Selected Projects<span className="text-accent">.</span>
                    </h2>
                </div>
                <p className="max-w-md text-sm sm:text-base text-ink-muted leading-relaxed">
                    Production platforms and consumer digital products built with modern stacks, sub-second performance, and verified reliability.
                </p>
            </div>

            {/* Clean Minimal 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {projects.map((p, i) => (
                    <FadeIn key={p.name} delay={i * 0.1}>
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-3xl border border-white/10 bg-[#0c0f18]/80 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-[#111624]/90 hover:shadow-glow hover:-translate-y-1"
                        >
                            {/* Project Visual Preview */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                                <Image
                                    src={p.image}
                                    alt={`${p.name} Preview`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                                    priority={i < 2}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                                {/* Floating Live Badge */}
                                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-mono text-white backdrop-blur-md transition group-hover:bg-accent group-hover:border-accent">
                                    <span>Visit</span>
                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>

                            {/* Project Information */}
                            <div className="mt-5">
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                        {p.name}
                                    </h3>
                                    <span className="font-mono text-[11px] text-accent font-medium">
                                        {p.domain}
                                    </span>
                                </div>

                                <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-2">
                                    {p.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-ink/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
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
