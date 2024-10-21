import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-clr':'#11121a',
        'line-clr': '#42434a',
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