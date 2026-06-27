import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AlgoBiz — Software Development & AI Engineering Company",
    description:
        "AlgoBiz (Algobiz LLP, AlgoBiz Technologies) is a software development company from Kerala, India. Full Stack Development, AI Engineering, ERP Systems, SaaS, HRMS, WhatsApp & Telegram Automation. Developer: Abhijith P A.",
    keywords: [
        "AlgoBiz",
        "Algobiz",
        "Algo Biz",
        "AlgoBiz LLP",
        "Algobiz LLP",
        "AlgoBiz Pvt Ltd",
        "AlgoBiz Technologies",
        "AlgoBiz Solutions",
        "AlgoBiz Software Solutions",
        "AlgoBiz Development Company",
        "AlgoBiz Web Development",
        "AlgoBiz AI Development",
        "AlgoBiz ERP Development",
        "Software Development Kerala",
        "AI Development Company India",
        "ERP Development Company",
        "SaaS Development Company",
        "Web Development Company Kerala",
        "Abhijith P A AlgoBiz",
        "React Development Company",
        "Django Development Company",
        "WhatsApp Automation Company",
        "Telegram Bot Development",
        "HRMS Development Company",
    ],
    alternates: { canonical: "https://abisolutions.online/algobiz" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/algobiz",
        siteName: "AlgoBiz",
        title: "AlgoBiz — Software Development, AI Engineering & ERP Company",
        description:
            "Full Stack Development, AI automation, ERP, SaaS & HRMS. Built by Abhijith P A from Kerala, India.",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "AlgoBiz — Software Development & AI Engineering",
        description:
            "ERP, SaaS, HRMS, AI automation. React, Django, AWS. Developer: Abhijith P A. Kerala, India.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://abisolutions.online/#organization",
    name: "AlgoBiz",
    alternateName: [
        "Algobiz",
        "Algo Biz",
        "AlgoBiz LLP",
        "Algobiz LLP",
        "AlgoBiz Pvt Ltd",
        "AlgoBiz Technologies",
        "AlgoBiz Solutions",
        "AlgoBiz Software Solutions",
        "AlgoBiz Development Company",
    ],
    url: "https://abisolutions.online",
    logo: "https://abisolutions.online/icon-512.png",
    image: "https://abisolutions.online/og-image.jpg",
    description:
        "AlgoBiz is a software development and AI engineering company from Wayanad, Kerala, India. We build production-grade ERP systems, SaaS platforms, HRMS solutions, AI automation (WhatsApp bots, Telegram bots), and custom web applications using React, Next.js, Django, Python, and AWS.",
    employee: {
        "@type": "Person",
        "@id": "https://abisolutions.online/#person",
        name: "Abhijith P A",
        jobTitle: "Full Stack Developer & AI Engineer",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Wayanad",
        addressRegion: "Kerala",
        addressCountry: "IN",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919961316468",
        email: "abhijithabhijith1999@gmail.com",
        contactType: "customer service",
        availableLanguage: ["English", "Malayalam"],
    },
    knowsAbout: [
        "Full Stack Web Development",
        "AI Engineering",
        "ERP Development",
        "SaaS Development",
        "HRMS Development",
        "Payroll Management System",
        "WhatsApp Automation",
        "Telegram Automation",
        "React.js",
        "Next.js",
        "Django",
        "Python",
        "AWS",
        "PostgreSQL",
    ],
    serviceType: [
        "Web Application Development",
        "AI Automation",
        "ERP Systems",
        "SaaS Platforms",
        "HRMS & Payroll",
        "WhatsApp Bots",
        "Telegram Bots",
    ],
    sameAs: [
        "https://github.com/Abhijith-Abi",
        "https://www.linkedin.com/in/abhijith-pa/",
    ],
};

export default function AlgoBizPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="algobiz">
                    <article className="mx-auto max-w-3xl">
                        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
                            AlgoBiz
                        </h1>
                        <p className="mt-2 font-mono text-sm uppercase tracking-wide text-accent">
                            Software Development & AI Engineering
                        </p>

                        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 lg:text-lg">
                            <p>
                                <strong>AlgoBiz</strong> (also known as Algobiz
                                LLP, AlgoBiz Technologies, AlgoBiz Solutions) is
                                a software development and AI engineering company
                                based in Wayanad, Kerala, India. The company
                                builds production-grade web applications, ERP
                                systems, SaaS platforms, HRMS solutions, and AI
                                automation products.
                            </p>
                            <p>
                                <Link
                                    href="/abhijith-pa"
                                    className="text-accent hover:underline"
                                >
                                    Abhijith P A
                                </Link>{" "}
                                works at AlgoBiz as Full Stack Developer & AI
                                Engineer, leading the development of enterprise
                                software and AI-driven automation tools.
                            </p>
                            <p>
                                AlgoBiz specializes in React.js, Next.js,
                                TypeScript, Django, Python, PostgreSQL, AWS, and
                                AI/ML technologies. The company delivers
                                solutions for businesses across healthcare, travel,
                                education, finance, and enterprise operations.
                            </p>
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Services
                        </h2>
                        <ul className="mt-5 space-y-3 text-base text-ink/75">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>Full Stack Web Development</strong>{" "}
                                    — React, Next.js, Django, Node.js, AWS
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>ERP Development</strong> — Custom
                                    enterprise resource planning with inventory,
                                    finance & HR modules
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>SaaS Platforms</strong> — Multi-tenant
                                    software-as-a-service with scalable
                                    architecture
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>HRMS & Payroll</strong> — Attendance
                                    management, salary processing, employee
                                    self-service
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>AI Automation</strong> — WhatsApp bots,
                                    Telegram bots, LLM integrations, workflow
                                    automation
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>Cloud & DevOps</strong> — AWS
                                    infrastructure, CI/CD, Docker, scalable
                                    deployments
                                </span>
                            </li>
                        </ul>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Technology Stack
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
                                "Docker",
                                "OpenAI",
                                "Firebase",
                                "REST APIs",
                                "GraphQL",
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
                            Products Built
                        </h2>
                        <div className="mt-5 space-y-3 text-base text-ink/75">
                            <p>
                                <strong>Enterprise ERP</strong> — Enterprise resource
                                planning covering inventory, finance & HR.
                            </p>
                            <p>
                                <strong>Finwage</strong> — Payroll management &
                                HRMS with attendance tracking.
                            </p>
                            <p>
                                <strong>HOSFACE</strong> — Healthcare platform
                                pairing doctors and investors.
                            </p>
                            <p>
                                <strong>STEYP</strong> — Coding education with
                                structured learning tracks.
                            </p>
                            <p>
                                <strong>AI Automation Suite</strong> — WhatsApp &
                                Telegram bots for business workflows.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-3">
                            <Link
                                href="/services"
                                className="btn-primary rounded-lg px-5 py-2.5 text-sm font-semibold"
                            >
                                View Services
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-ghost rounded-lg px-5 py-2.5 text-sm font-medium"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </article>
                </SectionWrapper>
            </div>
        </main>
    );
}
