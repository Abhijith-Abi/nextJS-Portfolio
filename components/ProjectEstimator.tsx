"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Calculator,
    Sparkles,
    CheckCircle2,
    Clock,
    Layers,
    Send,
    ArrowRight,
    Cpu,
    Shield,
    Database,
    Zap,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type ProjectType = {
    id: string;
    title: string;
    description: string;
    baseWeeks: number;
    icon: any;
    recommendedStack: string[];
};

const projectTypes: ProjectType[] = [
    {
        id: "erp",
        title: "Enterprise ERP & SaaS",
        description: "Multi-tenant inventory, payroll, accounting, and role-based workflows.",
        baseWeeks: 6,
        icon: Database,
        recommendedStack: ["Next.js 14", "Django", "PostgreSQL", "Tailwind", "Redis"],
    },
    {
        id: "ai",
        title: "Autonomous AI & LLM Automation",
        description: "Custom AI agents, RAG vector search, WhatsApp & Telegram bot automation.",
        baseWeeks: 3,
        icon: Cpu,
        recommendedStack: ["Python", "OpenAI / Claude", "LangChain", "FastAPI", "Pinecone"],
    },
    {
        id: "fullstack",
        title: "Custom Full Stack Web App",
        description: "High-converting web platforms, reactive dashboards, and client portals.",
        baseWeeks: 4,
        icon: Layers,
        recommendedStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "AWS S3"],
    },
    {
        id: "mvp",
        title: "Rapid MVP Sprint (2-Week Launch)",
        description: "Fast-track production MVP to validate market and onboard early users.",
        baseWeeks: 2,
        icon: Zap,
        recommendedStack: ["Next.js 14", "Firebase / Supabase", "Vercel", "Tailwind CSS"],
    },
];

type FeatureOption = {
    id: string;
    label: string;
    category: string;
    extraWeeks: number;
};

const featureOptions: FeatureOption[] = [
    { id: "auth", label: "Multi-Tenant RBAC & Auth", category: "Security", extraWeeks: 1 },
    { id: "whatsapp", label: "WhatsApp / Telegram Bot Engine", category: "AI Automation", extraWeeks: 1 },
    { id: "dashboard", label: "Real-time Telemetry & Recharts", category: "UI/UX", extraWeeks: 0.5 },
    { id: "payment", label: "Stripe / Razorpay Gateways", category: "Fintech", extraWeeks: 0.5 },
    { id: "rag", label: "Vector Search & Custom Document RAG", category: "AI Automation", extraWeeks: 1.5 },
    { id: "cicd", label: "AWS Cloud Infrastructure & CI/CD", category: "DevOps", extraWeeks: 0.5 },
];

