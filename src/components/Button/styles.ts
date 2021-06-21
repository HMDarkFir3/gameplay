//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/styles/fonts";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;

  background-color: ${(props) => props.theme.colors.red};
  border-radius: 8px;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  border-right-width: 1px;
  border-color: ${(props) => props.theme.colors.redLine};
`;

export const DiscordImage = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1;

  text-align: center;
  font-family: ${fonts.InterMedium};
  font-size: 15px;
  color: ${(props) => props.theme.colors.textButton};
`;
