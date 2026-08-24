import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/motion/RevealText";
import { SpotlightCard } from "../../components/ui/SpotlightCard";
import {
    Sparkles,
    Code2,
    Cpu,
    Briefcase,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Flame,
    Terminal,
    Layers,
    ExternalLink,
    Send,
    Database,
    ShieldCheck,
    Phone,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Abi Solutions — Enterprise Software Development & AI Engineering",
    description:
        "Abi Solutions is a premier custom software development and AI engineering company from Kerala, India. Founded by Abhijith P A. Custom ERP systems, SaaS platforms, AI automation, and Full Stack React & Next.js applications.",
    keywords: [
        "Abi Solutions",
        "Abhijith P A",
        "Software Development Company Kerala",
        "AI Engineering Kerala",
        "Custom ERP Solutions",
        "Full Stack Development Company",
        "Next.js Development Agency",
        "Django Development Kerala",
        "WhatsApp Automation Kerala",
    ],
    alternates: { canonical: "https://abisolutions.online/algobiz" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/algobiz",
        siteName: "Abi Solutions",
        title: "Abi Solutions — Software Development, AI Engineering & ERP Company",
        description:
            "Full Stack Development, AI automation, ERP, SaaS & HRMS. Founded by Abhijith P A from Kerala, India.",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abi Solutions — Software Development & AI Engineering",
        description:
            "ERP, SaaS, HRMS, AI automation. React, Django, AWS. Founder: Abhijith P A. Kerala, India.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://abisolutions.online/#organization",
    name: "Abi Solutions",
    alternateName: [
        "AbiSolutions",
        "AlgoBiz",
        "AlgoBiz LLP",
        "AlgoBiz Technologies",
        "AlgoBiz Solutions",
    ],
    url: "https://abisolutions.online",
    logo: "https://abisolutions.online/icon-512.png",
    image: "https://abisolutions.online/og-image.jpg",
    description:
        "Abi Solutions is a software development and AI engineering agency founded by Abhijith P A. We build custom ERP systems, SaaS platforms, HRMS solutions, AI automation, and high-performance React & Next.js web applications.",
    founder: {
        "@type": "Person",
        "@id": "https://abisolutions.online/#person",
        name: "Abhijith P A",
        jobTitle: "Founder & Full Stack Engineer",
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
};

const serviceCards = [
    {
        icon: Code2,
        title: "Full Stack Web Engineering",
        desc: "High-performance web apps built with Next.js 14 App Router, React, TypeScript, and Django backends. 100/100 Core Web Vitals guaranteed.",
        features: ["Micro-frontends", "SSR & Edge Rendering", "Design System Tokens", "Zero Latency State"],
    },
    {
        icon: Database,
        title: "Custom Enterprise ERPs",
        desc: "Tailored enterprise resource management software covering inventory, multi-tier accounting, purchase workflows, and employee role access.",
        features: ["Modular Architecture", "Automated Approval Gates", "Role-Based ACL", "Audit Logging"],
    },
    {
        icon: Cpu,
        title: "AI Automation & Workflows",
        desc: "Custom AI integrations, LLM pipelines, autonomous agents, and automated WhatsApp/Telegram customer support systems.",
        features: ["RAG Knowledge Bases", "WhatsApp Business APIs", "Telegram CRM Bots", "Automated Workflows"],
    },
    {
        icon: ShieldCheck,
        title: "Cloud Architecture & DevOps",
        desc: "Industrial-grade cloud deployments with AWS, Docker containerization, CI/CD pipelines, and high availability configurations.",
        features: ["AWS S3 / EC2 / CloudFront", "Docker Containers", "Automated GitHub Actions", "SSL & Encryption"],
    },
];

export default function AlgoBizPage() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Ambient Background Glows */}
            <div
                className="pointer-events-none absolute top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px] animate-pulse_glow"
                aria-hidden
            />

            {/* HERO */}
            <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/[0.06]">
                <div className="container-width">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-accent mb-6 shadow-glow-sm">
                            <Sparkles className="h-3 w-3" />
                            Enterprise Software Agency
                        </div>

                        <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink">
                            <span className="block">ABI</span>
                            <span className="block text-accent">SOLUTIONS.</span>
                        </h1>

                        <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-accent2">
                            Founded by Abhijith P A · Kerala, India
                        </p>

                        <p className="mt-6 text-sm leading-relaxed text-ink/80 sm:text-base lg:text-lg">
                            Premier custom software development, AI engineering, ERP solutions, and full-stack web applications for global brands and fast-growing enterprises.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="hero-btn-primary group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold tracking-tight shadow-glow-sm"
                            >
                                <span>Request a Quote</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/projects"
                                className="hero-btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                            >
                                <span>Explore Client Work</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES MATRIX */}
            <section className="py-20 sm:py-28 border-b border-white/[0.06]">
                <div className="container-width">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                            <Briefcase className="h-3 w-3" />
                            What We Build
                        </div>
                        <h2 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-ink">
                            <span className="block">COMPREHENSIVE</span>
                            <span className="block text-accent">ENGINEERING SERVICES.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {serviceCards.map((srv, idx) => {
                            const Icon = srv.icon;
                            return (
                                <FadeIn key={srv.title} delay={idx * 0.08}>
                                    <SpotlightCard className="h-full flex flex-col justify-between p-7 sm:p-9">
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent mb-6">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="font-display text-2xl font-bold text-ink mb-3">
                                                {srv.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-ink/75 mb-6">
                                                {srv.desc}
                                            </p>
                                        </div>

                                        <div className="pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                                            {srv.features.map((f) => (
                                                <span
                                                    key={f}
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-background/80 px-2.5 py-1 font-mono text-[10px] text-ink/80"
                                                >
                                                    <CheckCircle2 className="h-3 w-3 text-accent" />
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </SpotlightCard>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 sm:py-32">
                <div className="container-width">
                    <div className="surface relative overflow-hidden rounded-[3rem] p-8 sm:p-14 border border-white/15 text-center shadow-glow">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase leading-tight text-ink">
                                READY TO BUILD WITH ABI SOLUTIONS?
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
                                Talk directly with founder & lead architect Abhijith P A to discuss your architecture and timeline.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="hero-btn-primary inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold tracking-tight shadow-glow-sm"
                                >
                                    <span>Contact Us</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href="https://wa.me/919961316468?text=Hi%20Abi%20Solutions,%20I'd%20like%20to%20discuss%20a%20project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero-btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>WhatsApp Discussion</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
