//React
import React from "react";

//Styles
import {
  Container,
  Content,
  UserView,
  Greeting,
  UserName,
  Message,
} from "./styles";

export default function Avatar() {
  return (
    <Container>
      <Content>
        <UserView>
          <Greeting>Olá,</Greeting>
          <UserName>Henrique</UserName>
        </UserView>

        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
}
