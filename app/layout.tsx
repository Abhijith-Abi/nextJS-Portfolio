import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "../components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Abhijith P A | Frontend Developer Portfolio",
    description:
        "Portfolio of Abhijith P A, a frontend engineer specializing in React, Next.js, and modern web experiences.",
    metadataBase: new URL("https://example.com"),
    openGraph: {
        title: "Abhijith P A | Frontend Developer",
        description:
            "3+ years building immersive, performant web applications with React and Next.js.",
        url: "https://example.com",
        siteName: "Abhijith Portfolio",
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
        <html lang="en" className="dark">
            <body
                className={`${inter.className} bg-background text-slate-100 antialiased`}
            >
                <div className="background-orbit background-orbit-1" />
                <div className="background-orbit background-orbit-2" />
                <div className="background-orbit background-orbit-3" />
                <CursorFollower />
                {children}
            </body>
        </html>
    );
}
