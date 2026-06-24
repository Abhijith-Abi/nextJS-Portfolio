import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/"],
                disallow: [
                    "/api/",
                    "/_next/",
                    "/admin/",
                    "/private/",
                    "/*.json$",
                ],
            },
            {
                userAgent: "Googlebot",
                allow: ["/"],
                disallow: ["/api/", "/_next/"],
            },
            {
                userAgent: "Bingbot",
                allow: ["/"],
                disallow: ["/api/", "/_next/"],
            },
            {
                userAgent: "GPTBot",
                allow: ["/"],
            },
            {
                userAgent: "ChatGPT-User",
                allow: ["/"],
            },
            {
                userAgent: "Google-Extended",
                allow: ["/"],
            },
            {
                userAgent: "PerplexityBot",
                allow: ["/"],
            },
            {
                userAgent: "ClaudeBot",
                allow: ["/"],
            },
        ],
        sitemap: "https://abisolutions.online/sitemap.xml",
        host: "https://abisolutions.online",
    };
}
