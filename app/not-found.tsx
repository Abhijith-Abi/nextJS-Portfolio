import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
    title: "404 - Page Not Found | Algobiz Innovations LLP",
    description: "The page you are looking for does not exist or has been moved. Explore Algobiz software development services, location hubs, and client projects.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-canvas text-canvas-fg selection:bg-accent selection:text-black font-sans flex flex-col justify-between">
            <Navbar />

            <div className="container-width pt-32 sm:pt-36 pb-16 sm:pb-20 flex-1 flex flex-col justify-center items-center text-center relative z-10">
                {/* Glowing 404 Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/40 bg-accent/10 text-accent font-mono text-xs sm:text-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    Error Code: 404
                </div>

                <h1 className="text-5xl sm:text-8xl font-extrabold tracking-tight text-foreground font-mono mb-4 text-gradient">
                    404
                </h1>

                <h2 className="text-xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4 max-w-2xl">
                    Page Not Found
                </h2>

                <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed">
                    The page you are looking for might have been moved, renamed, or does not exist. Explore our core services or return to the main homepage.
                </p>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none">
                    <Link
                        href="/"
                        className="px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Return to Homepage</span>
                    </Link>

                    <Link
                        href="/services"
                        className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all flex items-center justify-center"
                    >
                        Browse Services
                    </Link>
                </div>

                {/* Popular Destinations Matrix */}
                <div className="w-full max-w-3xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md text-left">
                    <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-accent mb-3 sm:mb-4 font-bold">
                        Popular Destinations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 text-xs sm:text-sm">
                        <Link href="/services/web-development" className="p-3 rounded-xl border border-border/40 bg-background/50 hover:border-accent/40 text-foreground transition-all">
                            → Web Development
                        </Link>
                        <Link href="/services/software-development" className="p-3 rounded-xl border border-border/40 bg-background/50 hover:border-accent/40 text-foreground transition-all">
                            → Software Engineering
                        </Link>
                        <Link href="/services/ai-development" className="p-3 rounded-xl border border-border/40 bg-background/50 hover:border-accent/40 text-foreground transition-all">
                            → AI & Agent Solutions
                        </Link>
                        <Link href="/locations/kozhikode" className="p-3 rounded-xl border border-border/40 bg-background/50 hover:border-accent/40 text-foreground transition-all">
                            → Kozhikode Hub
                        </Link>
                        <Link href="/locations/kochi" className="p-3 rounded-xl border border-border/40 bg-background/50 hover:border-accent/40 text-foreground transition-all">
                            → Kochi Hub
                        </Link>
                        <Link href="/contact" className="p-3 rounded-xl border border-border/40 bg-background/50 hover:border-accent/40 text-foreground transition-all">
                            → Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
