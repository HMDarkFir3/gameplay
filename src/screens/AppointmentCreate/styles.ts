//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/fonts";

export const Container = styled.KeyboardAvoidingView`
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
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary50};
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 30px;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 12px;
`;

export const Divider = styled.Text`
  margin-right: 4px;

  font-family: ${fonts.InterMedium};
  font-size: 15px;
  color: ${(props) => props.theme.colors.highlight};
`;

export const Max = styled.Text`
  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.highlight};
`;

export const Footer = styled.View`
  margin-top: 24px;
  margin-bottom: 56px;
`;
