//React
import React, { useContext, useState } from "react";
import { StatusBar, View, FlatList } from "react-native";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Components
import Profile from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Appointment from "../../components/Appointment";

//Styles
import { Container, Header, Content, List } from "./styles";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "3",
      guild: {
        id: "3",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "3",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "4",
      guild: {
        id: "4",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "4",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

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

        <Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
          />
        </Content>
      </View>
    </Container>
  );
}
