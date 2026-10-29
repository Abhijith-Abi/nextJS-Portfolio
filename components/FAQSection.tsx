"use client";

import { FormEvent, useMemo, useState } from "react";
import { Search, Send } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { faqAnswerText, homeFaqs, searchFaqs } from "../lib/faq";
import { sendVisitorMessage } from "../lib/send-message";
import { SITE_URL } from "../lib/site";

/**
 * Visible FAQ that mirrors the homepage FAQPage JSON-LD (same source:
 * lib/faq.ts). Question headings + short answers are what answer engines
 * and voice assistants quote, so every entry is server-rendered text.
 *
 * Two WebMCP declarative form tools sit around the list:
 * - `searchFAQ` filters the questions (read-only, agents may auto-submit).
 * - `submitQuestion` sends a new question; it always needs a user click.
 */

/** Extra SubmitEvent members added by WebMCP (Chrome early preview). */
type AgentSubmitEvent = {
    agentInvoked?: boolean;
    respondWith?: (result: Promise<unknown>) => void;
};

/** WebMCP attributes are not in React's DOM typings, so spread them. */
const toolAttrs = (attrs: Record<string, string>) =>
    attrs as Record<string, string>;
const paramAttr = (description: string) =>
    ({ toolparamdescription: description }) as Record<string, string>;

const inputClasses =
    "mt-2 w-full rounded-xl border border-line bg-background px-3.5 py-2.5 text-base text-ink outline-none transition placeholder:text-ink/30 focus:border-accent focus:ring-2 focus:ring-accent/20 sm:text-sm";
const labelClasses =
    "font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50";

type AskState = { name: string; email: string; question: string };
const emptyAsk: AskState = { name: "", email: "", question: "" };

