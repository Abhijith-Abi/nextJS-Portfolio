"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
    Layout,
    CodeXml,
    Cloud,
    Sparkles,
    Terminal,
    Bot,
    CheckCircle2,
    Activity,
    Cpu,
    Zap,
    Send,
    Database,
} from "lucide-react";
import { AnimatedBeam, BeamNode } from "@/components/ui/animated-beam";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

export function WorkflowSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);
    
    // Left Input Nodes
    const designRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const dataRef = useRef<HTMLDivElement>(null);

    // Right Output Nodes
    const aiRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<HTMLDivElement>(null);
    const deployRef = useRef<HTMLDivElement>(null);

    return (
        <SectionWrapper id="workflow" index="04" label="Pipeline">
            {/* Header */}
            <div className="mb-10 sm:mb-16 grid items-end gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Sparkles className="h-3 w-3" />
                        Engineering Architecture
                    </div>
                    <h2 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">FROM BLUEPRINT TO</span>
                        <span className="block text-accent">
                            PRODUCTION CLOUD.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-ink/75 md:text-right lg:text-lg">
                        End-to-end full stack lifecycle where Figma design specs convert cleanly into reactive code, autonomous AI automates operations, and zero-downtime pipelines deploy to production cloud.
                    </p>
                </FadeIn>
            </div>

            {/* Main Interactive Architecture Board */}
            <div className="surface relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-12 border border-white/[0.08] shadow-glow">
                {/* Ambient Background Glows */}
                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-accent/15 blur-[120px]" />
                <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-80 rounded-full bg-accent2/10 blur-[100px]" />

                <div
                    ref={containerRef}
                    className="relative flex flex-col items-center justify-between gap-8 sm:gap-12 lg:flex-row lg:gap-0 min-h-[460px] sm:min-h-[480px] py-4"
                >
                    {/* LEFT TIER: System Inputs & Foundations */}
                    <div className="flex flex-row lg:flex-col justify-around gap-2 sm:gap-6 lg:gap-10 z-10 w-full lg:w-auto">
                        {/* Node 1: Design Tokens */}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 group">
                            <BeamNode
                                ref={designRef}
                                className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl border border-white/15 bg-background/90 text-accent transition-all duration-300 group-hover:border-accent group-hover:shadow-glow-sm group-hover:scale-105"
                            >
                                <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-ink block truncate">
                                    Design Spec
                                </span>
                                <span className="font-mono text-[7.5px] sm:text-[9px] text-ink/50 block truncate">
                                    Figma & Tokens
                                </span>
                            </div>
                        </div>

                        {/* Node 2: Full Stack Code */}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 group">
                            <BeamNode
                                ref={codeRef}
                                className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl border border-white/15 bg-background/90 text-accent2 transition-all duration-300 group-hover:border-accent2 group-hover:shadow-glow-blue group-hover:scale-105"
                            >
                                <CodeXml className="h-5 w-5 sm:h-6 sm:w-6 text-accent2" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-ink block truncate">
                                    Next.js Core
                                </span>
                                <span className="font-mono text-[7.5px] sm:text-[9px] text-ink/50 block truncate">
                                    React & TS
                                </span>
                            </div>
                        </div>

                        {/* Node 3: Backend & Data */}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 group">
                            <BeamNode
                                ref={dataRef}
                                className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl border border-white/15 bg-background/90 text-accent transition-all duration-300 group-hover:border-accent group-hover:shadow-glow-blue group-hover:scale-105"
                            >
                                <Database className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-ink block truncate">
                                    Data & Backend
                                </span>
                                <span className="font-mono text-[7.5px] sm:text-[9px] text-ink/50 block truncate">
                                    Django · SQL
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CENTER TIER: Abhijith P A / Abi Solutions Central Orchestrator */}
                    <div className="relative flex flex-col items-center gap-3 sm:gap-4 z-20 my-2 sm:my-4 lg:my-0">
                        {/* Animated Glow Rings */}
                        <div className="absolute -inset-10 animate-pulse_glow rounded-full bg-gradient-to-r from-accent/25 via-accent2/20 to-accent/25 blur-2xl pointer-events-none" />
                        
                        <BeamNode
                            ref={userRef}
                            className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-3xl border-2 border-accent/60 bg-surface/95 p-2 sm:p-3 shadow-glow transition-all duration-500 hover:border-accent hover:shadow-[0_0_40px_rgba(47,107,255,0.45)] hover:scale-105"
                        >
                            <div className="flex flex-col items-center text-center gap-1 sm:gap-1.5 w-full">
                                {/* Profile Avatar with glowing ring */}
                                <div className="relative h-11 w-11 sm:h-14 sm:w-14 overflow-hidden rounded-full border-2 border-accent shadow-glow-sm">
                                    <Image
                                        src="/avatar.jpg"
                                        alt="Abhijith P A"
                                        width={56}
                                        height={56}
                                        className="h-full w-full object-cover object-center"
                                        priority
                                    />
                                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border border-background bg-accent-emerald shadow-[0_0_8px_#10b981]" />
                                </div>
                                <span className="font-display text-[11px] sm:text-xs font-bold text-ink">
                                    Abhijith P A
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/15 px-2 py-0.5 font-mono text-[7.5px] sm:text-[8px] uppercase tracking-wider text-accent font-semibold">
                                    <Zap className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-accent" />
                                    Abi Solutions
                                </span>
                            </div>
                        </BeamNode>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-background/80 px-3 sm:px-3.5 py-1 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink font-semibold">
                                Central Engine Active
                            </span>
                        </div>
                    </div>

                    {/* RIGHT TIER: Outputs, AI & Production Delivery */}
                    <div className="flex flex-row lg:flex-col justify-around gap-2 sm:gap-6 lg:gap-10 z-10 w-full lg:w-auto">
                        {/* Node 4: AI Workflows */}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 group">
                            <BeamNode
                                ref={aiRef}
                                className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl border border-white/15 bg-background/90 text-accent2 transition-all duration-300 group-hover:border-accent2 group-hover:shadow-glow-sky group-hover:scale-105"
                            >
                                <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-accent2" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-ink block truncate">
                                    AI & LLM RAG
                                </span>
                                <span className="font-mono text-[7.5px] sm:text-[9px] text-ink/50 block truncate">
                                    Agents · OpenAI
                                </span>
                            </div>
                        </div>

                        {/* Node 5: Bot Automation */}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 group">
                            <BeamNode
                                ref={autoRef}
                                className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl border border-white/15 bg-background/90 text-accent transition-all duration-300 group-hover:border-accent group-hover:shadow-glow-sm group-hover:scale-105"
                            >
                                <Send className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-ink block truncate">
                                    Automation
                                </span>
                                <span className="font-mono text-[7.5px] sm:text-[9px] text-ink/50 block truncate">
                                    WhatsApp & Bots
                                </span>
                            </div>
                        </div>

                        {/* Node 6: Cloud Deployment */}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 group">
                            <BeamNode
                                ref={deployRef}
                                className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl border border-white/15 bg-background/90 text-accent-emerald transition-all duration-300 group-hover:border-accent-emerald group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105"
                            >
                                <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-accent-emerald" />
                            </BeamNode>
                            <div className="text-center">
                                <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-ink block truncate">
                                    Cloud Deploy
                                </span>
                                <span className="font-mono text-[7.5px] sm:text-[9px] text-ink/50 block truncate">
                                    AWS · CI/CD
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ANIMATED LASER BEAMS (Zentra Royal Blue System) */}
                    {/* Left Inputs -> Center Hub */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={designRef}
                        toRef={userRef}
                        curvature={0.4}
                        gradientStartColor="#2f6bff"
                        gradientStopColor="#60a5fa"
                        duration={3.0}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={codeRef}
                        toRef={userRef}
                        curvature={0}
                        gradientStartColor="#60a5fa"
                        gradientStopColor="#2f6bff"
                        duration={2.8}
                        delay={0.2}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={dataRef}
                        toRef={userRef}
                        curvature={-0.4}
                        gradientStartColor="#1d4ed8"
                        gradientStopColor="#2f6bff"
                        duration={3.2}
                        delay={0.4}
                    />

                    {/* Center Hub -> Right Outputs */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={aiRef}
                        curvature={0.4}
                        gradientStartColor="#2f6bff"
                        gradientStopColor="#60a5fa"
                        duration={3.0}
                        delay={0.3}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={autoRef}
                        curvature={0}
                        gradientStartColor="#2f6bff"
                        gradientStopColor="#1d4ed8"
                        duration={2.8}
                        delay={0.5}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={deployRef}
                        curvature={-0.4}
                        gradientStartColor="#2f6bff"
                        gradientStopColor="#10b981"
                        duration={3.2}
                        delay={0.7}
                    />
                </div>

                {/* TELEMETRY COMMAND CONSOLE & SYSTEM STATUS BAR */}
                <div className="mt-8 sm:mt-10 border-t border-white/[0.08] pt-4 sm:pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-xs">
                    <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto min-w-0">
                        <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent shrink-0" />
                        <p className="text-ink/80 truncate">
                            <span className="text-accent">$</span> abi-solutions pipeline --status=healthy --env=production
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-ink/60 self-end md:self-auto shrink-0">
                        <div className="flex items-center gap-1.5">
                            <Activity className="h-3 w-3 text-accent" />
                            <span>Latency: <strong className="text-ink">12ms</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Cpu className="h-3 w-3 text-accent2" />
                            <span>Throughput: <strong className="text-ink">100% CI/CD</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 text-accent-emerald">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Zero-Downtime Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
