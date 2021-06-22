//React
import React, { useContext, ReactNode } from "react";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { Container, ImageAvatar } from "./styles";

//Types
type Props = {
  urlImage: string;
};

export default function Avatar(props: Props) {
  const { urlImage } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <Container colors={[theme.colors.secondary50, theme.colors.secondary70]}>
      <ImageAvatar source={{ uri: urlImage }} />
    </Container>
  );
}
