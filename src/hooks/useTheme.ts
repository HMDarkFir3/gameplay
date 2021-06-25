//React
import { useContext } from "react";

//Contexts
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
