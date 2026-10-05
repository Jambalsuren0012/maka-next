"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("edumind-theme");
    const initialTheme: Theme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("edumind-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Light горимд шилжих" : "Dark горимд шилжих"}
      title={theme === "dark" ? "Light горим" : "Dark горим"}
      className="theme-toggle rounded-xl border border-violet-400/20 bg-violet-900/30 px-3 py-2 text-lg transition hover:border-emerald-300/40"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
