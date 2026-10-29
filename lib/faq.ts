/**
 * Homepage FAQ — single source for the visible FAQ section, the FAQPage
 * JSON-LD and the WebMCP `searchFAQ` form tool. Keep answers 40–50 words,
 * short sentences and plain words so they work as snippets and voice answers.
 * Questions that carry `steps` start with "How to" / mention "steps" so the
 * ordered list after them is read as a step snippet.
 */
export type FaqItem = {
    id: string;
    question: string;
    answer: string;
    /** Optional ordered steps rendered as a list after the answer. */
    steps?: string[];
};

export const homeFaqs: FaqItem[] = [
    {
        id: "who-is-abhijith-pa",
        question: "Who is Abhijith P A?",
        answer: "Abhijith P A is a full stack web developer and AI engineer from Wayanad, Kerala. He is the founder of Abi Solutions. For more than four years he has built websites, web apps, ERP tools and AI bots for real firms. He works with React, Next.js, Django, Python and AWS.",
    },
    {
        id: "what-is-abi-solutions",
        question: "What is Abi Solutions?",
        answer: "Abi Solutions is a web development and software studio in Wayanad, Kerala, run by Abhijith P A. It builds websites, web apps, ERP systems, SaaS tools and AI chat bots. It works with shops and firms in Kalpetta, Sulthan Bathery and Mananthavady, and with clients across India and abroad.",
    },
    {
        id: "what-services-does-abi-solutions-offer",
        question: "What services does Abi Solutions offer?",
        answer: "Abi Solutions designs and builds websites, custom web apps, ERP and HR software, SaaS products and AI tools. The AI work covers WhatsApp and Telegram bots and smart features inside your own apps. One person can take your project from the first plan to design, build and launch.",
    },
    {
        id: "which-technologies-does-abhijith-use",
        question: "Which technologies does Abhijith use?",
        answer: "Abhijith uses React, Next.js and TypeScript for the front end. On the back end he uses Python with Django, Node.js and PostgreSQL. He ships code on AWS, Vercel and Docker. For AI he works with the OpenAI and Claude APIs, LangChain and vector search to build smart chat bots.",
    },
    {
        id: "what-projects-has-abhijith-built",
        question: "What projects has Abhijith built?",
        answer: "Recent work includes Start Visa, a visa and immigration platform, and House of Vaz, a luxury online store. He also built Yuva Paripalan, a youth community site, and Palana Neuro Sync, a portal for a neuro rehab clinic. At Steyp he worked on Hosface, Tegain and an ERP system.",
    },
    {
        id: "does-abhijith-work-with-clients-outside-wayanad",
        question: "Does Abhijith work with clients outside Wayanad?",
        answer: "Yes. Abhijith lives in Wayanad, Kerala, but he works with clients anywhere. He can meet local clients in Kalpetta, Sulthan Bathery, Mananthavady, Kozhikode and Kochi in person when needed. Clients in other parts of India and abroad work with him over video calls, email and WhatsApp.",
    },
    {
        id: "what-steps-does-a-website-project-follow",
        question: "What steps does a website project follow?",
        answer: "Each website project at Abi Solutions follows the same clear path. First we agree on goals and pages. Then comes the design, the build and a round of tests on phones and laptops. After launch, you get help with fixes, updates and search setup, so the site keeps working well.",
        steps: [
            "Plan: agree on goals, pages, features and a timeline.",
            "Design: see the look and layout before any code is written.",
            "Build: the site is coded, tested on phones and laptops, and tuned for speed.",
            "Launch: the site goes live with SEO basics, analytics and support after release.",
        ],
    },
    {
        id: "how-to-start-a-project-with-abi-solutions",
        question: "How to start a project with Abi Solutions?",
        answer: "Starting a project takes four simple steps. Share your idea, get a reply within a day, agree on the plan, and then the build begins. You can reach Abhijith through the form on this page, by email, or on WhatsApp at +91 99613 16468.",
        steps: [
            "Send a short note about your project through the form, email or WhatsApp.",
            "Get a reply within 24 hours, with any questions about your goals.",
            "Agree on scope, timeline and budget on a quick call.",
            "Follow the build through regular updates until launch.",
        ],
    },
];

/** Plain-text answer including steps, for JSON-LD and agent tools. */
export function faqAnswerText(item: FaqItem): string {
    if (!item.steps?.length) return item.answer;
    const steps = item.steps.map((s, i) => `${i + 1}. ${s}`).join(" ");
    return `${item.answer} ${steps}`;
}

/** Simple keyword match used by the FAQ search box and its WebMCP tool. */
export function searchFaqs(query: string): FaqItem[] {
    const terms = query
        .toLowerCase()
        .split(/\s+/)
        .map((t) => t.replace(/[^a-z0-9.+#-]/g, ""))
        .filter((t) => t.length > 1);
    if (terms.length === 0) return homeFaqs;
    return homeFaqs
        .map((f) => {
            const text = `${f.question} ${faqAnswerText(f)}`.toLowerCase();
            return { f, score: terms.filter((t) => text.includes(t)).length };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ f }) => f);
}
