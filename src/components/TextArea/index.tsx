//React
import React from "react";
import { TextInputProps } from "react-native";

//Styles
import { Input } from "./styles";

//Types
type Props = TextInputProps;

export default function TextArea(props: Props) {
  const { ...rest } = props;

  return <Input style={{ textAlignVertical: "top" }} {...rest} />;
}
