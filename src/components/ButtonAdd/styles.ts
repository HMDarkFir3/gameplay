//styled-components
import styled from "styled-components/native";

//react-native-gesture-handler
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
`;
