//React
import React, { useState, useCallback } from "react";
import { StatusBar, FlatList } from "react-native";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//React Navigation
import { useNavigation, useFocusEffect } from "@react-navigation/native";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Components
import Background from "../../components/Background";
import Profile from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Appointment from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";
import Load from "../../components/Load";

//Storage
import { COLLECTION_APPOINTMENTS } from "../../storages/storage";

//Styles
import { Header, Content } from "./styles";

//Types
import { AppointmentProps } from "../../components/Appointment";

export default function Home() {
  const { theme } = useTheme();

  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    if (categoryId === category) {
      setCategory("");
    } else {
      setCategory(categoryId);
    }
  }

  function navigateToAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <Background>
      <StatusBar
        barStyle={theme.title === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header>
        <Profile />
        <ButtonAdd onPress={navigateToAppointmentCreate} />
      </Header>

      <CategorySelect
        categorySelect={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <Content>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
          </Content>
          <FlatList
            style={{ marginTop: 10, marginLeft: 24 }}
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            showsVerticalScrollIndicator={true}
            ItemSeparatorComponent={() => <ListDivider width={75.5} />}
            contentContainerStyle={{ paddingBottom: 50 }}
          />
        </>
      )}
    </Background>
  );
}
