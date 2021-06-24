//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Form = styled.View`
  margin-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Select = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 68px;

  padding-right: 25px;

  border-width: 1px;
  border-radius: 8px;
  border-color: ${(props) => props.theme.colors.secondary50};

  overflow: hidden;
`;

export const Image = styled.View`
  width: 64px;
  height: 68px;

  background-color: ${(props) => props.theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;
