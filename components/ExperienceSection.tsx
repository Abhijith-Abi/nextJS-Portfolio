"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SectionWrapper } from "./SectionWrapper";
import { Spotlight } from "./ui/Spotlight";

type Role = {
    title: string;
    timeframe: string;
    type?: string;
    description?: string;
    location?: string;
};

type ExperienceItem = {
    company: string;
    totalDuration?: string;
    roles: Role[];
    skills?: string[];
};

const experiences: ExperienceItem[] = [
    {
        company: "Talrop",
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
        totalDuration: "3 yrs 9 mos",
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

export function ExperienceSection() {
    const [activeExp, setActiveExp] = useState(experiences[0]);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        gsap.fromTo(
            contentRef.current,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
    }, [activeExp]);

    return (
        <SectionWrapper id="experience">
            <div className="mb-12 md:flex md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Experience
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        Where I&apos;ve Worked
                    </h2>
                </div>
                <div className="hidden h-px w-full max-w-xs bg-slate-800 md:block" />
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                {/* Sidebar / Tabs */}
                <div className="relative z-10 flex min-w-[200px] overflow-x-auto md:flex-col md:overflow-visible">
                    {experiences.map((exp) => (
                        <button
                            key={exp.company}
                            onClick={() => setActiveExp(exp)}
                            className={`group relative whitespace-nowrap px-5 py-3 text-left text-sm font-code transition-all md:px-6 md:py-4 ${
                                activeExp.company === exp.company
                                    ? "text-accent bg-accent/5 md:bg-transparent"
                                    : "text-slate-400 hover:text-slate-200"
                            }`}
                        >
                            <span
                                className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-md bg-accent transition-all duration-300 ${
                                    activeExp.company === exp.company
                                        ? "h-full opacity-100"
                                        : "h-0 opacity-0 group-hover:h-1/3 group-hover:opacity-50"
                                }`}
                            />
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 min-h-[400px]">
                    <Spotlight className="h-full p-6 md:p-8">
                        <div ref={contentRef} className="space-y-8">
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-xl font-medium text-slate-100">
                                        <span className="text-accent">
                                            {activeExp.company}
                                        </span>
                                    </h3>
                                    {activeExp.totalDuration && (
                                        <p className="mt-1 text-xs text-muted font-mono">
                                            {activeExp.totalDuration}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-10 border-l border-slate-800/60 pl-6 ml-2 relative">
                                {activeExp.roles.map((role, idx) => (
                                    <div key={idx} className="relative group">
                                        {/* Dot indicator */}
                                        <div
                                            className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-slate-700 bg-slate-900 transition-colors duration-300 group-hover:border-accent/50 ${
                                                idx === 0
                                                    ? "border-accent bg-accent/20"
                                                    : ""
                                            }`}
                                        />

                                        <h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                                            {role.title}
                                        </h4>
                                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
                                            <span className="text-accent/80">
                                                {role.timeframe}
                                            </span>
                                            {role.type && (
                                                <>
                                                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                                                    <span>{role.type}</span>
                                                </>
                                            )}
                                        </div>
                                        {role.location && (
                                            <p className="mt-1 text-xs text-slate-500">
                                                {role.location}
                                            </p>
                                        )}

                                        {role.description && (
                                            <p className="mt-4 text-sm text-muted leading-relaxed">
                                                {role.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {activeExp.skills && (
                                <div className="pt-6">
                                    <h5 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                        Technologies
                                    </h5>
                                    <ul className="flex flex-wrap gap-2">
                                        {activeExp.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                className="rounded-full bg-slate-800/50 border border-white/5 px-3 py-1 text-[11px] font-medium text-slate-300 transition hover:border-white/10 hover:bg-slate-800 hover:text-white"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Spotlight>
                </div>
            </div>
        </SectionWrapper>
    );
}
