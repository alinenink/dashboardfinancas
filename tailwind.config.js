/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Suporte a tema escuro/claro com classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
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
        '3rem': '3rem', // Adiciona 3rem como um valor de espaçamento personalizado
      },
    },
  },
  plugins: [],
};
