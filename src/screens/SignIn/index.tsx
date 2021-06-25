//React
import React from "react";
import { StatusBar } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Components
import Background from "../../components/Background";
import ButtonDiscord from "../../components/ButtonDiscord";

//Styles
import {
  Container,
  IllustrationImage,
  Content,
  Title,
  SubTitle,
} from "./styles";

//Image
import IllustrationImg from "../../assets/images/yasuo.png";

export default function SignIn() {
  const { theme } = useTheme();

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <Container>
        <IllustrationImage source={IllustrationImg} resizeMode="contain" />

        <Content>
          <Title>
            Conecte-se{"\n"}e organize suas{"\n"}
            jogatinas
          </Title>

          <SubTitle>
            Crie grupos para jogar seus games{"\n"}
            favoritos com seus amigos
          </SubTitle>

          <ButtonDiscord title="Entrar com Discord" onPress={navigateToHome} />
        </Content>
      </Container>
    </Background>
  );
}
