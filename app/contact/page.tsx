import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { ContactSection } from "../../components/ContactSection";

export const metadata: Metadata = {
    title: "Contact Abhijith P A — Hire Full Stack Developer",
    description:
        "Contact Abhijith P A (Abi Solutions) for freelance projects, frontend roles, or collaborations. Full Stack Developer available for remote work from Kerala, India.",
    keywords: [
        "Contact Abhijith P A",
        "Hire Abhijith P A",
        "Hire Abi",
        "Abi Solutions contact",
        "Hire Full Stack Developer",
        "Hire React Developer",
        "Hire Next.js Developer",
        "Hire Django Developer",
        "Hire AWS Developer",
        "Freelance Web Developer Kerala",
        "React Developer hire India",
        "Next.js Developer contact",
        "Web Developer India remote",
        "Frontend Engineer hire Kerala",
        "Freelance Developer India contact",
        "Software Engineer contact Kerala",
        "Ex Talrop developer hire",
        "Algobiz engineer contact",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/contact",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/contact",
        siteName: "Abi Solutions",
        title: "Contact Abhijith P A — Available for Projects & Roles",
        description:
            "Reach out for freelance, full-time roles, or collaborations. React, Next.js, Django & AWS developer from Kerala.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Abhijith P A — Full Stack Developer for Hire",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Abhijith P A — Hire Full Stack Developer",
        description:
            "Available for freelance and full-time. React, Django, AWS. Remote-friendly from Kerala, India.",
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
    "@type": "ContactPage",
    name: "Contact Abhijith P A",
    description:
        "Get in touch with Abhijith P A (Abi Solutions) for web development projects, freelance work, or full-time roles.",
    url: "https://abisolutions.online/contact",
    mainEntity: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions", "Abhijith PA"],
        email: "abhijithabhijith1999@gmail.com",
        telephone: "+919961316468",
        jobTitle: "Full Stack Developer",
        url: "https://abisolutions.online",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressRegion: "Kerala",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "abhijithabhijith1999@gmail.com",
            telephone: "+919961316468",
            availableLanguage: ["English", "Malayalam"],
        },
        sameAs: [
            "https://github.com/Abhijith-Abi",
            "https://www.linkedin.com/in/abhijith-pa/",
            "https://abisolutions.online",
        ],
    },
};

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
