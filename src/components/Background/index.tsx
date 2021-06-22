//React
import React, { useContext, ReactNode } from "react";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { styles } from "./styles";

//Types
type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
