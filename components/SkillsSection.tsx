"use client";

import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import { Sparkles } from "lucide-react";
import Marquee from "./ui/Marquee";

type SkillCategory = {
    title: string;
    description: string;
    skills: { name: string; level: string; isCore?: boolean }[];
};

const categories: SkillCategory[] = [
    {
        title: "Frontend Engineering",
        description:
            "Design systems, interactive component trees, state management, and fluid motion language.",
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
        description:
            "High-throughput REST & GraphQL APIs, data schemas, authentication, and background workers.",
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
        description:
            "Autonomous agents, LLM integrations, WhatsApp/Telegram business bots, and RAG pipelines.",
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
        description:
            "Automated CI/CD pipelines, containerization, performance audits, and cloud deployment.",
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
        <SectionWrapper
            id="skills"
            index="02"
            label="What I Build"
            labelledBy="skills-heading"
        >
            {/* Header */}
            <div className="mb-10 sm:mb-16 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="section-eyebrow mb-5 flex items-center gap-2">
                        <Sparkles className="h-3 w-3" />
                        Production Capabilities
                    </span>
                    <h2
                        id="skills-heading"
                        className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tight text-ink"
                    >
                        What I build with{" "}
                        <span className="display-serif-italic text-accent">
                            the toolkit.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm md:text-base leading-relaxed text-ink-muted">
                        These are the tools I use every day. I pick proven, well-supported tech so your product stays fast, stable and easy to grow.
                    </p>
                </FadeIn>
            </div>

            {/* Editorial numbered rows */}
            <div className="border-t border-line">
                {categories.map((cat, idx) => (
                    <FadeIn key={cat.title} delay={idx * 0.06}>
                        <div className="group grid gap-5 border-b border-line py-9 sm:py-12 md:grid-cols-[72px_0.9fr_1.1fr] md:gap-10 transition-all duration-300">
                            {/* Index */}
                            <span className="font-mono text-[11px] tracking-[0.3em] text-ink/40 transition-colors group-hover:text-accent md:pt-2">
                                0{idx + 1}
                            </span>

                            {/* Title + description */}
                            <div>
                                <h3
                                    id={`skills-${cat.title
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, "-")
                                        .replace(/(^-|-$)/g, "")}`}
                                    className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent"
                                >
                                    {cat.title}
                                </h3>
                                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Mono chips */}
                            <div className="flex flex-wrap content-start gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] sm:text-[11px] transition-colors duration-200 hover:-translate-y-[2px] ${
                                            skill.isCore
                                                ? "border-line2 text-ink"
                                                : "border-line text-ink-muted"
                                        }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                                                skill.isCore ? "bg-accent" : "bg-ink/25"
                                            }`}
                                        />
                                        {skill.name}
                                        <span className="text-ink/35">· {skill.level}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* Marquee technology ticker */}
            <div className="mt-10 sm:mt-14 overflow-hidden rounded-full border border-line bg-surface/60 py-3.5 sm:py-4 backdrop-blur-md">
                <Marquee pauseOnHover className="[--duration:28s]">
                    {marqueeSkills.map((tech) => (
                        <div
                            key={tech}
                            className="mx-3 sm:mx-5 flex items-center gap-2 font-mono text-[11px] sm:text-xs text-ink-muted transition-colors hover:text-accent"
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
