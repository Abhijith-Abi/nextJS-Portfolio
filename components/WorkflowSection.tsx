"use client";

import React, { useRef } from "react";
import {
    Layout,
    CodeXml,
    GitBranch,
    Cloud,
    User,
    Sparkles,
    Terminal,
    Bot,
    Layers,
    CheckCircle,
} from "lucide-react";
import { AnimatedBeam, BeamNode } from "@/components/ui/animated-beam";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

export function WorkflowSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const aiRef = useRef<HTMLDivElement>(null);
    const deployRef = useRef<HTMLDivElement>(null);

    return (
        <SectionWrapper id="workflow" index="04" label="Pipeline">
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Sparkles className="h-3 w-3" />
                        Engineering Architecture
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,6.5vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">FROM BLUEPRINT TO</span>
                        <span className="block text-accent">
                            PRODUCTION CLOUD.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/75 sm:text-base md:text-right lg:text-lg">
                        Structured pipelines where design converts cleanly to code, AI automation accelerates operations, and zero-downtime deploys run continuously.
                    </p>
                </FadeIn>
            </div>

            <div className="surface relative overflow-hidden rounded-3xl p-6 sm:p-12 border border-white/[0.08] shadow-glow-sm">
                <div
                    ref={containerRef}
                    className="relative flex flex-col items-center justify-center gap-16 md:flex-row md:justify-around md:gap-0 min-h-[380px]"
                >
                    {/* Left: Input sources (Design & Git Architecture) */}
                    <div className="flex flex-col gap-14 z-10">
                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={designRef}
                                className="h-16 w-16 border border-white/15 bg-background/90 text-accent transition-all hover:border-accent hover:shadow-glow-sm hover:scale-105"
                            >
                                <Layout className="h-7 w-7" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                                    Design Spec
                                </span>
                                <p className="font-mono text-[9px] text-ink/40">Figma & UX Tokens</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={codeRef}
                                className="h-16 w-16 border border-white/15 bg-background/90 text-accent2 transition-all hover:border-accent2 hover:shadow-glow-indigo hover:scale-105"
                            >
                                <CodeXml className="h-7 w-7" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                                    Full Stack Dev
                                </span>
                                <p className="font-mono text-[9px] text-ink/40">Next.js & Django</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Core Orchestrator Hub */}
                    <div className="relative flex flex-col items-center gap-4 z-10">
                        <div className="absolute -inset-12 animate-pulse_glow rounded-full bg-accent/20 blur-3xl" />
                        <BeamNode
                            ref={userRef}
                            className="h-28 w-28 scale-110 border-2 border-accent bg-background/90 text-accent shadow-glow transition-all hover:bg-accent/15"
                        >
                            <div className="flex flex-col items-center gap-1.5">
                                <User className="h-8 w-8 text-accent" />
                                <span className="font-mono text-[9px] font-bold uppercase tracking-tight text-ink">
                                    Abhijith P A
                                </span>
                                <span className="font-mono text-[7px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                                    Abi Solutions
                                </span>
                            </div>
                        </BeamNode>
                        <div className="flex items-center gap-1.5 rounded-full bg-surface/80 border border-white/10 px-3 py-1">
                            <Sparkles className="h-3 w-3 animate-pulse text-accent" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/80">
                                System Pipeline
                            </span>
                        </div>
                    </div>

                    {/* Right: Output destinations (AI Automation & Cloud Deployment) */}
                    <div className="flex flex-col gap-14 z-10">
                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={aiRef}
                                className="h-16 w-16 border border-white/15 bg-background/90 text-accent-purple transition-all hover:border-accent-purple hover:shadow-glow-purple hover:scale-105"
                            >
                                <Bot className="h-7 w-7" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                                    AI Workflows
                                </span>
                                <p className="font-mono text-[9px] text-ink/40">LLM & Automation</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={deployRef}
                                className="h-16 w-16 border border-white/15 bg-background/90 text-accent-emerald transition-all hover:border-accent-emerald hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
                            >
                                <Cloud className="h-7 w-7" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                                    Cloud Deploy
                                </span>
                                <p className="font-mono text-[9px] text-ink/40">AWS · Vercel · CI/CD</p>
                            </div>
                        </div>
                    </div>

                    {/* Beams with red crimson gradients */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={designRef}
                        toRef={userRef}
                        curvature={0.35}
                        gradientStartColor="#ff2e51"
                        gradientStopColor="#f43f5e"
                        duration={3.2}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={codeRef}
                        toRef={userRef}
                        curvature={-0.35}
                        gradientStartColor="#f43f5e"
                        gradientStopColor="#ff2e51"
                        duration={3.2}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={aiRef}
                        curvature={0.35}
                        gradientStartColor="#ff2e51"
                        gradientStopColor="#fb7185"
                        duration={3.2}
                        delay={0.4}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={deployRef}
                        curvature={-0.35}
                        gradientStartColor="#ff2e51"
                        gradientStopColor="#10b981"
                        duration={3.2}
                        delay={0.8}
                    />
                </div>

                {/* Status Bar */}
                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                    <div className="flex items-center gap-3">
                        <Terminal className="h-4 w-4 text-accent" />
                        <p className="font-mono text-xs text-ink/80">
                            <span className="text-accent">$</span> abi-solutions pipeline --status=healthy --env=production
                        </p>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-accent-emerald">
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>Zero-downtime Continuous Delivery Active</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
