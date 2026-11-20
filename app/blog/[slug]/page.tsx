import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { BlogPostView } from "../../../components/BlogPostView";
import { Footer } from "../../../components/Footer";
import { blogPosts, getBlogPost, getAllBlogSlugs } from "../../../lib/blog";

type Props = {
    params: { slug: string };
};

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const post = getBlogPost(params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        authors: [
            { name: "Abhijith P A", url: "https://abisolutions.in" },
        ],
        creator: "Abhijith P A",
        publisher: "Abi Solutions",
        alternates: {
            canonical: `https://abisolutions.in/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            locale: "en_US",
            url: `https://abisolutions.in/blog/${post.slug}`,
            siteName: "Abi Solutions",
            title: `${post.title} | Abhijith P A`,
            description: post.description,
            publishedTime: new Date(post.date).toISOString(),
            authors: ["Abhijith P A"],
            tags: post.tags,
            images: [
                {
                    url: `https://abisolutions.in/blog/${post.slug}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: `${post.title} — Abhijith P A`,
                    type: "image/png",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`https://abisolutions.in/blog/${post.slug}/opengraph-image`],
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
}

export default function BlogPostPage({ params }: Props) {
    const post = getBlogPost(params.slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: `https://abisolutions.in/blog/${post.slug}`,
        datePublished: post.date.includes("T") ? post.date : `${post.date}T00:00:00+05:30`,
        dateModified: post.date.includes("T") ? post.date : `${post.date}T00:00:00+05:30`,
        author: {
            "@type": "Person",
            name: "Abhijith P A",
            url: "https://abisolutions.in",
        },
        publisher: {
            "@type": "Person",
            name: "Abhijith P A",
            url: "https://abisolutions.in",
        },
        keywords: post.tags,
    };

    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <BlogPostView post={post} />
                <Footer />
            </div>
        </main>
    );
}
