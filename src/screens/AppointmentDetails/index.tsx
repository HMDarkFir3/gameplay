//React
import React, { useContext } from "react";
import { StatusBar, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

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
import BannerImg from "../../assets/images/banner.png";

//Icons
import { Fontisto } from "@expo/vector-icons";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

export default function AppointmentDetails() {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

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
    {
      id: "3",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
    {
      id: "4",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
  ];

  function navigateToHome() {
    navigation.navigate("Home");
  }

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
        ItemSeparatorComponent={() => <ListDivider />}
      />

      <ButtonArea>
        <ButtonDiscord title="Entrar na partida" />
      </ButtonArea>
    </Background>
  );
}
