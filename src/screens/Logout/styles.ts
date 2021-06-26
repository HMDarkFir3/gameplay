//styled-components
import styled from "styled-components/native";

//React
import { TouchableOpacity } from "react-native";

//Fonts
import fonts from "../../global/fonts";

//Types
type Props = {
  color: string;
  hasBorder: boolean;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 10px;

  font-family: ${fonts.RajdhaniBold};
  font-size: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

export const RedTitle = styled.Text`
  margin-top: 10px;

  font-family: ${fonts.RajdhaniBold};
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Interrogation = styled.Text`
  margin-top: 10px;

  font-family: ${fonts.RajdhaniBold};
  font-size: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

export const ButtonArea = styled.View`
  flex-direction: row;

  margin-top: 35px;
`;

export const Button = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 56px;

  margin-right: 5px;
  margin-left: 5px;

  background-color: ${(props) => props.color};
  border-width: ${(props) => (props.hasBorder ? 1 : 0) + "px"};
  border-color: ${(props) => props.theme.colors.secondary30};
  border-radius: 8px;
`;

export const Label = styled.Text`
  font-family: ${fonts.InterMedium};
  font-size: 15px;
  color: ${(props) => props.theme.colors.heading};
`;
