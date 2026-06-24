import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Resume — Abhijith P A | Full Stack Developer Kerala",
    description:
        "Resume of Abhijith P A (Abi Solutions). Full Stack Developer with 3+ years at Algobiz, Talrop & Steyp. React, Next.js, Django, AWS, TypeScript. Available for hire from Kerala, India.",
    keywords: [
        "Abhijith P A resume",
        "Abhijith PA CV",
        "Abi Solutions resume",
        "Full Stack Developer resume",
        "React Developer resume Kerala",
        "Next.js Developer CV India",
        "Django Developer resume",
        "AWS Developer CV",
        "Algobiz developer resume",
        "Talrop developer CV",
        "Steyp developer resume",
        "Frontend Engineer resume India",
        "Hire Abhijith P A",
        "Software Engineer Kerala CV",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: { canonical: "https://abisolutions.online/resume" },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://abisolutions.online/resume",
        siteName: "Abi Solutions",
        title: "Resume — Abhijith P A | Full Stack Developer",
        description:
            "3+ years at Algobiz, Talrop & Steyp. React, Next.js, Django, AWS specialist from Kerala.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A Resume — Full Stack Developer",
                type: "image/jpeg",
            },
        ],
        firstName: "Abhijith",
        lastName: "P A",
    },
    twitter: {
        card: "summary_large_image",
        title: "Resume — Abhijith P A | Full Stack Developer",
        description:
            "React, Next.js, Django, AWS. 3+ years at Algobiz, Talrop & Steyp. Kerala, India.",
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
    "@type": "Person",
    name: "Abhijith P A",
    alternateName: ["Abi", "Abhijith PA", "AP Abhijith", "Abi Solutions"],
    url: "https://abisolutions.online",
    jobTitle: "Full Stack Developer",
    worksFor: { "@type": "Organization", name: "Algobiz" },
    alumniOf: [
        { "@type": "Organization", name: "Talrop" },
        { "@type": "Organization", name: "Steyp" },
    ],
    knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Django",
        "Python",
        "AWS",
        "Node.js",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
        "Three.js",
        "PostgreSQL",
        "Firebase",
        "Docker",
    ],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kerala",
        addressCountry: "IN",
    },
    email: "abhijithabhijith1999@gmail.com",
    telephone: "+919961316468",
    sameAs: [
        "https://github.com/Abhijith-Abi",
        "https://www.linkedin.com/in/abhijith-pa/",
    ],
};

