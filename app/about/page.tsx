import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { AboutSection } from "../../components/AboutSection";
import { ExperienceSection } from "../../components/ExperienceSection";
import { Footer } from "../../components/Footer";
import { portfolioPhotos } from "../../lib/photos";

export const metadata: Metadata = {
    title: "About Abhijith P A — Full Stack Developer & AI Engineer | Founder of Abi Solutions",
    description:
        "Abhijith P A (Abi) is a Full Stack Developer & AI Engineer from Wayanad, Kerala. Founder of Abi Solutions. 4+ years building React, Next.js, Django & AI products. Specializing in ERP, SaaS & AI automation.",
    keywords: [
        "About Abhijith P A",
        "Abhijith PA",
        "Abhijith Developer",
        "Abhijith Software Engineer",
        "Abhijith Full Stack Developer",
        "Abhijith React Developer",
        "Abhijith Next.js Developer",
        "Abhijith Django Developer",
        "Abhijith AI Developer",
        "Abhijith Kerala",
        "Abhijith Wayanad",
        "Abhijith India",
        "Abi Solutions",
        "Abi Solutions founder",
        "Full Stack Developer Kerala",
        "AI Developer India",
        "AI Engineer India",
        "Software Engineer Kerala",
        "Abhijith P A Photos",
        "Abhijith Developer Images",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/about",
    },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://abisolutions.online/about",
        siteName: "Abhijith P A — Abi Solutions",
        title: "About Abhijith P A — Full Stack Developer & AI Engineer | Abi Solutions",
        description:
            "4+ years shipping production web apps & AI products. Founder of Abi Solutions. React, Next.js, Django, AI specialist from Wayanad, Kerala.",
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
        title: "About Abhijith P A — Abi Solutions Founder | Full Stack Developer",
        description:
            "Full Stack Developer & AI Engineer. Founder of Abi Solutions. Building ERP, SaaS & AI products from Kerala.",
        images: ["/og-image.jpg", "/profile.jpg"],
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
        "@type": "AboutPage",
        name: "About Abhijith P A — Full Stack Developer & AI Engineer",
        description:
            "Abhijith P A is a Full Stack Developer and AI Engineer from Wayanad, Kerala, India. Founder of Abi Solutions. Specializing in React, Next.js, Django, Python, AWS, ERP development, SaaS products, and AI automation.",
        url: "https://abisolutions.online/about",
        mainEntity: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
            alternateName: [
                "Abi",
                "Abhijith PA",
                "AP Abhijith",
                "Abijith",
                "Abhijith Developer",
                "Abhijith Full Stack Developer",
                "Abhijith Kerala",
                "Abhijith Wayanad",
            ],
            jobTitle: "Full Stack Developer & AI Engineer",
            description:
                "Full Stack Developer and AI Engineer with 4+ years of experience building production web applications, ERP systems, SaaS platforms, HRMS, and AI automation products. Founder of Abi Solutions.",
            image: portfolioPhotos.map((p) => `https://abisolutions.online${p.src}`),
            url: "https://abisolutions.online",
            email: "abhijithabhijith1999@gmail.com",
            telephone: "+919961316468",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Wayanad",
                addressRegion: "Kerala",
                addressCountry: "IN",
            },
            worksFor: {
                "@type": "Organization",
                "@id": "https://abisolutions.online/#organization",
                name: "Abi Solutions",
            },
            founder: {
                "@type": "Organization",
                "@id": "https://abisolutions.online/#organization",
                name: "Abi Solutions",
            },
            sameAs: [
                "https://github.com/Abhijith-Abi",
                "https://www.linkedin.com/in/abhijith-pa/",
                "https://abisolutions.online",
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
                name: "About Abhijith P A",
                item: "https://abisolutions.online/about",
            },
        ],
    },
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <AboutSection />
                <ExperienceSection />
                <Footer />
            </div>
        </main>
    );
}
