import React, { createContext, useState, useContext, useEffect } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Inicia no modo escuro

  // Sincronizar com o tema do sistema no primeiro carregamento
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(systemPrefersDark || true); // Padrão: escuro
    const html = document.documentElement;
    html.classList.toggle("dark", systemPrefersDark || true); // Aplica classe "dark" no <html>
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    const html = document.documentElement;
    html.classList.toggle("dark", !isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
