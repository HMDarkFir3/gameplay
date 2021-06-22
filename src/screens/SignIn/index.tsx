//React
import React, { useContext } from "react";
import { StatusBar } from "react-native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import DiscordButton from "../../components/DiscordButton";

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
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

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

        <DiscordButton title="Entrar com Discord" />
      </Content>
    </Container>
  );
}
