//styled-components
import styled from "styled-components/native";

export const Container = styled.View`
  align-self: flex-end;

  width: 75%;
  height: 1px;

  margin-top: 2px;
  margin-bottom: 31px;

  background-color: ${(props) => props.theme.colors.secondary40};
`;
