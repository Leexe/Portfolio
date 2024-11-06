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
        'base-clr':'#11121a',
        'line-clr': '#42434a',
        'card-bg-clr': '#252739',
        'hover-clr': '#222533',
        'text-clr': '#e6e6ef',
        'accent-clr': '#5e63ff',
        'secondary-text-clr': '#b0b3c1',
      },
    },
  },
  plugins: [],
};
export default config;
