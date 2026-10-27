"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";

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

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProjectsSection() {
    return (
        <SectionWrapper id="projects" index="03" label="Selected Work">
            {/* Header */}
            <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-14 sm:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85, ease }}
                    className="font-display text-[clamp(2.1rem,4.8vw,3.9rem)] font-bold leading-[1.06] tracking-tight text-ink lg:col-span-7"
                >
                    Selected{" "}
                    <span className="display-serif-italic text-accent">
                        projects.
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85, ease, delay: 0.12 }}
                    className="max-w-md text-sm sm:text-base leading-relaxed text-ink-muted lg:col-span-5"
                >
                    Production platforms and consumer digital products built
                    with modern stacks, sub-second performance, and verified
                    reliability.
                </motion.p>
            </div>

            {/* Feature case blocks — large showcase images, alternating */}
            <div>
                {projects.map((p, i) => {
                    const flip = i % 2 === 1;
                    return (
                        <motion.article
                            key={p.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.9, ease, delay: 0.05 }}
                            className="group grid gap-6 border-t border-line py-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 last:border-b last:border-line"
                        >
                            {/* Showcase image */}
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${p.name}`}
                                className={`relative block overflow-hidden rounded-2xl border border-line bg-surface2 transition-all duration-500 hover:border-line2 hover:shadow-card lg:col-span-7 ${
                                    flip ? "lg:order-2" : ""
                                }`}
                            >
                                <div className="relative aspect-[16/10] w-full">
                                    <Image
                                        src={p.image}
                                        alt={`${p.name} Preview`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 760px"
                                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                        priority={i < 2}
                                    />
                                    {/* visit chip */}
                                    <div className="absolute bottom-4 left-4 translate-y-2 rounded-full border border-accent/50 bg-background/80 px-4 py-2 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                                            Visit live site
                                            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </span>
                                    </div>
                                </div>
                            </a>

                            {/* Case meta */}
                            <div
                                className={`lg:col-span-5 ${
                                    flip ? "lg:order-1" : ""
                                }`}
                            >
                                <span
                                    aria-hidden
                                    className="font-display text-6xl font-bold leading-none tracking-tight text-accent/10 transition-colors duration-500 group-hover:text-accent/25 sm:text-7xl"
                                >
                                    0{i + 1}
                                </span>
                                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted sm:text-[11px]">
                                    {p.domain}
                                </p>
                                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                                    {p.name}
                                </h3>
                                <p className="mt-3.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                                    {p.description}
                                </p>
                                <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 sm:text-[11px]">
                                    <span className="text-accent">
                                        {p.role}
                                    </span>
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="text-line2">
                                                ·
                                            </span>
                                            <span>{t}</span>
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
