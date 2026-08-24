import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { PhotoGallery } from "../../components/PhotoGallery";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/motion/RevealText";
import { SpotlightCard } from "../../components/ui/SpotlightCard";
import { portfolioPhotos, generatePhotoSchema } from "../../lib/photos";
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
} from "lucide-react";

export const metadata: Metadata = {
    title: "Abhijith P A — Full Stack Developer & AI Engineer | Founder of Abi Solutions",
    description:
        "Abhijith P A (Abi) is a Full Stack Developer & AI Engineer, Founder of Abi Solutions from Wayanad, Kerala, India. React, Next.js, Django, Python, AWS specialist. 4+ years building ERP, SaaS & AI automation products.",
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
        "Abi Solutions",
        "Full Stack Developer Kerala",
        "AI Engineer India",
        "Abhijith P A Photos",
    ],
    alternates: { canonical: "https://abisolutions.online/abhijith-pa" },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://abisolutions.online/abhijith-pa",
        siteName: "Abhijith P A — Abi Solutions",
        title: "Abhijith P A — Full Stack Developer & AI Engineer | Abi Solutions",
        description:
            "Full Stack Developer & AI Engineer, Founder of Abi Solutions. React, Next.js, Django, AWS, AI Automation from Kerala, India.",
        images: portfolioPhotos.map((photo) => ({
            url: photo.src,
            width: 800,
            height: 1000,
            alt: photo.alt,
            type: "image/jpeg",
        })),
        firstName: "Abhijith",
        lastName: "P A",
    },
    twitter: {
        card: "summary_large_image",
        title: "Abhijith P A — Full Stack Developer & AI Engineer",
        description:
            "React, Next.js, Django, AWS. Founder of Abi Solutions. Kerala, India.",
        images: ["/og-image.jpg", "/profile.jpg"],
    },
};

