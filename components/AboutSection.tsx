import { SectionWrapper } from "./SectionWrapper";

export function AboutSection() {
    return (
        <SectionWrapper id="about">
            <div className="space-y-6">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        About
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        A frontend engineer focused on clean, performant
                        experiences.
                    </h2>
                </div>
                <div className="space-y-3 text-sm text-muted sm:text-base max-w-3xl">
                    <p>
                        I&apos;m Abhijith, a frontend developer with 3+ years of
                        experience crafting immersive digital experiences. I
                        specialize in turning product ideas and UI designs into
                        robust, production-ready web applications using React,
                        Next.js, and modern styling systems like Tailwind CSS
                        and Material UI.
                    </p>
                    <p>
                        I care deeply about micro-interactions, smooth
                        performance, and accessibility, ensuring that every
                        interface not only looks great but also feels intuitive
                        and responsive across devices.
                    </p>
                </div>

                <div className="mt-2 grid gap-4 text-sm sm:grid-cols-3">
                    <div className="card-surface p-4">
                        <p className="text-xs font-semibold text-slate-400">
                            Experience
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-50">
                            3+ years
                        </p>
                        <p className="mt-1 text-xs text-muted">
                            Frontend engineering with React &amp; Next.js
                        </p>
                    </div>
                    <div className="card-surface p-4">
                        <p className="text-xs font-semibold text-slate-400">
                            Core stack
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-50">
                            React · Next.js · Tailwind
                        </p>
                        <p className="mt-1 text-xs text-muted">
                            Building scalable, component-driven UIs
                        </p>
                    </div>
                    <div className="card-surface p-4">
                        <p className="text-xs font-semibold text-slate-400">
                            Collaboration
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-50">
                            Product-focused
                        </p>
                        <p className="mt-1 text-xs text-muted">
                            Working closely with designers &amp; backend teams
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
