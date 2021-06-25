//styled-components
import styled from "styled-components/native";

//react-native-gesture-handler
import { RectButton } from "react-native-gesture-handler";

import { SvgProps } from "react-native-svg";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  border-right-width: 1px;
  border-color: ${(props) => props.theme.colors.line};
`;

export const Title = styled.Text`
  flex: 1;

  text-align: center;
  font-family: ${fonts.InterMedium};
  font-size: 15px;
  color: ${(props) => props.theme.colors.heading};
`;
