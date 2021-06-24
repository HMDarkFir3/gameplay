//React
import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import Background from "../../components/Background";
import Header from "../../components/Header";

//Styles
import { Banner, Title, Subtitle } from "./styles";

//Images
import BannerImg from "../../assets/images/banner.png";
//Icons
import { Fontisto } from "@expo/vector-icons";

export default function AppointmentDetails() {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

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
        <Title>Lendários</Title>
        <Subtitle>
          É hoje que vamos chegar ao challenger sem perder uma partida da md10
        </Subtitle>
      </Banner>
    </Background>
  );
}
