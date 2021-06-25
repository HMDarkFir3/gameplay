//React
import React from "react";
import { View } from "react-native";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Avatar from "../Avatar";

//Styles
import { Container, UserView, Greeting, UserName, Message } from "./styles";

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

        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}
