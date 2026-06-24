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
    // Generate a gradient based on the post's first tag
    const tagGradients: Record<string, string> = {
        React: "from-indigo-600 via-purple-600 to-pink-500",
        "Next.js": "from-blue-600 via-indigo-500 to-violet-500",
        TypeScript: "from-blue-500 via-sky-500 to-cyan-500",
        Django: "from-emerald-500 via-teal-500 to-cyan-500",
        ERP: "from-orange-500 via-rose-500 to-pink-600",
        HRMS: "from-amber-500 via-orange-500 to-red-500",
        Payroll: "from-amber-500 via-orange-500 to-red-500",
        AlgoBiz: "from-fuchsia-500 via-purple-500 to-indigo-500",
        Performance: "from-cyan-500 via-blue-500 to-indigo-600",
        AI: "from-violet-600 via-purple-600 to-fuchsia-500",
    };
    const firstTag = post.tags[0] || "React";
    const gradient =
        tagGradients[firstTag] || "from-indigo-600 via-purple-600 to-pink-500";

    return (
        <div
            className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${gradient}`}
        >
            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>\")",
                    backgroundSize: "100px 100px",
                }}
            />
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            {/* Glow orbs */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-[80px]" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-[60px]" />
            {/* Accent lines */}
            <div className="absolute left-8 top-8 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
            <div className="absolute bottom-8 right-8 h-px w-24 bg-gradient-to-l from-white/40 to-transparent" />
            {/* Center content */}
            <div className="relative flex h-full flex-col items-center justify-center px-8">
                <div className="mb-3 flex items-center gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="max-w-lg text-center font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {post.title}
                </h3>
                <p className="mt-3 rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
                    AlgoBiz · {new Date(post.date).getFullYear()}
                </p>
            </div>
            {/* Corner decorations */}
            <div className="absolute left-6 top-6 h-5 w-5 border-l-2 border-t-2 border-white/25 rounded-tl" />
            <div className="absolute right-6 top-6 h-5 w-5 border-r-2 border-t-2 border-white/25 rounded-tr" />
            <div className="absolute bottom-6 left-6 h-5 w-5 border-b-2 border-l-2 border-white/25 rounded-bl" />
            <div className="absolute bottom-6 right-6 h-5 w-5 border-b-2 border-r-2 border-white/25 rounded-br" />
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
