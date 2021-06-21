//React
import React, { createContext, useState } from "react";

//styled-componentes
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "../global/styles/themes/light";
import dark from "../global/styles/themes/dark";

//Interface
interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemesProvider({ children }: any) {
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
