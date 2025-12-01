import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#020617",
        accent: "#38bdf8", // professional sky blue
        accentSecondary: "#a855f7", // soft violet
        muted: "#94a3b8"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(15,23,42,0.85)"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: []
};

export default config;



