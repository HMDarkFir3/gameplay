//styled-components
import styled from "styled-components/native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled(LinearGradient)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 104px;

  padding-top: ${getStatusBarHeight() + "px"};
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${fonts.RajdhaniBold};
  font-size: 20px;
  color: ${(props) => props.theme.colors.heading};
`;
