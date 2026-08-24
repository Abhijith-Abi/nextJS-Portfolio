"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioPhotos, PhotoItem } from "@/lib/photos";
import { Camera, MapPin, Calendar, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { FadeIn } from "./motion/RevealText";

type CategoryFilter = "All" | "Portraits" | "Workspace" | "Engineering" | "Founder";

const categories: CategoryFilter[] = ["All", "Portraits", "Workspace", "Engineering", "Founder"];

export function PhotoGallery() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    const filteredPhotos = activeCategory === "All"
        ? portfolioPhotos
        : portfolioPhotos.filter((p) => p.category === activeCategory);

    const selectedPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

    const handlePrev = () => {
        if (selectedPhotoIndex === null) return;
        setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    };

    const handleNext = () => {
        if (selectedPhotoIndex === null) return;
        setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    };

    return (
        <section id="gallery" className="relative py-16 sm:py-20">
            {/* Header */}
            <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Camera className="h-3 w-3" />
                        Visual Portfolio & Media
                    </div>
                    <h2 className="font-display text-[clamp(2rem,5.5vw,3.8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">EXPLORE THE</span>
                        <span className="block text-accent">
                            MEDIA GALLERY.
                        </span>
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
                        Portraits, workspace captures, and engineering journey of Abhijith P A — Founder & Full Stack Engineer at Abi Solutions.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-surface/80 border border-white/[0.08] backdrop-blur-md">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => {
                                setActiveCategory(cat);
                                setSelectedPhotoIndex(null);
                            }}
                            className={`rounded-xl px-3.5 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer ${
                                activeCategory === cat
                                    ? "bg-accent text-white font-semibold shadow-glow-sm"
                                    : "text-ink/60 hover:text-ink hover:bg-white/[0.05]"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredPhotos.map((photo, idx) => (
                    <FadeIn key={photo.id} delay={idx * 0.04}>
                        <article
                            itemScope
                            itemType="https://schema.org/ImageObject"
                            onClick={() => setSelectedPhotoIndex(idx)}
                            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/[0.08] bg-surface transition-all duration-300 hover:border-accent/50 hover:shadow-glow-sm"
                        >
                            <meta itemProp="contentUrl" content={photo.src} />
                            <meta itemProp="name" content={photo.title} />
                            <meta itemProp="description" content={photo.alt} />
                            <meta itemProp="caption" content={photo.caption} />

                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-background">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                    quality={90}
                                />

                                {/* Gradient Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                {/* Category Tag */}
                                <div className="absolute top-3.5 left-3.5 z-10">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-background/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/90 backdrop-blur-md">
                                        <Sparkles className="h-2.5 w-2.5 text-accent" />
                                        {photo.category}
                                    </span>
                                </div>

                                {/* Zoom Icon */}
                                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white shadow-glow-sm">
                                        <Maximize2 className="h-4 w-4" />
                                    </span>
                                </div>

                                {/* Bottom Info Overlay */}
                                <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                                    <div className="flex items-center gap-3 font-mono text-[10px] text-accent mb-1.5">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {photo.year}
                                        </span>
                                        <span>·</span>
                                        <span className="flex items-center gap-1 text-ink/60">
                                            <MapPin className="h-3 w-3 text-accent" />
                                            {photo.location}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-base font-bold text-ink group-hover:text-accent transition-colors line-clamp-1">
                                        {photo.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-ink/70 line-clamp-2">
                                        {photo.caption}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </FadeIn>
                ))}
            </div>

            {/* Fullscreen Lightbox Modal (Minimal Frosted Glass) */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] flex items-center justify-center bg-black/75 p-4 backdrop-blur-2xl sm:p-6"
                        onClick={() => setSelectedPhotoIndex(null)}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setSelectedPhotoIndex(null)}
                            className="absolute top-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-[#0e121d]/80 text-ink shadow-lg backdrop-blur-xl transition hover:border-accent hover:bg-accent hover:text-white hover:scale-105"
                            aria-label="Close image preview"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#0e121d]/80 text-ink shadow-lg backdrop-blur-xl transition hover:border-accent hover:bg-accent hover:text-white hover:scale-105"
                            aria-label="Previous photo"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#0e121d]/80 text-ink shadow-lg backdrop-blur-xl transition hover:border-accent hover:bg-accent hover:text-white hover:scale-105"
                            aria-label="Next photo"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[88vh] max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a0d16]/90 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(47,107,255,0.2)] backdrop-blur-3xl"
                        >
                            <div className="relative h-[60vh] sm:h-[70vh] w-[85vw] max-w-3xl bg-black/40">
                                <Image
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.alt}
                                    fill
                                    className="object-contain"
                                    quality={95}
                                    priority
                                />
                            </div>

                            {/* Caption Footer */}
                            <div className="border-t border-white/[0.08] bg-black/50 p-4 sm:p-6 backdrop-blur-2xl">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                                            {selectedPhoto.category} · {selectedPhoto.year}
                                        </span>
                                        <h3 className="mt-1 font-display text-lg font-bold text-white">
                                            {selectedPhoto.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-ink/75 sm:text-sm max-w-xl">
                                            {selectedPhoto.caption}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-ink/70">
                                        <MapPin className="h-3.5 w-3.5 text-accent" />
                                        <span>{selectedPhoto.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
