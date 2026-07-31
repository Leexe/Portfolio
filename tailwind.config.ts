import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      }
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        'base-clr':'#0a0b10',
        'line-clr': '#1e2238',
        'card-bg-clr': '#121526',
        'hover-clr': '#1a1d36',
        'text-clr': '#e6e6ef',
        'accent-clr': '#6366f1', // Indigo
        'cyan-glow': '#06b6d4',
        'emerald-glow': '#10b981',
        'secondary-text-clr': '#b0b3c1',
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
