//React
import React, { useState } from "react";
import { StatusBar, View, ScrollView, Platform, Alert } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//react-native-gesture-handler
import { RectButton } from "react-native-gesture-handler";

//react-native-uuid
import uuid from "react-native-uuid";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Storage
import { COLLECTION_APPOINTMENTS } from "../../configs/storage";

//Utils
import { validationForm } from "../../utils/validationForm";

//Screens
import Guilds from "../Guilds";

//Components
import Background from "../../components/Background";
import Header from "../../components/Header";
import CategorySelect from "../../components/CategorySelect";
import GuildIcon from "../../components/GuildIcon";
import SmallInput from "../../components/SmallInput";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import ModalView from "../../components/ModalView";

//Styles
import {
  Container,
  Label,
  Form,
  Select,
  Image,
  SelectBody,
  Field,
  Column,
  Divider,
  Max,
  Footer,
} from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Types
import { GuildProps } from "../../components/Guild";

export default function AppointmentCreate() {
  const { theme } = useTheme();

  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function openModalGuild() {
    setOpen(true);
  }

  function closeModalGuild() {
    setOpen(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpen(false);
  }

  async function handleSubmit() {
    const done = validationForm(
      category,
      day,
      month,
      hour,
      minute,
      description
    );

    if (done === 0) {
      const newAppointment = {
        id: uuid.v4(),
        guild,
        category,
        date: `${day}/${month} às ${hour}:${minute}h`,
        description: description,
      };

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

      const appointments = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify([...appointments, newAppointment])
      );

      navigation.navigate("Home");
    }
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <StatusBar
          barStyle={theme.title === "light" ? "dark-content" : "light-content"}
          backgroundColor="transparent"
          translucent={true}
        />
        <Header title="Agendar partida" />
        <ScrollView>
          <Label style={{ marginTop: 36, marginBottom: 18, marginLeft: 24 }}>
            Categoria
          </Label>

          <CategorySelect
            hasCheckBox={true}
            categorySelect={category}
            setCategory={handleCategorySelect}
          />

          <Form>
            <RectButton onPress={openModalGuild}>
              <Select>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <Image />
                )}

                <SelectBody>
                  <Label>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Label>
                </SelectBody>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </Select>
            </RectButton>

            <Field>
              <View>
                <Label>Dia e mês</Label>
                <Column>
                  <SmallInput
                    maxLength={2}
                    onChangeText={(t) => setDay(t)}
                    value={day}
                  />
                  <Divider>/</Divider>
                  <SmallInput
                    maxLength={2}
                    onChangeText={(t) => setMonth(t)}
                    value={month}
                  />
                </Column>
              </View>

              <View>
                <Label>Hora e minuto</Label>
                <Column>
                  <SmallInput
                    maxLength={2}
                    onChangeText={(t) => setHour(t)}
                    value={hour}
                  />
                  <Divider>:</Divider>
                  <SmallInput
                    maxLength={2}
                    onChangeText={(t) => setMinute(t)}
                    value={minute}
                  />
                </Column>
              </View>
            </Field>

            <Field style={{ marginBottom: 12 }}>
              <Label>Descrição</Label>

              <Max>Max 100 caracteres</Max>
            </Field>

            <TextArea
              multiline={true}
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={(t) => setDescription(t)}
              value={description}
            />

            <Footer>
              <Button title="Agendar" onPress={handleSubmit} />
            </Footer>
          </Form>
        </ScrollView>
        <ModalView visible={open} closeModal={closeModalGuild} marginView={100}>
          <Guilds handleGuildSelected={handleGuildSelect} />
        </ModalView>
      </Container>
    </Background>
  );
}
