//React
import React from "react";

//Style
import { Container } from "./styles";

//Types
type Props = {
  width: number;
};

export default function ListDivider(props: Props) {
  const { width } = props;

  return <Container width={width} />;
}
