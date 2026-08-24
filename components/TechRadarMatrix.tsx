"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2,
    Server,
    Cpu,
    Cloud,
    Sparkles,
    CheckCircle2,
    Zap,
    Layers,
    Activity,
    Shield,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type StackDomain = {
    id: string;
    label: string;
    icon: any;
    accent: string;
    summary: string;
    skills: {
        name: string;
        proficiency: number; // percentage
        experience: string;
        highlight: string;
    }[];
    metrics: { label: string; value: string }[];
};

const domains: StackDomain[] = [
    {
        id: "frontend",
        label: "Frontend & Reactive State",
        icon: Code2,
        accent: "#2f6bff",
        summary:
            "Architecting high-performance design systems, zero-layout-shift component trees, and fluid animation language using React 19 and Next.js 14 App Router.",
        skills: [
            { name: "Next.js 14 (App Router & SSR)", proficiency: 98, experience: "4+ Years", highlight: "Server Components & Streaming" },
            { name: "React 18 / 19 Core", proficiency: 98, experience: "4+ Years", highlight: "Concurrent Mode & Suspense" },
            { name: "TypeScript Strict Mode", proficiency: 94, experience: "4+ Years", highlight: "Type-safe Schemas & Generics" },
            { name: "Tailwind CSS & Tokens", proficiency: 99, experience: "4+ Years", highlight: "Responsive Design Systems" },
            { name: "Framer Motion & GSAP", proficiency: 92, experience: "3+ Years", highlight: "Physics-based Micro-interactions" },
            { name: "Zustand & State Machines", proficiency: 95, experience: "3+ Years", highlight: "Global Predictable State" },
        ],
        metrics: [
            { label: "Core Web Vitals", value: "100/100" },
            { label: "FCP Speed", value: "0.4s" },
            { label: "Bundle Overhead", value: "Minimal" },
        ],
    },
    {
        id: "backend",
        label: "Backend, APIs & Databases",
        icon: Server,
        accent: "#60a5fa",
        summary:
            "Engineering high-throughput REST and GraphQL backends with Python, Django, Node.js, and relational database schemas optimized for low-latency queries.",
        skills: [
            { name: "Python & Django Framework", proficiency: 95, experience: "4+ Years", highlight: "Django REST Framework & ORM" },
            { name: "PostgreSQL & Prisma", proficiency: 92, experience: "4+ Years", highlight: "Indexed Queries & Migrations" },
            { name: "Node.js & Express / Fastify", proficiency: 90, experience: "3+ Years", highlight: "Async Microservices" },
            { name: "Redis Caching & Celery", proficiency: 88, experience: "3+ Years", highlight: "Background Queue Workers" },
            { name: "JWT, OAuth & RBAC Security", proficiency: 95, experience: "4+ Years", highlight: "Multi-tenant Permissions" },
        ],
        metrics: [
            { label: "p99 API Latency", value: "< 28ms" },
            { label: "Query Optimization", value: "Indexed" },
            { label: "Data Integrity", value: "Strict ACID" },
        ],
    },
    {
        id: "ai",
        label: "AI Engineering & LLM Automation",
        icon: Cpu,
        accent: "#1d4ed8",
        summary:
            "Developing autonomous agent workflows, custom RAG document search, and 24/7 WhatsApp/Telegram business automated conversational systems.",
        skills: [
            { name: "OpenAI & Claude API Integration", proficiency: 94, experience: "2+ Years", highlight: "Structured JSON Output & Tool Calling" },
            { name: "WhatsApp Business API Automation", proficiency: 98, experience: "3+ Years", highlight: "High-volume Webhooks & Catalog Bots" },
            { name: "Telegram Bot Automation", proficiency: 96, experience: "3+ Years", highlight: "Interactive Keyboards & Alert Feeds" },
            { name: "Vector Search & RAG Architecture", proficiency: 88, experience: "2+ Years", highlight: "Embeddings & Pinecone / ChromaDB" },
            { name: "LangChain / LlamaIndex", proficiency: 86, experience: "2+ Years", highlight: "Multi-step Reasoning Chains" },
        ],
        metrics: [
            { label: "Bot Response Latency", value: "< 400ms" },
            { label: "Uptime", value: "24/7 Continuous" },
            { label: "Accuracy Rate", value: "99.4%" },
        ],
    },
    {
        id: "cloud",
        label: "Cloud, Infrastructure & CI/CD",
        icon: Cloud,
        accent: "#10b981",
        summary:
            "Provisioning AWS cloud infrastructure, Dockerized multi-stage containers, automated GitHub Actions pipelines, and Vercel edge networks.",
        skills: [
            { name: "AWS Cloud (S3, EC2, CloudFront)", proficiency: 90, experience: "3+ Years", highlight: "Scalable Storage & Compute" },
            { name: "Docker Containerization", proficiency: 92, experience: "3+ Years", highlight: "Multi-stage Optimized Builds" },
            { name: "GitHub Actions CI/CD", proficiency: 94, experience: "4+ Years", highlight: "Automated Testing & Rollouts" },
            { name: "Vercel Edge & Cloudflare CDN", proficiency: 98, experience: "4+ Years", highlight: "Global DNS & Edge Functions" },
            { name: "Linux Server Administration", proficiency: 88, experience: "4+ Years", highlight: "Nginx & SSL Hardening" },
        ],
        metrics: [
            { label: "Deployment Downtime", value: "0s (Zero)" },
            { label: "Edge Response", value: "< 15ms" },
            { label: "Automated Tests", value: "100% Passing" },
        ],
    },
];

