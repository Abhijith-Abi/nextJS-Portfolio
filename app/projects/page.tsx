import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { ProjectsSection } from "../../components/ProjectsSection";

export const metadata: Metadata = {
    title: "Projects — Start Visa, House of Vaz, Yuva Paripalan, Palana Neuro Sync | Abhijith P A & Abi Solutions",
    description:
        "Production web applications built by Abhijith P A (Abi Solutions): Start Visa (global visa platform), House of Vaz (luxury e-commerce), Yuva Paripalan (youth community), Palana Neuro Sync (neurological clinical portal). Built with Next.js 14, React, TypeScript, Django & AWS.",
    keywords: [
        "Abhijith P A projects",
        "Abi Solutions projects",
        "Start Visa",
        "Start Visa developer",
        "House of Vaz",
        "House of Vaz e-commerce",
        "Yuva Paripalan",
        "Yuva Paripalan website",
        "Palana Neuro Sync",
        "Palana Neuro Sync developer",
        "Visa Application System",
        "E-Commerce Development",
        "HealthTech Clinical Portal",
        "Next.js Developer Kerala",
        "Full Stack Developer India",
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
        siteName: "Abhijith P A — Abi Solutions",
        title: "Projects by Abhijith P A | Start Visa, House of Vaz, Yuva Paripalan, Palana Neuro Sync",
        description:
            "Live production apps: Start Visa, House of Vaz E-Commerce, Yuva Paripalan, Palana Neuro Sync. Built with Next.js, React, TypeScript & AWS by Abhijith P A.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Projects by Abhijith P A — Start Visa, House of Vaz, Yuva Paripalan, Palana Neuro Sync",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Projects — Abhijith P A | Start Visa, House of Vaz, Yuva Paripalan, Palana Neuro Sync",
        description:
            "Production apps with real users: Start Visa, House of Vaz, Yuva Paripalan, Palana Neuro Sync. Built with Next.js & React by Abi Solutions.",
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
        name: "Projects by Abhijith P A — Abi Solutions",
        description:
            "Selected production-grade web applications, e-commerce stores, visa processing platforms, and clinical systems built by Abhijith P A (Abi Solutions) using React, Next.js, TypeScript, Django, Python, and AWS.",
        url: "https://abisolutions.online/projects",
        author: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
        },
        publisher: {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "Abi Solutions",
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@type": "WebApplication",
                        name: "Start Visa",
                        description:
                            "Comprehensive visa assistance and global immigration solution with automated eligibility assessments, document processing, and consultation scheduling. Built with Next.js 14, TypeScript & Tailwind CSS.",
                        url: "https://www.startvisa.com/",
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
                    position: 2,
                    item: {
                        "@type": "WebApplication",
                        name: "House of Vaz",
                        description:
                            "High-conversion luxury lifestyle and fashion e-commerce storefront with dynamic catalogue filtering, shopping bag state, and payment integrations. Built with Next.js, React & Tailwind CSS.",
                        url: "https://houseofvaz.com/",
                        applicationCategory: "ShoppingApplication",
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
                        name: "Yuva Paripalan",
                        description:
                            "Youth empowerment and community development portal with program onboarding, volunteer management, and event schedules. Built with Next.js, TypeScript & PostgreSQL.",
                        url: "https://www.yuvaparipalan.com/",
                        applicationCategory: "SocialApplication",
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
                        name: "Palana Neuro Sync",
                        description:
                            "Neurological care and clinical synchronization platform connecting clinicians with patient assessments and appointment bookings. Built with React, Next.js & REST APIs.",
                        url: "https://palananeurosync.com/",
                        applicationCategory: "HealthApplication",
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
