//React
import React, { useContext, ReactNode } from "react";
import { View } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { Container, Title } from "./styles";

export default function ModalView() {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  function goBackToHome() {
    navigation.goBack();
  }

  return <Container></Container>;
}
