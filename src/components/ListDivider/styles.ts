//styled-components
import styled from "styled-components/native";

export const Container = styled.View`
  align-self: flex-end;

  width: 80%;
  height: 1px;

  margin-top: 21px;
  margin-bottom: 21px;

  background-color: ${(props) => props.theme.colors.secondary40};
`;
