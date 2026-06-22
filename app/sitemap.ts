import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://abisolutions.online";

    return [
        // Main pages
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        // Individual project pages
        {
            url: `${baseUrl}/projects/talrop-erp`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects/hosface`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
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
            priority: 0.7,
        },
        {
            url: `${baseUrl}/projects/somans`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },

        // Blog posts
        {
            url: `${baseUrl}/blog/how-i-built-talrop-erp-with-nextjs`,
            lastModified: new Date("2026-06-20"),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/deploying-nextjs-on-vercel`,
            lastModified: new Date("2026-06-18"),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/react-state-management-zustand-vs-redux`,
            lastModified: new Date("2026-06-15"),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/building-saas-platform-with-react-django`,
            lastModified: new Date("2026-06-12"),
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
