import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "") {
      setDarkMode(localStorage.getItem("dark-mode", "dark-mode"));
    }

    if (localStorage.getItem("dark-mode") === "dark-mode") {
      setDarkMode(localStorage.getItem("dark-mode", ""));
    }
  }, []);

  const toggle = () => {
    if (localStorage.getItem("dark-mode") === "") {
      localStorage.setItem("dark-mode", "dark-mode");
      setDarkMode(localStorage.getItem("dark-mode"));
    } else {
      localStorage.setItem("dark-mode", "");
      setDarkMode(localStorage.getItem("dark-mode"));
    }
  };

  return [darkMode, toggle];
};
