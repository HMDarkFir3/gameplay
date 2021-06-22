//React
import React from "react";

//Styles
import { Container, Title, Subtitle } from "./styles";

//Types
type Props = {
  title: string;
  subtitle: string;
};

export default function ListHeader(props: Props) {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
