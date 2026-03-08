import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
animation: {
  fadeIn: "fadeIn 1s ease forwards",
  "spin-slow": "spin 18s linear infinite"
},

keyframes: {
  fadeIn: {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" }
  }
}
    },
  },
  plugins: [],
};

export default config;