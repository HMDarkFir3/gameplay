//React
import React, { ReactNode } from "react";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Styles
import { Container } from "./styles";

//Types
type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  const { theme } = useTheme();

  return (
    <Container colors={[theme.colors.secondary80, theme.colors.secondary100]}>
      {children}
    </Container>
  );
}
