//React
import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import { RectButton } from "react-native-gesture-handler";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import Background from "../../components/Background";
import Header from "../../components/Header";
import CategorySelect from "../../components/CategorySelect";
import GuildIcon from "../../components/GuildIcon";

//Styles
import { Label, Form, Select, Image, SelectBody } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

export default function AppointmentCreate() {
  const { theme } = useContext(ThemeContext);

  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    if (categoryId === category) {
      setCategory("");
    } else {
      setCategory(categoryId);
    }
  }

  return (
    <Background>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <Header title="Agendar partida" />

      <Label style={{ marginTop: 36, marginBottom: 18, marginLeft: 24 }}>
        Categoria
      </Label>

      <CategorySelect
        hasCheckBox={true}
        categorySelect={category}
        setCategory={handleCategorySelect}
      />

      <Form>
        <RectButton>
          <Select>
            {
              <GuildIcon />

              /* <Image />*/
            }

            <SelectBody>
              <Label>Selecione um servidor</Label>
            </SelectBody>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </Select>
        </RectButton>
      </Form>
    </Background>
  );
}
