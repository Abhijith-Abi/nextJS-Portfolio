"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SectionWrapper } from "./SectionWrapper";
import RetroGrid from "./ui/RetroGrid";

const skillsData = [
    {
        category: "Frontend Core",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
        ],
    },
    {
        category: "Backend & Cloud",
        items: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "Firebase",
            "AWS",
            "Docker",
        ],
    },
    {
        category: "Tools & Design",
        items: ["Git", "Figma", "Redux", "GSAP", "Jest", "CI/CD"],
    },
];

export function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".glass-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative overflow-hidden py-24 sm:py-32" id="skills">
            {/* Background Grid */}
            <RetroGrid className="dark:opacity-20" />

            <SectionWrapper id="skills-content" className="relative z-10">
                <div className="mb-16 text-center">
                    <p className="mx-auto mb-4 w-fit rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-[0_0_10px_1px_rgba(34,197,94,0.2)]">
                        Technical Arsenal
                    </p>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 sm:text-5xl">
                        Built for the Future.
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        I leverage a modern, full-stack toolkit to build
                        scalable applications that perform at the speed of
                        thought.
                    </p>
                </div>

                <div ref={containerRef} className="grid gap-6 md:grid-cols-3">
                    {skillsData.map((group) => (
                        <div
                            key={group.category}
                            className="glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10"
                        >
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-all group-hover:bg-accent/30" />

                            <h3 className="relative mb-6 text-xl font-semibold text-slate-100">
                                {group.category}
                            </h3>

                            <div className="relative flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="cursor-default rounded-md border border-white/5 bg-black/20 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
