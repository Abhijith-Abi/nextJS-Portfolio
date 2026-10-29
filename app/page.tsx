import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";
import { faqAnswerText, homeFaqs } from "../lib/faq";
import {
    SCHEMA_IDS,
    SITE_PUBLISHED,
    SITE_UPDATED,
    SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
    alternates: {
        canonical: SITE_URL,
        languages: {
            "en-IN": SITE_URL,
            "x-default": SITE_URL,
        },
    },
};

/**
 * Homepage-specific graph. Person, Organization, LocalBusiness and WebSite
 * live in the root layout's graph; they are referenced here by @id only.
 */
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["WebPage", "ProfilePage"],
            "@id": SCHEMA_IDS.homePage,
            url: SITE_URL,
            name: "Abhijith P A — Web Developer in Wayanad | Abi Solutions",
            description:
                "Abhijith P A is a full stack developer and AI engineer in Wayanad, Kerala. Founder of Abi Solutions, building websites, ERP systems and AI automation.",
            inLanguage: "en",
            isPartOf: { "@id": SCHEMA_IDS.website },
            about: { "@id": SCHEMA_IDS.person },
            mainEntity: { "@id": SCHEMA_IDS.person },
            publisher: { "@id": SCHEMA_IDS.organization },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: `${SITE_URL}/photos/abhijith-pa-founder-portrait.jpg`,
                caption:
                    "Abhijith P A, web developer in Wayanad, Kerala",
            },
            dateCreated: SITE_PUBLISHED,
            datePublished: SITE_PUBLISHED,
            dateModified: SITE_UPDATED,
            breadcrumb: { "@id": SCHEMA_IDS.homeBreadcrumb },
            speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["#hero-summary", ".faq-answer"],
            },
            hasPart: { "@id": SCHEMA_IDS.homeFaq },
        },
        {
            "@type": "BreadcrumbList",
            "@id": SCHEMA_IDS.homeBreadcrumb,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": SCHEMA_IDS.homeFaq,
            url: `${SITE_URL}/#faq`,
            name: "Frequently asked questions about Abhijith P A and Abi Solutions",
            description:
                "Short answers about Abhijith P A, web developer and AI engineer in Wayanad, Kerala, and his studio Abi Solutions: services, technologies, projects, areas served and how to start a project.",
            inLanguage: "en",
            isPartOf: { "@id": SCHEMA_IDS.homePage },
            datePublished: SITE_PUBLISHED,
            dateModified: SITE_UPDATED,
            mainEntity: homeFaqs.map((f) => {
                const answerId = `${SITE_URL}/#${f.id}-answer`;
                return {
                    "@type": "Question",
                    name: f.question,
                    text: f.question,
                    url: `${SITE_URL}/#${f.id}`,
                    dateCreated: SITE_PUBLISHED,
                    // The site's own answer, endorsed by its author. The page
                    // has no public voting, so this is a fixed count of one.
                    upvoteCount: 1,
                    acceptedAnswer: {
                        "@type": "Answer",
                        "@id": answerId,
                        text: faqAnswerText(f),
                        author: { "@id": SCHEMA_IDS.person },
                    },
                    // Same answer node: it is the only suggested answer too.
                    suggestedAnswer: { "@id": answerId },
                };
            }),
        },
    ],
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Navbar />
            <main className="relative min-h-screen">
                {/* The whole profile is one self-contained composition;
                    project, role and FAQ entries nest inside it. */}
                <article aria-labelledby="hero-title">
                    <Hero />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ExperienceSection />
                    <TestimonialsSection />
                    <ContactSection />
                    <FAQSection />
                </article>
            </main>
            <Footer />
        </>
    );
}
