import type { Metadata } from "next";
import { Inter, Space_Mono, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SmoothScroll } from "../components/SmoothScroll";
import { SwCleanup } from "../components/SwCleanup";
import { Loader } from "../components/Loader";
import { CursorFollower } from "../components/CursorFollower";
import { CommandPalette } from "../components/CommandPalette";
import { portfolioPhotos } from "../lib/photos";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space",
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-serif",
    display: "swap",
});

export const viewport = {
    themeColor: "#0A0A0B",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://abisolutions.online"),
    title: {
        default: "Abhijith P A — Web Developer in Wayanad, Kerala | Full Stack & AI Engineer | Abi Solutions",
        template: "%s | Abhijith P A",
    },
    description:
        "Hire Abhijith P A (Abi Solutions) — the best web developer in Wayanad, Kerala. Full Stack Developer & AI Engineer building React & Next.js websites, ERP systems, SaaS platforms and AI automation. Serving Kalpetta, Sulthan Bathery, Mananthavady, Kozhikode, Kochi & remote worldwide.",
    keywords: [
        "Abhijith P A",
        "Abhijith PA",
        "Abhijith",
        "Abhijith Developer",
        "Abhijith Software Engineer",
        "Abhijith Full Stack Developer",
        "Abhijith React Developer",
        "Abhijith Next.js Developer",
        "Abhijith Django Developer",
        "Abhijith AI Developer",
        "Abhijith Portfolio",
        "Abhijith Kerala",
        "Abhijith Wayanad",
        "Abhijith India",
        "Abi Solutions",
        "AlgoBiz",
        "Algobiz",
        "AlgoBiz LLP",
        "AlgoBiz Technologies",
        "AlgoBiz Solutions",
        "AlgoBiz Web Development",
        "AlgoBiz AI Development",
        "AlgoBiz ERP Development",
        "React Developer",
        "Next.js Developer",
        "Django Developer",
        "Full Stack Developer",
        "Tegain",
        "Abhijith Tegain",
        "Tegain Developer",
        "Ribos",
        "Ribos Developer",
        "Full Stack Developer",
        "Full Stack Developer Kerala",
        "Full Stack Developer India",
        "React Developer Kerala",
        "React Developer India",
        "Next.js Developer Kerala",
        "Next.js Developer India",
        "Django Developer Kerala",
        "Django Developer India",
        "Python Developer",
        "AWS Developer",
        "TypeScript Developer",
        "AI Developer India",
        "AI Engineer India",
        "ERP Developer",
        "SaaS Developer",
        "HOSFACE",
        "Finwage",
        "STEYP",
        "best developer in Wayanad",
        "best software developer in Wayanad",
        "best web developer in Wayanad",
        "best full stack developer in Wayanad",
        "best React developer in Wayanad",
        "best Next.js developer in Wayanad",
        "best coder in Wayanad",
        "top developer in Wayanad",
        "web developer Wayanad",
        "web developer in Wayanad",
        "web developer Kalpetta",
        "web developer Sulthan Bathery",
        "web developer Mananthavady",
        "web developer Vythiri",
        "website developer in Wayanad",
        "website designer Wayanad",
        "web designer Wayanad",
        "software developer in Wayanad",
        "software development company in Wayanad",
        "web development company in Wayanad",
        "website development company in Wayanad",
        "freelance web developer Wayanad",
        "freelance web developer in Wayanad",
        "freelancer in Wayanad",
        "next js developer Wayanad",
        "node js developer Wayanad",
        "typescript developer Wayanad",
        "app developer Wayanad",
        "mobile app developer Wayanad",
        "ecommerce website developer Wayanad",
        "ai developer Wayanad",
        "ai engineer Wayanad",
        "chatbot development Wayanad",
        "saas developer Wayanad",
        "software company Wayanad",
        "website development Wayanad",
        "hire web developer Wayanad",
        "hire software developer Wayanad",
        "freelance developer in Wayanad",
        "custom software development Wayanad",
        "ERP developer Wayanad",
        "AI software developer Wayanad",
        "website developer near Kalpetta",
        "website developer near Sulthan Bathery",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    category: "technology",
    verification: { google: "google008d788f2689e4cb" },
    alternates: {
        canonical: "https://abisolutions.online",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online",
        siteName: "Abhijith P A — Abi Solutions",
        title: "Abhijith P A | Web Developer in Wayanad, Kerala | Founder of Abi Solutions",
        description:
            "Best web developer in Wayanad, Kerala. Founder of Abi Solutions. Building custom websites, ERP, SaaS & AI automation for businesses in Kalpetta, Sulthan Bathery, Mananthavady, Kozhikode & across Kerala. React, Next.js, Django & AWS.",
        images: [
            {
                url: "https://abisolutions.online/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — Full Stack Developer & AI Engineer | Founder of Abi Solutions",
                type: "image/jpeg",
            },
            {
                url: "https://abisolutions.online/profile.jpg",
                width: 800,
                height: 800,
                alt: "Abhijith P A - Full Stack Developer & AI Engineer",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Abhijith P A | Web Developer in Wayanad, Kerala | Founder of Abi Solutions",
        description:
            "Best web developer in Wayanad, Kerala. Founder of Abi Solutions. Building custom websites, ERP, SaaS & AI automation for businesses in Kalpetta, Sulthan Bathery, Mananthavady, Kozhikode & across Kerala. React, Next.js, Django & AWS.",
        images: [
            {
                url: "https://abisolutions.online/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — Full Stack Developer Portfolio | Abi Solutions",
            },
            {
                url: "https://abisolutions.online/profile.jpg",
                width: 800,
                height: 800,
                alt: "Abhijith P A - Full Stack Developer & AI Engineer",
            },
        ],
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
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "48x48" },
            { url: "/icon0.svg", type: "image/svg+xml" },
            { url: "/icon1.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    other: {
        "google-site-verification": "google008d788f2689e4cb",
        "theme-color": "#0A0A0B",
        "msapplication-TileColor": "#0A0A0B",
    },
};

const globalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://abisolutions.online/#website",
            url: "https://abisolutions.online",
            name: "Abhijith P A — Abi Solutions",
            description:
                "Portfolio of Abhijith P A — Full Stack Developer & AI Engineer, Founder of Abi Solutions.",
            publisher: {
                "@type": "Person",
                "@id": "https://abisolutions.online/#person",
            },
            inLanguage: "en",
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://abisolutions.online/#localbusiness",
            name: "Abi Solutions",
            alternateName: [
                "Abi Solutions Wayanad",
                "Web Developer in Wayanad",
                "Web Developer Wayanad",
                "Website Development Wayanad",
                "Software Company Wayanad",
                "Freelance Web Developer Wayanad",
            ],
            url: "https://abisolutions.online",
            description:
                "Abi Solutions is a web development and software company in Wayanad, Kerala, founded by Abhijith P A. Custom website development, ERP systems, SaaS platforms, AI automation, ecommerce and mobile apps for businesses in Kalpetta, Sulthan Bathery, Mananthavady, Vythiri, Kozhikode, Kochi and remote worldwide.",
            email: "abhijithabhijith1999@gmail.com",
            telephone: "+919961316468",
            priceRange: "₹₹",
            image: "https://abisolutions.online/og-image.jpg",
            logo: "https://abisolutions.online/icon-512.png",
            founder: {
                "@type": "Person",
                "@id": "https://abisolutions.online/#person",
            },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Wayanad",
                addressRegion: "Kerala",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 11.6854,
                longitude: 76.132,
            },
            hasMap: "https://www.google.com/maps/place/Wayanad,+Kerala",
            areaServed: [
                { "@type": "Place", name: "Wayanad, Kerala" },
                { "@type": "Place", name: "Kalpetta" },
                { "@type": "Place", name: "Sulthan Bathery" },
                { "@type": "Place", name: "Mananthavady" },
                { "@type": "Place", name: "Vythiri" },
                { "@type": "Place", name: "Meppadi" },
                { "@type": "Place", name: "Kozhikode, Kerala" },
                { "@type": "Place", name: "Kochi, Kerala" },
                { "@type": "Place", name: "Kerala, India" },
            ],
            serviceType: [
                "Website Development",
                "Custom Web Application Development",
                "Full Stack Development",
                "React & Next.js Development",
                "ERP Software Development",
                "SaaS Platform Development",
                "AI Automation & Chatbots",
                "Ecommerce Development",
                "Mobile App Development",
                "SEO & Digital Presence",
            ],
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                    ],
                    opens: "09:00",
                    closes: "19:00",
                },
            ],
            sameAs: [
                "https://github.com/Abhijith-Abi",
                "https://www.linkedin.com/in/abhijith-pa/",
            ],
        },
        {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
            alternateName: [
                "Abhijith PA",
                "Abhijith",
                "Abijith",
                "Abi",
                "Abhi",
                "Abhi Developer",
                "Abi Developer",
                "Abhijith P A Developer",
                "Abhijith PA Developer",
            ],
            url: "https://abisolutions.online",
            image: [
                "https://abisolutions.online/avatar.jpg",
                "https://abisolutions.online/profile.jpg",
                ...portfolioPhotos.map(
                    (p) => `https://abisolutions.online${p.src}`,
                ),
            ],
            jobTitle: "Full Stack Developer & AI Engineer",
            knowsAbout: [
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Django",
                "Python",
                "AWS",
                "ERP Development",
                "SaaS Development",
                "AI Automation",
                "Telegram Bots",
                "WhatsApp Bots",
            ],
            description:
                "Abhijith P A is a Full Stack Developer & AI Engineer, Founder of AlgoBiz, Kerala. Specializing in React, Next.js, Django, Python, AWS, and AI systems.",
            email: "abhijithabhijith1999@gmail.com",
            telephone: "+919961316468",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Wayanad",
                addressRegion: "Kerala",
                addressCountry: "IN",
            },
            sameAs: [
                "https://github.com/Abhijith-Abi",
                "https://www.linkedin.com/in/abhijith-pa/",
                "https://abisolutions.online",
            ],
            alumniOf: [
                {
                    "@type": "Organization",
                    name: "AlgoBiz",
                    url: "https://algobiz.in/",
                },
                {
                    "@type": "Organization",
                    name: "Steyp",
                    url: "https://steyp.com/",
                },
                {
                    "@type": "Organization",
                    name: "Tegain",
                    url: "https://tegain.com/",
                },
                {
                    "@type": "Organization",
                    name: "Talrop",
                    url: "https://www.talrop.com/",
                },
            ],
            worksFor: {
                "@type": "Organization",
                "@id": "https://abisolutions.online/#organization",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "Abi Solutions",
            alternateName: [
                "AbiSolutions",
                "AlgoBiz",
                "Algobiz",
                "AlgoBiz LLP",
                "AlgoBiz Technologies",
            ],
            url: "https://abisolutions.online",
            logo: "https://abisolutions.online/icon-512.png",
            description:
                "Abi Solutions (and AlgoBiz) is a software development and AI engineering agency founded by Abhijith P A. Custom ERP systems, SaaS platforms, AI automated systems, and high-performance React & Next.js applications.",
            founder: {
                "@type": "Person",
                "@id": "https://abisolutions.online/#person",
            },
            sameAs: [
                "https://github.com/Abhijith-Abi",
                "https://www.linkedin.com/in/abhijith-pa/",
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            style={{
                colorScheme: "dark",
                // Hard lock: graphite survives even if cached CSS goes stale
                backgroundColor: "#0A0A0B",
            }}
            className={`${inter.variable} ${spaceMono.variable} ${instrumentSerif.variable}`}
        >
            <body
                className="bg-background font-sans text-ink antialiased"
                style={{ backgroundColor: "#0A0A0B" }}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(globalJsonLd),
                    }}
                />
                <Loader />
                <SwCleanup />
                <CommandPalette />
                <div className="ambient-glow" aria-hidden />
                <div className="grain-overlay" aria-hidden />
                <CursorFollower />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
            <GoogleAnalytics gaId="G-T08NBY5C52" />
        </html>
    );
}
