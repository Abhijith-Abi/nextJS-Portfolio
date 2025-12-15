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
                background: "#000000",
                surface: "#020617",
                accent: "#22c55e", // emerald on black
                accentSecondary: "#22d3ee", // teal accent
                muted: "#94a3b8",
            },
            boxShadow: {
                soft: "0 22px 60px rgba(15,23,42,0.85)",
            },
            borderRadius: {
                xl: "1rem",
            },
            animation: {
                grid: "grid 15s linear infinite",
            },
            keyframes: {
                grid: {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
