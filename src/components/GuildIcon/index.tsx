//React
import React from "react";
import { View } from "react-native";

//Configs
const { CDN_IMAGE } = process.env;

//Style
import { Container, Image } from "./styles";

//Images
import DiscordSvg from "../../assets/images/svg/discord.svg";

//Types
type Props = {
  guildId: string;
  iconId: string | null;
};

export default function GuildIcon(props: Props) {
  const { guildId, iconId } = props;

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Container>
      {iconId ? (
        <Image source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </Container>
  );
}
