//React
import React, { ReactNode } from "react";
import { Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Components
import Background from "../Background";

//Styles
import { Overlay, Container, Bar } from "./styles";

//Type
type Props = ModalProps & {
  children: ReactNode;
  marginView: number;
  closeModal: () => void;
};

export default function ModalView(props: Props) {
  const { children, marginView, closeModal, ...rest } = props;

  const navigation = useNavigation();

  function goBackToHome() {
    navigation.goBack();
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      {...rest}
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <Overlay>
          <Container marginView={marginView}>
            <Background>
              <Bar />
              {children}
            </Background>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
