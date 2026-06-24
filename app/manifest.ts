import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Abhijith P A — Full Stack Developer",
        short_name: "Abi Portfolio",
        description:
            "Full Stack Developer specializing in React, Next.js, TypeScript, and AI-driven products.",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#ff5722",
        icons: [
            {
                src: "/icon1.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
