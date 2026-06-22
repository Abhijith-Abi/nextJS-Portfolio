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
        default: "Abhijith P A — Full Stack Developer | React, Next.js, AI",
        template: "%s | Abhijith P A",
    },
    description:
        "Full Stack Developer specializing in React.js, Next.js, TypeScript, and AI-driven products. 3+ years crafting ERP platforms, healthcare systems, and immersive web experiences from Kerala, India.",
    keywords: [
        "Abhijith P A",
        "Full Stack Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "Frontend Engineer Kerala",
        "UI Engineer India",
        "AI Web Developer",
        "ERP Developer",
        "Framer Motion",
        "GSAP Developer",
        "Three.js Developer",
        "Tailwind CSS",
        "Web Application Developer",
        "Portfolio",
        "Abi Solutions",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abhijith P A",
    category: "technology",
    verification: { google: "google008d788f2689e4cb" },
    alternates: {
        canonical: "https://abisolutions.online",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online",
        siteName: "Abhijith P A — Full Stack Developer",
        title: "Abhijith P A — Full Stack Developer | React, Next.js, AI",
        description:
            "3+ years building production-grade web apps, ERP platforms, AI products, and motion-rich interfaces. Based in Kerala, India.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A — Full Stack Developer Portfolio",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abhijith P A — Full Stack Developer",
        description:
            "Building AI systems, ERP platforms, and immersive digital products with React, Next.js & TypeScript.",
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
        icon: [{ url: "/profile.jpg", type: "image/jpeg" }],
        shortcut: "/profile.jpg",
        apple: [{ url: "/profile.jpg", sizes: "180x180", type: "image/jpeg" }],
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
