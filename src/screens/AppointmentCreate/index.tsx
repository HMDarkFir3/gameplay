//React
import React, { useContext, useState } from "react";
import { StatusBar, View, ScrollView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

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
  const { theme } = useContext(ThemeContext);

  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleCategorySelect(categoryId: string) {
    if (categoryId === category) {
      setCategory("");
    } else {
      setCategory(categoryId);
    }
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
                {guild.icon ? <GuildIcon /> : <Image />}

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
                  <SmallInput maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput maxLength={2} />
                </Column>
              </View>

              <View>
                <Label>Hora e minuto</Label>
                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>:</Divider>
                  <SmallInput maxLength={2} />
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
            />

            <Footer>
              <Button title="Agendar" />
            </Footer>
          </Form>
        </ScrollView>
        <ModalView visible={open} closeModal={closeModalGuild}>
          <Guilds handleGuildSelected={handleGuildSelect} />
        </ModalView>
      </Container>
    </Background>
  );
}
