import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";
import Link from "next/link";
import { getLocationData, locationsData, locationAliases } from "../../lib/locations";

type PageProps = {
    params: { location: string } | Promise<{ location: string }>;
};

// Generate static routes for pre-rendering at build time
export async function generateStaticParams() {
    const primarySlugs = Object.keys(locationsData).map((slug) => ({
        location: slug,
    }));
    const aliasSlugs = Object.keys(locationAliases).map((slug) => ({
        location: slug,
    }));
    return [...primarySlugs, ...aliasSlugs];
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const loc = getLocationData(resolvedParams?.location);

    if (!loc) {
        return {
            title: "Location Not Found | AlgoBiz",
        };
    }

    const canonicalUrl = `https://abisolutions.online/${loc.routeSlug}`;
    const allKeywords = [
        ...loc.primaryKeywords,
        ...loc.techKeywords,
        ...loc.highIntentKeywords,
        "Kerala Web Developer",
        "Full Stack Developer Kerala",
        "React Developer Kerala",
        "Python Developer Kerala",
        "AI Engineer Kerala"
    ];

    return {
        title: loc.metaTitle,
        description: loc.metaDescription,
        keywords: allKeywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: canonicalUrl,
            siteName: `AlgoBiz — ${loc.shortName}`,
            title: loc.metaTitle,
            description: loc.metaDescription,
            images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: loc.metaTitle,
            description: loc.metaDescription,
            images: ["/og-image.jpg"],
        },
    };
}

