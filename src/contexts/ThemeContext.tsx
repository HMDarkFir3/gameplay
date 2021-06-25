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
  toggleTheme(): void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemesProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
