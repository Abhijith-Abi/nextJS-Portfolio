import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { ContactSection } from "../../components/ContactSection";

export const metadata: Metadata = {
    title: "Contact Abhijith P A — Hire AlgoBiz | Full Stack Developer & AI Engineer",
    description:
        "Contact Abhijith P A (AlgoBiz) for ERP development, SaaS platforms, AI automation, WhatsApp bots, HRMS, and custom web applications. Full Stack Developer & AI Engineer available for remote work from Wayanad, Kerala, India.",
    keywords: [
        "Contact Abhijith P A",
        "Hire Abhijith P A",
        "Hire AlgoBiz",
        "AlgoBiz contact",
        "Hire Full Stack Developer",
        "Hire React Developer Kerala",
        "Hire Next.js Developer India",
        "Hire Django Developer Kerala",
        "Hire AI Developer India",
        "Hire AI Engineer",
        "Hire ERP Developer",
        "Hire SaaS Developer",
        "Freelance Web Developer Kerala",
        "React Developer hire India",
        "Next.js Developer contact",
        "Django Developer contact",
        "AI Developer contact",
        "WhatsApp Automation developer",
        "Telegram Bot developer",
        "HRMS developer hire",
        "ERP developer hire India",
        "Web Developer India remote",
        "Software Engineer contact Kerala",
        "senior developer hire",
        "Tegain developer hire",
        "Ribos developer hire",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "AlgoBiz",
    alternates: {
        canonical: "https://abisolutions.online/contact",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/contact",
        siteName: "Abhijith P A — AlgoBiz",
        title: "Contact Abhijith P A | Hire AlgoBiz — Full Stack & AI Development",
        description:
            "Reach out for ERP, SaaS, AI automation, or custom web development. Full Stack Developer & AI Engineer from Kerala, India.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Abhijith P A — Hire AlgoBiz for Full Stack & AI Development",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Contact Abhijith P A | Hire AlgoBiz — Full Stack & AI Engineer",
        description:
            "ERP, SaaS, AI automation, HRMS. React, Django, AWS. Available remote from Kerala, India.",
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
        "@type": "ContactPage",
        name: "Contact Abhijith P A — AlgoBiz",
        description:
            "Get in touch with Abhijith P A (AlgoBiz) for Full Stack Development, AI Engineering, ERP systems, SaaS platforms, HRMS, AI automation, WhatsApp bots, and Telegram bots. Available for freelance, contract, and full-time roles.",
        url: "https://abisolutions.online/contact",
        mainEntity: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
            alternateName: [
                "Abi",
                "Abhijith PA",
                "AlgoBiz",
                "Abhijith Developer",
            ],
            email: "abhijithabhijith1999@gmail.com",
            telephone: "+919961316468",
            jobTitle: "Full Stack Developer & AI Engineer",
            url: "https://abisolutions.online",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Wayanad",
                addressRegion: "Kerala",
                addressCountry: "IN",
            },
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "abhijithabhijith1999@gmail.com",
                    telephone: "+919961316468",
                    availableLanguage: ["English", "Malayalam", "Hindi"],
                    areaServed: ["IN", "US", "AE", "GB"],
                },
                {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    email: "abhijithabhijith1999@gmail.com",
                    telephone: "+919961316468",
                    availableLanguage: ["English", "Malayalam"],
                },
            ],
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
                name: "Contact",
                item: "https://abisolutions.online/contact",
            },
        ],
    },
];

export default function ContactPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <ContactSection />
            </div>
        </main>
    );
}
