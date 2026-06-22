import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Talrop ERP — Enterprise Resource Planning | Abhijith P A",
    description:
        "Talrop ERP: A full-featured enterprise resource planning platform built by Abhijith P A. Covers inventory, finance, HR with real-time insights. Built with Next.js, TypeScript, Tailwind & Zustand.",
    keywords: [
        "Talrop ERP",
        "Talrop ERP developer",
        "Abhijith P A Talrop",
        "ERP platform Next.js",
        "Enterprise resource planning React",
        "Talrop developer",
        "ERP Developer India",
        "Next.js ERP system",
        "Inventory management system",
        "Finance module ERP",
        "HR management platform",
        "Abi Solutions project",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/projects/talrop-erp",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/projects/talrop-erp",
        siteName: "Abi Solutions",
        title: "Talrop ERP — Built by Abhijith P A | Next.js, TypeScript",
        description:
            "Enterprise resource planning platform with inventory, finance & HR modules. Real-time insights and granular permissions.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Talrop ERP — Enterprise Resource Planning by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Talrop ERP — Abhijith P A",
        description:
            "Full-featured ERP with inventory, finance & HR. Built with Next.js, TypeScript & Zustand.",
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
    "@type": "WebApplication",
    name: "Talrop ERP",
    description:
        "Enterprise resource planning platform covering inventory, finance, and HR with real-time insights, granular permissions, and a unified design language.",
    url: "https://erp.talrop.com/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    creator: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
    },
    offers: {
        "@type": "Offer",
        category: "Enterprise Software",
    },
};

export default function TalropErpPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="talrop-erp" index="01" label="Project">
                    <article className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-12">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                Featured Project · 2025
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                                Talrop ERP
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70 lg:text-xl">
                                A full-featured enterprise resource planning
                                platform covering inventory, finance, and HR —
                                built for the Talrop product ecosystem.
                            </p>
                            <a
                                href="https://erp.talrop.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:underline"
                            >
                                Visit Live Site →
                            </a>
                        </div>

                        {/* Tech Stack */}
                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Tailwind CSS",
                                    "Zustand",
                                    "Recharts",
                                    "REST APIs",
                                    "Role-Based Access",
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

                        {/* Challenges */}
                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                Challenges
                            </h2>
                            <ul className="space-y-3 text-base leading-relaxed text-ink/70">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Managing complex state across multiple
                                    modules (inventory, finance, HR) with
                                    real-time data synchronization.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Implementing granular role-based permissions
                                    that scale across teams and departments.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Designing a unified design language that
                                    remains consistent across 15+ modules.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Performance optimization for dashboards
                                    rendering thousands of data points with
                                    Recharts.
                                </li>
                            </ul>
                        </section>

                        {/* Results */}
                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                Results
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        metric: "15+",
                                        label: "Modules shipped",
                                    },
                                    {
                                        metric: "100+",
                                        label: "Daily active users",
                                    },
                                    {
                                        metric: "60%",
                                        label: "Reduced manual workflows",
                                    },
                                    {
                                        metric: "Sub-2s",
                                        label: "Dashboard load time",
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

                        {/* My Role */}
                        <section className="mb-12">
                            <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                                My Role
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                Led the front-end architecture and UI
                                development. Designed the component system,
                                implemented state management with Zustand, built
                                reusable chart components, and established the
                                design tokens used across all modules. Worked
                                closely with backend engineers on API contracts
                                and with designers on the interaction language.
                            </p>
                        </section>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
