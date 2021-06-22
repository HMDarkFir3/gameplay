//React
import React, { useContext } from "react";
import { StatusBar } from "react-native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import Button from "../../components/Button";

//Styles
import {
  Container,
  IllustrationImage,
  Content,
  Title,
  SubTitle,
} from "./styles";

//Image
import IllustrationImg from "../../assets/images/illustration.png";

export default function SignIn() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <IllustrationImage source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se{"\n"}e organize suas{"\n"}
          jogatinas
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </SubTitle>

        <Button title="Entrar com Discord" />
      </Content>
    </Container>
  );
}
