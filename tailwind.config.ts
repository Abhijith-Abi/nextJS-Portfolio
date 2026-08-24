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
                // Electric Violet & Cosmic Indigo (Raycast / Modern AI Theme)
                background: "#07060d",
                surface: "#0f0c1b",
                surface2: "#161226",
                "surface-card": "#130f21",
                ink: "#ffffff",
                "ink-muted": "#94a3b8",
                line: "rgba(255, 255, 255, 0.08)",
                line2: "rgba(139, 92, 246, 0.25)",
                accent: "#8b5cf6", // electric violet
                accent2: "#6366f1", // cosmic indigo
                "accent-purple": "#a855f7", // neon purple
                "accent-emerald": "#10b981", // live emerald
                muted: "#64748b",
                paper: "#ffffff",
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
                soft: "0 24px 64px -12px rgba(7,6,13,0.95)",
                glow: "0 0 0 1px rgba(139,92,246,0.3), 0 16px 48px -12px rgba(139,92,246,0.4)",
                "glow-sm":
                    "0 0 0 1px rgba(139,92,246,0.25), 0 8px 24px -8px rgba(139,92,246,0.35)",
                "glow-indigo":
                    "0 0 0 1px rgba(99,102,241,0.3), 0 16px 48px -12px rgba(99,102,241,0.4)",
                "glow-purple":
                    "0 0 0 1px rgba(168,85,247,0.3), 0 16px 48px -12px rgba(168,85,247,0.4)",
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
