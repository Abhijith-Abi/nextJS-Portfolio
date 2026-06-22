import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { ProjectsSection } from "../../components/ProjectsSection";

export const metadata: Metadata = {
    title: "Projects by Abhijith P A — Talrop ERP, Hosface, Steyp",
    description:
        "Production web apps by Abhijith P A: Talrop ERP, Hosface, Steyp, Tegain. Built with React, Next.js, TypeScript. Live software with real users.",
    keywords: [
        "Abhijith P A projects",
        "Abhijith P A portfolio",
        "Abhijith PA work",
        "Abi Solutions projects",
        "Talrop ERP",
        "Talrop ERP developer",
        "Hosface developer",
        "Hosface website",
        "Steyp platform",
        "Steyp developer",
        "Tegain website",
        "Tegain developer",
        "Somans travel platform",
        "React projects Kerala",
        "Next.js portfolio India",
        "Full Stack Developer work",
        "Web Developer Kerala projects",
        "Django projects",
        "AWS projects",
        "ERP developer India",
        "SaaS developer portfolio",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/projects",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/projects",
        siteName: "Abi Solutions",
        title: "Projects — Abhijith P A | Talrop ERP, Hosface, Steyp, Tegain",
        description:
            "Live production apps: Talrop ERP, Hosface, Steyp, Tegain. React, Next.js & TypeScript by Abhijith P A.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Projects by Abhijith P A — Talrop ERP, Hosface, Steyp Portfolio",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects — Abhijith P A | Talrop ERP, Hosface, Steyp",
        description:
            "Production web apps with real users. Talrop ERP, Hosface, Steyp, Tegain. Built with React & Next.js.",
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
    "@type": "CollectionPage",
    name: "Projects by Abhijith P A",
    description:
        "Selected production-grade web applications built by Abhijith P A (Abi Solutions) using React, Next.js, TypeScript, Django, and AWS.",
    url: "https://abisolutions.online/projects",
    author: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
    },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                item: {
                    "@type": "WebApplication",
                    name: "Talrop ERP",
                    description:
                        "Enterprise resource planning platform covering inventory, finance, and HR with real-time insights and granular permissions.",
                    url: "https://erp.talrop.com/",
                    applicationCategory: "BusinessApplication",
                    operatingSystem: "Web",
                    creator: {
                        "@type": "Person",
                        name: "Abhijith P A",
                    },
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@type": "WebApplication",
                    name: "Hosface",
                    description:
                        "Healthcare infrastructure platform pairing doctors and investors through a structured four-step clinic-setup model.",
                    url: "https://www.hosface.com/",
                    applicationCategory: "HealthApplication",
                    operatingSystem: "Web",
                    creator: {
                        "@type": "Person",
                        name: "Abhijith P A",
                    },
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                item: {
                    "@type": "WebApplication",
                    name: "Steyp",
                    description:
                        "Video-led coding education platform with structured tracks, exercises, and progress tracking.",
                    url: "https://steyp.com/",
                    applicationCategory: "EducationalApplication",
                    operatingSystem: "Web",
                    creator: {
                        "@type": "Person",
                        name: "Abhijith P A",
                    },
                },
            },
            {
                "@type": "ListItem",
                position: 4,
                item: {
                    "@type": "WebSite",
                    name: "Tegain",
                    description:
                        "Company and community hub with recruitment surfaces tuned for SEO and Core Web Vitals.",
                    url: "https://tegain.com/",
                    creator: {
                        "@type": "Person",
                        name: "Abhijith P A",
                    },
                },
            },
            {
                "@type": "ListItem",
                position: 5,
                item: {
                    "@type": "WebApplication",
                    name: "Somans Leisure Tours",
                    description:
                        "Travel management platform with bookings, approvals, and role-based analytics dashboards.",
                    url: "https://www.somansleisuretours.com/",
                    applicationCategory: "TravelApplication",
                    operatingSystem: "Web",
                    creator: {
                        "@type": "Person",
                        name: "Abhijith P A",
                    },
                },
            },
        ],
    },
};

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
