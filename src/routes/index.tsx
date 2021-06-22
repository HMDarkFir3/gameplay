//React
import React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
