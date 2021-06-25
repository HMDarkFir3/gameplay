//styled-components
import styled from "styled-components/native";

//React
import { TouchableOpacity } from "react-native";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding-left: 24px;
  padding-right: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 7px;
  margin-bottom: 4px;

  font-family: ${fonts.RajdhaniBold};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Type = styled.Text`
  margin-bottom: 7px;

  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.highlight};
`;
