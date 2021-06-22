//styled-components
import styled from "styled-components/native";

//react-native-iphone-x-helper
import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Content = styled.View`
  margin-top: 42px;
`;

export const List = styled.FlatList``;
