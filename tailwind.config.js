/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Inclui as páginas do Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Inclui os componentes
    "./app/**/*.{js,ts,jsx,tsx}", // Para projetos com a pasta 'app'
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
};