export default async function LocationPage({ params }: PageProps) {
    const resolvedParams = await params;
    const loc = getLocationData(resolvedParams?.location);

    if (!loc) {
        notFound();
    }

    const canonicalUrl = `https://abisolutions.online/${loc.routeSlug}`;

    // Schema.org JSON-LD Structured Data
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `AlgoBiz — Best Web Developer in ${loc.shortName}`,
            alternateName: [
                `Best Developer in ${loc.shortName}`,
                `Best Web Developer ${loc.shortName}`,
                `Software Developer ${loc.shortName}`,
                `AlgoBiz ${loc.shortName}`,
                "Abhijith P A Developer",
            ],
            description: loc.metaDescription,
            url: canonicalUrl,
            image: "https://abisolutions.online/og-image.jpg",
            telephone: "+919961316468",
            email: "abhijithabhijith1999@gmail.com",
            address: {
                "@type": "PostalAddress",
                addressLocality: loc.shortName,
                addressRegion: "Kerala",
                postalCode: loc.postalCode,
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: loc.geoCoordinates.latitude,
                longitude: loc.geoCoordinates.longitude,
            },
            areaServed: [
                ...loc.nearbyCities.map((city) => ({ "@type": "City", name: city })),
                { "@type": "AdministrativeArea", name: loc.district },
                { "@type": "State", name: "Kerala" },
            ],
            serviceType: [
                "Website Development",
                "Web Application Development",
                "Custom Software Development",
                "React Development",
                "Next.js Development",
                "Django Development",
                "Python Development",
                "AI Software Development",
                "ERP Development",
                "SaaS Platform Development",
                "Ecommerce Development",
                "Mobile App Development",
            ],
            priceRange: "$$",
            openingHours: "Mo-Sa 09:00-18:00",
            founder: {
                "@type": "Person",
                "@id": "https://abisolutions.online/#person",
                name: "Abhijith P A",
                jobTitle: "Full Stack Developer & AI Engineer",
            },
            sameAs: [
                "https://abisolutions.online",
                "https://github.com/Abhijith-Abi",
                "https://www.linkedin.com/in/abhijith-pa/",
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://abisolutions.online" },
                { "@type": "ListItem", position: 2, name: `Developer ${loc.shortName}`, item: canonicalUrl },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loc.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        },
    ];

    return (
        <main className="min-h-screen bg-canvas text-canvas-fg selection:bg-accent selection:text-black font-sans">
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />

            {/* ─── Hero Section ─── */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
                <div className="container-width relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Serving {loc.name} & Nearby Regions
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15] mb-6">
                        {loc.tagline}
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                        {loc.heroSubtitle}
                    </p>

                    {/* Quick Location Pills */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        <span className="text-xs text-muted-foreground py-1 font-mono uppercase tracking-wider">Major Areas Served:</span>
                        {loc.nearbyCities.map((city) => (
                            <span key={city} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                {city}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I'm%20looking%20for%20a%20developer%20in%20"
                            target="_blank"
                            className="px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
                        >
                            <span>Chat on WhatsApp</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981z" />
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                        >
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Targeted Regional Solutions ─── */}
            <SectionWrapper id="services" index="01" label={`Services in ${loc.shortName}`}>
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Custom Tech Solutions for {loc.shortName} Businesses
                    </h2>
                    <p className="text-muted-foreground text-base max-w-2xl">
                        From high-converting brand websites to full-scale enterprise ERP systems and AI tools, we build reliable, secure, and scalable web solutions tailored for clients across {loc.district} district.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-accent/40 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 font-mono text-xl">
                            01
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            Custom Website Development
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Ultra-fast, mobile-first, SEO-engineered websites built with Next.js, React, and Tailwind CSS to rank #1 on Google in {loc.shortName}.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-accent/40 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 font-mono text-xl">
                            02
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            ERP & SaaS Systems
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Custom ERP, CRM, inventory, and management portals using Django, Python, PostgreSQL, and microservices for {loc.shortName} enterprises.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-accent/40 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 font-mono text-xl">
                            03
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            AI & Automation Solutions
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Intelligent AI agents, WhatsApp bots, automated workflows, and LLM integrations to give your business a competitive edge.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-accent/40 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 font-mono text-xl">
                            04
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            E-Commerce Platforms
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            High-converting online stores with automated payment gateways (Razorpay, Stripe, UPI), inventory sync, and order tracking.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-accent/40 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 font-mono text-xl">
                            05
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            Cross-Platform Mobile Apps
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Native-feeling React Native and Flutter mobile applications for Android & iOS with real-time push notifications.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-accent/40 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 font-mono text-xl">
                            06
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            Local SEO & Performance Optimization
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Boost your local search visibility in {loc.shortName} with Schema.org JSON-LD, 100/100 Core Web Vitals score, and targeted keyword strategy.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* ─── Tech Stack Section ─── */}
            <SectionWrapper id="tech" index="02" label="Technology Stack">
                <div className="p-8 sm:p-12 rounded-3xl border border-border/80 bg-card/40 backdrop-blur-md">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        Modern Tech Stack Used for {loc.shortName} Projects
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center font-mono text-xs">
                        {["Next.js 14", "React 18", "TypeScript", "Python 3", "Django", "FastAPI", "Node.js", "Tailwind CSS", "PostgreSQL", "Redis", "Docker", "Firebase"].map((tech) => (
                            <div key={tech} className="p-3 rounded-xl border border-border/60 bg-background/60 text-foreground font-semibold">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ─── Localized Industry Focus ─── */}
            <SectionWrapper id="industries" index="03" label={`Industry Expertise in ${loc.shortName}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Tailored Development for {loc.shortName}&apos;s Leading Sectors
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Every region in Kerala has unique commercial dynamics. We craft software tailored specifically for key industries operating in {loc.shortName} and surrounding towns.
                        </p>
                        <div className="space-y-3">
                            {loc.industryFocus.map((ind, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-sm font-medium text-foreground">{ind}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-accent/10 via-card to-background border border-accent/20">
                        <h3 className="text-xl font-bold mb-4">Why Work with Abhijith P A?</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">✓</span>
                                <span><strong>4+ Years Production Experience</strong> building high-scale web apps and enterprise ERP systems.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">✓</span>
                                <span><strong>Direct Founder Access</strong> — work directly with the developer without middleman management overhead.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">✓</span>
                                <span><strong>100% Transparent Code</strong> hosted on GitHub with CI/CD deployment pipelines.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">✓</span>
                                <span><strong>Local Kerala Support</strong> with quick response times and ongoing maintenance.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* ─── Frequently Asked Questions (Local SEO) ─── */}
            <SectionWrapper id="faq" index="04" label="Local FAQs">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-3">
                        Frequently Asked Questions ({loc.shortName})
                    </h2>
                    <p className="text-muted-foreground">
                        Common questions about hiring a web developer in {loc.shortName}, pricing, and timelines.
                    </p>
                </div>

                <div className="space-y-4 max-w-4xl">
                    {loc.faqs.map((faq, idx) => (
                        <div key={idx} className="p-6 rounded-2xl border border-border/60 bg-card/60">
                            <h3 className="text-lg font-bold text-foreground mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* ─── Bottom CTA ─── */}
            <section className="py-20 border-t border-border/40 bg-card/20">
                <div className="container-width text-center max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Ready to Build Your Website or Software in {loc.shortName}?
                    </h2>
                    <p className="text-muted-foreground text-base mb-8">
                        Get in touch for a free project consultation, technical proposal, and cost estimation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I'm%20interested%20in%20web%20development%20in%20"
                            target="_blank"
                            className="px-8 py-4 rounded-xl bg-accent text-black font-semibold text-base hover:opacity-90 transition-all flex items-center gap-2 shadow-xl shadow-accent/20"
                        >
                            <span>WhatsApp Consultation (+91 9961316468)</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-base transition-all"
                        >
                            Contact Form
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