const jsonLd = [
    {
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
            image: portfolioPhotos.map((p) => `https://abisolutions.online${p.src}`),
            jobTitle: "Full Stack Developer & AI Engineer",
            description:
                "Abhijith P A is a Full Stack Developer and AI Engineer, Founder of Abi Solutions from Wayanad, Kerala, India. He specializes in React, Next.js, Django, Python, AWS, and AI automation.",
            worksFor: { "@type": "Organization", name: "Abi Solutions" },
            founder: { "@type": "Organization", name: "Abi Solutions" },
            alumniOf: [
                { "@type": "Organization", name: "Talrop", url: "https://www.talrop.com/" },
                { "@type": "Organization", name: "Steyp", url: "https://steyp.com/" },
                { "@type": "Organization", name: "Tegain", url: "https://tegain.com/" },
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
    },
    generatePhotoSchema(),
];

const highlights = [
    { number: "04+", label: "Years Engineering", sub: "Production Cloud Code" },
    { number: "20+", label: "Shipped Deliveries", sub: "ERPs, SaaS & Web Apps" },
    { number: "100%", label: "TypeScript Strict", sub: "Clean Architecture" },
    { number: "24/7", label: "AI & Cloud Systems", sub: "Zero-Downtime Pipeline" },
];

const careerMilestones = [
    {
        role: "Founder & Lead Full Stack Engineer",
        company: "Abi Solutions",
        period: "Jan 2026 – Present",
        description:
            "Directing full-stack software architecture, AI autonomous systems, and custom ERP platforms. Guiding technical execution for global and regional enterprise clients.",
        skills: ["Next.js 14", "TypeScript", "Django", "AWS", "AI Automation", "PostgreSQL"],
        active: true,
    },
    {
        role: "Senior UI Engineer · Level 2",
        company: "Enterprise Software Solutions Firm",
        period: "May 2025 – Dec 2025",
        description:
            "Led frontend engineering for modular enterprise suites. Reduced dashboard load latency by 40% with optimized state caching and strict design tokens.",
        skills: ["React 19", "Next.js", "Zustand", "Tailwind CSS"],
    },
    {
        role: "Software Engineer · Next.js Developer",
        company: "Steyp",
        period: "Oct 2022 – Apr 2025",
        description:
            "Engineered high-performance web products including Hosface, Tegain, and internal ERP systems. Established reusable component libraries and responsive UI flows.",
        skills: ["React", "Redux", "Next.js", "REST APIs", "Tailwind"],
    },
];

const techDomains = [
    {
        title: "Frontend Engineering",
        icon: Code2,
        techs: ["React 18 / 19", "Next.js 14 App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Zustand"],
    },
    {
        title: "Backend & Cloud",
        icon: Terminal,
        techs: ["Python & Django", "Node.js & Express", "PostgreSQL", "AWS S3 / EC2", "Docker", "Firebase", "Redis"],
    },
    {
        title: "AI & Automation",
        icon: Cpu,
        techs: ["OpenAI APIs & Claude", "WhatsApp Bot Automation", "Telegram Workflows", "RAG & Vector Search", "LangChain"],
    },
    {
        title: "Enterprise Solutions",
        icon: Layers,
        techs: ["Custom ERP Systems", "HRMS & Payroll", "Multi-Tenant SaaS", "API Microservices", "SEO Architecture"],
    },
];

export default function AbhijithPAPage() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Glowing Ambient Crimson Orbs */}
            <div
                className="pointer-events-none absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px] animate-pulse_glow"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute top-1/2 right-10 h-[450px] w-[450px] rounded-full bg-accent2/10 blur-[150px] animate-pulse_glow"
                aria-hidden
            />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/[0.06]">
                <div className="container-width">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                        {/* Left Intro */}
                        <div>
                            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-accent mb-6 shadow-glow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                                </span>
                                Available for Projects · 2026
                            </div>

                            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink">
                                <span className="block">ABHIJITH</span>
                                <span className="block text-accent">P A.</span>
                            </h1>

                            <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-accent2">
                                Founder of Abi Solutions · Full Stack & AI Engineer
                            </p>

                            <p className="mt-6 text-sm leading-relaxed text-ink/80 sm:text-base lg:text-lg max-w-xl">
                                Engineering high-throughput ERP platforms, autonomous AI workflows, and modern web applications with React, Next.js, Django, and AWS. Over 4 years of shipping production software for high-growth enterprises.
                            </p>

                            {/* Action Buttons */}
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="hero-btn-primary group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold tracking-tight shadow-glow-sm"
                                >
                                    <span>Start a Project</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="hero-btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                                >
                                    <span>View Case Studies</span>
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Portrait & Profile Card */}
                        <FadeIn>
                            <div className="surface relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8 border border-white/15 shadow-glow">
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-background">
                                    <Image
                                        src="/photos/abhijith-pa-founder-portrait.jpg"
                                        alt="Abhijith P A — Founder of Abi Solutions"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 450px"
                                        className="object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-6">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent font-bold">
                                            Executive Profile
                                        </span>
                                        <h2 className="mt-1 font-display text-2xl font-black text-ink">
                                            Abhijith P A
                                        </h2>
                                        <p className="mt-1 font-mono text-xs text-ink/70 flex items-center gap-1.5">
                                            <MapPin className="h-3.5 w-3.5 text-accent" />
                                            Wayanad, Kerala, India · Remote Worldwide
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl border border-white/[0.08] bg-background/60 p-3.5">
                                        <p className="font-mono text-[9px] uppercase tracking-wider text-ink/50">Organization</p>
                                        <p className="mt-1 font-display text-sm font-bold text-ink">Abi Solutions</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/[0.08] bg-background/60 p-3.5">
                                        <p className="font-mono text-[9px] uppercase tracking-wider text-ink/50">Specialty</p>
                                        <p className="mt-1 font-display text-sm font-bold text-accent">Full Stack & AI</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Stats Matrix Strip */}
                    <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {highlights.map((stat, idx) => (
                            <FadeIn key={stat.label} delay={idx * 0.08}>
                                <div className="surface rounded-3xl p-5 sm:p-6 border border-white/[0.08] hover:border-accent/40 transition-colors shadow-glow-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="font-display text-3xl sm:text-4xl font-black text-ink">
                                            {stat.number}
                                        </p>
                                        <Flame className="h-5 w-5 text-accent" />
                                    </div>
                                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-accent font-semibold">
                                        {stat.label}
                                    </p>
                                    <p className="font-mono text-[9px] text-ink/50 mt-0.5">
                                        {stat.sub}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNICAL CAPABILITIES MATRIX */}
            <section className="py-20 sm:py-28 border-b border-white/[0.06]">
                <div className="container-width">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                            <Sparkles className="h-3 w-3" />
                            Core Competencies
                        </div>
                        <h2 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-ink">
                            <span className="block">ENGINEERED FOR</span>
                            <span className="block text-accent">SCALE & RELIABILITY.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {techDomains.map((domain, i) => {
                            const Icon = domain.icon;
                            return (
                                <FadeIn key={domain.title} delay={i * 0.08}>
                                    <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7">
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent mb-6">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="font-display text-lg font-bold text-ink mb-4">
                                                {domain.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-1.5">
                                                {domain.techs.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="inline-flex items-center rounded-lg border border-white/[0.08] bg-background/80 px-2.5 py-1 font-mono text-[10px] text-ink/80"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CAREER MILESTONES & HISTORY */}
            <section className="py-20 sm:py-28 border-b border-white/[0.06]">
                <div className="container-width">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                            <Briefcase className="h-3 w-3" />
                            Work Track Record
                        </div>
                        <h2 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-ink">
                            <span className="block">PROVEN LEADERSHIP</span>
                            <span className="block text-accent">& INDUSTRY EXPERIENCE.</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {careerMilestones.map((m, idx) => (
                            <FadeIn key={m.company} delay={idx * 0.08}>
                                <div className="surface rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-accent/40 transition-all duration-300 shadow-glow-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-display text-xl font-bold text-ink">
                                                    {m.role}
                                                </h3>
                                                {m.active && (
                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-emerald/40 bg-accent-emerald/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent-emerald font-semibold">
                                                        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent-emerald" />
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="mt-1 font-mono text-xs font-semibold text-accent2">
                                                {m.company}
                                            </p>
                                        </div>
                                        <span className="font-mono text-xs text-ink/50">
                                            {m.period}
                                        </span>
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base max-w-3xl">
                                        {m.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {m.skills.map((s) => (
                                            <span
                                                key={s}
                                                className="inline-flex items-center gap-1 rounded-lg border border-white/[0.08] bg-background/80 px-2.5 py-1 font-mono text-[10px] text-ink/80"
                                            >
                                                <CheckCircle2 className="h-3 w-3 text-accent" />
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE MEDIA GALLERY */}
            <section className="py-20 sm:py-28 border-b border-white/[0.06]">
                <div className="container-width">
                    <PhotoGallery />
                </div>
            </section>

            {/* HIGH CONVERTING CALL TO ACTION */}
            <section className="py-24 sm:py-32">
                <div className="container-width">
                    <div className="surface relative overflow-hidden rounded-[3rem] p-8 sm:p-14 border border-white/15 text-center shadow-glow">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-accent mb-6">
                                <Send className="h-3.5 w-3.5" />
                                Collaboration & Inquiries
                            </div>
                            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase leading-tight text-ink">
                                HAVE A VISION FOR YOUR PRODUCT?
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
                                Available for custom enterprise ERP builds, AI workflow automation, full stack web apps, and technical architecture leadership.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="hero-btn-primary inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold tracking-tight shadow-glow-sm"
                                >
                                    <span>Get in Touch with Abhijith</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I'd%20like%20to%20discuss%20a%20project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero-btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
                                >
                                    <span>WhatsApp Chat</span>
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
