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
import AuthProvider from "./src/contexts/AuthContext";
import ThemesProvider from "./src/contexts/ThemeContext";

//Components
import Background from "./src/components/Background";

//Routes
import Routes from "./src/routes";

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
    <AuthProvider>
      <ThemesProvider>
        <Background>
          <Routes />
        </Background>
      </ThemesProvider>
    </AuthProvider>
  );
}
