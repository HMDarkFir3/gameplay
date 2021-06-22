//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled.View`
  flex-direction: row;
`;

export const Content = styled.View``;

export const UserView = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  margin-right: 6px;

  font-family: ${fonts.RajdhaniMedium};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
`;

export const UserName = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Message = styled.Text`
  font-family: ${fonts.InterRegular};
  font-size: 18px;
  color: ${(props) => props.theme.colors.highlight};
`;
