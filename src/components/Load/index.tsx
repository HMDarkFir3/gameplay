//React
import React from "react";
import { ActivityIndicator } from "react-native";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Styles
import { Container } from "./styles";

export default function Load() {
  const { theme } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </Container>
  );
}
