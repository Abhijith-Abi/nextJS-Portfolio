"use client";

import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type SkillCategory = {
    title: string;
    description: string;
    skills: { name: string; level: string; isCore?: boolean }[];
};

const categories: SkillCategory[] = [
    {
        title: "Frontend Engineering",
        description:
            "Clean, fast screens built from reusable parts. I set up design systems, manage app state and add smooth motion that helps people use the app.",
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
            "Solid REST and GraphQL APIs, data models and login flows that stay fast under load. Background jobs handle slow work, like reports and emails, out of sight.",
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
            "AI agents, LLM features and business bots for WhatsApp and Telegram. RAG search lets a bot answer from your own files and data.",
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
            "Code that ships itself. CI/CD pipelines test and deploy each change, Docker keeps setups the same, and speed checks keep pages quick in the cloud.",
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
            <div className="mb-10 sm:mb-14 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-3 block">
                        Production Capabilities
                    </span>
                    <h2
                        id="skills-heading"
                        className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-ink"
                    >
                        Tools & Engineering Stack
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm md:text-base leading-relaxed text-ink-muted">
                        Core technical foundations used daily. Selected for reliability, long-term maintainability, and predictable performance under scale.
                    </p>
                </FadeIn>
            </div>

            {/* Editorial numbered rows */}
            <div className="border-t border-line">
                {categories.map((cat, idx) => (
                    <FadeIn key={cat.title} delay={idx * 0.04}>
                        <div className="group grid gap-5 border-b border-line py-8 sm:py-10 md:grid-cols-[60px_0.9fr_1.1fr] md:gap-8 transition-colors">
                            {/* Index */}
                            <span className="font-mono text-[11px] text-ink/40 md:pt-1">
                                0{idx + 1}
                            </span>

                            {/* Title + description */}
                            <div>
                                <h3
                                    id={`skills-${cat.title
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, "-")
                                        .replace(/(^-|-$)/g, "")}`}
                                    className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink"
                                >
                                    {cat.title}
                                </h3>
                                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Mono chips with nested 6px radius */}
                            <div className="flex flex-wrap content-start gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`inline-flex items-center gap-2 rounded border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                                            skill.isCore
                                                ? "border-line2 text-ink bg-surface"
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
        </SectionWrapper>
    );
}
