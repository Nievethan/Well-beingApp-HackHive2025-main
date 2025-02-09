/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        softBlue: '#AFCFD6',
        sandyBeach: '#AB9E7F',
        warmBeige: '#D4CAA2',
        turquoise: '#B9DDDC',
        coastWave: '#C6E7E7',
        oceanBlue: '#009DC4',
      },
    },
  },
  plugins: [],
};
