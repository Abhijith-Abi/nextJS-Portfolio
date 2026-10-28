import { SectionWrapper } from "./SectionWrapper";
import { homeFaqs } from "../lib/faq";

/**
 * Visible FAQ that mirrors the homepage FAQPage JSON-LD (same source:
 * lib/faq.ts). Question headings + short answers are what answer engines
 * and voice assistants quote, so this stays static, server-rendered text.
 */
export function FAQSection() {
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
                        work with me.
                    </p>
                    <nav aria-label="FAQ questions" className="mt-6">
                        <ul className="space-y-2 font-mono text-[11px] text-ink-muted">
                            {homeFaqs.map((f) => (
                                <li key={f.id}>
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

                <div className="border-t border-line lg:col-span-8">
                    {homeFaqs.map((f) => (
                        <article
                            key={f.id}
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
                </div>
            </div>
        </SectionWrapper>
    );
}
