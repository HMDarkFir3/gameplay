//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Hooks
import { useTheme } from "../hooks/useTheme";

//Screens
import SignIn from "../screens/SignIn";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
