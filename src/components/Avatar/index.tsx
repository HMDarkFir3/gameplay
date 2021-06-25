//React
import React from "react";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Styles
import { Container, ImageAvatar } from "./styles";

//Types
type Props = {
  urlImage: string;
};

export default function Avatar(props: Props) {
  const { urlImage } = props;

  const { theme } = useTheme();

  return (
    <Container colors={[theme.colors.secondary50, theme.colors.secondary70]}>
      <ImageAvatar source={{ uri: urlImage }} />
    </Container>
  );
}
