//React
import React from "react";
import { StatusBar, Alert, ActivityIndicator } from "react-native";

//Hooks
import { useAuth } from "../../hooks/useAuth";
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
  const { loading, signIn } = useAuth();
  const { theme } = useTheme();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
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

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} size="large" />
          ) : (
            <ButtonDiscord title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </Content>
      </Container>
    </Background>
  );
}
