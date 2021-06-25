//React
import React from "react";

//Style
import { Container } from "./styles";

//Types
type Props = {
  width: number;
  isCentered?: boolean;
};

export default function ListDivider(props: Props) {
  const { width, isCentered = false } = props;

  return <Container width={width} isCentered={isCentered} />;
}
