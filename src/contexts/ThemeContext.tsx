//React
import React, { createContext, useState, ReactNode } from "react";

//styled-componentes
import { DefaultTheme, ThemeProvider } from "styled-components";

//Styles
import light from "../global/themes/light";
import dark from "../global/themes/dark";

//Types
type ThemeContextData = {
  theme: DefaultTheme;
  isEnabled: boolean;
  toggleTheme(): void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemesProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(dark);
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleTheme() {
    if (theme.title === "dark") {
      setTheme(light);
      setIsEnabled((previousState) => !previousState);
    } else {
      setTheme(dark);
      setIsEnabled((previousState) => !previousState);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, isEnabled, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