export default function ResumePage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="resume" index="08" label="Resume">
                    <article className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-12 border-b border-line pb-8">
                            <h1 className="font-display text-[clamp(2.2rem,7vw,4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                                Abhijith P A
                            </h1>
                            <p className="mt-3 text-lg font-medium text-accent">
                                Full Stack Developer
                            </p>
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-ink/60">
                                <span>Kerala, India</span>
                                <a
                                    href="mailto:abhijithabhijith1999@gmail.com"
                                    className="hover:text-accent"
                                >
                                    abhijithabhijith1999@gmail.com
                                </a>
                                <a
                                    href="tel:+919961316468"
                                    className="hover:text-accent"
                                >
                                    +91 99613 16468
                                </a>
                                <a
                                    href="https://abisolutions.online"
                                    className="hover:text-accent"
                                >
                                    abisolutions.online
                                </a>
                                <a
                                    href="https://github.com/Abhijith-Abi"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-accent"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abhijith-pa/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-accent"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Summary */}
                        <section className="mb-10">
                            <h2 className="mb-3 font-display text-xl font-bold uppercase tracking-tight text-ink">
                                Summary
                            </h2>
                            <p className="text-base leading-relaxed text-ink/70">
                                Full Stack Developer with 3+ years of experience
                                building production-grade web applications
                                across healthcare, ERP, e-learning, travel, and
                                AI domains. Specializing in React, Next.js,
                                TypeScript, Django, and AWS. Passionate about
                                motion-rich interfaces, scalable architecture,
                                and developer experience. Currently Frontend
                                Engineer at Algobiz, formerly at Talrop and
                                Steyp.
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="mb-10">
                            <h2 className="mb-5 font-display text-xl font-bold uppercase tracking-tight text-ink">
                                Experience
                            </h2>
                            <div className="space-y-8">
                                <div className="border-l-2 border-accent pl-5">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="font-display text-lg font-bold text-ink">
                                            Frontend Engineer
                                        </h3>
                                        <span className="font-mono text-[11px] text-ink/50">
                                            Jan 2026 – Present
                                        </span>
                                    </div>
                                    <p className="mt-1 font-medium text-accent">
                                        Algobiz
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                                        <li>
                                            • Building production-grade
                                            interfaces and AI-leaning workflows
                                        </li>
                                        <li>
                                            • Driving UI architecture, motion
                                            language, and developer experience
                                        </li>
                                        <li>
                                            • Tech: Next.js, TypeScript,
                                            Tailwind CSS, GSAP, Framer Motion
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-line pl-5">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="font-display text-lg font-bold text-ink">
                                            UI Engineer · Level 2
                                        </h3>
                                        <span className="font-mono text-[11px] text-ink/50">
                                            May 2025 – Dec 2025
                                        </span>
                                    </div>
                                    <p className="mt-1 font-medium text-ink/80">
                                        Talrop
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                                        <li>
                                            • Owned UI across product surfaces
                                            and refactored shared components
                                        </li>
                                        <li>
                                            • Mentored on Next.js patterns
                                            inside the Talrop product suite
                                        </li>
                                        <li>
                                            • Tightened performance and
                                            established component conventions
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-line pl-5">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="font-display text-lg font-bold text-ink">
                                            Software Engineer · Next.js
                                            Developer
                                        </h3>
                                        <span className="font-mono text-[11px] text-ink/50">
                                            Oct 2022 – Apr 2025
                                        </span>
                                    </div>
                                    <p className="mt-1 font-medium text-ink/80">
                                        Steyp
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                                        <li>
                                            • Led frontend builds for Hosface,
                                            Tegain, Talrop ERP, and Somans
                                        </li>
                                        <li>
                                            • Set up component conventions
                                            adopted across the engineering team
                                        </li>
                                        <li>
                                            • Tech: React, Next.js, TypeScript,
                                            Styled Components, Redux, Tailwind
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-line pl-5">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="font-display text-lg font-bold text-ink">
                                            Software Engineer · Intern
                                        </h3>
                                        <span className="font-mono text-[11px] text-ink/50">
                                            Apr 2022 – Oct 2022
                                        </span>
                                    </div>
                                    <p className="mt-1 font-medium text-ink/80">
                                        Steyp
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                                        <li>
                                            • Started with React, Redux, and
                                            Styled Components
                                        </li>
                                        <li>
                                            • Learned product fundamentals and
                                            converted to full-time
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="mb-10">
                            <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight text-ink">
                                Skills
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                                        Frontend
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            "React",
                                            "Next.js",
                                            "TypeScript",
                                            "JavaScript",
                                            "Tailwind CSS",
                                            "Framer Motion",
                                            "GSAP",
                                            "Three.js",
                                            "Redux",
                                            "Zustand",
                                        ].map((s) => (
                                            <span
                                                key={s}
                                                className="inline-flex rounded-md border border-line bg-background px-2 py-0.5 font-mono text-[11px] text-ink/80"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                                        Backend & Cloud
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            "Django",
                                            "Python",
                                            "Node.js",
                                            "REST APIs",
                                            "PostgreSQL",
                                            "Firebase",
                                            "AWS",
                                            "Docker",
                                            "CI/CD",
                                        ].map((s) => (
                                            <span
                                                key={s}
                                                className="inline-flex rounded-md border border-line bg-background px-2 py-0.5 font-mono text-[11px] text-ink/80"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="mb-10">
                            <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight text-ink">
                                Key Projects
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        name: "Talrop ERP",
                                        desc: "Enterprise resource planning — inventory, finance, HR",
                                        url: "https://erp.talrop.com/",
                                    },
                                    {
                                        name: "Hosface",
                                        desc: "Healthcare platform for doctors & investors",
                                        url: "https://www.hosface.com/",
                                    },
                                    {
                                        name: "Steyp",
                                        desc: "Video-led coding education platform",
                                        url: "https://steyp.com/",
                                    },
                                    {
                                        name: "Tegain",
                                        desc: "Company & community hub with SEO focus",
                                        url: "https://tegain.com/",
                                    },
                                    {
                                        name: "Somans",
                                        desc: "Travel management with role-based dashboards",
                                        url: "https://www.somansleisuretours.com/",
                                    },
                                ].map((p) => (
                                    <div
                                        key={p.name}
                                        className="flex items-baseline justify-between gap-4 border-b border-line/50 pb-3"
                                    >
                                        <div>
                                            <span className="font-display font-bold text-ink">
                                                {p.name}
                                            </span>
                                            <span className="ml-2 text-sm text-ink/60">
                                                — {p.desc}
                                            </span>
                                        </div>
                                        <a
                                            href={p.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="shrink-0 font-mono text-[10px] text-accent hover:underline"
                                        >
                                            Live ↗
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="mb-10">
                            <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight text-ink">
                                Education
                            </h2>
                            <div className="border-l-2 border-line pl-5">
                                <h3 className="font-display text-lg font-bold text-ink">
                                    Self-Taught + Steyp Program
                                </h3>
                                <p className="mt-1 text-sm text-ink/60">
                                    Continuous learning through building
                                    production software since 2022
                                </p>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
                            <p className="font-display text-lg font-bold text-ink">
                                Available for new opportunities
                            </p>
                            <p className="mt-2 text-sm text-ink/60">
                                Remote-friendly · Full-time or Freelance
                            </p>
                            <a
                                href="/contact"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90"
                            >
                                Get in Touch →
                            </a>
                        </div>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
