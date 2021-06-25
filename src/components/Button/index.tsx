//React
import React from "react";

//react-native-gesture-handler
import { RectButtonProps } from "react-native-gesture-handler";

//Styles
import { Container, Title } from "./styles";

//Types
type Props = RectButtonProps & {
  title: string;
};

export default function Button(props: Props) {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
