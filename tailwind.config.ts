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
                // Zentra Luxury Dark & Electric Royal Blue Theme
                background: "#07080c",
                surface: "rgba(15, 18, 26, 0.85)",
                surface2: "#131622",
                "surface-card": "rgba(20, 24, 36, 0.9)",
                ink: "#ffffff",
                "ink-muted": "#9098aa",
                line: "rgba(255, 255, 255, 0.08)",
                line2: "rgba(47, 107, 255, 0.3)",
                accent: "#2f6bff", // electric royal blue
                accent2: "#60a5fa", // luminous sky / ice blue
                "accent-ocean": "#1d4ed8", // deep cobalt
                "accent-abyss": "#0b1020", // cosmic navy slate
                "accent-emerald": "#10b981", // active live emerald
                muted: "#838c9e",
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
                soft: "0 24px 64px -12px rgba(7,8,12,0.95)",
                glow: "0 0 0 1px rgba(47,107,255,0.35), 0 16px 48px -12px rgba(47,107,255,0.4)",
                "glow-sm":
                    "0 0 0 1px rgba(47,107,255,0.25), 0 8px 24px -8px rgba(47,107,255,0.35)",
                "glow-blue":
                    "0 0 0 1px rgba(47,107,255,0.4), 0 16px 48px -12px rgba(47,107,255,0.5)",
                "glow-sky":
                    "0 0 0 1px rgba(96,165,250,0.35), 0 16px 48px -12px rgba(96,165,250,0.4)",
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
