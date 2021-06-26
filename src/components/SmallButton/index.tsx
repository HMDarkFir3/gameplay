//React
import React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, Title } from "./styles";

//Types
type Props = TouchableOpacityProps & {
  title: string;
  color: string;
  hasBorder: boolean;
  onPress: () => void;
};

export default function SmallButton(props: Props) {
  const { title, color, hasBorder, onPress } = props;

  return (
    <Container
      activeOpacity={0.7}
      color={color}
      hasBorder={hasBorder}
      onPress={onPress}
    >
      <Title>{title}</Title>
    </Container>
  );
}
