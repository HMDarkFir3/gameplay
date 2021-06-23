//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-right: 24px;
`;

export const Title = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.highlight};
`;
