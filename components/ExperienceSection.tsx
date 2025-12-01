import { SectionWrapper } from "./SectionWrapper";

type ExperienceItem = {
    role: string;
    company: string;
    timeframe: string;
    description: string;
};

const experiences: ExperienceItem[] = [
    {
        role: "Software Engineer",
        company: "Steyp Private Limited",
        timeframe: "Jun 2022 – Nov 2025",
        description:
            "Developed and maintained user-facing features with React and Next.js, collaborated with backend teams on RESTful API integrations, and focused on performance optimizations like code-splitting and lazy loading.",
    },
];

export function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Experience
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        Journey so far
                    </h2>
                </div>
                <p className="max-w-xl text-sm text-muted sm:text-base md:text-right">
                    From education platforms to internal tools, I&apos;ve
                    shipped production features that balance UX, performance,
                    and maintainability.
                </p>
            </div>

            <div className="relative mx-auto max-w-3xl">
                <div className="absolute left-4 top-0 h-full w-px bg-slate-800 sm:left-1/2" />
                <ul className="space-y-8">
                    {experiences.map((exp, index) => (
                        <li
                            key={exp.company}
                            className="relative flex flex-col gap-3 sm:flex-row sm:gap-6"
                        >
                            <div className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border border-emerald-300 bg-accent sm:left-1/2" />

                            <div className="sm:w-1/2 sm:text-right">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    {exp.timeframe}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-50">
                                    {exp.company}
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-0 sm:w-1/2">
                                <div className="card-surface p-4">
                                    <p className="text-sm font-semibold text-slate-50">
                                        {exp.role}
                                    </p>
                                    <p className="mt-2 text-xs text-muted">
                                        {exp.description}
                                    </p>
                                    <p className="mt-3 text-[11px] text-slate-400">
                                        Key focus: React · Next.js · REST APIs ·
                                        Performance · Testing
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}
