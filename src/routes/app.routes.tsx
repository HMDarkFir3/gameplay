//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Hooks
import { useTheme } from "../hooks/useTheme";

//Screen
import Home from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentDetails";
import AppointmentCreate from "../screens/AppointmentCreate";

const Stack = createStackNavigator();

export default function AppRoutes() {
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
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
