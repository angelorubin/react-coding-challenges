import { useState, useEffect } from "react";

export const useToggleTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "") {
      setTheme(localStorage.getItem("dark-mode", "dark-mode"));
    }

    if (localStorage.getItem("dark-mode") === "dark-mode") {
      setTheme(localStorage.getItem("dark-mode", ""));
    }
  }, []);

  const toggle = () => {
    if (
      localStorage.getItem("dark-mode") === "" ||
      localStorage.getItem("dark-mode") === null
    ) {
      localStorage.setItem("dark-mode", "dark-mode");
      setTheme(localStorage.getItem("dark-mode"));
    } else {
      localStorage.setItem("dark-mode", "");
      setTheme(localStorage.getItem("dark-mode"));
    }
  };

  return [theme, toggle];
};
