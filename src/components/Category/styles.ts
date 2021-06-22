//styled-components
import styled from "styled-components/native";

//react-native-gesture-handler
import { RectButton } from "react-native-gesture-handler";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Types
type Props = {
  checked?: boolean;
};

export const Container = styled(RectButton)``;

export const Gradient = styled(LinearGradient)``;

export const Content = styled.View<Props>`
  opacity: ${(props) => (props.checked === true ? 1 : 0.4)};
`;

export const Checked = styled.View<Props>``;

export const Title = styled.Text``;
