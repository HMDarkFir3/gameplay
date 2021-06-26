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
  //Data e hora atual
  const today = new Date();

  //Pegando somente o dia, mês e ano
  const validatedDay = parseInt(String(today.getDate()));
  const validatedMonth = parseInt(String(today.getMonth() + 1));
  const validatedYear = parseInt(String(today.getFullYear()));

  //Pegando somente as horas e minutos
  const validatedHour = parseInt(String(today.getHours()));
  const validatedMinute = parseInt(String(today.getMinutes()));

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

    //Validando mês menor que o atual e mês maior que 12
  } else if (parseInt(month) < validatedMonth || parseInt(month) > 12) {
    Alert.alert("Digite um mês válido.");
    return;
  }

  //Campo dia em branco
  if (day === "") {
    Alert.alert("Campo dia em branco.");
    return;

    //Validando dia menor que o atual
  } else if (
    parseInt(day) < validatedDay &&
    parseInt(month) <= validatedMonth
  ) {
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

    //Validando a hora menor que a atual e dia menor ou igual ao atual
  } else if (parseInt(hour) < validatedHour && parseInt(day) <= validatedDay) {
    Alert.alert("Digite uma hora válida");
    return;

    //Validando hora maior que 23
  } else if (parseInt(hour) > 23) {
    Alert.alert("Digite uma hora válida");
    return;
  }

  //Campo minuto em branco
  if (minute === "") {
    Alert.alert("Campo minuto em branco.");
    return;

    //Validando o minuto menor que o atual e dia menor ou igual ao atual
  } else if (
    parseInt(minute) < validatedMinute &&
    parseInt(day) <= validatedDay
  ) {
    Alert.alert("Digite um minuto válido");
    return;

    //Validando minuto maior que 59
  } else if (parseInt(minute) > 59) {
    Alert.alert("Digite um minuto válido");
    return;
  }

  if (description === "") {
    //Campo descrição em branco
    Alert.alert("Campo descrição em branco.");
    return;
  }

  return 0;
}
