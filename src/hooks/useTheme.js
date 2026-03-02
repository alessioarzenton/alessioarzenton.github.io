import { useState, useEffect } from "react";

function useTheme() {
  // Legge il tema salvato in localStorage, default "dark"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Ogni volta che il tema cambia, aggiorna la classe su <html> e salva in localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
