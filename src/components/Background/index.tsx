//React
import React, { useContext, ReactNode } from "react";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { Container } from "./styles";

//Types
type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container colors={[theme.colors.secondary80, theme.colors.secondary100]}>
      {children}
    </Container>
  );
}
