//React
import React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Hooks
import { useAuth } from "../hooks/useAuth";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
