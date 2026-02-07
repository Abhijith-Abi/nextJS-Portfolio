import { SectionWrapper } from "./SectionWrapper";

type Project = {
    name: string;
    description: string;
    tech: string[];
    live?: string;
};

const projects: Project[] = [
    {
        name: "HOSFACE - Healthcare Infrastructure Platform",
        description:
            "Specialized healthcare platform facilitating clinic setups with a structured 4-step development model connecting doctors and investors.",
        tech: ["Next.js", "Tailwind CSS", "React"],
        live: "https://www.hosface.com/",
    },
    {
        name: "STEYP - Coding Learning Platform",
        description:
            "Interactive platform for video-based coding education with structured courses and real-time progress tracking.",
        tech: ["React", "Styled Components", "Redux"],
        live: "https://steyp.com/",
    },
    {
        name: "TEGAIN - Company & Community Hub",
        description:
            "Company showcase website with community engagement and recruitment features, optimized for SEO and performance.",
        tech: ["Next.js", "Tailwind CSS", "Zustand"],
        live: "https://tegain.com/",
    },
    {
        name: "SOMANS - Travel Management Platform",
        description:
            "Automated travel management solution for bookings, approvals, and analytics across HR and operations.",
        tech: ["Next.js", "Tailwind CSS", "Zustand"],
        live: "https://www.somansleisuretours.com/",
    },
    {
        name: "ERP System",
        description:
            "Comprehensive ERP interface for managing inventory, finance, and HR with real-time insights and role-based access.",
        tech: ["Next.js", "Tailwind CSS", "Zustand"],
        live: "https://erp.talrop.com/",
    },
];

export function ProjectsSection() {
    return (
        <SectionWrapper id="projects">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Projects
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        Selected work
                    </h2>
                </div>
                <p className="max-w-xl text-sm text-muted sm:text-base md:text-right">
                    A curated set of products and platforms that showcase how I
                    approach structure, UX, and performance for real-world web
                    applications.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.name}
                        className="card-surface group flex flex-col justify-between p-5 transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-lg hover:shadow-emerald-500/20 sm:p-6"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-slate-50">
                                {project.name}
                            </h3>
                            <p className="mt-2 text-sm text-muted">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                                {project.tech.map((stack) => (
                                    <span
                                        key={stack}
                                        className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-100"
                                    >
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3 text-xs">
                            <a
                                href={project.live ?? "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-950 transition group-hover:bg-accent group-hover:text-slate-950"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </SectionWrapper>
    );
}
