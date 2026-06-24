import type { Metadata } from "next";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Somans Leisure Tours — Travel Platform | Abhijith P A",
    description:
        "Somans: Travel management platform built by Abhijith P A. Bookings, approvals, analytics with role-based dashboards. Built with Next.js, Tailwind & Zustand.",
    keywords: [
        "Somans Leisure Tours",
        "Somans developer",
        "Abhijith P A Somans",
        "Travel management platform",
        "Travel booking system",
        "Next.js travel platform",
        "Role-based dashboard",
        "Travel developer India",
        "Scheduling platform React",
        "Abi Solutions travel",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: { canonical: "https://abisolutions.online/projects/somans" },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://abisolutions.online/projects/somans",
        siteName: "Abi Solutions",
        title: "Somans — Travel Management Platform by Abhijith P A",
        description:
            "Bookings, approvals & analytics with role-based dashboards. Next.js & Tailwind.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Somans — Travel Platform by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Somans — Travel Platform | Abhijith P A",
        description:
            "Travel management with bookings, approvals & role-based dashboards.",
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
    name: "Somans Leisure Tours",
    description:
        "Travel management platform with bookings, approvals, and role-based analytics dashboards.",
    url: "https://www.somansleisuretours.com/",
    applicationCategory: "TravelApplication",
    operatingSystem: "Web",
    creator: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
    },
};

export default function SomansPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="somans" index="05" label="Project">
                    <article className="mx-auto max-w-4xl">
                        <div className="mb-12">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                                Travel · 2024
                            </p>
                            <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                                Somans
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-ink/70 lg:text-xl">
                                Internal tooling for bookings, approvals, and
                                analytics across HR and operations. Reduced
                                manual workflows with role-based dashboards.
                            </p>
                            <a
                                href="https://www.somansleisuretours.com/"
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
                                    "REST APIs",
                                    "Role-Based Access",
                                    "Analytics",
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
                                    Building approval workflows with multi-level
                                    authorization chains.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Creating role-based dashboards that show
                                    different data views per user level.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    Replacing manual booking processes with
                                    automated scheduling and notifications.
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
                                        metric: "70%",
                                        label: "Less manual work",
                                    },
                                    { metric: "3", label: "Role-based views" },
                                    {
                                        metric: "Real-time",
                                        label: "Booking analytics",
                                    },
                                    { metric: "Live", label: "In production" },
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
                                Built the complete frontend for the internal
                                booking and approval system. Designed role-based
                                dashboard layouts, implemented booking
                                workflows, and integrated analytics charts for
                                operations managers.
                            </p>
                        </section>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
