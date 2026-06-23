import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        clinical: {
          50: "#f2f8f9",
          100: "#dceef1",
          500: "#287c8e",
          600: "#1f6675",
          700: "#1a5361"
        },
        trial: {
          50: "#f7f7fb",
          100: "#e8eaf2",
          600: "#4c5874"
        },
        signal: {
          500: "#2f8f6b",
          600: "#247654"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
