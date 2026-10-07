import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gujarati: ["var(--font-noto-gujarati)", "'Anek Gujarati'", "sans-serif"],
        display: ["'Outfit'", "system-ui", "sans-serif"],
      },
      colors: {
        mono: {
          0: "#000000",
          50: "#0a0a0a",
          100: "#141414",
          200: "#1f1f1f",
          300: "#2a2a2a",
          400: "#3d3d3d",
          500: "#5c5c5c",
          600: "#7a7a7a",
          700: "#a0a0a0",
          800: "#c4c4c4",
          900: "#e5e5e5",
          950: "#f5f5f5",
          1000: "#ffffff",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in-slow": "fadeIn 2s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "typewriter-cursor": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
