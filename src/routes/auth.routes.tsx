//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screen
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
