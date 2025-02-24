import { useEffect, useState } from "react";

const DEFAULT_THEME = {
  background: "#0a0a0a",
  foreground: "#ededed",
  accent: "#00ff7f"
};

export function useTheme() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem("gradiorum-theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
      applyTheme(JSON.parse(savedTheme));
    } else {
      applyTheme(DEFAULT_THEME);
    }
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty("--background-color", theme.background);
    document.documentElement.style.setProperty("--foreground-color", theme.foreground);
    document.documentElement.style.setProperty("--accent-color", theme.accent);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("gradiorum-theme", JSON.stringify(newTheme));
    applyTheme(newTheme);
  };

  return { theme, changeTheme };
}
