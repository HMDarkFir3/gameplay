//React
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
