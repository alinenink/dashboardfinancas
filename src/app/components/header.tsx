import React from "react";
import { useTheme } from "@/app/components/ThemeContext";

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("Tema atual: ", isDarkMode ? "Escuro" : "Claro");

  return (
    <header className="header">
      <h1 className="header-title">Finanças Pessoais</h1>
      <button
        onClick={toggleTheme}
        className="button button-secondary"
      >
        Toggle Theme
      </button>
    </header>
  );
}
