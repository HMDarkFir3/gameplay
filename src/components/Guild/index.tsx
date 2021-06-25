//React
import React, { useContext } from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import GuildIcon from "../GuildIcon";

//Styles
import { Container, Content, Title, Type } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Type
type Props = RectButtonProps & {
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

  const { theme } = useContext(ThemeContext);

  return (
    <Container {...rest}>
      <GuildIcon />

      <Content>
        <View>
          <Title>{data.name}</Title>
          <Type>{data.owner ? "Administrador" : "Convidado"}</Type>
        </View>

        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
      </Content>
    </Container>
  );
}
