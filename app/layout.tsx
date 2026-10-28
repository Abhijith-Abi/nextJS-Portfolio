import type { Metadata } from "next";
import { Inter, Space_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import { CONTACT, SAME_AS, SCHEMA_IDS, SITE_URL } from "../lib/site";
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
        default: "Abhijith P A — Web Developer in Wayanad | Abi Solutions",
        template: "%s | Abhijith P A",
    },
    description:
        "Abhijith P A is a full stack developer and AI engineer in Wayanad, Kerala. Founder of Abi Solutions, building websites, ERP systems and AI automation.",
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
    // Canonical/hreflang are set per page. A canonical here would be inherited
    // by any page without its own and wrongly point it at the homepage.
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

const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: "Wayanad",
    addressRegion: "Kerala",
    addressCountry: "IN",
};

/**
 * Site-wide entity graph. Every cross-reference uses a bare `{ "@id" }` so
 * validators resolve it to the full node instead of reading a nameless stub.
 */
const globalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": SCHEMA_IDS.website,
            url: SITE_URL,
            name: "Abhijith P A — Abi Solutions",
            alternateName: "Abi Solutions",
            description:
                "Portfolio and business website of Abhijith P A, full stack developer and AI engineer, founder of Abi Solutions in Wayanad, Kerala.",
            publisher: { "@id": SCHEMA_IDS.person },
            inLanguage: "en",
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "Person",
            "@id": SCHEMA_IDS.person,
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
            url: SITE_URL,
            image: [
                `${SITE_URL}/profile.jpg`,
                `${SITE_URL}/avatar.jpg`,
                ...portfolioPhotos.map((p) => `${SITE_URL}${p.src}`),
            ],
            jobTitle: "Full Stack Developer & AI Engineer",
            description:
                "Abhijith P A is a full stack developer and AI engineer from Wayanad, Kerala, and the founder of Abi Solutions. He builds websites, ERP systems, SaaS platforms and AI automation with React, Next.js, Django, Python and AWS.",
            email: CONTACT.email,
            telephone: CONTACT.phone,
            address: postalAddress,
            nationality: { "@type": "Country", name: "India" },
            knowsAbout: [
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Django",
                "Python",
                "Node.js",
                "PostgreSQL",
                "AWS",
                "ERP Development",
                "SaaS Development",
                "AI Automation",
                "LLM Integration",
                "WhatsApp Bots",
                "Telegram Bots",
            ],
            hasOccupation: [
                {
                    "@type": "Occupation",
                    name: "Full Stack Developer",
                    occupationalCategory: "15-1252.00",
                    skills: "React, Next.js, TypeScript, Django, Python, Node.js, PostgreSQL, AWS",
                },
                {
                    "@type": "Occupation",
                    name: "AI Engineer",
                    occupationalCategory: "15-2051.00",
                    skills: "AI automation, LLM integration, OpenAI API, WhatsApp and Telegram bots",
                },
            ],
            sameAs: [...SAME_AS, SITE_URL],
            alumniOf: [
                {
                    "@type": "Organization",
                    name: "Steyp",
                    url: "https://steyp.com/",
                    description:
                        "Coding education and software company where Abhijith P A worked as a software engineer from 2022 to 2025.",
                },
                {
                    "@type": "Organization",
                    name: "Tegain",
                    url: "https://tegain.com/",
                    description:
                        "Technology company whose platform Abhijith P A helped engineer.",
                },
                {
                    "@type": "Organization",
                    name: "AlgoBiz",
                    url: "https://algobiz.in/",
                    description:
                        "Software development company associated with Abhijith P A's web, ERP and AI work.",
                },
                {
                    "@type": "Organization",
                    name: "Talrop",
                    url: "https://www.talrop.com/",
                    description:
                        "Technology company where Abhijith P A contributed as a full stack developer.",
                },
            ],
            worksFor: { "@id": SCHEMA_IDS.organization },
        },
        {
            "@type": "Organization",
            "@id": SCHEMA_IDS.organization,
            name: "Abi Solutions",
            alternateName: [
                "AbiSolutions",
                "AlgoBiz",
                "Algobiz",
                "AlgoBiz LLP",
                "AlgoBiz Technologies",
            ],
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/icon-512.png`,
                width: 512,
                height: 512,
            },
            image: `${SITE_URL}/og-image.jpg`,
            description:
                "Abi Solutions is a web development and AI engineering studio in Wayanad, Kerala, founded by Abhijith P A. It builds custom websites, ERP systems, SaaS platforms, AI automation and React and Next.js applications.",
            founder: { "@id": SCHEMA_IDS.person },
            foundingLocation: {
                "@type": "Place",
                name: "Wayanad, Kerala, India",
            },
            address: postalAddress,
            email: CONTACT.email,
            telephone: CONTACT.phone,
            contactPoint: {
                "@type": "ContactPoint",
                telephone: CONTACT.phone,
                email: CONTACT.email,
                contactType: "customer service",
                areaServed: ["IN", "Worldwide"],
                availableLanguage: ["English", "Malayalam"],
            },
            sameAs: SAME_AS,
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": SCHEMA_IDS.localBusiness,
            name: "Abi Solutions",
            alternateName: [
                "Abi Solutions Wayanad",
                "Web Developer in Wayanad",
                "Web Developer Wayanad",
                "Website Development Wayanad",
                "Software Company Wayanad",
                "Freelance Web Developer Wayanad",
            ],
            url: SITE_URL,
            description:
                "Abi Solutions is a web development and software company in Wayanad, Kerala, founded by Abhijith P A. Custom website development, ERP systems, SaaS platforms, AI automation, ecommerce and mobile apps for businesses in Kalpetta, Sulthan Bathery, Mananthavady, Vythiri, Kozhikode, Kochi and remote worldwide.",
            email: CONTACT.email,
            telephone: CONTACT.phone,
            priceRange: "₹₹",
            image: `${SITE_URL}/og-image.jpg`,
            logo: `${SITE_URL}/icon-512.png`,
            founder: { "@id": SCHEMA_IDS.person },
            parentOrganization: { "@id": SCHEMA_IDS.organization },
            address: postalAddress,
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
            openingHours: "Mo-Sa 09:00-19:00",
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
            sameAs: SAME_AS,
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
            <head>
                <link
                    rel="sitemap"
                    type="application/xml"
                    title="Sitemap"
                    href="/sitemap.xml"
                />
            </head>
            <body
                className="bg-background font-sans text-ink antialiased"
                style={{ backgroundColor: "#0A0A0B" }}
            >
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-background focus:outline-none focus:ring-2 focus:ring-ink"
                >
                    Skip to main content
                </a>
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
                <GoogleAnalytics gaId="G-T08NBY5C52" />
            </body>
        </html>
    );
}
