//styled-components
import styled from "styled-components/native";

//React
import { TextInput } from "react-native";

//Fonts
import fonts from "../../global/fonts";

export const Input = styled(TextInput)`
  width: 100%;
  height: 95px;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;

  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.heading};

  background-color: ${(props) => props.theme.colors.secondary40};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary50};
`;
