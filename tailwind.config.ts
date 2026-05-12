import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b5000b",
        "primary-container": "#e30613",
        background: "#f9f9f9",
        surface: "#f9f9f9",
        "surface-container": "#eeeeee",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-container-low": "#f3f3f3",
        "surface-container-lowest": "#ffffff",
        secondary: "#5f5e5e",
        tertiary: "#585959",
        outline: "#936e69",
        "outline-variant": "#e9bcb6",
        "on-surface": "#1a1c1c",
        "on-surface-variant": "#5e3f3b",
        "inverse-surface": "#2f3131",
        "inverse-primary": "#ffb4aa",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        xs: "4px",
        base: "8px",
        sm: "12px",
        md: "24px",
        gutter: "24px",
        lg: "48px",
        xl: "80px",
        "container-max": "1280px"
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-h1": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "headline-h1-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-h2": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "headline-h3": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "32px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "28px", fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }]
      },
      boxShadow: {
        glow: "0 8px 20px rgba(227, 6, 19, 0.15)",
        "glow-lg": "0 20px 50px rgba(227, 6, 19, 0.22)",
        glass: "0 10px 30px rgba(0,0,0,0.04)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
