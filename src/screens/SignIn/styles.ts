//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/styles/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.background};
`;

export const IllustrationImage = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -50px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;

  text-align: center;
  font-family: ${fonts.RajdhaniBold};
  font-size: 40px;
  color: ${(props) => props.theme.colors.text};
`;

export const SubTitle = styled.Text`
  margin-bottom: 64px;

  text-align: center;
  font-family: ${fonts.InterRegular};
  font-size: 15px;
  color: ${(props) => props.theme.colors.text};
`;
