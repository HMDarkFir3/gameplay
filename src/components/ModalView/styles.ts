//styled-components
import styled from "styled-components/native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Fonts
import fonts from "../../global/fonts";

export const Overlay = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.overlay};
`;

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const Bar = styled.View`
  align-self: center;

  width: 39px;
  height: 2px;

  margin-top: 13px;
  margin-bottom: 103px;

  background-color: ${(props) => props.theme.colors.secondary30};
  border-radius: 2px;
`;
