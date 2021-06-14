import { useState, useCallback, useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {
    localStorage.setItem("darkMode", "");
  }, []);

  const toggle = () => {
    if (darkMode === "") {
      localStorage.setItem("darkMode", "dark-mode");
      setDarkMode("dark-mode");
    } else {
      localStorage.setItem("darkMode", "");
      setDarkMode("");
    }
  };

  return [darkMode, toggle];
};
