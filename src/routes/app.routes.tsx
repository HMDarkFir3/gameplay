//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screen
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
