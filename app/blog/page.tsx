import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";

export const metadata: Metadata = {
    title: "Blog — Abhijith P A | React, Next.js & Web Dev Articles",
    description:
        "Web development articles by Abhijith P A (Abi). React, Next.js, Django, AWS tutorials and insights from building production software at Algobiz, Talrop & Steyp.",
    keywords: [
        "Abhijith P A blog",
        "Abi Solutions blog",
        "Abi blog",
        "React tutorials",
        "Next.js articles",
        "Django tips",
        "AWS guides",
        "TypeScript articles",
        "Python tutorials",
        "Web development blog India",
        "Frontend engineering articles",
        "Full Stack Developer blog Kerala",
        "Algobiz developer blog",
        "Talrop developer insights",
        "Steyp development articles",
        "JavaScript tutorials India",
        "Software engineering blog",
    ],
    authors: [{ name: "Abhijith P A", url: "https://abisolutions.online" }],
    creator: "Abhijith P A",
    publisher: "Abi Solutions",
    alternates: {
        canonical: "https://abisolutions.online/blog",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/blog",
        siteName: "Abi Solutions",
        title: "Blog — Abhijith P A | Web Development Articles & Tutorials",
        description:
            "React, Next.js, Django & AWS articles. Lessons from building at Algobiz, Talrop & Steyp.",
        images: [
            {
                url: "/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Abhijith P A Blog — Web Development Articles by Abi Solutions",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog — Abhijith P A | React & Web Dev",
        description:
            "Articles on React, Next.js, Django. Lessons from Algobiz, Talrop & Steyp. By Abhijith P A.",
        images: ["/profile.jpg"],
        creator: "@abhijith",
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

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Abhijith P A — Web Development Blog",
    alternateName: "Abi Solutions Blog",
    description:
        "Articles on React, Next.js, TypeScript, Django, AWS, and modern web development by Abhijith P A.",
    url: "https://abisolutions.online/blog",
    author: {
        "@type": "Person",
        name: "Abhijith P A",
        alternateName: ["Abi", "Abi Solutions"],
        url: "https://abisolutions.online",
        jobTitle: "Full Stack Developer",
    },
    publisher: {
        "@type": "Person",
        name: "Abhijith P A",
        url: "https://abisolutions.online",
    },
    about: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Django",
        "Python",
        "AWS",
        "Web Development",
        "Frontend Engineering",
        "Software Architecture",
    ],
};

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
                    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
                        <h1 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                            <span className="block">COMING</span>
                            <span className="block text-accent">SOON.</span>
                        </h1>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65 lg:text-lg">
                            I&apos;m working on articles about React, Next.js,
                            TypeScript, motion design, and lessons from building
                            production software at Algobiz, Talrop, and Steyp.
                        </p>
                        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.32em] text-ink/40">
                            Stay tuned · 2026
                        </p>
                    </div>
                </SectionWrapper>
            </div>
        </main>
    );
}
