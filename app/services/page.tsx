import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SkillsSection } from "../../components/SkillsSection";
import { WorkflowSection } from "../../components/WorkflowSection";

export const metadata: Metadata = {
    title: "Services — Hire Abhijith P A | AlgoBiz | React, Django, AI, ERP Development",
    description:
        "Hire Abhijith P A (AlgoBiz) for React, Next.js, Django, AI & AWS development. Custom ERP systems, SaaS platforms, HRMS, payroll management, AI automation, WhatsApp bots & Telegram bots. Full Stack Developer from Kerala, India.",
    keywords: [
        "Hire Abhijith P A",
        "Hire AlgoBiz",
        "AlgoBiz services",
        "AlgoBiz Web Development",
        "AlgoBiz AI Development",
        "AlgoBiz ERP Development",
        "Full Stack Developer services",
        "React Developer hire",
        "React Developer Kerala",
        "React Developer India",
        "Next.js Developer hire",
        "Next.js Developer Kerala",
        "Next.js Developer India",
        "Django Developer hire",
        "Django Developer Kerala",
        "Django Developer India",
        "Python Developer hire",
        "AWS Developer India",
        "AI Developer India",
        "AI Engineer India",
        "ERP Development services",
        "SaaS Development",
        "Custom ERP Development",
        "HRMS Development",
        "Payroll Management System",
        "Attendance Management System",
        "WhatsApp Automation",
        "Telegram Automation",
        "AI Automation",
        "Web Developer Kerala",
        "Freelance Developer India",
        "TypeScript Developer",
        "PostgreSQL Developer",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "AlgoBiz",
    alternates: {
        canonical: "https://abisolutions.online/services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/services",
        siteName: "Abhijith P A — AlgoBiz",
        title: "Hire Abhijith P A | AlgoBiz — React, Django, AI & ERP Development Services",
        description:
            "Custom ERP, SaaS, HRMS, AI automation & web applications. Full Stack Developer & AI Engineer available from Kerala, India.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AlgoBiz — Full Stack Development & AI Services by Abhijith P A",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Services — AlgoBiz | Hire Abhijith P A for React, Django & AI Development",
        description:
            "ERP, SaaS, HRMS, AI automation. React, Next.js, Django & AWS. Full Stack Developer from Kerala.",
        images: ["/og-image.jpg"],
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

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://abisolutions.online/services/#service",
        name: "AlgoBiz — Full Stack Development & AI Engineering Services",
        alternateName: [
            "AlgoBiz Web Development",
            "AlgoBiz AI Development",
            "AlgoBiz ERP Development",
            "Abi Solutions",
        ],
        description:
            "Custom web application development, AI engineering, ERP systems, SaaS platforms, HRMS, payroll management, and AI automation by Abhijith P A. Technologies: React, Next.js, Django, Python, PostgreSQL, AWS, TypeScript.",
        url: "https://abisolutions.online/services",
        image: "https://abisolutions.online/og-image.jpg",
        provider: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
            jobTitle: "Full Stack Developer & AI Engineer",
        },
        brand: {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "AlgoBiz",
        },
        serviceType: [
            "Full Stack Web Development",
            "React & Next.js Development",
            "Django & Python Backend Development",
            "AI Engineering & Automation",
            "ERP System Development",
            "SaaS Platform Development",
            "HRMS & Payroll Management System",
            "Attendance Management System",
            "WhatsApp Bot Development",
            "Telegram Bot Development",
            "AI Automation Development",
            "AWS Cloud Infrastructure",
            "CRM Development",
            "Ecommerce Development",
            "UI/UX Development",
        ],
        areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Kerala" },
            { "@type": "City", name: "Wayanad" },
        ],
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://abisolutions.online/contact",
            servicePhone: "+919961316468",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AlgoBiz Development Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "React & Next.js Development",
                        description:
                            "Production-grade web applications with React, Next.js, TypeScript, and Tailwind CSS. Component-driven architecture with motion design.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Django & Python Backend",
                        description:
                            "Scalable backend systems with Django, Python, PostgreSQL, REST APIs, and microservices architecture.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ERP & HRMS Development",
                        description:
                            "Custom ERP systems, HRMS, payroll management, attendance tracking, and enterprise resource planning with real-time analytics.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "AI Automation & Bots",
                        description:
                            "AI-driven automation, WhatsApp automation, Telegram bots, OpenAI integration, and LLM-powered workflows.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "SaaS & Cloud Platforms",
                        description:
                            "Multi-tenant SaaS platforms, AWS cloud infrastructure, CI/CD pipelines, and scalable deployment architecture.",
                    },
                },
            ],
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://abisolutions.online",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://abisolutions.online/services",
            },
        ],
    },
];

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