export function ProjectEstimator() {
    const [selectedType, setSelectedType] = useState<string>("erp");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
        "auth",
        "dashboard",
        "cicd",
    ]);
    const [timelinePreference, setTimelinePreference] = useState<"standard" | "accelerated">("standard");

    const currentType = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];

    const toggleFeature = (id: string) => {
        setSelectedFeatures((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    // Calculate total delivery duration
    const totalFeatureWeeks = selectedFeatures.reduce((acc, fId) => {
        const feat = featureOptions.find((f) => f.id === fId);
        return acc + (feat?.extraWeeks || 0);
    }, 0);

    const calculatedWeeks = Math.ceil(
        (currentType.baseWeeks + totalFeatureWeeks) * (timelinePreference === "accelerated" ? 0.75 : 1)
    );

    // Build WhatsApp Pre-filled message with the full spec
    const selectedFeatureNames = featureOptions
        .filter((f) => selectedFeatures.includes(f.id))
        .map((f) => f.label)
        .join(", ");

    const whatsappMessage = encodeURIComponent(
        `Hi Abhijith, I configured a project specification on your portfolio:\n\n` +
        `• Project Archetype: ${currentType.title}\n` +
        `• Selected Capabilities: ${selectedFeatureNames || "Standard Core"}\n` +
        `• Delivery Speed: ${timelinePreference === "accelerated" ? "Accelerated Sprint" : "Standard Milestone Delivery"}\n` +
        `• Estimated Target: ~${calculatedWeeks} Weeks\n\n` +
        `I would like to discuss scoping and get started!`
    );

    return (
        <SectionWrapper id="estimator" index="05" label="Estimator">
            {/* Header */}
            <div className="mb-10 sm:mb-16 grid items-end gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Calculator className="h-3 w-3" />
                        Interactive Scoping Tool
                    </div>
                    <h2 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">PROJECT SCOPE &</span>
                        <span className="block text-accent">
                            TIMELINE CALCULATOR.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-ink/75 md:text-right lg:text-lg">
                        Select your software archetype and desired technical capabilities to preview recommended architecture and delivery timeline.
                    </p>
                </FadeIn>
            </div>

            {/* Main Interactive Bento Grid */}
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                {/* Left Column: Interactive Selectors */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Step 1: Project Archetype */}
                    <div className="surface rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 border border-white/[0.08] shadow-glow-sm">
                        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4 font-bold">
                            <span>01</span>
                            <span>·</span>
                            <span>Select Project Archetype</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                            {projectTypes.map((pt) => {
                                const Icon = pt.icon;
                                const isSelected = selectedType === pt.id;
                                return (
                                    <button
                                        key={pt.id}
                                        type="button"
                                        onClick={() => setSelectedType(pt.id)}
                                        className={`group relative rounded-2xl p-3.5 sm:p-4 text-left transition-all duration-300 cursor-pointer ${
                                            isSelected
                                                ? "border-2 border-accent bg-accent/10 shadow-glow-sm"
                                                : "border border-white/10 bg-background/60 hover:border-white/20 hover:bg-white/[0.03]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                                            <div
                                                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-colors ${
                                                    isSelected ? "bg-accent text-white" : "bg-white/5 text-ink/70 group-hover:text-accent"
                                                }`}
                                            >
                                                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                            </div>
                                            {isSelected && (
                                                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                                            )}
                                        </div>
                                        <h3 className="font-display text-xs sm:text-sm font-bold text-ink mb-1">
                                            {pt.title}
                                        </h3>
                                        <p className="font-mono text-[10px] sm:text-[11px] text-ink/60 leading-relaxed">
                                            {pt.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Step 2: Desired Technical Modules */}
                    <div className="surface rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 border border-white/[0.08] shadow-glow-sm">
                        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4 font-bold">
                            <span>02</span>
                            <span>·</span>
                            <span>Add System Capabilities</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                            {featureOptions.map((feat) => {
                                const isChecked = selectedFeatures.includes(feat.id);
                                return (
                                    <button
                                        key={feat.id}
                                        type="button"
                                        onClick={() => toggleFeature(feat.id)}
                                        className={`flex items-center justify-between rounded-xl p-2.5 sm:p-3 text-left transition-all cursor-pointer ${
                                            isChecked
                                                ? "border border-accent/60 bg-accent/10 text-ink shadow-glow-sm"
                                                : "border border-white/10 bg-background/60 text-ink/70 hover:border-white/20 hover:bg-white/[0.03]"
                                        }`}
                                    >
                                        <div className="min-w-0 pr-2">
                                            <p className="font-display text-xs font-bold text-ink truncate">
                                                {feat.label}
                                            </p>
                                            <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-wider text-accent/80">
                                                {feat.category}
                                            </span>
                                        </div>
                                        <div
                                            className={`flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                                isChecked
                                                    ? "border-accent bg-accent text-white"
                                                    : "border-white/20 bg-white/5"
                                            }`}
                                        >
                                            {isChecked && <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: Dynamic Live Estimate Card (Sticky) */}
                <div className="lg:sticky lg:top-28">
                    <div className="surface relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 border-2 border-accent/40 shadow-glow bg-surface/95">
                        <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-5 sm:mb-6 font-semibold">
                            <Sparkles className="h-3 w-3" />
                            Live Scoping Summary
                        </div>

                        {/* Estimated Target Metric */}
                        <div className="border-b border-white/10 pb-5 sm:pb-6 mb-5 sm:mb-6">
                            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink/50">
                                Estimated Delivery Window
                            </span>
                            <div className="mt-2 flex items-baseline gap-2 sm:gap-3">
                                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
                                    ~{calculatedWeeks} <span className="text-lg sm:text-xl font-normal text-accent">Weeks</span>
                                </p>
                            </div>
                            <p className="mt-1 font-mono text-[10.5px] sm:text-xs text-accent-emerald flex items-center gap-1.5">
                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                                <span>Iterative Milestones & Weekly Demos</span>
                            </p>
                        </div>

                        {/* Recommended Stack Matrix */}
                        <div className="mb-5 sm:mb-6">
                            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                                Recommended Tech Foundation
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {currentType.recommendedStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-background/80 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[9.5px] sm:text-[10px] text-ink/90"
                                    >
                                        <Zap className="h-2.5 w-2.5 text-accent" />
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Mode Toggle */}
                        <div className="mb-6 sm:mb-8 rounded-2xl border border-white/10 bg-background/60 p-1 flex gap-1">
                            <button
                                type="button"
                                onClick={() => setTimelinePreference("standard")}
                                className={`flex-1 rounded-xl py-2 font-mono text-[11px] sm:text-xs transition-all cursor-pointer ${
                                    timelinePreference === "standard"
                                        ? "bg-accent text-white font-bold shadow-glow-sm"
                                        : "text-ink/60 hover:text-ink"
                                }`}
                            >
                                Standard Delivery
                            </button>
                            <button
                                type="button"
                                onClick={() => setTimelinePreference("accelerated")}
                                className={`flex-1 rounded-xl py-2 font-mono text-[11px] sm:text-xs transition-all cursor-pointer ${
                                    timelinePreference === "accelerated"
                                        ? "bg-accent text-white font-bold shadow-glow-sm"
                                        : "text-ink/60 hover:text-ink"
                                }`}
                            >
                                Accelerated Sprint
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <a
                                href={`https://wa.me/919961316468?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-btn-primary group flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-tight shadow-glow-sm text-center"
                            >
                                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                                <span>Send Specification via WhatsApp</span>
                            </a>

                            <a
                                href="/contact"
                                className="hero-btn-ghost flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold text-center"
                            >
                                <span>Request Formal Written Proposal</span>
                                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
