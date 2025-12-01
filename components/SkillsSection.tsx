"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
    {
        label: "Core",
        items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
        label: "Frameworks & UI",
        items: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Material UI",
            "Shadcn UI",
            "GSAP",
        ],
    },
    {
        label: "State & Tooling",
        items: ["Redux", "Zustand", "GitHub", "GitLab", "Figma"],
    },
];

const chartData = [
    { skill: "React", level: 92 },
    { skill: "Next.js", level: 90 },
    { skill: "TypeScript", level: 85 },
    { skill: "Tailwind CSS", level: 93 },
    { skill: "UI / UX", level: 82 },
    { skill: "State Mgmt", level: 88 },
];

export function SkillsSection() {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = chartRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { autoAlpha: 0, y: 40 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                ".skill-badge",
                { autoAlpha: 0, y: 20 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.04,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <SectionWrapper id="skills">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Skills
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        A modern frontend toolkit
                    </h2>
                </div>
                <p className="max-w-xl text-sm text-muted sm:text-base md:text-right">
                    I work across the modern React ecosystem, from design
                    systems and animations to API integrations and performance
                    work for production-grade applications.
                </p>
            </div>

            <div
                ref={chartRef}
                className="card-surface flex flex-col gap-6 p-5 sm:p-6"
            >
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Tech stack
                    </p>
                    <div className="mt-4 grid gap-4 text-xs sm:grid-cols-3">
                        {skillGroups.map((group) => (
                            <div key={group.label}>
                                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                                    {group.label}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="skill-badge inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-100 shadow-sm shadow-emerald-500/10"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-accent to-accentSecondary" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-800/70 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Skill levels
                    </p>
                    <div className="mt-3 h-72 sm:h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                layout="vertical"
                                margin={{
                                    top: 8,
                                    right: 16,
                                    left: 0,
                                    bottom: 8,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="skill-bar"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="0"
                                    >
                                        <stop offset="0%" stopColor="#22c55e" />
                                        <stop
                                            offset="100%"
                                            stopColor="#22d3ee"
                                        />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid
                                    stroke="#1e293b"
                                    horizontal={false}
                                    strokeDasharray="3 6"
                                />
                                <XAxis
                                    type="number"
                                    domain={[0, 100]}
                                    tick={{ fill: "#64748b", fontSize: 10 }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis
                                    type="category"
                                    dataKey="skill"
                                    tick={{ fill: "#cbd5f5", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={90}
                                />
                                <Bar
                                    dataKey="level"
                                    radius={999}
                                    barSize={16}
                                    fill="url(#skill-bar)"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
