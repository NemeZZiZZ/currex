import { useCallback, useEffect, useState } from "react";
import { loadString, saveString } from "@/utils/storage";

export type Theme = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

const THEME_KEY = "theme";

function systemPrefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
}

function resolve(theme: Theme): ResolvedTheme {
  if (theme === "system") return systemPrefersDark() ? "dark" : "light";
  return theme;
}

/** Toggles the `.dark` class on <html> according to the selected theme. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = loadString(THEME_KEY, "system") as Theme;
    return stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : "system";
  });
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolve(loadString(THEME_KEY, "system") as Theme),
  );

  // Apply the theme to the document
  useEffect(() => {
    const resolved = resolve(theme);
    setResolvedTheme(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [theme]);

  // Follow the system theme when "system" is selected
  useEffect(() => {
    if (theme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const resolved: ResolvedTheme = mql.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      document.documentElement.classList.toggle("dark", resolved === "dark");
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    saveString(THEME_KEY, next);
  }, []);

  return { theme, setTheme, resolvedTheme };
}
