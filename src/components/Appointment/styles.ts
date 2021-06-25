//styled-components
import styled from "styled-components/native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Fonts
import fonts from "../../global/fonts";

//Types
type Props = {
  owner: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-self: center;

  width: 100%;
`;

export const GuildIconContainer = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 68px;

  margin-right: 24px;

  border-radius: 8px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 12px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  margin-left: 7px;

  font-family: ${fonts.RajdhaniMedium};
  font-size: 13px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Title = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Category = styled.Text`
  margin-right: 24px;

  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.highlight};
`;

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Player = styled.Text<Props>`
  margin-left: 7px;
  margin-right: 24px;

  font-family: ${fonts.InterMedium};
  font-size: 13px;
  color: ${(props) =>
    props.owner ? props.theme.colors.primary : props.theme.colors.on};
`;
