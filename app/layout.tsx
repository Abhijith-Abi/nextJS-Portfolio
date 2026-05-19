import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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
    title: "Abhijith P A — Building Modern Digital Experiences",
    description:
        "Full Stack Developer crafting AI systems, ERP platforms, scalable applications, and immersive digital products.",
    metadataBase: new URL("https://abisolutions.online"),
    verification: { google: "google008d788f2689e4cb" },
    openGraph: {
        title: "Abhijith P A — Building Modern Digital Experiences",
        description: "Portfolio of Abhijith P A — Full Stack Developer.",
        url: "https://abisolutions.online",
        siteName: "Abhijith P A",
        type: "website",
    },
    icons: {
        icon: "/profile.jpg",
        shortcut: "/profile.jpg",
        apple: "/profile.jpg",
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
        </html>
    );
}
