import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SmoothScroll } from "../components/SmoothScroll";
import { Loader } from "../components/Loader";
import { CursorFollower } from "../components/CursorFollower";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://abisolutions.online"),
    title: {
        default: "Abhijith P A — Full Stack Developer | Abi Solutions",
        template: "%s | Abhijith P A",
    },
    description:
        "Abhijith P A (Abi) is a Full Stack Developer specializing in React, Next.js, Django & AWS. Ex-Talrop, Steyp, Algobiz. Hire for web apps, ERP & SaaS from Kerala, India.",
    keywords: [
        "Abhijith P A",
        "Abhijith PA",
        "Abhijith",
        "Abijith",
        "Abi",
        "AP Abhijith",
        "Abi Solutions",
        "Abisolutions",
        "Full Stack Developer",
        "React Developer",
        "React.js Developer",
        "Next.js Developer",
        "Frontend Developer",
        "Backend Developer",
        "Django Developer",
        "Python Developer",
        "AWS Developer",
        "Software Engineer",
        "SaaS Developer",
        "ERP Developer",
        "CRM Developer",
        "Ecommerce Developer",
        "Freelance Developer",
        "Web Developer",
        "Web Developer Kerala",
        "Freelance Developer India",
        "Talrop",
        "Talrop Developer",
        "Talrop Alumni",
        "Steyp",
        "Steyp Developer",
        "Algobiz",
        "Algobiz Developer",
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
        siteName: "Abi Solutions",
        title: "Abhijith P A (Abi) — Full Stack Developer | React, Next.js, Django, AWS",
        description:
            "Full Stack Developer from Kerala. Ex-Talrop, Steyp & Algobiz. Building web apps, ERP systems & AI products with React, Next.js, Django & AWS.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — Full Stack Developer Portfolio | Abi Solutions",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abhijith P A — Full Stack Developer | Abi Solutions",
        description:
            "React, Next.js, Django & AWS developer. Ex-Talrop, Steyp, Algobiz. Available for freelance & full-time.",
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
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon0.svg", type: "image/svg+xml" },
            { url: "/icon1.png", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    other: {
        "google-site-verification": "google008d788f2689e4cb",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`dark ${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}
        >
            <body className="bg-background font-sans text-ink antialiased">
                <Loader />
                <div className="ambient-glow" aria-hidden />
                <div className="grain-overlay" aria-hidden />
                <CursorFollower />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
            <GoogleAnalytics gaId="G-T08NBY5C52" />
        </html>
    );
}
