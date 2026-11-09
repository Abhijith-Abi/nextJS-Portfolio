"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Search, ChevronDown, Send, HelpCircle } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { faqAnswerText, homeFaqs, searchFaqs } from "../lib/faq";
import { sendVisitorMessage } from "../lib/send-message";
import { SITE_URL } from "../lib/site";

/** Extra SubmitEvent members added by WebMCP (Chrome early preview). */
type AgentSubmitEvent = {
    agentInvoked?: boolean;
    respondWith?: (result: Promise<unknown>) => void;
};

const toolAttrs = (attrs: Record<string, string>) =>
    attrs as Record<string, string>;
const paramAttr = (description: string) =>
    ({ toolparamdescription: description }) as Record<string, string>;

const inputClasses =
    "mt-1.5 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent";
const labelClasses =
    "font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted";

type AskState = { name: string; email: string; question: string };
const emptyAsk: AskState = { name: "", email: "", question: "" };

export function FAQSection() {
    const [query, setQuery] = useState("");
    const results = useMemo(() => searchFaqs(query), [query]);
    const visibleIds = useMemo(() => new Set(results.map((f) => f.id)), [results]);

    // Accordion state: by default, the first item is open
    const [openIds, setOpenIds] = useState<Set<string>>(
        new Set([homeFaqs[0].id]),
    );

    const [ask, setAsk] = useState<AskState>(emptyAsk);
    const [askStatus, setAskStatus] = useState<
        "idle" | "sending" | "sent" | "error"
    >("idle");
    const [askError, setAskError] = useState<string | null>(null);

    // Auto-open all matching items when a search query is active
    useEffect(() => {
        if (query.trim()) {
            setOpenIds(new Set(results.map((r) => r.id)));
        }
    }, [query, results]);

    // Check for hash on mount to open target question
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash && homeFaqs.some((f) => f.id === hash)) {
            setOpenIds((prev) => new Set([...Array.from(prev), hash]));
        }
    }, []);

    const toggleItem = (id: string) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

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
            {/* Header & Search Bar Bar */}
            <div className="mb-10 sm:mb-14 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-3 block">
                        Direct Answers
                    </span>
                    <h2
                        id="faq-heading"
                        className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-ink"
                    >
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                        Practical information regarding architecture, project timelines, working arrangements, and full-stack technical capabilities.
                    </p>
                </div>

                {/* Integrated Search Box */}
                <form
                    id="faq-search"
                    role="search"
                    aria-label="Search the FAQ"
                    onSubmit={handleSearch}
                    className="w-full max-w-md md:ml-auto"
                    {...toolAttrs({
                        toolname: "searchFAQ",
                        tooldescription:
                            "Search the homepage FAQ about Abhijith P A and Abi Solutions: who he is, services, technologies, projects, areas served and how to start a project. Returns the matching questions and answers.",
                        toolautosubmit: "",
                    })}
                >
                    <label htmlFor="faq-search-input" className="sr-only">
                        Search the FAQ
                    </label>
                    <div className="relative flex items-center">
                        <input
                            id="faq-search-input"
                            name="q"
                            type="search"
                            autoComplete="off"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search questions (e.g. ERP, Next.js, pricing)..."
                            className="w-full rounded-md border border-line bg-surface py-2.5 pl-3.5 pr-20 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent"
                            {...paramAttr(
                                "Words to look for in the FAQ questions and answers, for example 'ERP' or 'WhatsApp bot'. Leave empty to list every question.",
                            )}
                        />
                        <div className="absolute right-2.5 flex items-center gap-1.5 font-mono text-[10px] text-ink/40">
                            {query ? (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    className="text-xs hover:text-ink text-ink-muted px-1"
                                    aria-label="Clear search"
                                >
                                    ✕
                                </button>
                            ) : null}
                            <Search className="h-3.5 w-3.5" />
                        </div>
                    </div>
                </form>
            </div>

            {/* Accordion List */}
            <div className="border-t border-line">
                {homeFaqs.map((f, idx) => {
                    const isVisible = visibleIds.has(f.id);
                    const isOpen = openIds.has(f.id);

                    if (!isVisible) return null;

                    return (
                        <div
                            key={f.id}
                            className={`border-b border-line transition-colors ${
                                isOpen ? "bg-surface/30" : "hover:bg-surface/10"
                            }`}
                        >
                            <h3>
                                <button
                                    type="button"
                                    onClick={() => toggleItem(f.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${f.id}`}
                                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group"
                                >
                                    <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 pr-2">
                                        <span className="font-mono text-xs text-ink/30 shrink-0 select-none">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <span
                                            id={f.id}
                                            className="font-display text-base sm:text-lg font-bold tracking-tight text-ink group-hover:text-accent transition-colors scroll-mt-28"
                                        >
                                            {f.question}
                                        </span>
                                    </div>
                                    <span
                                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border border-line transition-transform duration-200 ${
                                            isOpen
                                                ? "rotate-180 border-line2 text-accent"
                                                : "text-ink/40 group-hover:text-ink"
                                        }`}
                                    >
                                        <ChevronDown className="h-3.5 w-3.5" />
                                    </span>
                                </button>
                            </h3>

                            {isOpen && (
                                <div
                                    id={`faq-answer-${f.id}`}
                                    className="pb-6 sm:pb-7 pl-8 sm:pl-12 pr-4 sm:pr-8"
                                >
                                    <p className="faq-answer max-w-3xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                                        {f.answer}
                                    </p>
                                    {f.steps && (
                                        <ol className="mt-4 max-w-3xl space-y-2.5 border-l border-line pl-4 text-sm text-ink-muted">
                                            {f.steps.map((step, sIdx) => (
                                                <li
                                                    key={step}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <span className="font-mono text-xs font-semibold text-accent shrink-0 pt-0.5">
                                                        {sIdx + 1}.
                                                    </span>
                                                    <span className="leading-relaxed">
                                                        {step}
                                                    </span>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}

                {results.length === 0 && (
                    <div className="py-10 text-center text-sm text-ink-muted">
                        No answers matched &ldquo;{query}&rdquo;. You can submit your question directly below.
                    </div>
                )}
            </div>

            {/* Bottom Card: Ask an unlisted question */}
            <div className="mt-12 sm:mt-16 rounded-xl border border-line bg-surface p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent mb-2">
                            <HelpCircle className="h-3.5 w-3.5" />
                            <span>Unanswered Question?</span>
                        </div>
                        <h3
                            id="faq-ask-heading"
                            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink"
                        >
                            Ask your question directly
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted max-w-md">
                            If your inquiry isn&apos;t covered here, submit it below. I review every submission and reply within 24 hours.
                        </p>
                    </div>

                    <form
                        id="faq-ask"
                        aria-labelledby="faq-ask-heading"
                        onSubmit={handleAsk}
                        noValidate
                        className="lg:col-span-7 space-y-4"
                        {...toolAttrs({
                            toolname: "submitQuestion",
                            tooldescription:
                                "Send a new question to Abhijith P A when the FAQ does not answer it. He replies by email, usually within 24 hours.",
                        })}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
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

                        <div>
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
                                placeholder="What would you like to know regarding architecture, scope or pricing?"
                                className={inputClasses}
                                {...paramAttr(
                                    "The question to ask Abhijith about his work, services, pricing or availability.",
                                )}
                            />
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                            <button
                                type="submit"
                                disabled={askStatus === "sending"}
                                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                            >
                                <span>
                                    {askStatus === "sending"
                                        ? "Sending..."
                                        : "Send question"}
                                </span>
                                <Send className="h-3.5 w-3.5" />
                            </button>

                            <span
                                role="status"
                                className={`font-mono text-xs ${
                                    askStatus === "error"
                                        ? "text-rose-500"
                                        : "text-accent-emerald"
                                }`}
                            >
                                {askStatus === "sent" &&
                                    "Question sent. You will receive a reply by email within 24 hours."}
                                {askStatus === "error" && askError}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
}
