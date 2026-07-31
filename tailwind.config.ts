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
        sans: 'var(--font-mono)', // Force mono
        serif: 'var(--font-mono)', // Force mono
        mono: 'var(--font-mono)',
      },
      colors: {
        'obsidian': '#000000',
        'obsidian-card': '#050505',
        'line-clr': '#003b00',
        'text-main': '#00ff41',
        'text-muted': '#008f11',
        'accent-mint': '#00ff41',
      },
    },
  },
  plugins: [],
};
export default config;
