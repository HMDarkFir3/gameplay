//React
import React from "react";
import { Alert } from "react-native";

//Components
import SmallButton from "../../components/SmallButton";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Styles
import {
  Container,
  Content,
  Title,
  RedTitle,
  Interrogation,
  ButtonArea,
  Button,
  Label,
} from "./styles";

//Types
type Props = {
  closeModal: () => void;
};

export default function Logout(props: Props) {
  const { closeModal } = props;

  const { theme } = useTheme();

  function signOut() {}

  return (
    <Container>
      <Content>
        <Title>Deseja sair do Game</Title>
        <RedTitle>Play</RedTitle>
        <Interrogation>?</Interrogation>
      </Content>

      <ButtonArea>
        <SmallButton
          title="Não"
          color={theme.colors.secondary100}
          hasBorder={true}
          onPress={closeModal}
        />
        <SmallButton
          title="Sim"
          color={theme.colors.primary}
          hasBorder={false}
          onPress={signOut}
        />
      </ButtonArea>
    </Container>
  );
}
