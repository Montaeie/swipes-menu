import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lpi-green': '#153d19',
        'lpi-beige': '#e5e3d5',
        'lpi-dark-green': '#153d19',
      },
    },
  },
  plugins: [],
} satisfies Config;