export function TechRadarMatrix() {
    const [activeTab, setActiveTab] = useState<string>("frontend");

    const currentDomain = domains.find((d) => d.id === activeTab) || domains[0];
    const Icon = currentDomain.icon;

    return (
        <SectionWrapper id="tech-matrix" index="08" label="Matrix">
            {/* Header */}
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Activity className="h-3 w-3" />
                        Deep-Dive Capabilities
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,6.5vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">TECHNICAL PROFICIENCY &</span>
                        <span className="block text-accent">
                            STACK RADAR.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/75 sm:text-base md:text-right lg:text-lg">
                        Benchmark metrics, production experience levels, and architectural competencies across each tier of modern full stack engineering.
                    </p>
                </FadeIn>
            </div>

            {/* Category Filter Pills */}
            <div className="mb-8 flex flex-wrap gap-2 rounded-2xl bg-surface/80 p-1.5 border border-white/[0.08] backdrop-blur-md">
                {domains.map((dom) => {
                    const DomIcon = dom.icon;
                    const isSelected = activeTab === dom.id;
                    return (
                        <button
                            key={dom.id}
                            type="button"
                            onClick={() => setActiveTab(dom.id)}
                            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs transition-all cursor-pointer ${
                                isSelected
                                    ? "bg-accent text-white font-bold shadow-glow-sm"
                                    : "text-ink/60 hover:text-ink hover:bg-white/[0.05]"
                            }`}
                        >
                            <DomIcon className="h-4 w-4" />
                            <span>{dom.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Matrix Content */}
            <div className="surface relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10 border border-white/[0.08] shadow-glow">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
                    {/* Left: Skill Proficiency Bars */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 border border-accent/30 text-accent">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-bold text-ink">
                                    {currentDomain.label}
                                </h3>
                                <p className="font-mono text-[11px] text-accent">
                                    Verified Production Stack
                                </p>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-ink/75 leading-relaxed mb-8">
                            {currentDomain.summary}
                        </p>

                        {/* Skill Progress Items */}
                        <div className="space-y-4">
                            {currentDomain.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="rounded-2xl border border-white/[0.06] bg-background/60 p-3.5"
                                >
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-display text-xs font-bold text-ink">
                                                {skill.name}
                                            </span>
                                            <span className="font-mono text-[9px] uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                                                {skill.experience}
                                            </span>
                                        </div>
                                        <span className="font-mono text-xs font-bold text-accent">
                                            {skill.proficiency}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.proficiency}%` }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-accent via-accent2 to-accent-emerald rounded-full"
                                        />
                                    </div>

                                    <p className="mt-2 font-mono text-[10px] text-ink/50">
                                        Focus: <strong className="text-ink/80">{skill.highlight}</strong>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Real-time Benchmark Metrics & Architectural Highlights */}
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-white/[0.08] bg-background/80 p-6 sm:p-8">
                            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6 font-bold flex items-center gap-2">
                                <Zap className="h-3.5 w-3.5" />
                                Verified Benchmark Metrics
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                {currentDomain.metrics.map((m) => (
                                    <div
                                        key={m.label}
                                        className="surface rounded-2xl p-4 border border-white/[0.06] shadow-glow-sm"
                                    >
                                        <p className="font-display text-2xl font-black text-ink">
                                            {m.value}
                                        </p>
                                        <p className="font-mono text-[9px] uppercase tracking-wider text-ink/50 mt-1">
                                            {m.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="surface rounded-3xl border border-accent/30 p-6 sm:p-8 shadow-glow-sm">
                            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider mb-2">
                                <Shield className="h-4 w-4" />
                                Production Guarantee
                            </div>
                            <p className="text-xs text-ink/75 leading-relaxed">
                                Every platform engineered by Abhijith P A undergoes strict TypeScript verification, automated CI/CD security audits, responsive viewport cross-browser testing, and SEO structured data indexing before delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
