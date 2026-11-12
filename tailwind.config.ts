// root/tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: {
          900: "#0b0b0b",
          800: "#141414",
          700: "#1f1f1f",
          600: "#2a2a2a",
        },
        orange: {
          DEFAULT: "#ff6600",
          hover: "#e55c00",
        },
      },
    },
  },
  plugins: [],
};
export default config;