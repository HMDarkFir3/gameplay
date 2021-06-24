//React
import React, { useContext } from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Contexts
import { ThemeContext } from "../contexts/ThemeContext";

//Screens
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentDetails";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  const { theme } = useContext(ThemeContext);

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
    </Stack.Navigator>
  );
}
