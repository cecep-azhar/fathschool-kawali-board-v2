"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useCustomTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Cek apakah user dalam mode dark
  const isDarkMode = theme === "dark" || (theme === "system" && systemTheme === "dark");

  // Fungsi untuk toggle tema
  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return { isDarkMode, toggleDarkMode, isMounted };
}
