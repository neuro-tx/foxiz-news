"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

type Theme = "light" | "dark";
type Layout = "grid" | "row";
type Color = string ;

interface SettingsContextProps {
  theme : string;
  color: string;
  layout: string;
  toggleTheme: () => void;
  setLayout: (layout: Layout) => void;
  setColor: (color: Color) => void;
  setThemeState: (theme: Theme) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [color, setColorState] = useState<Color>("");
  const [layout, setLayoutState] = useState<Layout>("grid");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      const savedColor = localStorage.getItem("color") as Color;
      const savedLayout = localStorage.getItem("layout") as Layout;

      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.remove("dark");
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
        }
      }

      if (savedColor) {
        setColorState(savedColor);
      }
      if (savedLayout) {
        setLayoutState(savedLayout);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [mounted]);

  const toggleTheme = () => {
    if (!mounted) return;

    try {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);

      document.documentElement.classList.remove("dark");
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } catch (error) {
      console.error("Error toggling theme:", error);
    }
  };

  const setLayout = (layout: Layout) => {
    if (!mounted) return;

    try {
      setLayoutState(layout);
      localStorage.setItem("layout", layout);
    } catch (error) {
      console.error("Error setting layout:", error);
    }
  };

  const setColor = (color: Color) => {
    if (!mounted) return;

    try {
      setColorState(color);
      localStorage.setItem("color", color ?? "");
    } catch (error) {
      console.error("Error setting color:", error);
    }
  };

  const setThemeState = (theme: Theme) => {
    try {
      setTheme(theme);
      localStorage.setItem("theme", theme);

      document.documentElement.classList.remove("dark");
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } catch (error) {
      console.error("Error toggling theme:", error);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        color,
        layout,
        toggleTheme,
        setLayout,
        setColor,
        setThemeState,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextProps => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return context;
};
