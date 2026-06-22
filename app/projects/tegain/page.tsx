import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Tegain — Company & Community Hub | Abhijith P A",
    description:
        "Tegain: Company and community platform built by Abhijith P A. Brand site with community engagement and recruitment surfaces. Built with Next.js, Tailwind & Zustand.",
    keywords: [
        "Tegain",
        "Tegain developer",
        "Tegain website",
        "Abhijith P A Tegain",
        "Community platform developer",
        "Company website Next.js",
        "Recruitment platform React",
        "CRM developer India",
        "SEO optimized website",
        "Core Web Vitals optimization",
        "Abi Solutions community platform",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: { canonical: "https://abisolutions.online/projects/tegain" },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/projects/tegain",
        siteName: "Abi Solutions",
        title: "Tegain — Community Platform by Abhijith P A",
        description:
            "Company & community hub with recruitment surfaces. Next.js, Tailwind & Zustand.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Tegain — Community Platform by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tegain — Community Hub | Abhijith P A",
        description:
            "Brand site with community engagement & recruitment. Next.js & Tailwind.",
        images: ["/profile.jpg"],
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
    "@type": "WebSite",
    name: "Tegain",
    description:
        "Company and community hub with recruitment surfaces tuned for SEO and Core Web Vitals.",
    url: "https://tegain.com/",
    creator: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
    },
};

export default function TegainPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="tegain" index="04" label="Project">
                    <article className="mx-auto max-w-4xl">
                        <div className="mb-12">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                CRM · 2024
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                                Tegain
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70 lg:text-xl">
                                A company and community hub with engagement and
                                recruitment surfaces, tuned for SEO and Core Web
                                Vitals.
                            </p>
                            <a
                                href="https://tegain.com/"
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
                                    "Next.js",
                                    "Tailwind CSS",
                                    "Zustand",
                                    "SEO",
                                    "Core Web Vitals",
                                    "REST APIs",
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
                                    Achieving top Core Web Vitals scores while
                                    maintaining rich interactive content.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Building SEO-first architecture with
                                    server-side rendering for recruitment pages.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Balancing community engagement features with
                                    fast page loads.
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
                                        metric: "95+",
                                        label: "Lighthouse score",
                                    },
                                    {
                                        metric: "SEO",
                                        label: "Optimized structure",
                                    },
                                    {
                                        metric: "Fast",
                                        label: "Sub-second loads",
                                    },
                                    {
                                        metric: "Live",
                                        label: "Production since 2024",
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
                                Led the frontend development focusing on SEO
                                architecture, performance optimization, and
                                recruitment page flows. Implemented server-side
                                rendering strategies and achieved consistent
                                green Core Web Vitals scores.
                            </p>
                        </section>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
