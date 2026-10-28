"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import type { BlogPost } from "../lib/blog";
import { BlogList } from "./BlogList";

/** WebMCP declarative attributes (not in React's DOM typings yet). */
const searchToolAttrs = {
    toolname: "search_blog",
    tooldescription:
        "Search Abhijith P A's engineering blog for articles on React, Next.js, Django, AI, ERP and SaaS development.",
    toolautosubmit: "",
} as Record<string, string>;

function matches(post: BlogPost, terms: string[]): boolean {
    const haystack = [post.title, post.description, ...post.tags, ...post.keywords]
        .join(" ")
        .toLowerCase();
    return terms.every((t) => haystack.includes(t));
}

/**
 * Blog list with `?q=` filtering. Backs the WebSite SearchAction in the
 * root layout JSON-LD (https://abisolutions.online/blog?q={term}).
 */
export function BlogSearch({ posts }: { posts: BlogPost[] }) {
    const query = (useSearchParams().get("q") ?? "").trim();
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = terms.length ? posts.filter((p) => matches(p, terms)) : posts;

    return (
        <>
            <form
                role="search"
                action="/blog"
                method="get"
                {...searchToolAttrs}
                className="mb-8 flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 focus-within:border-accent"
            >
                <label htmlFor="blog-search" className="sr-only">
                    Search articles
                </label>
                <Search className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <input
                    id="blog-search"
                    name="q"
                    type="search"
                    defaultValue={query}
                    placeholder="Search articles: Next.js, Django, AI…"
                    {...({ toolparamdescription: "Topic or keywords to search for." } as Record<string, string>)}
                    className="w-full bg-transparent py-1.5 text-sm text-ink outline-none placeholder:text-ink/35"
                />
                <button
                    type="submit"
                    className="rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:text-ink"
                >
                    Search
                </button>
            </form>

            {terms.length > 0 && (
                <p role="status" className="mb-6 font-mono text-xs text-ink-muted">
                    {filtered.length} article{filtered.length === 1 ? "" : "s"} for “{query}”
                </p>
            )}

            {filtered.length > 0 ? (
                <BlogList posts={filtered} />
            ) : (
                <p className="text-sm text-ink-muted">
                    No articles match that search yet. Try a broader word, or{" "}
                    <Link href="/blog" className="text-accent hover:underline">
                        see all articles
                    </Link>
                    .
                </p>
            )}
        </>
    );
}
