import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#0077B6", dark: "#005e8f", light: "#e6f3fa" } }
    },
  },
  plugins: [],
} satisfies Config;
