//React
import React from "react";
import { TouchableOpacityProps } from "react-native";

//Styles
import { Container, IconWrapper, DiscordImage, Title } from "./styles";

//Image
import DiscordImg from "../../assets/images/discord.png";

//Types
type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export default function Button(props: ButtonProps) {
  const { title, ...rest } = props;

  return (
    <Container activeOpacity={0.7}>
      <IconWrapper>
        <DiscordImage source={DiscordImg} resizeMode="contain" />
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  );
}
