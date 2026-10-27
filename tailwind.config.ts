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
                // Dark Premium Studio — graphite, white type, electric lime accent
                background: "#0A0A0B", // graphite
                surface: "rgba(20, 20, 23, 0.6)",
                surface2: "#101013",
                "surface-card": "rgba(24, 24, 27, 0.8)",
                ink: "#F5F5F3", // light type on graphite
                "ink-muted": "#9B9B94",
                line: "rgba(255, 255, 255, 0.1)",
                line2: "rgba(198, 242, 78, 0.35)",
                accent: "#C6F24E", // electric lime
                accent2: "#E3FF8A", // pale lime for serif-italic accents
                "accent-ocean": "#94C227", // deep lime (hover)
                "accent-abyss": "#08080A",
                "accent-emerald": "#34D399", // active live emerald
                muted: "#7A7A73",
                paper: "#FFFFFF",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: [
                    "var(--font-space)",
                    "var(--font-inter)",
                    "sans-serif",
                ],
                serif: ["var(--font-serif)", "Georgia", "serif"],
                mono: ["var(--font-space)", "ui-monospace", "monospace"],
            },
            boxShadow: {
                soft: "0 24px 64px -24px rgba(25,23,19,0.18)",
                card: "0 2px 24px -8px rgba(25,23,19,0.10)",
                glow: "0 0 0 1px rgba(39,66,228,0.16), 0 16px 48px -16px rgba(39,66,228,0.28)",
                "glow-sm":
                    "0 0 0 1px rgba(39,66,228,0.12), 0 8px 24px -8px rgba(39,66,228,0.2)",
                "glow-blue":
                    "0 0 0 1px rgba(39,66,228,0.2), 0 16px 48px -16px rgba(39,66,228,0.3)",
                "glow-sky":
                    "0 0 0 1px rgba(124,147,255,0.25), 0 16px 48px -16px rgba(124,147,255,0.25)",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.25rem",
                "3xl": "1.75rem",
                "4xl": "2.25rem",
            },
            animation: {
                "caret-blink": "caret-blink 1.1s steps(1) infinite",
                "spin-slow": "spin 20s linear infinite",
                marquee: "marquee var(--duration) linear infinite",
                shimmer: "shimmer 2.5s linear infinite",
                pulse_glow: "pulseGlow 3s ease-in-out infinite",
                float: "float 6s ease-in-out infinite",
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
                pulseGlow: {
                    "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
                    "50%": { opacity: "0.8", transform: "scale(1.05)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
