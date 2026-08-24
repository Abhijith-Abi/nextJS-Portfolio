"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import { Code2, Server, Cpu, Cloud, Sparkles, Layers, ShieldCheck } from "lucide-react";
import Marquee from "./ui/Marquee";

type SkillCategory = {
    title: string;
    icon: any;
    accent: string;
    description: string;
    span: string;
    skills: { name: string; level: string; isCore?: boolean }[];
};

const categories: SkillCategory[] = [
    {
        title: "Frontend Engineering",
        icon: Code2,
        accent: "#2f6bff",
        description:
            "Design systems, interactive component trees, state management, and fluid motion language.",
        span: "lg:col-span-4",
        skills: [
            { name: "React 18 / 19", level: "Mastery", isCore: true },
            { name: "Next.js 14 (App Router)", level: "Mastery", isCore: true },
            { name: "TypeScript", level: "Advanced", isCore: true },
            { name: "Tailwind CSS", level: "Mastery", isCore: true },
            { name: "Framer Motion & GSAP", level: "Advanced", isCore: true },
            { name: "Three.js / WebGL", level: "Intermediate" },
            { name: "Zustand & Redux", level: "Advanced" },
            { name: "Recharts & D3", level: "Advanced" },
        ],
    },
    {
        title: "Backend & Systems",
        icon: Server,
        accent: "#60a5fa",
        description:
            "High-throughput REST & GraphQL APIs, data schemas, authentication, and background workers.",
        span: "lg:col-span-2",
        skills: [
            { name: "Python & Django", level: "Advanced", isCore: true },
            { name: "Node.js & Express", level: "Advanced", isCore: true },
            { name: "PostgreSQL & Prisma", level: "Advanced" },
            { name: "Firebase & Firestore", level: "Advanced" },
            { name: "JWT & NextAuth", level: "Advanced" },
            { name: "Celery & Redis", level: "Intermediate" },
        ],
    },
    {
        title: "AI & Automation",
        icon: Cpu,
        accent: "#1d4ed8",
        description:
            "Autonomous agents, LLM integrations, WhatsApp/Telegram business bots, and RAG pipelines.",
        span: "lg:col-span-2",
        skills: [
            { name: "OpenAI API / Claude", level: "Advanced", isCore: true },
            { name: "WhatsApp Automation", level: "Mastery", isCore: true },
            { name: "Telegram Bot Systems", level: "Mastery", isCore: true },
            { name: "RAG & Vector Search", level: "Intermediate" },
            { name: "LangChain / LlamaIndex", level: "Intermediate" },
        ],
    },
    {
        title: "Cloud, DevOps & Tooling",
        icon: Cloud,
        accent: "#10b981",
        description:
            "Automated CI/CD pipelines, containerization, performance audits, and cloud deployment.",
        span: "lg:col-span-4",
        skills: [
            { name: "AWS (S3, EC2, CloudFront)", level: "Advanced", isCore: true },
            { name: "Docker & Containers", level: "Advanced", isCore: true },
            { name: "Vercel Edge & Cloudflare", level: "Mastery", isCore: true },
            { name: "Git & GitHub Actions CI/CD", level: "Mastery" },
            { name: "Linux Administration", level: "Advanced" },
            { name: "Vitest & Jest", level: "Advanced" },
        ],
    },
];

const marqueeSkills = [
    "Next.js 14",
    "React",
    "TypeScript",
    "Python",
    "Django",
    "AWS",
    "Docker",
    "OpenAI",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "Three.js",
    "GSAP",
    "Zustand",
    "Redis",
    "GraphQL",
];

export function SkillsSection() {
    return (
        <SectionWrapper id="skills" index="03" label="Tech Matrix">
            {/* Header */}
            <div className="mb-10 sm:mb-16 grid items-end gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Sparkles className="h-3 w-3" />
                        Production Capabilities
                    </div>
                    <h2 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">THE TECHNICAL</span>
                        <span className="block text-accent">
                            TOOLKIT & STACK.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-ink/75 md:text-right lg:text-lg">
                        TypeScript-strict, modular architectures, and high-performance libraries. Designed for enterprise stability and responsive speed.
                    </p>
                </FadeIn>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-6">
                {categories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                        <FadeIn key={cat.title} delay={idx * 0.06} className={cat.span}>
                            <div className="bento-card group relative flex h-full flex-col rounded-2xl sm:rounded-3xl p-5 sm:p-7">
                                {/* Top row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5 sm:gap-3">
                                        <span
                                            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] transition-colors group-hover:border-accent/40 shrink-0"
                                            style={{ color: cat.accent }}
                                        >
                                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </span>
                                        <div>
                                            <h3 className="font-display text-base sm:text-lg font-bold text-ink group-hover:text-accent transition-colors">
                                                {cat.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink/30">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <p className="mt-3.5 sm:mt-4 text-xs leading-relaxed text-ink/65 sm:text-sm">
                                    {cat.description}
                                </p>

                                {/* Skill Pills */}
                                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/[0.06] flex flex-wrap gap-1.5 sm:gap-2">
                                    {cat.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`inline-flex items-center gap-1.5 rounded-lg sm:rounded-xl px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono transition-all duration-200 ${
                                                skill.isCore
                                                    ? "bg-white/[0.06] border border-white/15 text-ink hover:border-accent/50 hover:bg-accent/10"
                                                    : "bg-background/80 border border-white/[0.06] text-ink/75 hover:border-white/20"
                                            }`}
                                        >
                                            <span
                                                className="h-1.5 w-1.5 rounded-full shrink-0"
                                                style={{
                                                    backgroundColor: skill.isCore ? cat.accent : "rgba(255,255,255,0.4)",
                                                }}
                                            />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>

            {/* Marquee technology ticker */}
            <div className="mt-8 sm:mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/50 py-3.5 sm:py-4 backdrop-blur-md">
                <Marquee pauseOnHover className="[--duration:28s]">
                    {marqueeSkills.map((tech) => (
                        <div
                            key={tech}
                            className="mx-3 sm:mx-4 flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-ink/70 hover:text-accent transition-colors"
                        >
                            <span className="text-accent">◈</span>
                            <span>{tech}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </SectionWrapper>
    );
}
