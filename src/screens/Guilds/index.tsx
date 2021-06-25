//React
import React, { useState, useEffect } from "react";
import { StatusBar, FlatList } from "react-native";

//Components
import Guild from "../../components/Guild";
import ListDivider from "../../components/ListDivider";
import Load from "../../components/Load";

//Services
import { api } from "../../services/api";

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

  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    fetchGuilds();
  }, []);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");

    setGuilds(response.data);
    setLoading(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      {loading ? (
        <Load />
      ) : (
        <FlatList
          style={{ width: "100%" }}
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          ListHeaderComponent={() => (
            <ListDivider width={71} isCentered={true} />
          )}
          ItemSeparatorComponent={() => (
            <ListDivider width={71} isCentered={true} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 50, paddingBottom: 50 }}
        />
      )}
    </Container>
  );
}
