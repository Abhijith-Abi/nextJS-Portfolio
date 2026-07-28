import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";
import Link from "next/link";
import { getServiceSEOData, servicesSEOData, serviceAliases } from "../../lib/services-seo";
import { getLocationData, locationsData, locationAliases, exactKeywordAliases } from "../../lib/locations";
import { JsonLd } from "../../components/JsonLd";

type PageProps = {
    params: { slug: string } | Promise<{ slug: string }>;
};

// Generate static routes for pre-rendering at build time for ALL services, locations, & exact keyword queries
export async function generateStaticParams() {
    const serviceSlugs = Object.keys(servicesSEOData).map((slug) => ({ slug }));
    const serviceAliasSlugs = Object.keys(serviceAliases).map((slug) => ({ slug }));

    const locationSlugs = Object.keys(locationsData).map((slug) => ({ slug }));
    const locationAliasSlugs = Object.keys(locationAliases).map((slug) => ({ slug }));
    const exactKeywordSlugs = Object.keys(exactKeywordAliases).map((slug) => ({ slug }));

    return [
        ...serviceSlugs,
        ...serviceAliasSlugs,
        ...locationSlugs,
        ...locationAliasSlugs,
        ...exactKeywordSlugs,
    ];
}

function getCustomHeading(slug?: string, locName?: string): string {
    if (!slug || !locName) return "Best Developer";
    const s = slug.toLowerCase();
    if (s.includes("full-stack")) return `Best Full Stack Developer in ${locName}`;
    if (s.includes("react")) return `Best React Developer in ${locName}`;
    if (s.includes("python")) return `Best Python Developer in ${locName}`;
    if (s.includes("django")) return `Best Django Developer in ${locName}`;
    if (s.includes("devops")) return `Top DevOps Engineer in ${locName}`;
    if (s.includes("frontend")) return `Best Frontend Developer in ${locName}`;
    if (s.includes("html-css")) return `Expert HTML & CSS Developer in ${locName}`;
    if (s.includes("coder")) return `Best Coder & Software Developer in ${locName}`;
    return `Best Web Developer & Software Engineer in ${locName}`;
}

// Dynamic metadata generation for Senior Technical SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;

    // 1. Check if Service Page
    const service = getServiceSEOData(slug);
    if (service) {
        const canonicalUrl = `https://abisolutions.online/${slug}`;
        return {
            title: service.title,
            description: service.metaDescription,
            keywords: [...service.semanticKeywords, ...service.longTailKeywords, ...service.nlpKeywords],
            alternates: { canonical: canonicalUrl },
            openGraph: {
                type: "website",
                locale: "en_US",
                url: canonicalUrl,
                siteName: "Algobiz Innovations LLP — Kerala",
                title: service.title,
                description: service.metaDescription,
                images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
            },
            twitter: {
                card: "summary_large_image",
                title: service.title,
                description: service.metaDescription,
                images: ["/og-image.jpg"],
            },
        };
    }

    // 2. Check if Location / Exact Keyword Page
    const loc = getLocationData(slug);
    if (loc) {
        const canonicalUrl = `https://abisolutions.online/${slug}`;
        const isStandardRoute = slug === loc.routeSlug || slug === loc.slug;
        const formattedTitle = isStandardRoute
            ? loc.metaTitle
            : `${getCustomHeading(slug, loc.shortName)} | Algobiz Innovations LLP`;

        return {
            title: formattedTitle,
            description: loc.metaDescription,
            keywords: [...loc.primaryKeywords, ...loc.techKeywords, ...loc.highIntentKeywords],
            alternates: { canonical: canonicalUrl },
            openGraph: {
                type: "website",
                locale: "en_US",
                url: canonicalUrl,
                siteName: `AlgoBiz — ${loc.shortName}`,
                title: formattedTitle,
                description: loc.metaDescription,
                images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
            },
            twitter: {
                card: "summary_large_image",
                title: formattedTitle,
                description: loc.metaDescription,
                images: ["/og-image.jpg"],
            },
        };
    }

    return {
        title: "Page Not Found | Algobiz Innovations LLP",
    };
}

