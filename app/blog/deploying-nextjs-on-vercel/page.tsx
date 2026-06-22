import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Deploying Next.js on Vercel — Complete Guide 2026",
    description:
        "Step-by-step guide to deploying Next.js applications on Vercel. Custom domains, environment variables, CI/CD, performance optimization, and SEO by Abhijith P A.",
    keywords: [
        "Deploy Next.js Vercel",
        "Next.js deployment guide",
        "Vercel deployment tutorial",
        "Next.js production deployment",
        "Custom domain Vercel",
        "Vercel CI/CD",
        "Next.js SEO Vercel",
        "Vercel environment variables",
        "Abhijith P A Vercel",
        "Next.js developer guide",
        "Full Stack Developer tutorial",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical:
            "https://abisolutions.online/blog/deploying-nextjs-on-vercel",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/blog/deploying-nextjs-on-vercel",
        siteName: "Abi Solutions",
        title: "Deploying Next.js on Vercel — Complete Guide | Abhijith P A",
        description:
            "Custom domains, env vars, CI/CD & performance optimization for Next.js on Vercel.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Next.js Vercel Deployment Guide — Abhijith P A",
                type: "image/jpeg",
            },
        ],
        publishedTime: "2026-06-18T00:00:00.000Z",
        authors: ["Abhijith P A"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Deploying Next.js on Vercel — 2026 Guide",
        description:
            "Complete deployment guide with custom domains, CI/CD & performance tips.",
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
    headline: "Deploying Next.js on Vercel — Complete Guide 2026",
    description:
        "Step-by-step guide to deploying Next.js applications on Vercel with custom domains, CI/CD, and performance optimization.",
    url: "https://abisolutions.online/blog/deploying-nextjs-on-vercel",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
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
    keywords: ["Next.js", "Vercel", "Deployment", "CI/CD", "Custom Domain"],
};

export default function BlogPost2() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="blog-post" index="02" label="Blog">
                    <article className="prose-custom mx-auto max-w-3xl">
                        <header className="mb-10">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                June 18, 2026 · 6 min read
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold leading-tight tracking-tight text-ink">
                                Deploying Next.js on Vercel — Complete Guide
                                2026
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70">
                                After deploying 20+ Next.js apps on Vercel,
                                here&apos;s my production-ready workflow
                                covering everything from initial setup to
                                performance monitoring.
                            </p>
                        </header>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Why Vercel for Next.js
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                Vercel is built by the same team that creates
                                Next.js, so the integration is seamless. You get
                                automatic ISR, edge functions, and zero-config
                                deployments. For production Next.js apps,
                                it&apos;s the path of least resistance to
                                shipping fast.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Step 1: Project Setup
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-ink/70">
                                Connect your GitHub repo to Vercel. Every push
                                to main triggers a production deployment.
                                Feature branches get preview URLs automatically
                                — this is your free staging environment.
                            </p>
                            <p className="text-base leading-relaxed text-ink/70">
                                Set your framework preset to Next.js (usually
                                auto-detected). Vercel handles build commands,
                                output directory, and Node.js version for you.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Step 2: Environment Variables
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                Add your env vars in the Vercel dashboard under
                                Settings → Environment Variables. Use separate
                                values for Production, Preview, and Development.
                                Never commit secrets to your repo — Vercel
                                encrypts them at rest.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Step 3: Custom Domain
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-ink/70">
                                Add your domain in Project Settings → Domains.
                                Vercel provisions an SSL certificate
                                automatically. Point your DNS (A record or
                                CNAME) to Vercel&apos;s servers. For my
                                portfolio, I use a custom domain with automatic
                                HTTPS:
                            </p>
                            <div className="rounded-xl border border-line bg-background p-4 font-mono text-sm text-ink/80">
                                abisolutions.online → Vercel (A Record:
                                76.76.21.21)
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Step 4: Performance Optimization
                            </h2>
                            <ul className="space-y-2 text-base leading-relaxed text-ink/70">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Enable ISR for pages that change
                                    periodically
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Use next/image for automatic image
                                    optimization
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Add font display: swap to prevent FOIT
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Monitor Core Web Vitals in Vercel Analytics
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                                Step 5: SEO Checklist
                            </h2>
                            <ul className="space-y-2 text-base leading-relaxed text-ink/70">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Add sitemap.ts and robots.ts in your app
                                    directory
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Set metadataBase in your root layout
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Verify your domain in Google Search Console
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Submit your sitemap for indexing
                                </li>
                            </ul>
                        </section>

                        <footer className="mt-12 border-t border-line pt-6">
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/40">
                                Written by Abhijith P A · Frontend Engineer at
                                Algobiz
                            </p>
                        </footer>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
