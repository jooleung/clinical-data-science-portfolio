import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Menlo", "ui-monospace", "monospace"]
      },
      colors: {
        ink: "#17211f",
        clinical: {
          50: "#f4fbf8",
          100: "#d9efe6",
          500: "#1f8a74",
          600: "#176b5b",
          700: "#0f4e44"
        },
        trial: {
          50: "#f6f3ea",
          100: "#e9e3d2",
          600: "#635f52"
        },
        signal: {
          500: "#c7623a",
          600: "#9e4527"
        },
        panel: {
          50: "#fbfbf7",
          100: "#efefe7",
          200: "#d8d7c8"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 33, 31, 0.08)",
        tile: "8px 8px 0 rgba(23, 33, 31, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
