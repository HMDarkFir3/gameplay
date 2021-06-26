//React
import React, { createContext, useState, ReactNode, useEffect } from "react";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//styled-componentes
import { DefaultTheme, ThemeProvider } from "styled-components";

//Storage
import { COLLECTION_THEME } from "../storages/storage";

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

  async function toggleTheme() {
    if (theme.title === "dark") {
      await AsyncStorage.setItem(COLLECTION_THEME, light.title);

      setTheme(light);
      setIsEnabled((previousState) => !previousState);
    } else {
      await AsyncStorage.setItem(COLLECTION_THEME, dark.title);

      setTheme(dark);
      setIsEnabled((previousState) => !previousState);
    }
  }

  async function loadTheme() {
    const themeLocal = await AsyncStorage.getItem(COLLECTION_THEME);

    setTheme(themeLocal === "light" ? light : dark);
  }

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isEnabled, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
