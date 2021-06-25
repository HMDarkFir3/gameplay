//React
import React from "react";
import { StatusBar, FlatList } from "react-native";

//Components
import Guild from "../../components/Guild";
import ListDivider from "../../components/ListDivider";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Styles
import { Container } from "./styles";

//types
import { GuildProps } from "../../components/Guild";
type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export default function Guilds(props: Props) {
  const { handleGuildSelected } = props;

  const { theme } = useTheme();

  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <FlatList
        style={{ width: "100%" }}
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ListHeaderComponent={() => <ListDivider width={71} isCentered={true} />}
        ItemSeparatorComponent={() => (
          <ListDivider width={71} isCentered={true} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 50, paddingBottom: 50 }}
      />
    </Container>
  );
}
