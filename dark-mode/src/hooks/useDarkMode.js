import { useState, useCallback } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState("");

  const toggle = useCallback(
    () =>
      setDarkMode((state) => (state === "" ? setDarkMode("dark-mode") : "")),
    []
  );

  return [darkMode, toggle];
};
