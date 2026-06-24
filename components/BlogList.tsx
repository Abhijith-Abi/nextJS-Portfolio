"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "../lib/blog";
import { FadeIn } from "./motion/RevealText";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    // Colorful gradient pairs for each blog card
    const gradients = [
        "from-indigo-600 via-purple-600 to-pink-500",
        "from-emerald-500 via-teal-500 to-cyan-500",
        "from-orange-500 via-rose-500 to-pink-600",
        "from-blue-600 via-indigo-500 to-violet-500",
        "from-amber-500 via-orange-500 to-red-500",
        "from-cyan-500 via-blue-500 to-indigo-600",
        "from-fuchsia-500 via-purple-500 to-indigo-500",
        "from-green-500 via-emerald-500 to-teal-600",
    ];
    const gradient = gradients[index % gradients.length];

    return (
        <FadeIn delay={index * 0.05}>
            <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <Link
                    href={`/blog/${post.slug}`}
                    className="bento-card group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                    {/* Cover Image */}
                    <div className="relative h-44 w-full overflow-hidden sm:h-48">
                        {post.coverImage ? (
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div
                                className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${gradient}`}
                            >
                                {/* Noise texture overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                                    style={{
                                        backgroundImage:
                                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>\")",
                                        backgroundSize: "100px 100px",
                                    }}
                                />
                                {/* Grid pattern */}
                                <div
                                    className="absolute inset-0 opacity-[0.08]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                                        backgroundSize: "40px 40px",
                                    }}
                                />
                                {/* Glow orb */}
                                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[40px] transition-all duration-500 group-hover:scale-150 group-hover:bg-white/30" />
                                {/* Center content */}
                                <div className="relative flex h-full flex-col items-center justify-center">
                                    <span className="font-display text-5xl font-black text-white/30 transition group-hover:text-white/50 group-hover:scale-110">
                                        {post.tags[0]?.[0] || "A"}
                                    </span>
                                    <span className="mt-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                                        {post.tags[0] || "Article"}
                                    </span>
                                </div>
                                {/* Corner marks */}
                                <div className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-white/20 rounded-tl" />
                                <div className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-white/20 rounded-tr" />
                                <div className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-white/20 rounded-bl" />
                                <div className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-white/20 rounded-br" />
                            </div>
                        )}
                        {/* Bottom fade into card */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                        {/* Top row */}
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                                {new Date(post.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    },
                                )}
                            </span>
                            <span className="font-mono text-[10px] text-ink/40">
                                {post.readTime}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink transition group-hover:text-accent sm:text-2xl">
                            {post.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-ink/60 sm:text-sm">
                            {post.description}
                        </p>

                        {/* Tags + Read more */}
                        <div className="mt-auto pt-5">
                            <div className="flex flex-wrap gap-1.5">
                                {post.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-md border border-line bg-background px-2 py-0.5 font-mono text-[10px] text-ink/70"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-accent opacity-0 transition group-hover:opacity-100">
                                <span>Read article</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.article>
        </FadeIn>
    );
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
    return (
        <div className="grid auto-rows-[minmax(320px,auto)] grid-cols-1 gap-4 md:grid-cols-2">
            {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
            ))}
        </div>
    );
}
