import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Abhijith P A — Full Stack Developer & AI Engineer | Kerala, India",
    description:
        "Abhijith P A (Abhijith PA, Abi) is a Full Stack Developer & AI Engineer at AlgoBiz from Wayanad, Kerala, India. React, Next.js, Django, Python, AWS specialist. ex-Steyp, Tegain, Ribos. Building ERP, SaaS, HRMS & AI automation.",
    keywords: [
        "Abhijith P A",
        "Abhijith PA",
        "Abhijith",
        "Abijith",
        "Abi",
        "Abhijith Developer",
        "Abhijith Software Engineer",
        "Abhijith Full Stack Developer",
        "Abhijith React Developer",
        "Abhijith Next.js Developer",
        "Abhijith Django Developer",
        "Abhijith AI Developer",
        "Abhijith Portfolio",
        "Abhijith Kerala",
        "Abhijith Wayanad",
        "Abhijith India",
        "Abhijith Tegain",
        "Abhijith AlgoBiz",
        "Abhijith Steyp",
        "Abhijith Ribos",
        "Full Stack Developer Kerala",
        "AI Engineer India",
    ],
    alternates: { canonical: "https://abisolutions.online/abhijith-pa" },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://abisolutions.online/abhijith-pa",
        siteName: "Abhijith P A — AlgoBiz",
        title: "Abhijith P A — Full Stack Developer & AI Engineer",
        description:
            "Full Stack Developer & AI Engineer at AlgoBiz. React, Next.js, Django, AWS. ex-Steyp, Tegain, Ribos. Kerala, India.",
        images: [{ url: "/profile.jpg", width: 800, height: 800, alt: "Abhijith P A - Senior Frontend Developer" }],
        firstName: "Abhijith",
        lastName: "P A",
    },
    twitter: {
        card: "summary_large_image",
        title: "Abhijith P A — Full Stack Developer & AI Engineer",
        description:
            "React, Next.js, Django, AWS. Developer at AlgoBiz. ex-Steyp, Tegain, Ribos.",
        images: ["/profile.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Abhijith P A — Full Stack Developer & AI Engineer",
    url: "https://abisolutions.online/abhijith-pa",
    mainEntity: {
        "@type": "Person",
        "@id": "https://abisolutions.online/#person",
        name: "Abhijith P A",
        alternateName: [
            "Abi",
            "Abhijith",
            "Abhijith PA",
            "Abijith",
            "AP Abhijith",
            "Abhijith Developer",
            "Abhijith Full Stack Developer",
        ],
        url: "https://abisolutions.online",
        image: "https://abisolutions.online/profile.jpg",
        jobTitle: "Full Stack Developer & AI Engineer",
        description:
            "Abhijith P A is a Full Stack Developer and AI Engineer at AlgoBiz from Wayanad, Kerala, India. He specializes in React, Next.js, Django, Python, AWS, and AI automation. He has worked at Steyp, Tegain, Ribos, Hosface, Somans Travels, and Spinwik.",
        worksFor: { "@type": "Organization", name: "AlgoBiz" },
        alumniOf: [
            { "@type": "Organization", name: "AlgoBiz", url: "https://algobiz.in/" },
            { "@type": "Organization", name: "Talrop", url: "https://www.talrop.com/" },
            { "@type": "Organization", name: "Steyp", url: "https://steyp.com/" },
            { "@type": "Organization", name: "Tegain", url: "https://tegain.com/" },
            { "@type": "Organization", name: "Ribos" },
            { "@type": "Organization", name: "Hosface" },
            { "@type": "Organization", name: "Somans Travels" },
            { "@type": "Organization", name: "Spinwik" },
        ],
        knowsAbout: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Django",
            "Python",
            "AWS",
            "Node.js",
            "PostgreSQL",
            "AI Automation",
            "ERP Development",
            "SaaS Development",
        ],
        sameAs: [
            "https://github.com/Abhijith-Abi",
            "https://www.linkedin.com/in/abhijith-pa/",
            "https://abisolutions.online",
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Wayanad",
            addressRegion: "Kerala",
            addressCountry: "IN",
        },
    },
};

