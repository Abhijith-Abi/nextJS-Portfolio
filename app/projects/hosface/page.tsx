import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Hosface — Healthcare Platform | Abhijith P A",
    description:
        "Hosface: Healthcare infrastructure platform built by Abhijith P A. Pairing doctors and investors through a structured clinic-setup model. Built with Next.js, TypeScript & Tailwind CSS.",
    keywords: [
        "Hosface",
        "Hosface developer",
        "Hosface website",
        "Abhijith P A Hosface",
        "Healthcare platform developer",
        "Doctor investor platform",
        "Healthcare web application",
        "Next.js healthcare",
        "Medical platform React",
        "Clinic setup platform",
        "Abi Solutions healthcare",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/projects/hosface",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/projects/hosface",
        siteName: "Abi Solutions",
        title: "Hosface — Healthcare Platform by Abhijith P A",
        description:
            "Healthcare infrastructure pairing doctors and investors. Built with Next.js, TypeScript & Tailwind.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Hosface — Healthcare Platform by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hosface — Healthcare Platform | Abhijith P A",
        description:
            "Pairing doctors and investors through a clinic-setup model. Next.js & TypeScript.",
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
    name: "Hosface",
    description:
        "Healthcare infrastructure platform pairing doctors and investors through a structured four-step clinic-setup model.",
    url: "https://www.hosface.com/",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    creator: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
    },
};

export default function HosfacePage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="hosface" index="02" label="Project">
                    <article className="mx-auto max-w-4xl">
                        <div className="mb-12">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                Healthcare · 2024
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                                Hosface
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70 lg:text-xl">
                                A healthcare infrastructure platform pairing
                                doctors and investors through a structured
                                four-step clinic-setup model. Built marketing
                                surfaces, dashboards, and the complete onboarding
                                flow.
                            </p>
                            <a
                                href="https://www.hosface.com/"
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
                                    "TypeScript",
                                    "Tailwind CSS",
                                    "REST APIs",
                                    "Responsive Design",
                                    "SEO Optimization",
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
                                    Designing a multi-step onboarding flow that
                                    converts both doctors and investors with
                                    different requirements.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Building trust through clean, professional
                                    marketing pages for the healthcare domain.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Ensuring mobile-first responsive design for
                                    doctors accessing on-the-go.
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
                                        metric: "4-Step",
                                        label: "Clinic setup flow",
                                    },
                                    {
                                        metric: "100%",
                                        label: "Mobile responsive",
                                    },
                                    {
                                        metric: "90+",
                                        label: "Lighthouse score",
                                    },
                                    {
                                        metric: "Live",
                                        label: "Production deployment",
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
                                Built the marketing surfaces, investor dashboard,
                                and the complete doctor onboarding flow.
                                Implemented SEO best practices, optimized Core
                                Web Vitals, and ensured cross-device
                                compatibility.
                            </p>
                        </section>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
