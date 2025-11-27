import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terraform Brand Colors
        "terraform-purple": "#7B42BC",
        "terraform-purple-light": "#9B6BD9",
        "terraform-purple-dark": "#5A2F8F",

        // Cloud Provider Colors
        "aws-orange": "#FF9900",
        "azure-blue": "#0078D4",
        "gcp-blue": "#4285F4",

        // Terraform Action Colors
        "success-green": "#3FB950",
        "destroy-red": "#DA3633",
        "plan-yellow": "#F0B400",
        "change-orange": "#FF9900",

        // Dark Theme Base
        "bg-dark": "#0d1117",
        "bg-darker": "#010409",
        "card-dark": "#161b22",
        "card-hover": "#1c2128",
        "border-subtle": "#30363d",
        "border-emphasis": "#6e7681",

        // Text Colors
        "text-primary": "#e6edf3",
        "text-secondary": "#7d8590",
        "text-muted": "#484f58",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
