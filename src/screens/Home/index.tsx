//React
import React, { useContext } from "react";
import { StatusBar } from "react-native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import Profile from "../../components/Profile";

//Styles
import { Container, Header } from "./styles";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header>
        <Profile />
      </Header>
    </Container>
  );
}
