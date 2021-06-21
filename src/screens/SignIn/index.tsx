//React
import React from "react";

//Styles
import {
  Container,
  IllustrationImage,
  Content,
  Title,
  SubTitle,
} from "./styles";

//Image
import IllustrationImg from "../../assets/images/illustration.png";

export default function SignIn() {
  return (
    <Container>
      <IllustrationImage source={IllustrationImg} />

      <Content>
        <Title>
          Conecte-se{`\n`}e organize suas{`\n`}
          jogatinas
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </SubTitle>
      </Content>
    </Container>
  );
}
