import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { AboutSection } from "../../components/AboutSection";
import { ExperienceSection } from "../../components/ExperienceSection";

export const metadata: Metadata = {
    title: "About Abhijith P A — Developer at Algobiz | Ex-Talrop",
    description:
        "Abhijith P A is a Frontend Engineer at Algobiz, formerly at Talrop & Steyp. 3+ years building React, Next.js & Django apps. Based in Kerala, India.",
    keywords: [
        "About Abhijith P A",
        "Abhijith PA",
        "Abhijith Algobiz",
        "Abhijith Talrop",
        "Abhijith Steyp",
        "Abi developer",
        "AP Abhijith",
        "Abijith developer",
        "Full Stack Developer Kerala",
        "Frontend Engineer India",
        "React Developer Kerala",
        "Next.js Developer India",
        "Django Developer",
        "AWS Developer",
        "Web Developer Kerala",
        "Freelance Developer India",
        "Algobiz developer",
        "Talrop alumni",
        "Former Talrop employee",
        "Ex Talrop employee",
        "Steyp developer",
        "Talrop developer",
        "UI Engineer Algobiz",
        "Software Engineer Kerala",
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
        siteName: "Abi Solutions",
        title: "About Abhijith P A — Algobiz Engineer | Ex-Talrop & Steyp",
        description:
            "3+ years shipping production web apps. Frontend Engineer at Algobiz, ex-Talrop & Steyp. React, Next.js, Django specialist from Kerala.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — About | Full Stack Developer from Kerala India",
                type: "image/jpeg",
            },
        ],
        firstName: "Abhijith",
        lastName: "P A",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Abhijith P A — Algobiz | Ex-Talrop & Steyp",
        description:
            "Frontend Engineer building React & Next.js apps. 3+ years at Algobiz, Talrop, and Steyp.",
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
    "@type": "AboutPage",
    name: "About Abhijith P A",
    description:
        "Abhijith P A (Abi) — Full Stack Developer from Kerala, India. Frontend Engineer at Algobiz with experience at Talrop and Steyp.",
    url: "https://abisolutions.online/about",
    mainEntity: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abhijith PA", "AP Abhijith", "Abijith"],
        jobTitle: "Frontend Engineer",
        worksFor: {
            "@type": "Organization",
            name: "Algobiz",
            url: "https://algobiz.com",
        },
        alumniOf: [
            {
                "@type": "Organization",
                name: "Talrop",
                url: "https://talrop.com",
            },
            {
                "@type": "Organization",
                name: "Steyp",
                url: "https://steyp.com",
            },
        ],
        knowsAbout: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Django",
            "Python",
            "AWS",
            "Tailwind CSS",
            "Node.js",
            "GSAP",
            "Framer Motion",
            "Three.js",
            "PostgreSQL",
            "Firebase",
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "IN",
        },
        sameAs: [
            "https://github.com/Abhijith-Abi",
            "https://www.linkedin.com/in/abhijith-pa/",
            "https://abisolutions.online",
        ],
    },
};

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
            </div>
        </main>
    );
}
