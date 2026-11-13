// root/tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-michroma)", "sans-serif"],
        display: ["var(--font-unica-one)", "serif"],
        serif: ["var(--font-unica-one)", "serif"],
      },
      colors: {
        carbon: {
          900: "#0b0b0b",
          800: "#141414",
          700: "#1f1f1f",
          600: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#ff7a1a",
          light: "#ff9a4d",
          dark: "#d65f00",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,122,26,0.35), 0 8px 40px -8px rgba(255,122,26,0.35)",
      },

    },
  },
  plugins: [],
};
export default config;