//React
import "react-native-gesture-handler";
import React from "react";

//Expo
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

//Fonts
import { useFonts } from "expo-font";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

//Contexts
import ThemesProvider from "./src/contexts/ThemeContext";

//Screens
import SignIn from "./src/screens/SignIn";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemesProvider>
        <StatusBar style="light" backgroundColor="#0d133d" />
        <SignIn />
      </ThemesProvider>
    </>
  );
}
