//React
import "react-native-gesture-handler";
import React from "react";

//Expo
import AppLoading from "expo-app-loading";

//Fonts
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
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
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemesProvider>
        <SignIn />
      </ThemesProvider>
    </>
  );
}
