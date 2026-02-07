"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "./SectionWrapper";
import { Spotlight } from "./ui/Spotlight";

gsap.registerPlugin(ScrollTrigger);

type Role = {
    title: string;
    timeframe: string;
    type?: string;
    description?: string;
    location?: string;
};

type ExperienceItem = {
    company: string;
    startDate: string; // e.g., "Jan 2024"
    endDate?: string; // "Present" or "Sep 2024"
    roles: Role[];
    skills?: string[];
};

const experiences: ExperienceItem[] = [
    {
        company: "Talrop",
        startDate: "May 2025",
        endDate: "Present",
        roles: [
            {
                title: "UI Engineer Level 2",
                timeframe: "May 2025 – Present",
                type: "Full-time",
            },
        ],
    },
    {
        company: "Steyp",
        startDate: "Jan 2024",
        endDate: "Present",
        roles: [
            {
                title: "Software Engineer @ Steyp | Next js Developer",
                timeframe: "Jan 2024 – Present",
                type: "Full-time",
                description: "Web Development and Software Development",
                location: "Kochi, Kerala, India",
            },
            {
                title: "Software Engineer",
                timeframe: "Oct 2022 – Sep 2024",
                type: "Full-time",
            },
            {
                title: "Software Engineer",
                timeframe: "Apr 2022 – Oct 2022",
                type: "Internship",
            },
        ],
        skills: ["Next.js", "React", "Web Development", "Software Development"],
    },
];

const calculateDuration = (startDate: string, endDate: string = "Present") => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years === 0 && months === 0) return "Less than a month";

    const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
    const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

    return [yearStr, monthStr].filter(Boolean).join(" ");
};

export function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const ctx = gsap.context(() => {
            // Animate timeline line
            gsap.from(".timeline-line", {
                scaleY: 0,
                transformOrigin: "top",
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            // Animate experience items
            const items = gsap.utils.toArray(".experience-item");
            items.forEach((item: any, i) => {
                gsap.fromTo(
                    item,
                    { autoAlpha: 0, x: -50 },
                    {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                        delay: i * 0.2,
                    },
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [mounted]);

    // Format "Present" to current Month Year
    const formatTimeframe = (timeframe: string) => {
        if (!mounted) return timeframe; // Return original string during server render
        const currentMonthYear = new Date().toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
        return timeframe.replace("Present", currentMonthYear);
    };

    return (
        <SectionWrapper id="experience">
            <div className="mb-16 md:mb-24">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Experience
                </h2>
            </div>

            <div ref={containerRef} className="relative pl-8 sm:pl-0">
                {/* Timeline Line (Desktop: Left 32px to match dot center) */}
                {/* Mobile: Left 20px */}
                <div className="timeline-line absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent md:left-8" />

                <div className="space-y-12 md:space-y-16">
                    {experiences.map((exp, index) => {
                        const duration = calculateDuration(
                            exp.startDate,
                            exp.endDate,
                        );

                        return (
                            <div
                                key={index}
                                className="experience-item relative pl-12 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-5 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-slate-900 bg-slate-600 md:left-8 z-10 box-content">
                                    <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-accent animate-pulse" />
                                </div>

                                <Spotlight className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-all hover:border-accent/50 md:p-8">
                                    <div className="relative z-10 flex flex-col gap-6 md:flex-row md:justify-between md:gap-10">
                                        {/* Company Info */}
                                        <div className="shrink-0 md:w-48 lg:w-56">
                                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                                {exp.company}
                                            </h3>
                                            <div className="mt-2 text-xs font-medium text-slate-400 font-mono bg-slate-800/50 px-2 py-1 rounded inline-block">
                                                {duration}
                                            </div>
                                            {exp.skills && (
                                                <div className="mt-6 flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="inline-flex items-center rounded-full bg-slate-800/40 border border-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Roles */}
                                        <div className="flex-1 space-y-8">
                                            {exp.roles.map((role, rIndex) => (
                                                <div
                                                    key={rIndex}
                                                    className="relative"
                                                >
                                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                                        <h4 className="text-lg font-semibold text-slate-200 group-hover:text-accent transition-colors duration-300">
                                                            {role.title}
                                                        </h4>
                                                        <span className="text-xs font-mono text-slate-500 whitespace-nowrap bg-slate-950/30 px-2 py-1 rounded">
                                                            {formatTimeframe(
                                                                role.timeframe,
                                                            )}
                                                        </span>
                                                    </div>

                                                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
                                                        {role.type && (
                                                            <span className="flex items-center gap-1.5">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                                                                {role.type}
                                                            </span>
                                                        )}
                                                        {role.location && (
                                                            <span className="flex items-center gap-1.5">
                                                                <svg
                                                                    className="w-3.5 h-3.5 text-slate-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            1.5
                                                                        }
                                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                    />
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            1.5
                                                                        }
                                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                    />
                                                                </svg>
                                                                {role.location}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {role.description && (
                                                        <p className="mt-4 text-sm leading-relaxed text-slate-400/90 max-w-2xl">
                                                            {role.description}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Spotlight>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
