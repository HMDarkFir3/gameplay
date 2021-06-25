//React
import React, { useContext, ReactNode } from "react";
import { StatusBar, Modal, ModalProps } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Components
import Background from "../Background";

//Styles
import { Overlay, Container, Bar } from "./styles";

//Type
type Props = ModalProps & {
  children: ReactNode;
};

export default function ModalView(props: Props) {
  const { children, ...rest } = props;

  const navigation = useNavigation();

  function goBackToHome() {
    navigation.goBack();
  }

  return (
    <Modal transparent={true} animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <Bar />
            {children}
          </Background>
        </Container>
      </Overlay>
    </Modal>
  );
}
