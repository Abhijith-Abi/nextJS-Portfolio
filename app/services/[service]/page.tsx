import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { Footer } from "../../../components/Footer";
import Link from "next/link";
import { getServiceSEOData, servicesSEOData, serviceAliases } from "../../../lib/services-seo";
import { JsonLd } from "../../../components/JsonLd";

type PageProps = {
    params: { service: string } | Promise<{ service: string }>;
};

// Generate static routes for pre-rendering at build time under /services/[service]
export async function generateStaticParams() {
    const primarySlugs = Object.keys(servicesSEOData).map((slug) => ({
        service: slug,
    }));
    const aliasSlugs = Object.keys(serviceAliases).map((alias) => ({
        service: alias,
    }));
    return [...primarySlugs, ...aliasSlugs];
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const item = getServiceSEOData(resolvedParams?.service);

    if (!item) {
        return {
            title: "Service Not Found | Algobiz Innovations LLP",
        };
    }

    const canonicalUrl = `https://abisolutions.online/services/${resolvedParams.service}`;
    const allKeywords = [
        ...item.semanticKeywords,
        ...item.longTailKeywords,
        ...item.nlpKeywords,
        "Algobiz Innovations LLP",
        "Algobiz Kerala",
        "Software Development Company Kerala"
    ];

    return {
        title: `${item.serviceName} | Algobiz Innovations LLP`,
        description: item.metaDescription,
        keywords: allKeywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: canonicalUrl,
            siteName: "Algobiz Innovations LLP — Kerala",
            title: item.title,
            description: item.metaDescription,
            images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: item.title,
            description: item.metaDescription,
            images: ["/og-image.jpg"],
        },
    };
}

export default async function ServicePage({ params }: PageProps) {
    const resolvedParams = await params;
    const item = getServiceSEOData(resolvedParams?.service);

    if (!item) {
        notFound();
    }

    const canonicalUrl = `https://abisolutions.online/services/${resolvedParams.service}`;

    // Schema.org JSON-LD Structured Data
    const jsonLdData = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://algobiz.in/#organization",
            name: "Algobiz Innovations LLP",
            legalName: "Algobiz Innovations LLP",
            url: "https://algobiz.in",
            logo: "https://algobiz.in/logo.png",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919961316468",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Malayalam"],
            },
            sameAs: [
                "https://abisolutions.online",
                "https://github.com/Abhijith-Abi",
                "https://www.linkedin.com/in/abhijith-pa/",
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: item.serviceName,
            serviceType: item.schemaServiceType,
            provider: {
                "@type": "Organization",
                name: "Algobiz Innovations LLP",
                url: "https://algobiz.in",
            },
            areaServed: {
                "@type": "State",
                name: "Kerala",
            },
            description: item.metaDescription,
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://abisolutions.online" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://abisolutions.online/services" },
                { "@type": "ListItem", position: 3, name: item.serviceName, item: canonicalUrl },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: item.faqs.map((faq) => ({
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
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Services / {item.serviceName}
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15] mb-6">
                        {item.h1}
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                        {item.metaDescription}
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
                            Get Custom Estimate
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Featured Answer & AI Overview Box ─── */}
            <SectionWrapper id="summary" index="01" label="Overview & Architecture">
                <div className="p-6 sm:p-8 rounded-3xl border border-accent/30 bg-accent/5 backdrop-blur-md mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3">
                        {item.h2List[0]}
                    </h2>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                        {item.featuredSnippetAnswer}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            {item.h2List[1]}
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {item.introContent}
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-border/60 bg-card/40">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                            {item.h3List[0]}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.architectureContent}
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* ─── Frequently Asked Questions ─── */}
            <SectionWrapper id="faq" index="02" label="Technical FAQs">
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                        {item.h2List[6]}
                    </h2>
                </div>

                <div className="space-y-4 max-w-4xl">
                    {item.faqs.map((faq, idx) => (
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

            {/* ─── CTA ─── */}
            <section className="py-20 border-t border-border/40 bg-card/20">
                <div className="container-width text-center max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Ready to Build Your {item.serviceName} Project?
                    </h2>
                    <p className="text-muted-foreground text-base mb-8">
                        Connect with our engineering team at Algobiz Innovations LLP for technical consultation and cost estimates.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="https://wa.me/919961316468?text=Hi%20Algobiz,%20I'd%20like%20to%20discuss%20"
                            target="_blank"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-accent text-black font-semibold text-sm sm:text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-accent/20"
                        >
                            <span>WhatsApp Consultation (+91 9961316468)</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm sm:text-base transition-all flex items-center justify-center"
                        >
                            Contact Form
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
