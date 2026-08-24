"use client";

import { motion } from "framer-motion";
import {
    Star,
    Quote,
    CheckCircle2,
    Building2,
    Sparkles,
    ArrowUpRight,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type Testimonial = {
    quote: string;
    author: string;
    role: string;
    company: string;
    metric: string;
    metricLabel: string;
    category: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Abhijith architected our entire multi-tenant ERP system from scratch. His mastery in Next.js 14 and Django helped us replace 4 disparate legacy tools with a unified real-time dashboard. The delivery was ahead of schedule.",
        author: "Mohammed Rasheed",
        role: "Chief Technology Officer",
        company: "Apex Global Logistics",
        metric: "+45%",
        metricLabel: "Operational Efficiency",
        category: "Enterprise ERP",
        rating: 5,
    },
    {
        quote:
            "Working with Abhijith on our AI customer support automation was transformative. The custom WhatsApp & Telegram bot handles over 8,000 monthly inquiries with zero lag and unprecedented accuracy.",
        author: "Ananya Sharma",
        role: "Head of Product",
        company: "Vaz Health Tech",
        metric: "8,000+",
        metricLabel: "Automated Chats / Mo",
        category: "AI Automation",
        rating: 5,
    },
    {
        quote:
            "Abhijith is a rare engineer who marries deep backend rigor with pixel-perfect frontend aesthetics. Our web platform load times dropped below 0.8s, and user retention increased significantly.",
        author: "Kiran Varma",
        role: "Founder & CEO",
        company: "Nexora SaaS Hub",
        metric: "100/100",
        metricLabel: "Core Web Vitals",
        category: "Full Stack SaaS",
        rating: 5,
    },
];

export function TestimonialsSection() {
    return (
        <SectionWrapper id="testimonials" index="07" label="Reviews">
            {/* Header */}
            <div className="mb-10 sm:mb-16 grid items-end gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        Client Trust & Delivery
                    </div>
                    <h2 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">PROVEN IMPACT &</span>
                        <span className="block text-accent">
                            CLIENT REVIEWS.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-ink/75 md:text-right lg:text-lg">
                        Delivering scalable software systems that accelerate revenue, eliminate operational friction, and stand up to rigorous enterprise production demands.
                    </p>
                </FadeIn>
            </div>

            {/* Testimonials Bento Grid */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
                {testimonials.map((t, idx) => (
                    <FadeIn key={t.author} delay={idx * 0.08}>
                        <div className="surface relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08] p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-glow-sm">
                            <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />

                            <div>
                                {/* Rating Stars & Category */}
                                <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-3 sm:pb-4 mb-4 sm:mb-5">
                                    <div className="flex items-center gap-1">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-accent text-accent"
                                            />
                                        ))}
                                    </div>
                                    <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 px-2 sm:px-2.5 py-0.5 rounded-full font-semibold">
                                        {t.category}
                                    </span>
                                </div>

                                {/* Quote */}
                                <p className="text-xs sm:text-sm leading-relaxed text-ink/85 italic">
                                    "{t.quote}"
                                </p>
                            </div>

                            {/* Author & Results Metric Footer */}
                            <div className="mt-6 sm:mt-8 border-t border-white/[0.06] pt-4 sm:pt-5">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="min-w-0 pr-2">
                                        <p className="font-display text-xs sm:text-sm font-bold text-ink truncate">
                                            {t.author}
                                        </p>
                                        <p className="font-mono text-[10px] sm:text-[11px] text-ink/50 truncate">
                                            {t.role} · <span className="text-accent">{t.company}</span>
                                        </p>
                                    </div>

                                    {/* Metric Pill */}
                                    <div className="text-right shrink-0">
                                        <span className="font-display text-base sm:text-lg font-black text-accent block leading-none">
                                            {t.metric}
                                        </span>
                                        <span className="font-mono text-[7.5px] sm:text-[8px] uppercase tracking-wider text-ink/40">
                                            {t.metricLabel}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
}
