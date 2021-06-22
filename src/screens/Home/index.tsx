//React
import React, { useContext, useState } from "react";
import { StatusBar, View } from "react-native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import Profile from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";

//Styles
import { Container, Header } from "./styles";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    if (categoryId === category) {
      setCategory("");
    } else {
      setCategory(categoryId);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <View>
        <CategorySelect
          categorySelect={category}
          setCategory={handleCategorySelect}
        />
      </View>
    </Container>
  );
}
