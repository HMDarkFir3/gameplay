//React
import React, { useState, useEffect } from "react";
import { StatusBar, FlatList, Alert, Share, Platform } from "react-native";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//React Navigation
import { useRoute } from "@react-navigation/native";

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
import Load from "../../components/Load";

//Services
import { api } from "../../services/api";

//Styles
import { Banner, BannerContent, Title, Subtitle, ButtonArea } from "./styles";

//Images
import BannerImg from "../../assets/images/png/banner.png";

//Icons
import { Fontisto } from "@expo/vector-icons";

//Types
import { AppointmentProps } from "../../components/Appointment";
import { MemberProps } from "../../components//Member";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export default function AppointmentDetails() {
  const { theme } = useTheme();

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(response.data);
    } catch {
      Alert.alert(
        "Verifique as configurações do servidor. Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    try {
      const message =
        Platform.OS === "ios"
          ? `Junte-se a ${guildSelected.guild.name}`
          : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite,
      });
    } catch {
      Alert.alert("Verifique se o instant invite está habilitado");
    }
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

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
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" color={theme.colors.primary} size={24} />
            </BorderlessButton>
          )
        }
      />

      <Banner source={BannerImg}>
        <BannerContent>
          <Title>{guildSelected.guild.name}</Title>
          <Subtitle>{guildSelected.description}</Subtitle>
        </BannerContent>
      </Banner>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList
            style={{ marginTop: 27, marginLeft: 24 }}
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => (
              <ListDivider width={80} isCentered={true} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}

      <ButtonArea>
        <ButtonDiscord title="Entrar na partida" />
      </ButtonArea>
    </Background>
  );
}
