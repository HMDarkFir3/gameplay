//React
import React from "react";

//react-native-gesture-handler
import { RectButtonProps } from "react-native-gesture-handler";

//Styles
import { Container } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Types
type Props = RectButtonProps;

export default function ButtonAdd(props: Props) {
  const { ...rest } = props;

  return (
    <Container {...rest}>
      <Feather name="plus" color="#ffffff" size={24} />
    </Container>
  );
}
