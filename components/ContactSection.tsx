"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import { MagneticButton } from "./motion/MagneticButton";
import {
    Send,
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Sparkles,
    CheckCircle2,
    Clock,
    ArrowUpRight,
} from "lucide-react";

type FormState = {
    name: string;
    email: string;
    message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactSection() {
    const [form, setForm] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validate = (values: FormState) => {
        const next: Partial<FormState> = {};
        if (!values.name.trim()) next.name = "Name is required";
        if (!values.email.trim()) {
            next.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            next.email = "Enter a valid email";
        }
        if (!values.message.trim()) next.message = "Message is required";
        return next;
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const validationErrors = validate(form);
        setErrors(validationErrors);
        setSubmitError(null);
        if (Object.keys(validationErrors).length > 0) {
            setSubmitted(false);
            return;
        }
        try {
            setSubmitting(true);
            let emailSent = false;
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const autoReplyTemplateId =
                process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                try {
                    await emailjs.send(
                        serviceId,
                        templateId,
                        {
                            name: form.name,
                            from_name: form.name,
                            user_name: form.name,
                            email: form.email,
                            from_email: form.email,
                            user_email: form.email,
                            subject: "New Contact Form Submission",
                            message: form.message,
                        },
                        publicKey,
                    );
                    emailSent = true;
                    if (autoReplyTemplateId) {
                        emailjs
                            .send(
                                serviceId,
                                autoReplyTemplateId,
                                {
                                    to_name: form.name,
                                    to_email: form.email,
                                    name: form.name,
                                    email: form.email,
                                    subject: "Thank you for contacting me",
                                    message: form.message,
                                },
                                publicKey,
                            )
                            .catch((err) =>
                                console.warn("Auto-reply failed:", err),
                            );
                    }
                } catch (emailError) {
                    console.error("EmailJS Error:", emailError);
                    throw new Error("Failed to send email.");
                }
            }

            try {
                await addDoc(collection(db, "contacts"), {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    createdAt: serverTimestamp(),
                });
            } catch (firebaseError) {
                console.error("Firebase Error:", firebaseError);
                if (!emailSent && !serviceId) {
                    throw new Error("Failed to save message.");
                }
            }

            setSubmitted(true);
            setForm(initialState);
        } catch (error) {
            console.error("Error:", error);
            setSubmitError("Something went wrong. Please try again later.");
            setSubmitted(false);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (field: keyof FormState, value: string): void => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const inputClasses =
        "mt-2 w-full rounded-xl border border-white/10 bg-background/90 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent focus:ring-2 focus:ring-accent/20";

    return (
        <SectionWrapper id="contact" index="07" label="Contact">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
                {/* Left Info Column */}
                <div className="space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                            <Sparkles className="h-3 w-3" />
                            Start a Project or Collaboration
                        </div>
                        <h2 className="font-display text-[clamp(2.2rem,6.5vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">LET&apos;S ENGINEER</span>
                            <span className="block text-accent">
                                SOMETHING REMARKABLE.
                            </span>
                        </h2>
                        <FadeIn className="mt-4 max-w-md text-sm leading-relaxed text-ink/75 sm:text-base">
                            <p>
                                Open for full-stack web applications, AI automation workflows, ERP engineering, and technical consulting.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Quick WhatsApp Action Card */}
                    <FadeIn>
                        <a
                            href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I%20would%20like%20to%20discuss%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="surface flex items-center justify-between rounded-2xl p-4 border border-accent-emerald/30 bg-accent-emerald/5 hover:bg-accent-emerald/10 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-emerald/20 text-accent-emerald">
                                    <MessageSquare className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="font-display text-sm font-bold text-ink group-hover:text-accent-emerald transition-colors">
                                        Direct WhatsApp Chat
                                    </p>
                                    <p className="font-mono text-[10px] text-ink/50">
                                        Instant response · +91 99613 16468
                                    </p>
                                </div>
                            </div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-emerald text-black font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                                <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </a>
                    </FadeIn>

                    {/* Contact Methods List */}
                    <div className="surface rounded-2xl p-5 border border-white/[0.08]">
                        <ul className="space-y-4 font-mono text-xs">
                            {[
                                {
                                    k: "Email",
                                    v: "abhijithabhijith1999@gmail.com",
                                    href: "mailto:abhijithabhijith1999@gmail.com",
                                    icon: Mail,
                                },
                                {
                                    k: "Phone",
                                    v: "+91 99613 16468",
                                    href: "tel:+919961316468",
                                    icon: Phone,
                                },
                                {
                                    k: "Location",
                                    v: "Wayanad, Kerala · Remote Worldwide",
                                    icon: MapPin,
                                },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        key={item.k}
                                        className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0"
                                    >
                                        <div className="flex items-center gap-2 text-ink/50">
                                            <Icon className="h-3.5 w-3.5 text-accent" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">
                                                {item.k}
                                            </span>
                                        </div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-ink transition hover:text-accent font-medium truncate"
                                            >
                                                {item.v}
                                            </a>
                                        ) : (
                                            <span className="text-ink truncate">{item.v}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] text-ink/60">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        <span>Average response turnaround under 24 hours</span>
                    </div>
                </div>

                {/* Right Form Column */}
                <FadeIn>
                    <form
                        onSubmit={handleSubmit}
                        className="surface-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-2xl"
                    >
                        <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-accent" />
                                ~/contact_form.tsx
                            </span>
                            <span className="text-accent">secure transmission</span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        handleChange("name", e.target.value)
                                    }
                                    className={inputClasses}
                                    placeholder="Jane Doe"
                                />
                                {errors.name && (
                                    <p className="mt-1 font-mono text-[11px] text-rose-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        handleChange("email", e.target.value)
                                    }
                                    className={inputClasses}
                                    placeholder="jane@company.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 font-mono text-[11px] text-rose-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50"
                                >
                                    Project Scope & Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) =>
                                        handleChange("message", e.target.value)
                                    }
                                    className={inputClasses}
                                    placeholder="Tell me about your product requirements, timeline, and goals..."
                                />
                                {errors.message && (
                                    <p className="mt-1 font-mono text-[11px] text-rose-400">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <MagneticButton
                            type="submit"
                            disabled={submitting}
                            className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer shadow-glow-sm"
                        >
                            {submitting ? (
                                <span className="font-mono text-xs uppercase tracking-[0.24em]">
                                    Transmitting…
                                </span>
                            ) : (
                                <>
                                    <span>Dispatch Message</span>
                                    <Send className="h-4 w-4" />
                                </>
                            )}
                        </MagneticButton>

                        {submitted && !submitError && (
                            <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 p-3 font-mono text-xs text-accent-emerald">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Message successfully sent. I will respond within 24 hours.</span>
                            </div>
                        )}
                        {submitError && (
                            <p className="mt-4 font-mono text-xs text-rose-400">
                                ✗ {submitError}
                            </p>
                        )}
                    </form>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
}