export function FAQSection() {
    const [query, setQuery] = useState("");
    const results = useMemo(() => searchFaqs(query), [query]);
    const visible = useMemo(() => new Set(results.map((f) => f.id)), [results]);

    const [ask, setAsk] = useState<AskState>(emptyAsk);
    const [askStatus, setAskStatus] = useState<
        "idle" | "sending" | "sent" | "error"
    >("idle");
    const [askError, setAskError] = useState<string | null>(null);

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const native = event.nativeEvent as SubmitEvent & AgentSubmitEvent;
        const value = String(
            new FormData(event.currentTarget).get("q") ?? "",
        );
        setQuery(value);
        if (native.agentInvoked) {
            const matches = searchFaqs(value).map((f) => ({
                question: f.question,
                answer: faqAnswerText(f),
                url: `${SITE_URL}/#${f.id}`,
            }));
            native.respondWith?.(Promise.resolve(JSON.stringify(matches)));
        }
    };

    const handleAsk = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const native = event.nativeEvent as SubmitEvent & AgentSubmitEvent;
        const problems: string[] = [];
        if (!ask.name.trim()) problems.push("name is required");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ask.email))
            problems.push("a valid email is required");
        if (!ask.question.trim()) problems.push("question is required");
        if (problems.length) {
            setAskStatus("error");
            setAskError(`Please check: ${problems.join(", ")}.`);
            native.respondWith?.(
                Promise.resolve(`Not sent. Please check: ${problems.join(", ")}.`),
            );
            return;
        }
        setAskStatus("sending");
        setAskError(null);
        const result = sendVisitorMessage({
            name: ask.name,
            email: ask.email,
            message: `[FAQ question] ${ask.question}`,
            subject: "New FAQ Question",
        })
            .then(() => {
                setAskStatus("sent");
                setAsk(emptyAsk);
                return "Question sent to Abhijith P A. He usually replies by email within 24 hours.";
            })
            .catch(() => {
                setAskStatus("error");
                setAskError("Something went wrong. Please try again later.");
                return "Question could not be sent. Try again later, or use the contact form.";
            });
        if (native.agentInvoked) native.respondWith?.(result);
    };

    return (
        <SectionWrapper
            id="faq"
            index="07"
            label="FAQ"
            labelledBy="faq-heading"
        >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-4">
                    <h2
                        id="faq-heading"
                        className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tight text-ink"
                    >
                        Frequently asked{" "}
                        <span className="display-serif-italic text-accent">
                            questions.
                        </span>
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted sm:text-base">
                        Quick answers about who I am, what I build and how to
                        work with me. Use the search box to find a topic, or
                        send your own question below.
                    </p>

                    <form
                        id="faq-search"
                        role="search"
                        aria-label="Search the FAQ"
                        onSubmit={handleSearch}
                        className="mt-6 max-w-sm"
                        {...toolAttrs({
                            toolname: "searchFAQ",
                            tooldescription:
                                "Search the homepage FAQ about Abhijith P A and Abi Solutions: who he is, services, technologies, projects, areas served and how to start a project. Returns the matching questions and answers.",
                            toolautosubmit: "",
                        })}
                    >
                        <label htmlFor="faq-search-input" className={labelClasses}>
                            Search the FAQ
                        </label>
                        <div className="relative">
                            <input
                                id="faq-search-input"
                                name="q"
                                type="search"
                                autoComplete="off"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="e.g. ERP, Kochi, price"
                                className={`${inputClasses} pr-11`}
                                {...paramAttr(
                                    "Words to look for in the FAQ questions and answers, for example 'ERP' or 'WhatsApp bot'. Leave empty to list every question.",
                                )}
                            />
                            <button
                                type="submit"
                                aria-label="Search"
                                className="absolute right-2 top-1/2 mt-1 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-ink-muted transition hover:text-accent"
                            >
                                <Search className="h-4 w-4" />
                            </button>
                        </div>
                    </form>

                    <nav aria-label="FAQ questions" className="mt-6">
                        <ul className="space-y-2 font-mono text-[11px] text-ink-muted">
                            {homeFaqs.map((f) => (
                                <li key={f.id} hidden={!visible.has(f.id)}>
                                    <a
                                        href={`#${f.id}`}
                                        className="link-underline hover:text-accent"
                                    >
                                        {f.question}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="lg:col-span-8">
                    <div role="status" className="sr-only">
                        {query.trim()
                            ? `${results.length} of ${homeFaqs.length} questions shown`
                            : ""}
                    </div>
                    <div className="border-t border-line">
                        {homeFaqs.map((f) => (
                            <article
                                key={f.id}
                                hidden={!visible.has(f.id)}
                                className="border-b border-line py-7 sm:py-9"
                            >
                                <h3
                                    id={f.id}
                                    className="scroll-mt-28 font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
                                >
                                    {f.question}
                                </h3>
                                <p className="faq-answer mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                                    {f.answer}
                                </p>
                                {f.steps && (
                                    <ol className="mt-4 max-w-2xl list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-muted marker:font-mono marker:text-accent sm:text-[15px]">
                                        {f.steps.map((s) => (
                                            <li key={s}>{s}</li>
                                        ))}
                                    </ol>
                                )}
                            </article>
                        ))}
                        {results.length === 0 && (
                            <div className="border-b border-line py-7 text-sm text-ink-muted">
                                No question matches &ldquo;{query}&rdquo;. Try
                                another word, or ask it below.
                            </div>
                        )}
                    </div>

                    <form
                        id="faq-ask"
                        aria-labelledby="faq-ask-heading"
                        onSubmit={handleAsk}
                        noValidate
                        className="mt-10 rounded-2xl border border-line bg-surface-card p-5 sm:p-7"
                        {...toolAttrs({
                            toolname: "submitQuestion",
                            tooldescription:
                                "Send a new question to Abhijith P A when the FAQ does not answer it. He replies by email, usually within 24 hours.",
                        })}
                    >
                        <h3
                            id="faq-ask-heading"
                            className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
                        >
                            Ask your own question
                        </h3>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="faq-ask-name" className={labelClasses}>
                                    Your name
                                </label>
                                <input
                                    id="faq-ask-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={ask.name}
                                    onChange={(e) =>
                                        setAsk((s) => ({ ...s, name: e.target.value }))
                                    }
                                    placeholder="Jane Doe"
                                    className={inputClasses}
                                    {...paramAttr(
                                        "Full name of the person asking the question.",
                                    )}
                                />
                            </div>
                            <div>
                                <label htmlFor="faq-ask-email" className={labelClasses}>
                                    Email address
                                </label>
                                <input
                                    id="faq-ask-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={ask.email}
                                    onChange={(e) =>
                                        setAsk((s) => ({ ...s, email: e.target.value }))
                                    }
                                    placeholder="jane@company.com"
                                    className={inputClasses}
                                    {...paramAttr(
                                        "Email address where Abhijith should send the answer.",
                                    )}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="faq-ask-question" className={labelClasses}>
                                Your question
                            </label>
                            <textarea
                                id="faq-ask-question"
                                name="question"
                                rows={3}
                                required
                                value={ask.question}
                                onChange={(e) =>
                                    setAsk((s) => ({ ...s, question: e.target.value }))
                                }
                                placeholder="What would you like to know?"
                                className={inputClasses}
                                {...paramAttr(
                                    "The question to ask Abhijith about his work, services, pricing or availability.",
                                )}
                            />
                        </div>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                disabled={askStatus === "sending"}
                                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <span>
                                    {askStatus === "sending"
                                        ? "Sending…"
                                        : "Send question"}
                                </span>
                                <Send className="h-4 w-4" />
                            </button>
                            <span
                                role="status"
                                className={`font-mono text-xs ${
                                    askStatus === "error"
                                        ? "text-rose-600"
                                        : "text-accent-emerald"
                                }`}
                            >
                                {askStatus === "sent" &&
                                    "Thanks. Your question is on its way."}
                                {askStatus === "error" && askError}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
}
