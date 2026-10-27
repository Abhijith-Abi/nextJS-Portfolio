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
        <main className="relative min-h-screen bg-background text-ink selection:bg-accent selection:text-white font-sans flex flex-col justify-between">
            <Navbar />

            <div className="container-width pt-32 sm:pt-36 pb-16 sm:pb-20 flex-1 flex flex-col justify-center items-center text-center relative z-10">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-line bg-surface-card/60 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                    Error Code: 404
                </div>

                <h1 className="font-display font-bold tracking-tight leading-[0.9] text-[clamp(5rem,16vw,11rem)] gradient-text mb-6">
                    404
                </h1>

                <h2 className="font-display font-bold tracking-tight text-ink text-3xl sm:text-5xl mb-3 sm:mb-4 max-w-2xl leading-[1.05]">
                    Page{" "}
                    <span className="display-serif-italic">Not Found</span>
                </h2>

                <p className="text-sm sm:text-lg text-ink-muted max-w-xl mb-8 sm:mb-10 leading-relaxed">
                    The page you are looking for might have been moved, renamed, or does not exist. Explore our core services or return to the main homepage.
                </p>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none">
                    <Link
                        href="/"
                        className="btn-primary px-6 py-3.5 text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Return to Homepage</span>
                    </Link>

                    <Link
                        href="/services"
                        className="btn-ghost px-6 py-3.5 text-sm font-semibold flex items-center justify-center"
                    >
                        Browse Services
                    </Link>
                </div>

                {/* Popular Destinations */}
                <div className="w-full max-w-3xl p-5 sm:p-8 rounded-3xl bento-card text-left">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 sm:mb-5">
                        Popular Destinations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 text-xs sm:text-sm">
                        <Link href="/services/web-development" className="p-3 rounded-xl border border-line bg-surface-card/60 hover:border-line2 text-ink transition-all">
                            → <span className="link-underline">Web Development</span>
                        </Link>
                        <Link href="/services/software-development" className="p-3 rounded-xl border border-line bg-surface-card/60 hover:border-line2 text-ink transition-all">
                            → <span className="link-underline">Software Engineering</span>
                        </Link>
                        <Link href="/services/ai-development" className="p-3 rounded-xl border border-line bg-surface-card/60 hover:border-line2 text-ink transition-all">
                            → <span className="link-underline">AI & Agent Solutions</span>
                        </Link>
                        <Link href="/locations/kozhikode" className="p-3 rounded-xl border border-line bg-surface-card/60 hover:border-line2 text-ink transition-all">
                            → <span className="link-underline">Kozhikode Hub</span>
                        </Link>
                        <Link href="/locations/kochi" className="p-3 rounded-xl border border-line bg-surface-card/60 hover:border-line2 text-ink transition-all">
                            → <span className="link-underline">Kochi Hub</span>
                        </Link>
                        <Link href="/contact" className="p-3 rounded-xl border border-line bg-surface-card/60 hover:border-line2 text-ink transition-all">
                            → <span className="link-underline">Get in Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
