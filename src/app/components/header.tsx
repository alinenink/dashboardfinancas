import React from "react";
import { useTheme } from "@/app/components/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa"; // Importando ícones

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("Tema atual: ", isDarkMode ? "Escuro" : "Claro");

  return (
    <header className="header flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="header-title text-xl font-bold">Finanças Pessoais</h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {/* Alterna entre os ícones com base no estado do tema */}
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </header>
  );
}
