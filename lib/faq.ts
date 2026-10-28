/**
 * Homepage FAQ — single source for the visible FAQ section, the FAQPage
 * JSON-LD and the WebMCP `search_faq` tool. Keep answers 40–60 words,
 * short sentences and plain words so they work as snippets and voice answers.
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
        answer: "Abhijith P A is a full stack developer and AI engineer from Wayanad, Kerala. He is the founder of Abi Solutions. He has more than four years of experience building websites, ERP systems, SaaS products and AI automation with React, Next.js, Django, Python and AWS.",
    },
    {
        id: "what-is-abi-solutions",
        question: "What is Abi Solutions?",
        answer: "Abi Solutions is a web development and software studio in Wayanad, Kerala, founded by Abhijith P A. It builds custom websites, web apps, ERP systems, SaaS platforms and AI chatbots. It works with local businesses in Kalpetta, Sulthan Bathery and Mananthavady, and with remote clients across India and abroad.",
    },
    {
        id: "what-services-does-abi-solutions-offer",
        question: "What services does Abi Solutions offer?",
        answer: "Abi Solutions offers website design and development, custom web applications, ERP and HRMS software, SaaS product development and AI automation. AI work includes WhatsApp and Telegram bots and LLM features inside your own tools. A project can cover planning, design, build and launch, so you work with one person from idea to release.",
    },
    {
        id: "which-technologies-does-abhijith-use",
        question: "Which technologies does Abhijith use?",
        answer: "Abhijith mainly uses React, Next.js and TypeScript for the frontend. On the backend he uses Python with Django, Node.js and PostgreSQL. He deploys on AWS, Vercel and Docker. For AI features he works with the OpenAI and Claude APIs, LangChain and vector search to build chatbots and smart workflows.",
    },
    {
        id: "what-projects-has-abhijith-built",
        question: "What projects has Abhijith built?",
        answer: "Recent projects include Start Visa, a visa and immigration platform, and House of Vaz, a luxury online store. He also built Yuva Paripalan, a youth community portal, and Palana Neuro Sync, a clinical healthcare portal. Earlier, at Steyp, he worked on Hosface, Tegain and an enterprise ERP system.",
    },
    {
        id: "does-abhijith-work-with-clients-outside-wayanad",
        question: "Does Abhijith work with clients outside Wayanad?",
        answer: "Yes. Abhijith is based in Wayanad, Kerala, but he works with clients anywhere. He can meet local clients in Kalpetta, Sulthan Bathery, Mananthavady, Kozhikode and Kochi in person when needed. Clients in other parts of India and abroad work with him remotely over video calls, email and WhatsApp.",
    },
    {
        id: "how-to-start-a-project-with-abi-solutions",
        question: "How do I start a project with Abi Solutions?",
        answer: "Starting a project takes four simple steps. Share your idea, get a reply within a day, agree on the plan, then the build begins. You can reach Abhijith through the contact form on this page, by email at abhijithabhijith1999@gmail.com, or on WhatsApp at +91 99613 16468.",
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
