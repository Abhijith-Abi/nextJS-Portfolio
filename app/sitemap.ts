import { MetadataRoute } from "next";
import { blogPosts } from "../lib/blog";
import { locationsData } from "../lib/locations";
import { servicesSEOData, serviceAliases } from "../lib/services-seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://abisolutions.online";

    // Dynamic blog post entries
    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly" as const,
        priority: 0.7,
    }));

    // Dynamic Kerala District SEO landing pages entries
    const locationEntries: MetadataRoute.Sitemap = Object.values(locationsData).map((loc) => ({
        url: `${baseUrl}/${loc.routeSlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Dynamic /locations/[location] routes
    const nestedLocationEntries: MetadataRoute.Sitemap = Object.keys(locationsData).map((slug) => ({
        url: `${baseUrl}/locations/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
    }));

    // Dynamic Service SEO landing pages entries (full slug)
    const serviceEntries: MetadataRoute.Sitemap = Object.values(servicesSEOData).map((srv) => ({
        url: `${baseUrl}/${srv.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    }));

    // Dynamic /services/[service] clean routes
    const nestedServiceEntries: MetadataRoute.Sitemap = Object.keys(serviceAliases).map((alias) => ({
        url: `${baseUrl}/services/${alias}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    }));

    return [
        // ─── Core Pages (highest priority) ───
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/abhijith-pa`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/algobiz`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/web-developer-wayanad`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },

        // ─── Service Routes (/services/[service]) ───
        ...nestedServiceEntries,

        // ─── Service Keyword Landing Pages ───
        ...serviceEntries,

        // ─── Location Routes (/locations/[location]) ───
        ...nestedLocationEntries,

        // ─── District Keyword Landing Pages ───
        ...locationEntries,

        // ─── Individual Project Pages ───
        {
            url: `${baseUrl}/projects/enterprise-erp`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/projects/hosface`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/projects/steyp`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects/tegain`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects/somans`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.75,
        },

        // ─── Blog Posts (dynamic) ───
        ...blogEntries,
    ];
}
