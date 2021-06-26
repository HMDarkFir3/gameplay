//React
import { Alert } from "react-native";

export function validationForm(
  category: string,
  guild: string,
  day: string,
  month: string,
  hour: string,
  minute: string,
  description: string
) {
  const today = new Date();
  const validatedDay = parseInt(String(today.getDate()));
  const validatedMonth = parseInt(String(today.getMonth() + 1));
  const validatedYear = today.getFullYear();

  //Categoria não selecionada
  if (category === "") {
    Alert.alert("Selecione uma categoria.");
    return;
  }

  //Servidor não selecionado
  if (guild === undefined) {
    Alert.alert("Selecione um servidor.");
    return;
  }

  //Campo mês em branco
  if (month === "") {
    Alert.alert("Campo mês em branco.");
    return;
  }

  //Validando mês menor que o atual e mês maior que 12
  if (parseInt(month) < validatedMonth || parseInt(month) > 12) {
    Alert.alert("Digite um mês válido.");
    return;
  }

  //Campo dia em branco
  if (day === "") {
    Alert.alert("Campo dia em branco.");
    return;

    //Validando dia menor que o atual
  } else if (parseInt(day) < validatedDay) {
    Alert.alert("Digite um dia válido.");
    return;

    //Validando meses que vão até o dia 31
  } else if (
    (parseInt(month) === 1 ||
      parseInt(month) === 3 ||
      parseInt(month) === 5 ||
      parseInt(month) === 7 ||
      parseInt(month) === 8 ||
      parseInt(month) === 10 ||
      parseInt(month) === 12) &&
    parseInt(day) > 31
  ) {
    Alert.alert("Digite um dia válido.");
    return;

    //Validando meses que vão até o dia 30
  } else if (
    (parseInt(month) === 4 ||
      parseInt(month) === 6 ||
      parseInt(month) === 9 ||
      parseInt(month) === 11) &&
    parseInt(day) > 30
  ) {
    Alert.alert("Digite um dia válido.");
    return;

    //Validando mês bissexto
  } else if (parseInt(month) === 2) {
    if (parseInt(day) > 28 && validatedYear % 4 !== 0) {
      Alert.alert("Digite um dia válido.");
      return;
    }

    if (parseInt(day) > 29 && validatedYear % 4 === 0) {
      Alert.alert("Digite um dia válido.");
      return;
    }
  }

  //Campo hora em branco
  if (hour === "") {
    Alert.alert("Campo hora em branco.");
    return;
  }

  //Campo minuto em branco
  if (minute === "") {
    Alert.alert("Campo minuto em branco.");
    return;
  }

  //Campo descrição em branco
  if (description === "") {
    Alert.alert("Campo descrição em branco.");
    return;
  }

  return 0;
}
