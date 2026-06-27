import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { AboutSection } from "../../components/AboutSection";
import { ExperienceSection } from "../../components/ExperienceSection";

export const metadata: Metadata = {
    title: "About Abhijith P A — Full Stack Developer & AI Engineer | Founder of AlgoBiz",
    description:
        "Abhijith P A is a Full Stack Developer & AI Engineer from Wayanad, Kerala. Founder of AlgoBiz. 4+ years building React, Next.js, Django & AI products. Ex-Talrop, Tegain, Ribos. Specializing in ERP, SaaS, HRMS & AI automation.",
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
        "AlgoBiz",
        "Algobiz",
        "AlgoBiz LLP",
        "AlgoBiz Technologies",
        "AlgoBiz founder",
        "Talrop",
        "Abhijith Talrop",
        "Talrop Developer",
        "Talrop Alumni",
        "Talrop Full Stack Developer",
        "Tegain",
        "Abhijith Tegain",
        "Tegain Developer",
        "Tegain Software Engineer",
        "Ribos",
        "Ribos Developer",
        "Ribos Engineer",
        "Full Stack Developer Kerala",
        "Full Stack Developer India",
        "React Developer Kerala",
        "Next.js Developer Kerala",
        "Django Developer Kerala",
        "AI Developer India",
        "AI Engineer India",
        "Software Engineer Kerala",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "AlgoBiz",
    alternates: {
        canonical: "https://abisolutions.online/about",
    },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://abisolutions.online/about",
        siteName: "Abhijith P A — AlgoBiz",
        title: "About Abhijith P A — Full Stack Developer & AI Engineer | AlgoBiz Founder",
        description:
            "4+ years shipping production web apps & AI products. Founder of AlgoBiz. Ex-Talrop, Tegain & Ribos. React, Next.js, Django, AI specialist from Wayanad, Kerala.",
        images: [
            {
                url: "/profile.jpg",
                width: 800,
                height: 800,
                alt: "Abhijith P A — Full Stack Developer & AI Engineer | Founder of AlgoBiz",
                type: "image/jpeg",
            },
        ],
        firstName: "Abhijith",
        lastName: "P A",
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "About Abhijith P A — AlgoBiz Founder | Full Stack Developer & AI Engineer",
        description:
            "Full Stack Developer & AI Engineer. Founder of AlgoBiz. 4+ years at Talrop, Tegain & Ribos. Building ERP, SaaS & AI products from Kerala.",
        images: ["/profile.jpg"],
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
            "Abhijith P A is a Full Stack Developer and AI Engineer from Wayanad, Kerala, India. Founder of AlgoBiz. Previously worked at Talrop, Tegain, Ribos, and Steyp. Specializing in React, Next.js, Django, Python, AWS, ERP development, SaaS products, and AI automation.",
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
                "Abhijith Software Engineer",
                "Abhijith Full Stack Developer",
                "Abhijith Talrop",
                "Abhijith Tegain",
                "Abhijith Kerala",
                "Abhijith Wayanad",
            ],
            jobTitle: "Full Stack Developer & AI Engineer",
            description:
                "Full Stack Developer and AI Engineer with 4+ years of experience building production web applications, ERP systems, SaaS platforms, HRMS, and AI automation products. Founder of AlgoBiz.",
            image: "https://abisolutions.online/profile.jpg",
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
                name: "AlgoBiz",
                alternateName: [
                    "Algobiz",
                    "AlgoBiz LLP",
                    "AlgoBiz Technologies",
                    "AlgoBiz Solutions",
                ],
            },
            founder: {
                "@type": "Organization",
                "@id": "https://abisolutions.online/#organization",
                name: "AlgoBiz",
            },
            alumniOf: [
                {
                    "@type": "Organization",
                    name: "Talrop",
                    url: "https://talrop.com",
                    description:
                        "Technology learning and product company. Abhijith worked as Full Stack Developer building ERP and web applications.",
                },
                {
                    "@type": "Organization",
                    name: "Tegain",
                    url: "https://tegain.com",
                    description:
                        "Technology company. Abhijith contributed as Software Engineer on community and brand platforms.",
                },
                {
                    "@type": "Organization",
                    name: "Ribos",
                    description:
                        "Software company. Abhijith worked on ERP systems and enterprise web applications.",
                },
                {
                    "@type": "Organization",
                    name: "Steyp",
                    url: "https://steyp.com",
                    description:
                        "Coding education platform where Abhijith started his career as Frontend Engineer.",
                },
            ],
            knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Django",
                "Python",
                "AWS",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
                "Three.js",
                "Framer Motion",
                "GSAP",
                "Firebase",
                "Docker",
                "AI Development",
                "WhatsApp Automation",
                "Telegram Automation",
                "ERP Development",
                "SaaS Development",
                "HRMS Development",
            ],
            hasOccupation: [
                {
                    "@type": "Occupation",
                    name: "Full Stack Developer",
                    skills: "React, Next.js, TypeScript, Django, Python, AWS, PostgreSQL, Node.js",
                },
                {
                    "@type": "Occupation",
                    name: "AI Engineer",
                    skills: "AI Automation, WhatsApp Bots, Telegram Bots, OpenAI, LLM Integration",
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
            </div>
        </main>
    );
}
