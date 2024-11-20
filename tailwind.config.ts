import type { Config } from "tailwindcss";

export default {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',   
    './styles/**/*.css',          
  ], 
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#111827",
      },
      fontFamily: {
        sans: ["GeistMonoVF", "sans-serif"], // Nome das suas fontes
      },
      spacing: {
        "3rem": "3rem",
        "5rem": "5rem",
        "10rem": "10rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
