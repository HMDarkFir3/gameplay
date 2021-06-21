//styled-components
import styled from "styled-components/native";

//react-native-iphone-x-helper
import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Colors

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.background};
`;

export const IllustrationImage = styled.Image``;

export const Content = styled.View``;

export const Title = styled.Text``;

export const SubTitle = styled.Text``;
