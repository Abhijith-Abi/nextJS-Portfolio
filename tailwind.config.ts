import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Modern dark portfolio — dark midnight + electric blue/violet
                background: "#080f1e",
                surface: "#0d1529",
                surface2: "#131c35",
                ink: "#edf2ff",
                line: "#1a2744",
                line2: "#253759",
                accent: "#60a5fa", // blue-400 — electric and cool
                accent2: "#93c5fd", // blue-300
                muted: "#7b8fad",
                paper: "#fafafa",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: [
                    "var(--font-space)",
                    "var(--font-inter)",
                    "sans-serif",
                ],
                mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
            },
            boxShadow: {
                soft: "0 24px 64px -12px rgba(8,15,30,0.9)",
                glow: "0 0 0 1px rgba(96,165,250,0.2), 0 16px 64px -12px rgba(96,165,250,0.3)",
                "glow-sm":
                    "0 0 0 1px rgba(96,165,250,0.15), 0 8px 32px -8px rgba(96,165,250,0.2)",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.25rem",
                "3xl": "1.75rem",
            },
            animation: {
                "caret-blink": "caret-blink 1.1s steps(1) infinite",
                "spin-slow": "spin 24s linear infinite",
                marquee: "marquee var(--duration) linear infinite",
                shimmer: "shimmer 2.5s linear infinite",
            },
            keyframes: {
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                shimmer: {
                    from: { backgroundPosition: "0 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
