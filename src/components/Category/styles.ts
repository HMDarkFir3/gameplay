//styled-components
import styled from "styled-components/native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Fonts
import fonts from "../../global/fonts";

//Types
type Props = {
  isChecked: boolean;
};

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 104px;
  height: 120px;

  margin-right: 8px;

  border-radius: 8px;
`;

export const Content = styled(LinearGradient)<Props>`
  align-items: center;
  justify-content: space-between;

  width: 100px;
  height: 116px;

  padding-top: 20px;
  padding-bottom: 20px;

  border-radius: 8px;

  opacity: ${(props) => (props.isChecked === true ? 1 : 0.5)};
`;

export const Checked = styled.View<Props>`
  position: absolute;
  top: 7px;
  right: 7px;

  width: ${(props) => (props.isChecked === true ? 10 : 10)}px;
  height: ${(props) => (props.isChecked === true ? 10 : 10)}px;

  background-color: ${(props) =>
    props.isChecked === true
      ? props.theme.colors.primary
      : props.theme.colors.secondary100};
  border-radius: 4px;
  border-width: ${(props) => (props.isChecked === true ? 0 : 2)}px;
  border-color: ${(props) => props.theme.colors.secondary50};
`;

export const Title = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 15px;
  color: ${(props) => props.theme.colors.heading};
`;
