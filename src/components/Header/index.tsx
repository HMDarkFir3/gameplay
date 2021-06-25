//React
import React, { useContext, ReactNode } from "react";
import { View } from "react-native";

//react-native-gesture-handler
import { BorderlessButton } from "react-native-gesture-handler";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { Container, Title } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Types
type Props = {
  title: string;
  action?: ReactNode;
};

export default function Header(props: Props) {
  const { title, action } = props;

  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  function goBackToHome() {
    navigation.goBack();
  }

  return (
    <Container colors={[theme.colors.secondary100, theme.colors.secondary40]}>
      <BorderlessButton onPress={goBackToHome}>
        <Feather name="arrow-left" color={theme.colors.heading} size={24} />
      </BorderlessButton>

      <Title>{title}</Title>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </Container>
  );
}
