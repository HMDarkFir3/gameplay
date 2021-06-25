//React
import React from "react";
import { StatusBar, FlatList } from "react-native";

//react-native-gesture-handler
import { BorderlessButton } from "react-native-gesture-handler";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Components
import Background from "../../components/Background";
import Header from "../../components/Header";
import ListHeader from "../../components/ListHeader";
import Member from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonDiscord from "../../components/ButtonDiscord";

//Styles
import { Banner, BannerContent, Title, Subtitle, ButtonArea } from "./styles";

//Images
import BannerImg from "../../assets/images/png/banner.png";

//Icons
import { Fontisto } from "@expo/vector-icons";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

export default function AppointmentDetails() {
  const { theme } = useTheme();

  const members = [
    {
      id: "1",
      username: "Henrique",
      avatar_url: "https://github.com/hmdarkfir3.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={24} />
          </BorderlessButton>
        }
      />

      <Banner source={BannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Subtitle>
        </BannerContent>
      </Banner>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        style={{ marginTop: 27, marginLeft: 24 }}
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => (
          <ListDivider width={80} isCentered={true} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <ButtonArea>
        <ButtonDiscord title="Entrar na partida" />
      </ButtonArea>
    </Background>
  );
}
