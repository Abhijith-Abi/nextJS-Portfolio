"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost, BlogSection } from "../lib/blog";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

function RenderSection({ section }: { section: BlogSection }) {
    switch (section.type) {
        case "heading":
            return (
                <h2 className="mb-3 mt-8 font-display text-2xl font-bold text-ink">
                    {section.content}
                </h2>
            );
        case "paragraph":
            return (
                <p className="mb-4 text-base leading-relaxed text-ink/70">
                    {section.content}
                </p>
            );
        case "list":
            return (
                <div className="mb-4">
                    {section.content && (
                        <p className="mb-2 text-base leading-relaxed text-ink/70">
                            {section.content}
                        </p>
                    )}
                    <ul className="space-y-2 text-base leading-relaxed text-ink/70">
                        {section.items?.map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        case "code":
            return (
                <pre className="mb-4 overflow-x-auto rounded-xl border border-line bg-background p-4 font-mono text-sm text-ink/80">
                    <code>{section.content}</code>
                </pre>
            );
        default:
            return null;
    }
}

/** Modern generative cover when no image is provided */
function GeneratedCover({ post }: { post: BlogPost }) {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            {/* Gradient orbs */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[80px]" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-purple-500/15 blur-[60px]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[50px]" />
            {/* Accent line */}
            <div className="absolute left-8 top-8 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
            <div className="absolute bottom-8 right-8 h-px w-24 bg-gradient-to-l from-accent to-transparent" />
            {/* Center content */}
            <div className="relative flex h-full flex-col items-center justify-center px-8">
                <div className="mb-3 flex items-center gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="max-w-lg text-center font-display text-2xl font-bold leading-tight text-white/90 sm:text-3xl">
                    {post.title}
                </h3>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70">
                    Abi Solutions · {new Date(post.date).getFullYear()}
                </p>
            </div>
            {/* Corner decorations */}
            <div className="absolute left-6 top-6 h-4 w-4 border-l border-t border-white/10" />
            <div className="absolute right-6 top-6 h-4 w-4 border-r border-t border-white/10" />
            <div className="absolute bottom-6 left-6 h-4 w-4 border-b border-l border-white/10" />
            <div className="absolute bottom-6 right-6 h-4 w-4 border-b border-r border-white/10" />
        </div>
    );
}

export function BlogPostView({ post }: { post: BlogPost }) {
    return (
        <SectionWrapper id="blog-post" index="01" label="Blog">
            <article className="mx-auto max-w-3xl">
                <FadeIn>
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 transition hover:border-accent hover:text-accent"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to Blog
                    </Link>

                    {/* Cover Image */}
                    <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl border border-line sm:h-72 lg:h-80">
                        {post.coverImage ? (
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 720px"
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <GeneratedCover post={post} />
                        )}
                    </div>

                    {/* Header */}
                    <header className="mb-10">
                        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}{" "}
                            · {post.readTime}
                        </p>
                        <h1 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold leading-tight tracking-tight text-ink">
                            {post.title}
                        </h1>
                        <p className="mt-4 text-lg leading-relaxed text-ink/70">
                            {post.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-md border border-line bg-background px-2.5 py-1 font-mono text-[11px] text-ink/70"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div>
                        {post.content.map((section, i) => (
                            <RenderSection key={i} section={section} />
                        ))}
                    </div>
                </FadeIn>

                {/* Footer with back button */}
                <footer className="mt-12 border-t border-line pt-6">
                    <div className="flex items-center justify-between">
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/40">
                            Written by Abhijith P A · Abi Solutions
                        </p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 transition hover:border-accent hover:text-accent"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            All Posts
                        </Link>
                    </div>
                </footer>
            </article>
        </SectionWrapper>
    );
}
