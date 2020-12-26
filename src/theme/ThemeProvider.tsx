import { useState, createContext, ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./themes";

export const ThemeContext = createContext({
  currentTheme: "light",
  setTheme: null,
});

const AppThemeProvider = (props: Record<string, unknown>): ReactNode => {
  const { children } = props;
  let currentTheme = "light";
  if (typeof Storage !== "undefined") {
    currentTheme = localStorage.getItem("appTheme") || "light";
  }
  const [themeName, _setThemeName] = useState(currentTheme);
  const theme = getTheme(themeName);
  const setThemeName = (name: string): null => {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("appTheme", name);
    }
    _setThemeName(name);
  };
  const themeContext = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
