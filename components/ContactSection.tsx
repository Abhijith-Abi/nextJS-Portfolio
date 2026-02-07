"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "./SectionWrapper";

type FormState = {
    name: string;
    email: string;
    message: string;
};

const initialState: FormState = {
    name: "",
    email: "",
    message: "",
};

export function ContactSection() {
    const [form, setForm] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validate = (values: FormState) => {
        const nextErrors: Partial<FormState> = {};
        if (!values.name.trim()) nextErrors.name = "Name is required";
        if (!values.email.trim()) {
            nextErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            nextErrors.email = "Enter a valid email";
        }
        if (!values.message.trim()) nextErrors.message = "Message is required";
        return nextErrors;
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

            // Send email using EmailJS
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.send(
                    serviceId,
                    templateId,
                    {
                        from_name: form.name,
                        from_email: form.email,
                        message: form.message,
                    },
                    publicKey,
                );
            } else {
                console.warn(
                    "EmailJS credentials not found in environment variables.",
                );
            }

            // Save to Firebase
            await addDoc(collection(db, "contacts"), {
                name: form.name,
                email: form.email,
                message: form.message,
                createdAt: serverTimestamp(),
            });

            setSubmitted(true);
            setForm(initialState);
        } catch (error) {
            console.error("Error saving contact message:", error);
            setSubmitError("Something went wrong. Please try again.");
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

    return (
        <SectionWrapper id="contact">
            <div className="space-y-8">
                <div className="mb-8 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Contact
                    </p>
                    <h2 className="text-2xl font-semibold sm:text-3xl">
                        Let&apos;s build something together
                    </h2>
                    <p className="max-w-xl text-sm text-muted sm:text-base">
                        Have a project, role, or idea in mind? Share a few
                        details and I&apos;ll get back to you. I&apos;m open to
                        full-time roles and freelance collaborations.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                    <form
                        onSubmit={handleSubmit}
                        className="card-surface space-y-4 p-5 sm:p-6"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs font-medium text-slate-200"
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
                                className="mt-1 w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-rose-400">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs font-medium text-slate-200"
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
                                className="mt-1 w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-rose-400">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-xs font-medium text-slate-200"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={form.message}
                                onChange={(e) =>
                                    handleChange("message", e.target.value)
                                }
                                className="mt-1 w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                                placeholder="Tell me about your project, role, or idea..."
                            />
                            {errors.message && (
                                <p className="mt-1 text-xs text-rose-400">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                        >
                            {submitting ? "Sending..." : "Send Message"}
                        </button>

                        {submitted && !submitError && (
                            <p className="mt-2 text-xs text-emerald-400">
                                Thanks for reaching out! I&apos;ll get back to
                                you soon.
                            </p>
                        )}

                        {submitError && (
                            <p className="mt-2 text-xs text-rose-400">
                                {submitError}
                            </p>
                        )}
                    </form>

                    <aside className="space-y-4 text-sm text-muted">
                        <div className="card-surface p-5 sm:p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Direct contact
                            </p>
                            <p className="mt-3 text-sm text-slate-100">
                                Email:{" "}
                                <a
                                    href="mailto:abhijithabhijith1999@gmail.com"
                                    className="text-accent hover:underline"
                                >
                                    abhijithabhijith1999@gmail.com
                                </a>
                            </p>
                            <p className="mt-1 text-sm text-slate-100">
                                Phone:{" "}
                                <a
                                    href="tel:+919961316468"
                                    className="text-accent hover:underline"
                                >
                                    +91 99613 16468
                                </a>
                            </p>
                            <p className="mt-4 text-xs text-muted">
                                Location: Kerala, India · Open to remote and
                                hybrid roles.
                            </p>
                        </div>

                        <div className="card-surface p-5 sm:p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Social
                            </p>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/abhijith-pa/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition hover:text-accent"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Abhijith-Abi"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition hover:text-accent"
                                    >
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                            <p className="mt-4 text-xs text-muted">
                                I&apos;m especially interested in frontend-heavy
                                roles focused on React, Next.js, design systems,
                                and motion design.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </SectionWrapper>
    );
}
