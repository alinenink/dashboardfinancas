import React, { createContext, useState, useContext, useEffect } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sincronizar com o tema do sistema
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: ligtht)").matches;
    setIsDarkMode(systemPrefersDark);
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
