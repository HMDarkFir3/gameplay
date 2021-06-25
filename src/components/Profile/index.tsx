//React
import React from "react";
import { View } from "react-native";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Avatar from "../Avatar";

//Utils
import messageRandom from "../../utils/messageRandom";

//Styles
import { Container, UserView, Greeting, UserName, Message } from "./styles";

const messageLength = messageRandom.length;
const messageNumberRandom = Math.floor(Math.random() * messageLength);
const message = messageRandom[messageNumberRandom];

export default function Profile() {
  const { user } = useAuth();

  return (
    <Container>
      <Avatar urlImage={user.avatar} />
      <View>
        <UserView>
          <Greeting>Olá,</Greeting>
          <UserName>{user.firstName}</UserName>
        </UserView>

        <Message>{message}</Message>
      </View>
    </Container>
  );
}
