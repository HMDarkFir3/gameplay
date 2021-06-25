//React
import { useContext } from "react";

//Contexts
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
