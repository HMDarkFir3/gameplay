//React
import React from "react";
import { View } from "react-native";

//Components
import Avatar from "../Avatar";

//Styles
import { Container, UserView, Greeting, UserName, Message } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/hmdarkfir3.png" />
      <View>
        <UserView>
          <Greeting>Olá,</Greeting>
          <UserName>Henrique</UserName>
        </UserView>

        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}
