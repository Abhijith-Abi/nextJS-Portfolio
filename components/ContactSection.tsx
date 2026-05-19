"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";
import { MagneticButton } from "./motion/MagneticButton";

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
        "mt-2 w-full rounded-lg border border-line bg-background px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent focus:ring-2 focus:ring-accent/20";

    return (
        <SectionWrapper id="contact" index="06" label="Contact">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                <div className="space-y-10">
                    <div>
                        <p className="section-eyebrow">Get in touch</p>
                        <h2 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">LET&apos;S BUILD</span>
                            <span className="block">
                                SOMETHING{" "}
                                <span className="text-accent">REAL.</span>
                            </span>
                        </h2>
                        <FadeIn className="mt-6 max-w-md text-base leading-relaxed text-ink/70 lg:text-lg">
                            <p>
                                I&apos;m open to frontend roles and freelance
                                work — especially on products that value craft,
                                motion, and design systems. Most replies go out
                                within a day.
                            </p>
                        </FadeIn>
                    </div>

                    <ul className="space-y-4 font-mono text-sm">
                        {[
                            {
                                k: "Email",
                                v: "abhijithabhijith1999@gmail.com",
                                href: "mailto:abhijithabhijith1999@gmail.com",
                            },
                            {
                                k: "Phone",
                                v: "+91 99613 16468",
                                href: "tel:+919961316468",
                            },
                            {
                                k: "Based",
                                v: "Kerala, India · Remote-friendly",
                            },
                            {
                                k: "LinkedIn",
                                v: "/in/abhijith-pa ↗",
                                href: "https://www.linkedin.com/in/abhijith-pa/",
                            },
                            {
                                k: "GitHub",
                                v: "@Abhijith-Abi ↗",
                                href: "https://github.com/Abhijith-Abi",
                            },
                        ].map((item) => (
                            <li
                                key={item.k}
                                className="flex items-start justify-between gap-4 border-b border-line pb-4 last:border-b-0"
                            >
                                <span className="text-[10px] uppercase tracking-[0.32em] text-ink/40">
                                    {item.k}
                                </span>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={
                                            item.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noreferrer"
                                        className="text-ink transition hover:text-accent"
                                    >
                                        {item.v}
                                    </a>
                                ) : (
                                    <span className="text-ink">{item.v}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <FadeIn>
                    <form
                        onSubmit={handleSubmit}
                        className="surface rounded-3xl p-6 sm:p-8"
                    >
                        <div className="mb-6 flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                            <span>~/message.tsx</span>
                            <span className="text-accent">draft</span>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        handleChange("name", e.target.value)
                                    }
                                    className={inputClasses}
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-rose-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        handleChange("email", e.target.value)
                                    }
                                    className={inputClasses}
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-rose-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) =>
                                        handleChange("message", e.target.value)
                                    }
                                    className={inputClasses}
                                    placeholder="Tell me about your project, role, or idea..."
                                />
                                {errors.message && (
                                    <p className="mt-1.5 text-xs text-rose-400">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <MagneticButton
                            type="submit"
                            disabled={submitting}
                            className="btn-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {submitting ? (
                                <span className="font-mono text-xs uppercase tracking-[0.28em]">
                                    Sending…
                                </span>
                            ) : (
                                <>
                                    <span>Send message</span>
                                    <span>→</span>
                                </>
                            )}
                        </MagneticButton>

                        {submitted && !submitError && (
                            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                                ✓ Message sent. I&apos;ll be in touch.
                            </p>
                        )}
                        {submitError && (
                            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-rose-400">
                                ✗ {submitError}
                            </p>
                        )}
                    </form>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
}
