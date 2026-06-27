import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";
import { BlogList } from "../../components/BlogList";
import { blogPosts } from "../../lib/blog";

export const metadata: Metadata = {
    title: "Blog — Abhijith P A | React, Next.js, Django, AI & ERP Articles | AlgoBiz",
    description:
        "Web development & AI articles by Abhijith P A (AlgoBiz). React, Next.js, Django, Python, AWS, AI automation, ERP development tutorials. Insights from building at Tegain & Ribos.",
    keywords: [
        "Abhijith P A blog",
        "AlgoBiz blog",
        "AlgoBiz articles",
        "React tutorials",
        "React.js tutorials India",
        "Next.js articles",
        "Next.js tutorials Kerala",
        "Django tutorials",
        "Django articles India",
        "Python tutorials",
        "AWS guides",
        "TypeScript articles",
        "AI development articles",
        "ERP development tutorials",
        "SaaS development blog",
        "HRMS development",
        "WhatsApp automation tutorial",
        "Telegram bot development",
        "Web development blog India",
        "Frontend engineering articles",
        "Full Stack Developer blog Kerala",
        "ERP developer insights",
        "Tegain developer articles",
        "Ribos development",
        "PostgreSQL tutorials",
        "Software engineering blog",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "AlgoBiz",
    alternates: { canonical: "https://abisolutions.online/blog" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/blog",
        siteName: "Abhijith P A — AlgoBiz",
        title: "Blog — Abhijith P A | React, Next.js, Django & AI Development Articles",
        description:
            "React, Next.js, Django, AI & ERP articles. Lessons from building production software at Tegain & Ribos. By Abhijith P A (AlgoBiz).",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A Blog — Web Development & AI Articles | AlgoBiz",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@abhijith",
        creator: "@abhijith",
        title: "Blog — Abhijith P A | React, Django & AI Development | AlgoBiz",
        description:
            "Articles on React, Next.js, Django, AI automation & ERP. Insights from Tegain & Ribos. By Abhijith P A.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://abisolutions.online/blog/#blog",
        name: "Abhijith P A — AlgoBiz Blog",
        alternateName: [
            "AlgoBiz Blog",
            "Abi Solutions Blog",
            "Abhijith P A Web Development Blog",
        ],
        description:
            "Articles on React, Next.js, TypeScript, Django, Python, AWS, AI automation, ERP development, and modern web engineering by Abhijith P A, founder of AlgoBiz.",
        url: "https://abisolutions.online/blog",
        inLanguage: "en-US",
        author: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
            jobTitle: "Full Stack Developer & AI Engineer",
        },
        publisher: {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "AlgoBiz",
        },
        blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: `https://abisolutions.online/blog/${post.slug}`,
            datePublished: post.date,
            author: {
                "@type": "Person",
                "@id": "https://abisolutions.online/#person",
                name: "Abhijith P A",
            },
            publisher: {
                "@type": "Organization",
                "@id": "https://abisolutions.online/#organization",
                name: "AlgoBiz",
            },
            keywords: post.keywords,
        })),
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://abisolutions.online",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://abisolutions.online/blog",
            },
        ],
    },
];

export default function BlogPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="blog" index="07" label="Blog">
                    <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                        <h1 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">ARTICLES &</span>
                            <span className="block ghost-text">INSIGHTS.</span>
                        </h1>
                        <p className="text-sm leading-relaxed text-ink/65 sm:text-base md:text-right lg:text-lg">
                            Lessons from building production software at Tegain and
                            Ribos. React, Next.js, Django, AI
                            automation, ERP systems, and everything in between.
                        </p>
                    </div>
                    <BlogList posts={blogPosts} />
                </SectionWrapper>
            </div>
        </main>
    );
}
