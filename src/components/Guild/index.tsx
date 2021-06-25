//React
import React from "react";
import { View, TouchableOpacityProps } from "react-native";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Components
import GuildIcon from "../GuildIcon";

//Styles
import { Container, Content, Title, Type } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Type
type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export default function Guild(props: Props) {
  const { data, ...rest } = props;

  const { theme } = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <Content>
        <View>
          <Title>{data.name}</Title>
          <Type>{data.owner ? "Administrador" : "Convidado"}</Type>
        </View>
      </Content>
      <Feather name="chevron-right" color={theme.colors.heading} size={18} />
    </Container>
  );
}
