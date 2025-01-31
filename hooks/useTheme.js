import { useEffect, useState } from "react";

const AVAILABLE_THEMES = [
  "theme-dark",
  "theme-light",
  "theme-holographic",
  "theme-neon",
  "theme-gradient"
];

export function useTheme() {
  const [theme, setTheme] = useState("theme-dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme && AVAILABLE_THEMES.includes(localTheme)) {
      setTheme(localTheme);
      AVAILABLE_THEMES.forEach((t) =>
        document.documentElement.classList.remove(t)
      );
      document.documentElement.classList.add(localTheme);
    } else {
      document.documentElement.classList.add("theme-dark");
    }
  }, []);

  const changeTheme = (newTheme) => {
    if (!AVAILABLE_THEMES.includes(newTheme)) return;
    AVAILABLE_THEMES.forEach((t) =>
      document.documentElement.classList.remove(t)
    );
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, changeTheme, availableThemes: AVAILABLE_THEMES };
}
