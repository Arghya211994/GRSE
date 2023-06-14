import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeToLightTheme = () => {
    setTheme("light");
    console.log("Light theme selected");
  };

  const changeToDarkTheme = () => {
    setTheme("dark");
    console.log("Dark theme selected");
  };

  const themeVariables = {
    backgroundColor: theme === "light" ? "var(--primary-bg-light-color)" : "var(--primary-bg-dark-color)",
    backgroundColor2:theme === "light" ? "var(--secondary-bg-light-color)" : "var(--secondary-bg-dark-color)",
    color: theme === "light" ? "var(--primary-font-light-color)" : "var(--primary-font-dark-color)",
    boxShadow: theme === "light" ? "var(--primary-light-boxshadow)" : "var(--primary-dark-boxshadow)"
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeToLightTheme,
        changeToDarkTheme,
        themeVariables
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
