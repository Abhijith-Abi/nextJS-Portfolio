import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { Footer } from "../../../components/Footer";
import Link from "next/link";
import { getLocationData, locationsData, locationAliases } from "../../../lib/locations";
import { JsonLd } from "../../../components/JsonLd";

type PageProps = {
    params: { location: string } | Promise<{ location: string }>;
};

// Generate static routes for pre-rendering at build time under /locations/[location]
export async function generateStaticParams() {
    const primarySlugs = Object.keys(locationsData).map((slug) => ({
        location: slug,
    }));
    const aliasSlugs = Object.keys(locationAliases).map((alias) => ({
        location: alias,
    }));
    return [...primarySlugs, ...aliasSlugs];
}

// Dynamic metadata generation for Local SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const loc = getLocationData(resolvedParams?.location);

    if (!loc) {
        return {
            title: "Location Not Found | Algobiz Innovations LLP",
        };
    }

    const canonicalUrl = `https://abisolutions.online/locations/${resolvedParams.location}`;
    const allKeywords = [
        ...loc.primaryKeywords,
        ...loc.techKeywords,
        ...loc.highIntentKeywords,
        "Algobiz Innovations LLP",
        "Software Company Kerala",
        "Web Developer Kerala"
    ];

    return {
        title: `${loc.shortName} Software & Web Development Company | Algobiz`,
        description: loc.metaDescription,
        keywords: allKeywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: canonicalUrl,
            siteName: `Algobiz — ${loc.shortName}`,
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

    const canonicalUrl = `https://abisolutions.online/locations/${resolvedParams.location}`;

    // Schema.org JSON-LD Structured Data
    const jsonLdData = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Algobiz Innovations LLP — ${loc.shortName}`,
            image: "https://abisolutions.online/og-image.jpg",
            url: canonicalUrl,
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
            priceRange: "$$",
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://abisolutions.online" },
                { "@type": "ListItem", position: 2, name: "Locations", item: "https://abisolutions.online/locations" },
                { "@type": "ListItem", position: 3, name: loc.shortName, item: canonicalUrl },
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
            <JsonLd data={jsonLdData} />

            <Navbar />

            {/* ─── Hero Header ─── */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
                <div className="container-width relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Locations / {loc.shortName}
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15] mb-6">
                        {loc.tagline}
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                        {loc.heroSubtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        <span className="text-xs text-muted-foreground py-1 font-mono uppercase tracking-wider">Nearby Towns & Cities:</span>
                        {loc.nearbyCities.map((city) => (
                            <span key={city} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                {city}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            href="https://wa.me/919961316468?text=Hi%20Algobiz,%20I'm%20looking%20for%20a%20developer%20in%20"
                            target="_blank"
                            className="px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
                        >
                            <span>WhatsApp Consultation</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                        >
                            Get Free Proposal
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Services in Location ─── */}
            <SectionWrapper id="services" index="01" label={`Services in ${loc.shortName}`}>
                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-3">
                        Software & Web Engineering in {loc.shortName}
                    </h2>
                    <p className="text-muted-foreground">
                        Custom software development, ERP, SaaS, mobile apps, and Next.js web applications tailored for enterprises in {loc.district}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50">
                        <h3 className="text-lg font-bold mb-2">Web & SaaS Development</h3>
                        <p className="text-sm text-muted-foreground">
                            Fast, responsive Next.js and React web applications built to rank #1 on Google in {loc.shortName}.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50">
                        <h3 className="text-lg font-bold mb-2">Custom ERP & CRM Software</h3>
                        <p className="text-sm text-muted-foreground">
                            Tailored Django and Python business platforms, inventory management, and lead tracking for {loc.shortName} companies.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border/60 bg-card/50">
                        <h3 className="text-lg font-bold mb-2">AI & Mobile Apps</h3>
                        <p className="text-sm text-muted-foreground">
                            Intelligent AI chatbots, RAG search engines, and cross-platform React Native / Flutter apps.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* ─── Local FAQs ─── */}
            <SectionWrapper id="faq" index="02" label="Local FAQs">
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                        Frequently Asked Questions ({loc.shortName})
                    </h2>
                </div>

                <div className="space-y-4 max-w-4xl">
                    {loc.faqs.map((faq, idx) => (
                        <div key={idx} className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/60">
                            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
