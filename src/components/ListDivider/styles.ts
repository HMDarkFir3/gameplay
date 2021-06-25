//styled-components
import styled from "styled-components/native";

//Types
type Props = {
  width: number;
  isCentered: boolean;
};

export const Container = styled.View<Props>`
  align-self: flex-end;

  width: ${(props) => props.width + "%"};
  height: 1px;

  margin-top: ${(props) => (props.isCentered ? 12 : 2) + "px"};
  margin-bottom: ${(props) => (props.isCentered ? 12 : 31) + "px"};

  background-color: ${(props) => props.theme.colors.secondary40};
`;
