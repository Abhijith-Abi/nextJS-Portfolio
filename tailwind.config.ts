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
                // Modern dark portfolio — deep navy + electric indigo/violet
                background: "#0f1119",
                surface: "#161927",
                surface2: "#1c2033",
                ink: "#f0f0f5",
                line: "#252a3a",
                line2: "#333951",
                accent: "#818cf8", // indigo-400 — electric but not harsh
                accent2: "#a5b4fc", // indigo-300 — hover/lighter variant
                muted: "#8b8fa8",
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
                soft: "0 24px 64px -12px rgba(15,17,25,0.8)",
                glow: "0 0 0 1px rgba(129,140,248,0.2), 0 16px 64px -12px rgba(129,140,248,0.35)",
                "glow-sm":
                    "0 0 0 1px rgba(129,140,248,0.15), 0 8px 32px -8px rgba(129,140,248,0.2)",
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
