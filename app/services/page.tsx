import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SkillsSection } from "../../components/SkillsSection";
import { WorkflowSection } from "../../components/WorkflowSection";

export const metadata: Metadata = {
    title: "Services — Hire Abhijith P A | React, Django, AWS Dev",
    description:
        "Hire Abhijith P A (Abi Solutions) for React, Next.js, Django & AWS development. Custom web apps, ERP systems, SaaS & AI integrations. Freelance from Kerala, India.",
    keywords: [
        "Full Stack Developer services",
        "Hire Abhijith P A",
        "Hire Abi Solutions",
        "Freelance Developer India",
        "Web Developer Kerala",
        "React Developer hire",
        "React.js Developer hire India",
        "Next.js Developer freelance",
        "Django Developer services",
        "Python Developer hire",
        "AWS Developer India",
        "ERP Development services",
        "SaaS Developer hire",
        "CRM Developer",
        "Ecommerce Developer India",
        "AI Web Development",
        "Custom Web Applications",
        "Frontend Development services",
        "Backend Development services",
        "Freelance Web Developer Kerala",
        "Hire React Developer India",
        "Software Engineer hire Kerala",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/services",
        siteName: "Abi Solutions",
        title: "Hire Abhijith P A — React, Next.js, Django & AWS Developer",
        description:
            "Custom web apps, ERP, SaaS & AI integrations. Full Stack Developer available for freelance & contract work from Kerala.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Abi Solutions — Full Stack Development Services by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Services — Hire Abhijith P A | Abi Solutions",
        description:
            "React, Next.js, Django & AWS. Custom web apps, ERP & SaaS. Freelance from Kerala, India.",
        images: ["/profile.jpg"],
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
    "@type": "ProfessionalService",
    name: "Abi Solutions — Full Stack Development Services",
    description:
        "Custom web application development using React, Next.js, Django, AWS, and TypeScript. ERP systems, SaaS platforms, CRM, ecommerce, and AI integrations by Abhijith P A.",
    url: "https://abisolutions.online/services",
    provider: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
        jobTitle: "Full Stack Developer",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
        },
    },
    serviceType: [
        "Web Application Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "ERP Development",
        "SaaS Development",
        "CRM Development",
        "Ecommerce Development",
        "AI Integration",
        "UI/UX Development",
    ],
    areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 10.8505,
            longitude: 76.2711,
        },
        description: "Worldwide (Remote)",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "React & Next.js Development",
                    description:
                        "Production-grade web applications with React, Next.js, TypeScript, and Tailwind CSS.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Django & Python Backend",
                    description:
                        "Scalable backend systems with Django, Python, PostgreSQL, and REST APIs.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "AWS Cloud & DevOps",
                    description:
                        "Cloud infrastructure, deployment pipelines, and scalable architecture on AWS.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "ERP & SaaS Platforms",
                    description:
                        "Custom ERP, SaaS, and CRM platforms with role-based dashboards and real-time analytics.",
                },
            },
        ],
    },
};

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SkillsSection />
                <WorkflowSection />
            </div>
        </main>
    );
}
