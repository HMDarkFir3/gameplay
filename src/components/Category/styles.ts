//styled-components
import styled from "styled-components/native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Fonts
import fonts from "../../global/fonts";

//Types
type Props = {
  checked: boolean;
};

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 104px;
  height: 120px;

  margin-right: 8px;

  border-radius: 8px;
`;

export const Content = styled.View<Props>`
  align-items: center;
  justify-content: space-around;

  width: 100px;
  height: 116px;

  background-color: ${(props) => props.theme.colors.secondary40};
  border-radius: 8px;

  opacity: ${(props) => (props.checked === true ? 1 : 0.4)};
`;

export const Checked = styled.View<Props>`
  align-self: flex-end;

  width: ${(props) => (props.checked === true ? 10 : 10)}px;
  height: ${(props) => (props.checked === true ? 10 : 10)}px;

  margin-right: 7px;

  background-color: ${(props) =>
    props.checked === true
      ? props.theme.colors.primary
      : props.theme.colors.secondary100};
  border-radius: 4px;
  border-width: ${(props) => (props.checked === true ? 0 : 2)}px;
  border-color: ${(props) => props.theme.colors.secondary50};
`;

export const Title = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 15px;
  color: ${(props) => props.theme.colors.heading};
`;