export default function AbhijithPAPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="abhijith-pa">
                    <article className="mx-auto max-w-3xl">
                        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
                            Abhijith P A
                        </h1>
                        <p className="mt-2 font-mono text-sm uppercase tracking-wide text-accent">
                            Full Stack Developer & AI Engineer
                        </p>

                        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 lg:text-lg">
                            <p>
                                Abhijith P A (also known as Abhijith PA, Abi) is
                                a Full Stack Developer and AI Engineer currently
                                working at{" "}
                                <Link
                                    href="/algobiz"
                                    className="text-accent hover:underline"
                                >
                                    AlgoBiz
                                </Link>
                                , based in Wayanad, Kerala, India. He
                                specializes in building production-grade web
                                applications, ERP systems, SaaS platforms, and
                                AI automation products.
                            </p>
                            <p>
                                With over 4 years of professional experience,
                                Abhijith has worked at some of Kerala&apos;s
                                most notable tech companies including{" "}
                                <strong>Steyp</strong>,{" "}
                                <strong>Tegain</strong>, <strong>Ribos</strong>,{" "}
                                <strong>Hosface</strong>,{" "}
                                <strong>Somans Travels</strong>, and{" "}
                                <strong>Spinwik</strong>.
                            </p>
                            <p>
                                His core technology stack includes React.js,
                                Next.js, TypeScript, Django, Python, PostgreSQL,
                                AWS, Node.js, Tailwind CSS, and modern animation
                                libraries like GSAP and Framer Motion. He builds
                                everything from enterprise resource planning
                                (ERP) systems to AI-powered WhatsApp and
                                Telegram automation bots.
                            </p>
                        </div>

                        {/* Professional Photos Gallery */}
                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Professional Workspace & Media
                        </h2>
                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
                                <img
                                    src="/photos/abhi.jpg"
                                    alt="Abhijith P A - Senior Frontend Developer"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
                                <img
                                    src="/photos/abhijith-1.jpg"
                                    alt="Abhijith P A - Senior Frontend Developer"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
                                <img
                                    src="/photos/abhijith-3.jpg"
                                    alt="Abhijith P A - Senior Frontend Developer"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Experience
                        </h2>
                        <ul className="mt-5 space-y-4 border-l border-line pl-6">
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    AlgoBiz
                                </p>
                                <p className="text-sm text-ink/60">
                                    Full Stack Developer & AI Engineer · Present
                                </p>
                            </li>
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    Steyp
                                </p>
                                <p className="text-sm text-ink/60">
                                    Software Engineer · Coding Education
                                    Platform
                                </p>
                            </li>
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    Tegain
                                </p>
                                <p className="text-sm text-ink/60">
                                    Software Engineer · Community & Brand
                                    Platform
                                </p>
                            </li>
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    Ribos
                                </p>
                                <p className="text-sm text-ink/60">
                                    Developer · ERP & Enterprise Applications
                                </p>
                            </li>
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    Hosface
                                </p>
                                <p className="text-sm text-ink/60">
                                    Frontend Developer · Healthcare Platform
                                </p>
                            </li>
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    Somans Travels
                                </p>
                                <p className="text-sm text-ink/60">
                                    Developer · Travel Management Platform
                                </p>
                            </li>
                            <li>
                                <p className="font-display font-semibold text-ink">
                                    Spinwik
                                </p>
                                <p className="text-sm text-ink/60">
                                    Software Developer
                                </p>
                            </li>
                        </ul>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Technologies
                        </h2>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {[
                                "React.js",
                                "Next.js",
                                "TypeScript",
                                "Django",
                                "Python",
                                "PostgreSQL",
                                "AWS",
                                "Node.js",
                                "Tailwind CSS",
                                "GSAP",
                                "Framer Motion",
                                "Three.js",
                                "Firebase",
                                "Docker",
                                "REST APIs",
                                "AI / LLM",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs text-ink/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Projects
                        </h2>
                        <div className="mt-5 space-y-3 text-base text-ink/75">
                            <p>
                                <strong>Enterprise ERP</strong> — Enterprise
                                resource planning system with inventory, finance
                                & HR modules.
                            </p>
                            <p>
                                <strong>HOSFACE</strong> — Healthcare platform
                                connecting doctors and investors.
                            </p>
                            <p>
                                <strong>Finwage</strong> — Payroll management &
                                HRMS with attendance tracking.
                            </p>
                            <p>
                                <strong>STEYP</strong> — Coding education
                                platform with structured learning tracks.
                            </p>
                            <p>
                                <strong>Tegain</strong> — Community hub &
                                recruitment platform.
                            </p>
                            <p>
                                <strong>Somans Travels</strong> — Travel booking
                                & operations management.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-3">
                            <Link
                                href="/projects"
                                className="btn-primary rounded-lg px-5 py-2.5 text-sm font-semibold"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-ghost rounded-lg px-5 py-2.5 text-sm font-medium"
                            >
                                Contact Abhijith
                            </Link>
                        </div>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
