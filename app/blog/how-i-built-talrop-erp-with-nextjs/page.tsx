import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "How I Built Talrop ERP with Next.js & TypeScript",
    description:
        "A deep dive into building the Talrop ERP frontend with Next.js, TypeScript, Zustand & Recharts. Architecture decisions, state management, and performance optimization by Abhijith P A.",
    keywords: [
        "Talrop ERP",
        "Next.js ERP",
        "Build ERP with React",
        "TypeScript ERP development",
        "Zustand state management",
        "Recharts dashboard",
        "Enterprise React application",
        "Abhijith P A Talrop",
        "ERP frontend architecture",
        "Next.js enterprise app",
        "Full Stack Developer blog",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical:
            "https://abisolutions.online/blog/how-i-built-talrop-erp-with-nextjs",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/blog/how-i-built-talrop-erp-with-nextjs",
        siteName: "Abi Solutions",
        title: "How I Built Talrop ERP with Next.js & TypeScript | Abhijith P A",
        description:
            "Architecture, state management & performance strategies for a 15+ module ERP platform.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Talrop ERP Architecture — Abhijith P A",
                type: "image/jpeg",
            },
        ],
        publishedTime: "2026-06-20T00:00:00.000Z",
        authors: ["Abhijith P A"],
    },
    twitter: {
        card: "summary_large_image",
        title: "How I Built Talrop ERP with Next.js",
        description:
            "Architecture decisions & performance optimization for a 15+ module ERP.",
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
    "@type": "BlogPosting",
    headline: "How I Built Talrop ERP with Next.js & TypeScript",
    description:
        "A deep dive into building the Talrop ERP frontend with Next.js, TypeScript, Zustand & Recharts.",
    url: "https://abisolutions.online/blog/how-i-built-talrop-erp-with-nextjs",
    datePublished: "2026-06-20",
    dateModified: "2026-06-20",
    author: {
        "@type": "Person",
        name: "Abhijith P A",
        url: "https://abisolutions.online",
    },
    publisher: {
        "@type": "Person",
        name: "Abhijith P A",
        url: "https://abisolutions.online",
    },
    keywords: ["Next.js", "TypeScript", "ERP", "Zustand", "Recharts", "Talrop"],
};

export default function BlogPost1() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="blog-post" index="01" label="Blog">
                    <article className="prose-custom mx-auto max-w-3xl">
                        <header className="mb-10">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                June 20, 2026 · 8 min read
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold leading-tight tracking-tight text-ink">
                                How I Built Talrop ERP with Next.js & TypeScript
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70">
                                Building an enterprise resource planning system
                                with 15+ modules taught me more about React
                                architecture than any tutorial ever could.
                                Here&apos;s what I learned.
                            </p>
                        </header>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                The Challenge
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                Talrop needed an ERP that unified inventory
                                management, financial tracking, and HR
                                operations into a single platform. The frontend
                                had to handle complex data relationships,
                                real-time updates, and granular role-based
                                permissions — all while remaining fast and
                                maintainable.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Architecture Decisions
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-ink/70">
                                I chose{" "}
                                <strong className="text-ink">Next.js</strong>{" "}
                                for its hybrid rendering model. Some pages need
                                SSR for SEO (public-facing), while internal
                                dashboards use client-side rendering for
                                interactivity. This split let us optimize for
                                both use cases.
                            </p>
                            <p className="mb-4 text-base leading-relaxed text-ink/70">
                                <strong className="text-ink">TypeScript</strong>{" "}
                                was non-negotiable for an ERP. With 15+ modules
                                sharing data types, strict typing caught
                                countless bugs before they reached production.
                                We created a shared types package that all
                                modules imported from.
                            </p>
                            <p className="text-base leading-relaxed text-ink/70">
                                <strong className="text-ink">Zustand</strong>{" "}
                                over Redux was a deliberate choice. ERP modules
                                are mostly independent — each manages its own
                                state slice. Zustand&apos;s minimal API and lack
                                of boilerplate made it faster to develop and
                                easier to maintain than Redux&apos;s
                                action/reducer ceremony.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Performance at Scale
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-ink/70">
                                The finance dashboard renders thousands of data
                                points with Recharts. We solved performance
                                issues with:
                            </p>
                            <ul className="space-y-2 text-base leading-relaxed text-ink/70">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Data windowing — only render visible chart
                                    segments
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Memoization of computed values with useMemo
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Lazy loading of module bundles with dynamic
                                    imports
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    API response caching with
                                    stale-while-revalidate
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Role-Based Access Control
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                The permission system was the hardest part. We
                                built a custom hook that checks permissions at
                                the component level — so entire sections
                                conditionally render based on user roles. The
                                backend sends a permissions map on login, and
                                the frontend caches it in Zustand for instant
                                access checks without additional API calls.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Key Takeaways
                            </h2>
                            <ul className="space-y-2 text-base leading-relaxed text-ink/70">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    TypeScript pays for itself in enterprise
                                    apps — the upfront cost is nothing compared
                                    to bugs it prevents
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Zustand scales beautifully for modular
                                    architectures
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Design systems are mandatory for
                                    multi-module products
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Performance optimization should be built in
                                    from day one, not bolted on later
                                </li>
                            </ul>
                        </section>

                        <footer className="mt-12 border-t border-line pt-6">
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/40">
                                Written by Abhijith P A · Frontend Engineer at
                                Algobiz · Ex-Talrop
                            </p>
                        </footer>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
