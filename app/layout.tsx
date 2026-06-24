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
        default: "Abhijith P A — Full Stack Developer & AI Engineer | AlgoBiz",
        template: "%s | Abhijith P A",
    },
    description:
        "Abhijith P A is a Full Stack Developer & AI Engineer at AlgoBiz, Kerala. React, Next.js, Django, AWS. Ex-Talrop, Steyp, Tegain, Ribos. ERP, SaaS & AI automation.",
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
        "AlgoBiz",
        "Algobiz",
        "AlgoBiz LLP",
        "AlgoBiz Technologies",
        "AlgoBiz Solutions",
        "AlgoBiz Web Development",
        "AlgoBiz AI Development",
        "AlgoBiz ERP Development",
        "Talrop",
        "Abhijith Talrop",
        "Talrop Developer",
        "Talrop Alumni",
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
        "Abi Solutions",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "AlgoBiz",
    category: "technology",
    verification: { google: "google008d788f2689e4cb" },
    alternates: {
        canonical: "https://abisolutions.online",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online",
        siteName: "Abhijith P A — AlgoBiz",
        title: "Abhijith P A | Full Stack Developer & AI Engineer | Founder of AlgoBiz",
        description:
            "Full Stack Developer from Wayanad, Kerala. Founder of AlgoBiz. Ex-Talrop, Tegain & Ribos. Building ERP, SaaS, AI automation & web products with React, Next.js, Django & AWS.",
        images: [
            {
                url: "https://abisolutions.online/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — Full Stack Developer & AI Engineer | Founder of AlgoBiz",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Abhijith P A | Full Stack Developer & AI Engineer | AlgoBiz",
        description:
            "React, Next.js, Django & AWS developer. Founder of AlgoBiz. Ex-Talrop, Tegain, Ribos. Building ERP, SaaS & AI products from Kerala, India.",
        images: [
            {
                url: "https://abisolutions.online/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — Full Stack Developer Portfolio | AlgoBiz",
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
        "theme-color": "#0f1119",
        "msapplication-TileColor": "#0f1119",
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
