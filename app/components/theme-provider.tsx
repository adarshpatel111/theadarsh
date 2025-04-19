import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" ;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Initial context state
const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => {},
};

// Create context
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * ThemeProvider wraps your app and provides theme state.
 * It reads/saves to localStorage and syncs <html> class.
 */
export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // On mount: load stored theme
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    if (stored) setTheme(stored);
  }, [storageKey]);

  // Sync <html> class whenever theme changes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const applied =
      theme === "dark"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.classList.add(applied);
  }, [theme]);

  // Setter that persists to localStorage
  const value: ThemeProviderState = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(storageKey, newTheme);
      }
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Hook to access theme context.
 * Must be called within ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
