import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Steyp — Coding Education Platform | Abhijith P A",
    description:
        "Steyp: Video-led coding education platform built by Abhijith P A. Structured learning tracks, exercises, and progress tracking. Built with React, Styled Components & Redux.",
    keywords: [
        "Steyp",
        "Steyp platform",
        "Steyp developer",
        "Steyp website",
        "Abhijith P A Steyp",
        "Coding education platform",
        "E-learning developer",
        "React education platform",
        "Online learning React",
        "Video learning platform",
        "Steyp coding platform",
        "Abi Solutions education",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/projects/steyp",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/projects/steyp",
        siteName: "Abi Solutions",
        title: "Steyp — Coding Education Platform by Abhijith P A",
        description:
            "Video-led coding education with structured tracks & progress tracking. Built with React & Redux.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Steyp — Coding Education Platform by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Steyp — Education Platform | Abhijith P A",
        description:
            "Coding education with video tracks & exercises. React, Redux & Styled Components.",
        images: ["/og-image.jpg"],
        creator: "@abhijith",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Steyp",
    description:
        "Video-led coding education platform with structured tracks, exercises, and progress tracking.",
    url: "https://steyp.com/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    creator: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
    },
};

export default function SteypPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="steyp" index="03" label="Project">
                    <article className="mx-auto max-w-4xl">
                        <div className="mb-12">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                E-Learning · 2023
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                                Steyp
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70 lg:text-xl">
                                A video-led coding education platform with
                                structured learning tracks, hands-on exercises,
                                and detailed progress tracking for students.
                            </p>
                            <a
                                href="https://steyp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:underline"
                            >
                                Visit Live Site →
                            </a>
                        </div>

                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "Styled Components",
                                    "Redux",
                                    "REST APIs",
                                    "Video Streaming",
                                    "Progress Tracking",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center rounded-md border border-line bg-background px-3 py-1.5 font-mono text-[12px] text-ink/85"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                Challenges
                            </h2>
                            <ul className="space-y-3 text-base leading-relaxed text-ink/70">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Building a video player with progress
                                    tracking that syncs across devices and
                                    sessions.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Structuring learning paths with prerequisite
                                    gates and achievement unlocks.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Handling complex Redux state for course
                                    navigation and user progress.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                Results
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        metric: "1000+",
                                        label: "Active learners",
                                    },
                                    {
                                        metric: "50+",
                                        label: "Structured courses",
                                    },
                                    {
                                        metric: "Video",
                                        label: "Led instruction",
                                    },
                                    {
                                        metric: "Live",
                                        label: "Production since 2023",
                                    },
                                ].map((r) => (
                                    <div
                                        key={r.label}
                                        className="surface rounded-2xl p-5"
                                    >
                                        <p className="font-display text-3xl font-extrabold text-accent">
                                            {r.metric}
                                        </p>
                                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/50">
                                            {r.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                My Role
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                Built the student-facing UI including video
                                player, course navigation, progress dashboards,
                                and exercise interfaces. This was my first major
                                production project where I learned React
                                patterns, state management with Redux, and
                                component architecture at scale.
                            </p>
                        </section>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
