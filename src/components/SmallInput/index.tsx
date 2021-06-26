//React
import React from "react";

//react-native-masked-text
import { TextInputMaskProps } from "react-native-masked-text";

//Styles
import { Input } from "./styles";

//Types
type Props = TextInputMaskProps & {
  type: string;
};

export default function SmallInput(props: Props) {
  const { type, ...rest } = props;

  return (
    <Input
      type={type}
      options={{ mask: "99" }}
      {...rest}
      keyboardType="numeric"
      maxLength={2}
    />
  );
}
