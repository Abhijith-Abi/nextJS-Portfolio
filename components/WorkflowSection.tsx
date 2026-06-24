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
} from "lucide-react";
import { AnimatedBeam, BeamNode } from "@/components/ui/animated-beam";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

export function WorkflowSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const githubRef = useRef<HTMLDivElement>(null);
    const deployRef = useRef<HTMLDivElement>(null);

    return (
        <SectionWrapper id="workflow">
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <h2 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                    <span className="block">FROM IDEA TO</span>
                    <span className="block ghost-text">SHIPPED UI.</span>
                </h2>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/65 sm:text-base md:text-right lg:text-lg">
                        Design hands off, code stays close to spec, version
                        control keeps everyone honest, and deploys are quiet
                        background events.
                    </p>
                </FadeIn>
            </div>

            <div className="surface relative overflow-hidden rounded-3xl p-6 sm:p-12">
                <div
                    ref={containerRef}
                    className="relative flex flex-col items-center justify-center gap-16 md:flex-row md:justify-around md:gap-0"
                >
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={designRef}
                                className="h-14 w-14 border border-line bg-background text-ink transition hover:border-accent/60"
                            >
                                <Layout className="h-6 w-6" />
                            </BeamNode>
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                                Design
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={githubRef}
                                className="h-14 w-14 border border-line bg-background text-ink transition hover:border-accent/60"
                            >
                                <GitBranch className="h-6 w-6" />
                            </BeamNode>
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                                Git
                            </span>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center gap-4">
                        <div className="absolute -inset-10 animate-pulse rounded-full bg-accent/15 blur-3xl" />
                        <BeamNode
                            ref={userRef}
                            className="h-24 w-24 scale-110 border-2 border-accent bg-accent/10 text-accent shadow-glow transition-all hover:bg-accent/20"
                        >
                            <div className="flex flex-col items-center gap-1.5">
                                <User className="h-7 w-7" />
                                <span className="font-mono text-[8px] font-bold uppercase tracking-tighter">
                                    Abhijith
                                </span>
                            </div>
                        </BeamNode>
                        <div className="flex items-center gap-1.5">
                            <Sparkles className="h-3 w-3 animate-pulse text-accent" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70">
                                Hub
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={codeRef}
                                className="h-14 w-14 border border-line bg-background text-ink transition hover:border-accent/60"
                            >
                                <CodeXml className="h-6 w-6" />
                            </BeamNode>
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                                Develop
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <BeamNode
                                ref={deployRef}
                                className="h-14 w-14 border border-line bg-background text-ink transition hover:border-accent/60"
                            >
                                <Cloud className="h-6 w-6" />
                            </BeamNode>
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                                Deploy
                            </span>
                        </div>
                    </div>

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={designRef}
                        toRef={userRef}
                        curvature={0.4}
                        gradientStartColor="#a5b4fc"
                        gradientStopColor="#818cf8"
                        duration={3.5}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={githubRef}
                        toRef={userRef}
                        curvature={-0.4}
                        gradientStartColor="#fafafa"
                        gradientStopColor="#818cf8"
                        duration={3.5}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={codeRef}
                        curvature={0.4}
                        gradientStartColor="#818cf8"
                        gradientStopColor="#fafafa"
                        duration={3.5}
                        delay={0.5}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={userRef}
                        toRef={deployRef}
                        curvature={-0.4}
                        gradientStartColor="#818cf8"
                        gradientStopColor="#a5b4fc"
                        duration={3.5}
                        delay={1}
                    />
                </div>

                <div className="mt-14 flex justify-center">
                    <div className="surface flex items-center gap-3 rounded-full px-5 py-2.5">
                        <Terminal className="h-3.5 w-3.5 text-accent" />
                        <p className="font-mono text-xs text-ink/80">
                            <span className="text-accent">$</span> git commit -m
                            &quot;ship cinematic interfaces&quot;
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
