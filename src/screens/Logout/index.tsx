//React
import React from "react";

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

  return (
    <Container>
      <Content>
        <Title>Deseja sair do Game</Title>
        <RedTitle>Play</RedTitle>
        <Interrogation>?</Interrogation>
      </Content>

      <ButtonArea>
        <Button
          onPress={() => closeModal()}
          activeOpacity={0.7}
          color={theme.colors.secondary100}
          hasBorder={true}
        >
          <Label>Não</Label>
        </Button>

        <Button
          onPress={() => alert("sim")}
          activeOpacity={0.7}
          color={theme.colors.primary}
          hasBorder={false}
        >
          <Label>Sim</Label>
        </Button>
      </ButtonArea>
    </Container>
  );
}
