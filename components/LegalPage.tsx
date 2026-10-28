import { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { formatSiteDate } from "../lib/site";

type LegalPageProps = {
    title: string;
    intro: string;
    updated: string;
    children: ReactNode;
};

/** Shared shell for plain-text policy pages (privacy, terms). */
export function LegalPage({ title, intro, updated, children }: LegalPageProps) {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen pt-24">
                <article className="container-width max-w-3xl py-16 sm:py-24">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                            <li>
                                <Link href="/" className="link-underline hover:text-ink">
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden className="text-accent">
                                /
                            </li>
                            <li aria-current="page" className="text-ink">
                                {title}
                            </li>
                        </ol>
                    </nav>
                    <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.05] tracking-tight text-ink">
                        {title}
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted">
                        {intro}
                    </p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                        Last updated{" "}
                        <time dateTime={updated}>{formatSiteDate(updated)}</time>
                    </p>
                    <div className="legal-body mt-12 space-y-10 text-sm leading-relaxed text-ink-muted sm:text-[15px] [&_a]:text-accent [&_a:hover]:underline [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
                        {children}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
