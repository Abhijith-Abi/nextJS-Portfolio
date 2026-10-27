"use client";

import {
    Star,
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
        <SectionWrapper id="testimonials" index="05" label="Reviews">
            {/* Header */}
            <div className="mb-10 sm:mb-16 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="section-eyebrow mb-5 flex items-center gap-2">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        Client Trust & Delivery
                    </span>
                    <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tight text-ink">
                        Proven impact,{" "}
                        <span className="display-serif-italic text-accent">
                            client words.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm md:text-base leading-relaxed text-ink-muted">
                        Delivering scalable software systems that accelerate revenue, eliminate operational friction, and stand up to rigorous enterprise production demands.
                    </p>
                </FadeIn>
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
                {testimonials.map((t, idx) => (
                    <FadeIn key={t.author} delay={idx * 0.08}>
                        <figure className="surface relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-line2 hover:shadow-card">
                            <div>
                                {/* Rating stars & category */}
                                <div className="mb-4 flex items-center justify-between gap-2 border-b border-line pb-4 sm:mb-5">
                                    <div className="flex items-center gap-1">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-accent text-accent"
                                            />
                                        ))}
                                    </div>
                                    <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-accent border border-line bg-background px-2.5 py-0.5 rounded-full">
                                        {t.category}
                                    </span>
                                </div>

                                {/* Quote */}
                                <blockquote className="font-serif text-sm sm:text-base italic leading-relaxed text-ink">
                                    “{t.quote}”
                                </blockquote>
                            </div>

                            {/* Author & results metric footer */}
                            <figcaption className="mt-6 border-t border-line pt-4 sm:mt-8 sm:pt-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="min-w-0 pr-2">
                                        <p className="font-display text-xs sm:text-sm font-bold tracking-tight text-ink truncate">
                                            {t.author}
                                        </p>
                                        <p className="mt-0.5 font-mono text-[10px] sm:text-[11px] text-ink-muted truncate">
                                            {t.role} · <span className="text-accent">{t.company}</span>
                                        </p>
                                    </div>

                                    {/* Metric */}
                                    <div className="text-right shrink-0">
                                        <span className="block font-display text-base sm:text-lg font-bold leading-none text-accent">
                                            {t.metric}
                                        </span>
                                        <span className="font-mono text-[7.5px] sm:text-[8px] uppercase tracking-[0.14em] text-ink/40">
                                            {t.metricLabel}
                                        </span>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
}
