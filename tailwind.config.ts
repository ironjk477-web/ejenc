
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#2E7D32", dark: "#1B5E20", light: "#A5D6A7" } }
    }
  },
  plugins: []
};
export default config;
