"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "../lib/blog";
import { FadeIn } from "./motion/RevealText";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
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
                            <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
                                {/* Grid pattern */}
                                <div
                                    className="absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                        backgroundSize: "32px 32px",
                                    }}
                                />
                                {/* Gradient orbs */}
                                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-[50px] transition-all duration-700 group-hover:bg-accent/30" />
                                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-purple-500/15 blur-[40px]" />
                                {/* Center tag */}
                                <div className="relative flex h-full flex-col items-center justify-center">
                                    <span className="font-display text-4xl font-extrabold text-white/10 transition group-hover:text-accent/20">
                                        {post.tags[0]?.[0] || "A"}
                                    </span>
                                    <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                                        {post.tags[0] || "Article"}
                                    </span>
                                </div>
                                {/* Corner marks */}
                                <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-white/10" />
                                <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-white/10" />
                            </div>
                        )}
                        {/* Bottom fade */}
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--color-surface,#0a0a0a)] to-transparent" />
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
