//React
import React, { useState } from "react";
import { View } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Avatar from "../Avatar";
import ModalView from "../ModalView";

//Utils
import messageRandom from "../../utils/messageRandom";

//Screens
import Logout from "../../screens/Logout";

//Styles
import { Container, UserView, Greeting, UserName, Message } from "./styles";

const messageLength = messageRandom.length;
const messageNumberRandom = Math.floor(Math.random() * messageLength);
const message = messageRandom[messageNumberRandom];

export default function Profile() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  function openModalLogout() {
    setOpen(true);
  }

  function closeModalLogout() {
    setOpen(false);
  }

  return (
    <Container>
      <BorderlessButton onPress={openModalLogout}>
        <Avatar urlImage={user.avatar} />
      </BorderlessButton>
      <View>
        <UserView>
          <Greeting>Olá,</Greeting>
          <UserName>{user.firstName}</UserName>
        </UserView>

        <Message>{message}</Message>
      </View>
      <ModalView visible={open} closeModal={closeModalLogout} marginView={500}>
        <Logout closeModal={closeModalLogout} />
      </ModalView>
    </Container>
  );
}
