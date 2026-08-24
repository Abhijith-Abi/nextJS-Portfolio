import { portfolioPhotos } from "@/lib/photos";

export async function GET() {
    const baseUrl = "https://abisolutions.online";

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
        <loc>${baseUrl}/</loc>
        ${portfolioPhotos
            .map(
                (photo) => `
        <image:image>
            <image:loc>${baseUrl}${photo.src}</image:loc>
            <image:title>${photo.title.replace(/&/g, "&amp;")}</image:title>
            <image:caption>${photo.alt.replace(/&/g, "&amp;")}</image:caption>
            <image:geo_location>Kerala, India</image:geo_location>
        </image:image>`,
            )
            .join("")}
    </url>
    <url>
        <loc>${baseUrl}/about</loc>
        ${portfolioPhotos
            .map(
                (photo) => `
        <image:image>
            <image:loc>${baseUrl}${photo.src}</image:loc>
            <image:title>${photo.title.replace(/&/g, "&amp;")}</image:title>
            <image:caption>${photo.caption.replace(/&/g, "&amp;")}</image:caption>
            <image:geo_location>Kerala, India</image:geo_location>
        </image:image>`,
            )
            .join("")}
    </url>
    <url>
        <loc>${baseUrl}/abhijith-pa</loc>
        ${portfolioPhotos
            .map(
                (photo) => `
        <image:image>
            <image:loc>${baseUrl}${photo.src}</image:loc>
            <image:title>${photo.title.replace(/&/g, "&amp;")}</image:title>
            <image:caption>${photo.alt.replace(/&/g, "&amp;")}</image:caption>
            <image:geo_location>Kerala, India</image:geo_location>
        </image:image>`,
            )
            .join("")}
    </url>
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
        },
    });
}
