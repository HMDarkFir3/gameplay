import { Alert } from "react-native";

export function validationForm(
  category: string,
  day: string,
  month: string,
  hour: string,
  minute: string,
  description: string
) {
  if (category === "") {
    Alert.alert("Selecione uma categoria.");
    return;
  }

  if (day === "") {
    Alert.alert("Campo dia em branco.");
    return;
  }

  if (month === "") {
    Alert.alert("Campo mês em branco.");
    return;
  }

  if (hour === "") {
    Alert.alert("Campo hora em branco.");
    return;
  }

  if (minute === "") {
    Alert.alert("Campo minuto em branco.");
    return;
  }

  if (description === "") {
    Alert.alert("Campo descrição em branco.");
    return;
  }

  return 0;
}
