import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { ProjectsSection } from "../../components/ProjectsSection";

export const metadata: Metadata = {
    title: "Projects — HOSFACE, Finwage, STEYP, Enterprise ERP | Abhijith P A & AlgoBiz",
    description:
        "Production web applications built by Abhijith P A (AlgoBiz): HOSFACE healthcare platform, Finwage payroll & HRMS, STEYP coding platform, Enterprise ERP, Tegain community hub. Built with React, Next.js, Django, TypeScript & AWS.",
    keywords: [
        "Abhijith P A projects",
        "AlgoBiz projects",
        "AlgoBiz portfolio",
        "HOSFACE",
        "HOSFACE developer",
        "HOSFACE healthcare",
        "Finwage",
        "Finwage developer",
        "Finwage payroll",
        "Finwage HRMS",
        "STEYP",
        "STEYP platform",
        "STEYP developer",
        "Enterprise ERP",
        "Enterprise ERP developer",
        "ERP System",
        "Payroll Management System",
        "HRMS System",
        "Attendance Management System",
        "Tegain",
        "Tegain developer",
        "Tegain website",
        "AI Automation",
        "WhatsApp Automation",
        "Telegram Automation",
        "SaaS Development",
        "Custom ERP Development",
        "React projects Kerala",
        "Next.js projects India",
        "Django projects",
        "Full Stack Developer projects",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "AlgoBiz",
    alternates: {
        canonical: "https://abisolutions.online/projects",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/projects",
        siteName: "Abhijith P A — AlgoBiz",
        title: "Projects by Abhijith P A | HOSFACE, Finwage, STEYP, Enterprise ERP | AlgoBiz",
        description:
            "Live production apps: HOSFACE, Finwage HRMS, STEYP, Enterprise ERP, Tegain. ERP, SaaS, AI automation & web applications built with React, Next.js & Django.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Projects by Abhijith P A — HOSFACE, Finwage, STEYP, Enterprise ERP | AlgoBiz",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Projects — Abhijith P A | HOSFACE, Finwage, STEYP, Enterprise ERP",
        description:
            "Production apps with real users: HOSFACE, Finwage, STEYP, Enterprise ERP. Built with React, Next.js & Django by AlgoBiz.",
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
        "@type": "CollectionPage",
        name: "Projects by Abhijith P A — AlgoBiz",
        description:
            "Selected production-grade web applications, ERP systems, SaaS platforms, and AI automation products built by Abhijith P A (AlgoBiz) using React, Next.js, TypeScript, Django, Python, and AWS.",
        url: "https://abisolutions.online/projects",
        author: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
        },
        publisher: {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "AlgoBiz",
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@type": "WebApplication",
                        name: "HOSFACE",
                        description:
                            "Healthcare infrastructure platform pairing doctors and investors through a structured four-step clinic-setup model. Built with Next.js, TypeScript & Tailwind CSS.",
                        url: "https://www.hosface.com/",
                        applicationCategory: "HealthApplication",
                        operatingSystem: "Web",
                        creator: {
                            "@type": "Person",
                            "@id": "https://abisolutions.online/#person",
                            name: "Abhijith P A",
                        },
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "INR",
                        },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        "@type": "WebApplication",
                        name: "Finwage",
                        description:
                            "Payroll management system and HRMS with attendance management, salary processing, tax calculations, and employee self-service portal. Built with React, Django & PostgreSQL.",
                        applicationCategory: "BusinessApplication",
                        operatingSystem: "Web",
                        creator: {
                            "@type": "Person",
                            "@id": "https://abisolutions.online/#person",
                            name: "Abhijith P A",
                        },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                        "@type": "WebApplication",
                        name: "STEYP",
                        description:
                            "Video-led coding education platform with structured learning tracks, exercises, progress tracking, and certification. Built with React, Redux & Styled Components.",
                        url: "https://steyp.com/",
                        applicationCategory: "EducationalApplication",
                        operatingSystem: "Web",
                        creator: {
                            "@type": "Person",
                            "@id": "https://abisolutions.online/#person",
                            name: "Abhijith P A",
                        },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    item: {
                        "@type": "WebApplication",
                        name: "Enterprise ERP",
                        description:
                            "Enterprise resource planning platform covering inventory management, finance, HR, real-time analytics, and granular role-based permissions. Built with Next.js, TypeScript, Zustand & Recharts.",
                        url: "https://erp.Software Solutions Firm.com/",
                        applicationCategory: "BusinessApplication",
                        operatingSystem: "Web",
                        creator: {
                            "@type": "Person",
                            "@id": "https://abisolutions.online/#person",
                            name: "Abhijith P A",
                        },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 5,
                    item: {
                        "@type": "WebSite",
                        name: "Tegain",
                        description:
                            "Company and community hub with recruitment surfaces, community engagement, and brand site optimized for SEO and Core Web Vitals. Built with Next.js & Tailwind CSS.",
                        url: "https://tegain.com/",
                        creator: {
                            "@type": "Person",
                            "@id": "https://abisolutions.online/#person",
                            name: "Abhijith P A",
                        },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 6,
                    item: {
                        "@type": "WebApplication",
                        name: "Somans Leisure Tours",
                        description:
                            "Travel management platform with booking engine, approval workflows, role-based analytics dashboards, and operations automation. Built with Next.js, Tailwind & Zustand.",
                        url: "https://www.somansleisuretours.com/",
                        applicationCategory: "TravelApplication",
                        operatingSystem: "Web",
                        creator: {
                            "@type": "Person",
                            "@id": "https://abisolutions.online/#person",
                            name: "Abhijith P A",
                        },
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
                name: "Projects",
                item: "https://abisolutions.online/projects",
            },
        ],
    },
];

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <ProjectsSection />
            </div>
        </main>
    );
}
