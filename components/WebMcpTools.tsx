"use client";

import { useEffect } from "react";
import { faqAnswerText, homeFaqs } from "../lib/faq";
import { CONTACT, SITE_URL } from "../lib/site";

/**
 * WebMCP imperative tools for the homepage (Chrome early preview).
 * Lets in-browser AI agents read the FAQ, contact details and services and
 * jump to sections without scraping the DOM. No-op in browsers without
 * `document.modelContext`. The contact form is exposed separately through
 * the declarative API (see ContactSection) and always needs a user click.
 */

type ToolDefinition = {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    execute: (input: Record<string, unknown>) => Promise<string> | string;
    annotations?: { readOnlyHint?: boolean };
};

type ModelContext = {
    registerTool: (
        tool: ToolDefinition,
        options?: { signal?: AbortSignal },
    ) => Promise<void> | void;
};

const SECTIONS = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "testimonials",
    "contact",
    "faq",
] as const;

const SERVICES = [
    { name: "Custom Web Development", path: "/services/web-development" },
    { name: "Enterprise Software Engineering", path: "/services/software-development" },
    { name: "Full Stack React & Django", path: "/services/full-stack-development" },
    { name: "Next.js Development", path: "/services/nextjs-development" },
    { name: "AI & LLM Integration", path: "/services/ai-development" },
    { name: "Custom ERP Systems", path: "/services/erp-development" },
    { name: "SaaS Product Architecture", path: "/services/saas-development" },
];

function getModelContext(): ModelContext | undefined {
    const doc = document as Document & { modelContext?: ModelContext };
    const nav = navigator as Navigator & { modelContext?: ModelContext };
    return doc.modelContext ?? nav.modelContext;
}

const tools: ToolDefinition[] = [
    {
        name: "search_faq",
        description:
            "Search the homepage FAQ about Abhijith P A and Abi Solutions: who he is, services, technologies, projects, locations served and how to start a project.",
        inputSchema: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description:
                        "Words to look for in questions and answers. Leave empty to get every FAQ entry.",
                },
            },
        },
        annotations: { readOnlyHint: true },
        execute: ({ query }) => {
            const terms = String(query ?? "")
                .toLowerCase()
                .split(/\s+/)
                .filter((t) => t.length > 2);
            const scored = homeFaqs
                .map((f) => {
                    const text = `${f.question} ${faqAnswerText(f)}`.toLowerCase();
                    const score = terms.filter((t) => text.includes(t)).length;
                    return { f, score };
                })
                .filter(({ score }) => terms.length === 0 || score > 0)
                .sort((a, b) => b.score - a.score);
            const results = (scored.length ? scored : homeFaqs.map((f) => ({ f, score: 0 })))
                .map(({ f }) => ({
                    question: f.question,
                    answer: faqAnswerText(f),
                    url: `${SITE_URL}/#${f.id}`,
                }));
            return JSON.stringify(results);
        },
    },
    {
        name: "get_contact_details",
        description:
            "Get the ways to contact Abhijith P A (Abi Solutions): email, phone, WhatsApp, location and usual reply time.",
        inputSchema: { type: "object", properties: {} },
        annotations: { readOnlyHint: true },
        execute: () =>
            JSON.stringify({
                name: "Abhijith P A — Abi Solutions",
                email: CONTACT.email,
                phone: CONTACT.phoneDisplay,
                whatsapp: CONTACT.whatsapp,
                location: `${CONTACT.location} · remote worldwide`,
                replyTime: "Usually within 24 hours",
                contactPage: `${SITE_URL}/contact`,
            }),
    },
    {
        name: "list_services",
        description:
            "List the software development services offered by Abi Solutions, each with a page that has more detail.",
        inputSchema: { type: "object", properties: {} },
        annotations: { readOnlyHint: true },
        execute: () =>
            JSON.stringify(
                SERVICES.map((s) => ({ name: s.name, url: `${SITE_URL}${s.path}` })),
            ),
    },
    {
        name: "go_to_section",
        description: "Scroll the homepage to one of its sections so the user can see it.",
        inputSchema: {
            type: "object",
            properties: {
                section: {
                    type: "string",
                    enum: [...SECTIONS],
                    description: "Homepage section to show.",
                },
            },
            required: ["section"],
        },
        annotations: { readOnlyHint: true },
        execute: ({ section }) => {
            const id = String(section);
            const el = document.getElementById(id);
            if (!el) return `Unknown section "${id}". Use one of: ${SECTIONS.join(", ")}.`;
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            return `Scrolled to the ${id} section.`;
        },
    },
];

export function WebMcpTools() {
    useEffect(() => {
        const modelContext = getModelContext();
        if (!modelContext?.registerTool) return;
        const controller = new AbortController();
        for (const tool of tools) {
            try {
                void Promise.resolve(
                    modelContext.registerTool(tool, { signal: controller.signal }),
                ).catch((err) => console.warn(`WebMCP: ${tool.name} not registered`, err));
            } catch (err) {
                console.warn(`WebMCP: ${tool.name} not registered`, err);
            }
        }
        return () => controller.abort();
    }, []);

    return null;
}
