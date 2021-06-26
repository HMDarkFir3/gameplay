//styled-components
import styled from "styled-components/native";

//react-native-iphone-x-helper
import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Fonts
import fonts from "../../global/fonts";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: ${getStatusBarHeight() + 26 + "px"};
  padding-left: 24px;
  padding-right: 24px;
`;

export const ContainerSwitch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 24px;
  margin-bottom: 24px;
  padding-left: 24px;
`;

export const SwitchTitle = styled.Text`
  margin-bottom: 3px;
  margin-left: 22px;

  font-family: ${fonts.InterRegular};
  font-size: 20px;
  color: ${(props) => props.theme.colors.highlight};
`;

export const Content = styled.View`
  margin-top: 42px;
`;
