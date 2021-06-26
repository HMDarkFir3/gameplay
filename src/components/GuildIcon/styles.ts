//styled-components
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 66px;

  background-color: ${(props) => props.theme.colors.discord};
  border-radius: 8px;

  overflow: hidden;
`;

export const Image = styled.Image`
  width: 62px;
  height: 66px;
`;