export default async function SlugPage({ params }: PageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;

    const service = getServiceSEOData(slug);
    const loc = getLocationData(slug);

    if (!service && !loc) {
        notFound();
    }

    const canonicalUrl = `https://abisolutions.online/${slug}`;

    // ─── RENDER SERVICE PAGE ───
    if (service) {
        const jsonLdData = [
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://algobiz.in/#organization",
                name: "Algobiz Innovations LLP",
                legalName: "Algobiz Innovations LLP",
                url: "https://algobiz.in",
                logo: "https://algobiz.in/logo.png",
                sameAs: [
                    "https://abisolutions.online",
                    "https://github.com/Abhijith-Abi",
                    "https://www.linkedin.com/in/abhijith-pa/",
                ],
            },
            {
                "@context": "https://schema.org",
                "@type": "Service",
                name: service.serviceName,
                serviceType: service.schemaServiceType,
                provider: {
                    "@type": "Organization",
                    name: "Algobiz Innovations LLP",
                    url: "https://algobiz.in",
                },
                areaServed: { "@type": "State", name: "Kerala" },
                description: service.metaDescription,
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://abisolutions.online" },
                    { "@type": "ListItem", position: 2, name: "Services", item: "https://abisolutions.online/services" },
                    { "@type": "ListItem", position: 3, name: service.serviceName, item: canonicalUrl },
                ],
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
            },
        ];

        return (
            <main className="min-h-screen bg-canvas text-canvas-fg selection:bg-accent selection:text-black font-sans">
                <JsonLd data={jsonLdData} />
                <Navbar />

                {/* Hero Header */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
                    <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
                    <div className="container-width relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Algobiz Innovations LLP — Service Landing Page
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15] mb-6">
                            {service.h1}
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                            {service.metaDescription}
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Link
                                href="https://wa.me/919961316468?text=Hi%20Algobiz,%20I'm%20interested%20in%20"
                                target="_blank"
                                className="px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
                            >
                                <span>Hire Algobiz Engineers</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981z" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                            >
                                Get Technical Proposal
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SGE & Featured Answer Box */}
                <SectionWrapper id="ai-overview" index="01" label="Featured Answer & Overview">
                    <div className="p-6 sm:p-8 rounded-3xl border border-accent/30 bg-accent/5 backdrop-blur-md mb-12">
                        <div className="text-accent font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                            Google Direct Answer
                        </div>
                        <h2 className="text-xl font-bold mb-3">{service.h2List[0]}</h2>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed">
                            {service.featuredSnippetAnswer}
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">{service.h2List[1]}</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">{service.introContent}</p>
                        <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
                            <h3 className="text-lg font-bold text-foreground mb-2">{service.h3List[0]}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{service.architectureContent}</p>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Technical FAQs */}
                <SectionWrapper id="faq" index="02" label="Technical FAQs">
                    <h2 className="text-2xl font-bold mb-6">{service.h2List[6]}</h2>
                    <div className="space-y-4 max-w-4xl">
                        {service.faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-border/60 bg-card/60">
                                <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </main>
        );
    }

    // ─── RENDER LOCATION / EXACT KEYWORD PAGE ───
    if (loc) {
        const isStandardRoute = slug === loc.routeSlug || slug === loc.slug;
        const customHeading = isStandardRoute
            ? loc.tagline
            : getCustomHeading(slug, loc.shortName);

        const jsonLdData = [
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: `AlgoBiz — ${customHeading}`,
                image: "https://abisolutions.online/og-image.jpg",
                url: canonicalUrl,
                telephone: "+919961316468",
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
                priceRange: "$$",
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://abisolutions.online" },
                    { "@type": "ListItem", position: 2, name: customHeading, item: canonicalUrl },
                ],
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: loc.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
            },
        ];

        return (
            <main className="min-h-screen bg-canvas text-canvas-fg selection:bg-accent selection:text-black font-sans">
                <JsonLd data={jsonLdData} />
                <Navbar />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
                    <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
                    <div className="container-width relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Target Search: {slug}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15] mb-6">
                            {customHeading}
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                            {loc.heroSubtitle}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10">
                            <span className="text-xs text-muted-foreground py-1 font-mono uppercase tracking-wider">Areas Served:</span>
                            {loc.nearbyCities.map((city) => (
                                <span key={city} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                    {city}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Link
                                href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I'm%20inquiring%20about%20software%20development%20in%20"
                                target="_blank"
                                className="px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
                            >
                                <span>WhatsApp Consultation (+91 9961316468)</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                            >
                                Contact Form
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Local Services & FAQs */}
                <SectionWrapper id="services" index="01" label={`Engineering Services in ${loc.shortName}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-border/60 bg-card/50">
                            <h3 className="text-lg font-bold mb-2">Web & SaaS Platforms</h3>
                            <p className="text-sm text-muted-foreground">
                                High-speed React and Next.js 14 web applications built for clients in {loc.shortName}.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-border/60 bg-card/50">
                            <h3 className="text-lg font-bold mb-2">Custom ERP & CRM Software</h3>
                            <p className="text-sm text-muted-foreground">
                                Python, Django, and PostgreSQL business automation systems tailored for {loc.shortName} enterprises.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-border/60 bg-card/50">
                            <h3 className="text-lg font-bold mb-2">AI Solutions & Mobile Apps</h3>
                            <p className="text-sm text-muted-foreground">
                                Custom RAG document search engines, WhatsApp AI bots, and cross-platform mobile apps.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>

                <SectionWrapper id="faq" index="02" label="Local FAQs">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions ({loc.shortName})</h2>
                    <div className="space-y-4 max-w-4xl">
                        {loc.faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-border/60 bg-card/60">
                                <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </main>
        );
    }
}
