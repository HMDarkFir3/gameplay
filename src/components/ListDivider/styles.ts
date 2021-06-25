//styled-components
import styled from "styled-components/native";

//Types
type Props = {
  width: number;
};

export const Container = styled.View<Props>`
  align-self: flex-end;

  width: ${(props) => props.width + "%"};
  height: 1px;

  margin-top: 2px;
  margin-bottom: 31px;

  background-color: ${(props) => props.theme.colors.secondary40};
`;
