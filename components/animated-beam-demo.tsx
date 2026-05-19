"use client";

import React from "react";
import { Bot, Search, User, Zap } from "lucide-react";
import {
    AnimatedBeam,
    BeamContainer,
    BeamNode,
} from "@/components/ui/animated-beam";

export function AnimatedBeamDemo() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const userRef = React.useRef<HTMLDivElement>(null);
    const aiRef = React.useRef<HTMLDivElement>(null);
    const searchRef = React.useRef<HTMLDivElement>(null);
    const resultRef = React.useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4">AI Agent Workflow</h2>
            <BeamContainer
                ref={containerRef}
                className="mx-auto flex w-full max-w-2xl items-center justify-between rounded-xl border bg-slate-950/50 p-10 shadow-2xl backdrop-blur-sm"
            >
                <div className="flex flex-col items-center gap-2">
                    <BeamNode
                        ref={userRef}
                        className="h-12 w-12 border-2 border-blue-500/20 bg-blue-500/10"
                    >
                        <User className="h-6 w-6 text-blue-400" />
                    </BeamNode>
                    <span className="font-medium text-[10px] text-slate-400 uppercase tracking-widest">
                        User
                    </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <BeamNode
                        ref={aiRef}
                        className="h-16 w-16 border-2 border-purple-500/20 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    >
                        <Bot className="h-8 w-8 text-purple-400" />
                    </BeamNode>
                    <span className="font-medium text-[10px] text-slate-400 uppercase tracking-widest">
                        AI Agent
                    </span>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <BeamNode
                            ref={searchRef}
                            className="h-12 w-12 border-2 border-amber-500/20 bg-amber-500/10"
                        >
                            <Search className="h-5 w-5 text-amber-400" />
                        </BeamNode>
                        <span className="font-medium text-[10px] text-slate-400 uppercase tracking-widest">
                            Search
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <BeamNode
                            ref={resultRef}
                            className="h-12 w-12 border-2 border-emerald-500/20 bg-emerald-500/10"
                        >
                            <Zap className="h-5 w-5 text-emerald-400" />
                        </BeamNode>
                        <span className="font-medium text-[10px] text-slate-400 uppercase tracking-widest">
                            Result
                        </span>
                    </div>
                </div>

                {/* User -> AI */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={userRef}
                    toRef={aiRef}
                    duration={3}
                    curvature={0.2}
                    gradientStartColor="#3b82f6"
                    gradientStopColor="#8b5cf6"
                />

                {/* AI -> Search */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={aiRef}
                    toRef={searchRef}
                    duration={3}
                    delay={0.5}
                    curvature={-0.3}
                    gradientStartColor="#8b5cf6"
                    gradientStopColor="#f59e0b"
                />

                {/* Search -> AI (Reverse) */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={searchRef}
                    toRef={aiRef}
                    duration={3}
                    delay={1.5}
                    curvature={-0.3}
                    reverse
                    gradientStartColor="#f59e0b"
                    gradientStopColor="#8b5cf6"
                />

                {/* AI -> Result */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={aiRef}
                    toRef={resultRef}
                    duration={3}
                    delay={2.5}
                    curvature={0.3}
                    gradientStartColor="#8b5cf6"
                    gradientStopColor="#10b981"
                />
            </BeamContainer>
        </div>
    );
}
