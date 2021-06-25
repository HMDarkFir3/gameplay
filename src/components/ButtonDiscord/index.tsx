//React
import React from "react";

//react-native-gesture-handler
import { RectButtonProps } from "react-native-gesture-handler";

//Styles
import { Container, IconWrapper, Title } from "./styles";

//Image
import DiscordSvg from "../../assets/images/svg/discord.svg";

//Types
type Props = RectButtonProps & {
  title: string;
};

export default function ButtonDiscord(props: Props) {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <IconWrapper>
        <DiscordSvg width={24} height={18} />
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  );
}
