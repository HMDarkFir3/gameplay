//React
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

//Styles
import { Container, IconWrapper, DiscordImage, Title } from "./styles";

//Image
import DiscordImg from "../../assets/images/discord.png";

//Types
type Props = RectButtonProps & {
  title: string;
};

export default function ButtonDiscord(props: Props) {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <IconWrapper>
        <DiscordImage source={DiscordImg} resizeMode="contain" />
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  );
}
