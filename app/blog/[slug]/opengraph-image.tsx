import { ImageResponse } from "next/og";
import { getBlogPost } from "../../../lib/blog";

export const alt = "Abhijith P A — Blog";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return new ImageResponse(
            (
                <div
                    style={{
                        background: "#080f1e",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#edf2ff",
                        fontSize: "48px",
                        fontWeight: "bold",
                    }}
                >
                    Abi Solutions Blog Post
                </div>
            ),
            { ...size }
        );
    }

    // Dynamic gradient matching components/BlogPostView.tsx
    const tagGradients: Record<string, string> = {
        React: "linear-gradient(to bottom right, #4f46e5, #9333ea, #ec4899)",
        "Next.js": "linear-gradient(to bottom right, #2563eb, #6366f1, #8b5cf6)",
        TypeScript: "linear-gradient(to bottom right, #3b82f6, #0ea5e9, #06b6d4)",
        Django: "linear-gradient(to bottom right, #10b981, #14b8a6, #06b6d4)",
        ERP: "linear-gradient(to bottom right, #f97316, #f43f5e, #db2777)",
        HRMS: "linear-gradient(to bottom right, #f59e0b, #f97316, #ef4444)",
        Payroll: "linear-gradient(to bottom right, #f59e0b, #f97316, #ef4444)",
        AlgoBiz: "linear-gradient(to bottom right, #d946ef, #a855f7, #6366f1)",
        Performance: "linear-gradient(to bottom right, #06b6d4, #3b82f6, #4f46e5)",
        AI: "linear-gradient(to bottom right, #7c3aed, #9333ea, #d946ef)",
    };

    const firstTag = post.tags[0] || "React";
    const gradient = tagGradients[firstTag] || "linear-gradient(to bottom right, #4f46e5, #9333ea, #ec4899)";
    const year = new Date(post.date).getFullYear() || 2026;

    return new ImageResponse(
        (
            <div
                style={{
                    background: gradient,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "80px",
                    color: "#edf2ff",
                    fontFamily: "sans-serif",
                    position: "relative",
                }}
            >
                {/* Noise overlay simulation using high density grid lines */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.08,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* Corner Decorations - Top Left */}
                <div
                    style={{
                        position: "absolute",
                        left: "32px",
                        top: "32px",
                        width: "30px",
                        height: "30px",
                        borderLeft: "3px solid rgba(255,255,255,0.3)",
                        borderTop: "3px solid rgba(255,255,255,0.3)",
                        borderTopLeftRadius: "6px",
                    }}
                />

                {/* Corner Decorations - Top Right */}
                <div
                    style={{
                        position: "absolute",
                        right: "32px",
                        top: "32px",
                        width: "30px",
                        height: "30px",
                        borderRight: "3px solid rgba(255,255,255,0.3)",
                        borderTop: "3px solid rgba(255,255,255,0.3)",
                        borderTopRightRadius: "6px",
                    }}
                />

                {/* Corner Decorations - Bottom Left */}
                <div
                    style={{
                        position: "absolute",
                        left: "32px",
                        bottom: "32px",
                        width: "30px",
                        height: "30px",
                        borderLeft: "3px solid rgba(255,255,255,0.3)",
                        borderBottom: "3px solid rgba(255,255,255,0.3)",
                        borderBottomLeftRadius: "6px",
                    }}
                />

                {/* Corner Decorations - Bottom Right */}
                <div
                    style={{
                        position: "absolute",
                        right: "32px",
                        bottom: "32px",
                        width: "30px",
                        height: "30px",
                        borderRight: "3px solid rgba(255,255,255,0.3)",
                        borderBottom: "3px solid rgba(255,255,255,0.3)",
                        borderBottomRightRadius: "6px",
                    }}
                />

                {/* Glow orbs */}
                <div
                    style={{
                        position: "absolute",
                        left: "-80px",
                        top: "-80px",
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        filter: "blur(80px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: "-60px",
                        bottom: "-60px",
                        width: "240px",
                        height: "240px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        filter: "blur(60px)",
                    }}
                />

                {/* Center Content Group */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        maxWidth: "1000px",
                    }}
                >
                    {/* Tags Badges */}
                    <div style={{ display: "flex", gap: "8px", marginBottom: "30px" }}>
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    background: "rgba(255,255,255,0.12)",
                                    border: "1px solid rgba(255,255,255,0.22)",
                                    color: "rgba(255,255,255,0.85)",
                                    padding: "6px 14px",
                                    borderRadius: "999px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Centered Blog Title */}
                    <div
                        style={{
                            color: "#ffffff",
                            fontSize: "56px",
                            fontWeight: "800",
                            lineHeight: 1.2,
                            marginBottom: "30px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textShadow: "0 2px 10px rgba(0,0,0,0.15)",
                        }}
                    >
                        {post.title}
                    </div>

                    {/* Bottom Metadata Badge */}
                    <span
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            color: "rgba(255,255,255,0.75)",
                            padding: "6px 16px",
                            borderRadius: "999px",
                            fontSize: "13px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "0.32em",
                            fontFamily: "monospace",
                        }}
                    >
                        ALGOBIZ · {year}
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
