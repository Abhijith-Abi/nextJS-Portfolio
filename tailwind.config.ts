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
                // Agency Portfolio — pure black + vivid orange
                background: "#000000",
                surface: "#0d0d0d",
                surface2: "#141414",
                ink: "#ffffff",
                line: "#1c1c1c",
                line2: "#262626",
                accent: "#ff5722", // vivid orange (deep orange / persimmon)
                accent2: "#ff7a4d", // hover orange
                muted: "#9a9a9a",
                paper: "#fafafa", // for the white profile card
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
                soft: "0 22px 60px rgba(0,0,0,0.65)",
                glow: "0 0 0 1px rgba(255,87,34,0.18), 0 14px 60px -10px rgba(255,87,34,0.5)",
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
            },
        },
    },
    plugins: [],
};

export default config;
