"use client";

import { FormEvent, useState } from "react";
import { sendVisitorMessage } from "../lib/send-message";
import { FadeIn } from "./motion/RevealText";
import {
    Send,
    Mail,
    Phone,
    MapPin,
    MessageSquare,
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

/** Extra SubmitEvent members added by WebMCP (Chrome early preview). */
type AgentSubmitEvent = {
    agentInvoked?: boolean;
    respondWith?: (result: Promise<unknown>) => void;
};

/**
 * WebMCP declarative attributes. They are not in React's DOM typings yet,
 * so they are spread as plain attributes (React passes them through).
 */
const formToolAttrs = {
    toolname: "send_message_to_abhijith",
    tooldescription:
        "Send a project enquiry or question to Abhijith P A (Abi Solutions). He replies by email, usually within 24 hours.",
} as Record<string, string>;

const paramAttr = (description: string) =>
    ({ toolparamdescription: description }) as Record<string, string>;

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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // WebMCP: when an AI agent submits the form (after the user clicks
        // Submit), report the outcome back to the agent as the tool result.
        const native = event.nativeEvent as SubmitEvent & AgentSubmitEvent;
        const validationErrors = validate(form);
        setErrors(validationErrors);
        setSubmitError(null);
        if (Object.keys(validationErrors).length > 0) {
            setSubmitted(false);
            if (!native.agentInvoked) return;
            native.respondWith?.(
                Promise.resolve(
                    `Not sent. Fix these fields: ${Object.entries(
                        validationErrors,
                    )
                        .map(([k, v]) => `${k} (${v})`)
                        .join(", ")}`,
                ),
            );
            return;
        }
        const result = sendMessage();
        if (native.agentInvoked) native.respondWith?.(result);
    };

    const sendMessage = async (): Promise<string> => {
        try {
            setSubmitting(true);
            await sendVisitorMessage({
                name: form.name,
                email: form.email,
                message: form.message,
                subject: "New Contact Form Submission",
            });
            setSubmitted(true);
            setForm(initialState);
            return "Message sent to Abhijith P A. He usually replies within 24 hours.";
        } catch (error) {
            console.error("Error:", error);
            setSubmitError("Something went wrong. Please try again later.");
            setSubmitted(false);
            return "Message could not be sent. Try again later, or email abhijithabhijith1999@gmail.com.";
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
        "mt-2 w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-base sm:text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent";

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative bg-background text-ink py-20 sm:py-24 lg:py-32"
        >
            <div className="container-width relative">
                {/* Section header */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs font-bold text-accent">
                            06
                        </span>
                        <span className="hairline h-px w-10 shrink-0" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Contact</span>
                    </div>
                    <span className="mt-5 block h-px w-full bg-line lg:mt-6" />
                </div>

                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
                    {/* Left Info Column */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                                Start a Project
                            </span>
                            <h2
                                id="contact-heading"
                                className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-ink"
                            >
                                Let&apos;s build something solid.
                            </h2>
                            <FadeIn className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-ink-muted sm:text-base">
                                <p>
                                    Available for technical builds: full stack web
                                    applications, AI workflows, and ERP systems.
                                    Send your project requirements and I will respond within 24 hours.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Quick WhatsApp Action Card */}
                        <FadeIn>
                            <a
                                href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I%20would%20like%20to%20discuss%20a%20project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 sm:p-4 transition-colors hover:border-line2"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-line bg-surface2 text-accent-emerald shrink-0">
                                        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </span>
                                    <div className="min-w-0 pr-2">
                                        <span className="block font-display text-xs sm:text-sm font-bold tracking-tight text-ink truncate transition-colors group-hover:text-accent">
                                            Direct WhatsApp
                                        </span>
                                        <span className="mt-0.5 block font-mono text-[10px] text-ink-muted truncate">
                                            Quick response · +91 99613 16468
                                        </span>
                                    </div>
                                </div>
                                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line text-ink-muted text-xs transition-colors group-hover:text-accent shrink-0">
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </span>
                            </a>
                        </FadeIn>

                        {/* Contact Methods List */}
                        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5">
                            <ul className="space-y-3 sm:space-y-4 font-mono text-xs">
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
                                            className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-4 border-b border-line pb-2.5 sm:pb-3 last:border-b-0 last:pb-0"
                                        >
                                            <div className="flex items-center gap-2 text-ink-muted">
                                                <Icon className="h-3.5 w-3.5 text-accent shrink-0" />
                                                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em]">
                                                    {item.k}
                                                </span>
                                            </div>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="link-underline text-ink transition hover:text-accent font-medium truncate text-xs sm:text-[13px]"
                                                >
                                                    {item.v}
                                                </a>
                                            ) : (
                                                <span className="text-ink truncate text-xs sm:text-[13px]">{item.v}</span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-[10.5px] sm:text-[11px] text-ink-muted">
                            <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                            <span>Average response turnaround under 24 hours</span>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <FadeIn>
                        <form
                            id="contact-form"
                            name="contact"
                            aria-label="Contact form"
                            onSubmit={handleSubmit}
                            noValidate
                            {...formToolAttrs}
                            className="rounded-xl bg-surface border border-line p-5 sm:p-7"
                        >
                            <div className="mb-6 flex items-center justify-between border-b border-line pb-3 font-mono text-[11px] text-ink-muted">
                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Direct Message Form
                                </span>
                                <span>24h reply</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        {...paramAttr(
                                            "Full name of the person sending the message.",
                                        )}
                                        value={form.name}
                                        onChange={(e) =>
                                            handleChange("name", e.target.value)
                                        }
                                        className={inputClasses}
                                        placeholder="Jane Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 font-mono text-[11px] text-rose-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        {...paramAttr(
                                            "Email address where Abhijith should send his reply.",
                                        )}
                                        value={form.email}
                                        onChange={(e) =>
                                            handleChange("email", e.target.value)
                                        }
                                        className={inputClasses}
                                        placeholder="jane@company.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 font-mono text-[11px] text-rose-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted"
                                    >
                                        Project Scope & Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        {...paramAttr(
                                            "What the project is about: goals, features, timeline and budget if known.",
                                        )}
                                        value={form.message}
                                        onChange={(e) =>
                                            handleChange("message", e.target.value)
                                        }
                                        className={inputClasses}
                                        placeholder="Tell me about your product requirements, timeline, and goals..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 font-mono text-[11px] text-rose-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                            >
                                {submitting ? (
                                    <span className="font-mono text-xs">
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        <span>Send message</span>
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </button>

                            {submitted && !submitError && (
                                <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 p-3 font-mono text-xs text-accent-emerald">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>Message successfully sent. I will respond within 24 hours.</span>
                                </div>
                            )}
                            {submitError && (
                                <p className="mt-4 font-mono text-xs text-rose-600">
                                    ✗ {submitError}
                                </p>
                            )}
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
