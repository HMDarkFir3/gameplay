//styled-components
import styled from "styled-components/native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  margin-right: 18px;
  border-radius: 8px;
`;

export const ImageAvatar = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 8px;
`;
