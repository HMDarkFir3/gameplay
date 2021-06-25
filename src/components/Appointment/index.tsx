//React
import React, { useContext } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Utils
import categories from "../../utils/categories";

//Components
import GuildIcon from "../GuildIcon";

//Style
import {
  Container,
  Content,
  Header,
  Footer,
  DateInfo,
  DateText,
  Title,
  Category,
  PlayerInfo,
  Player,
} from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

//Types
type Props = RectButtonProps & {
  data: AppointmentProps;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

export type GuildProps = {
  id: string;
  name: string;
  icon?: null;
  owner: boolean;
};

export default function Appointment(props: Props) {
  const { data, ...rest } = props;

  const { theme } = useContext(ThemeContext);

  const [category] = categories.filter((item) => item.id === data.category);

  return (
    <RectButton {...rest}>
      <Container>
        <GuildIcon />

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <DateInfo>
              <Feather name="calendar" color="#ffffff" size={17} />
              <DateText>{data.date}</DateText>
            </DateInfo>

            <PlayerInfo>
              <Feather
                name="user"
                color={
                  data.guild.owner ? theme.colors.primary : theme.colors.on
                }
                size={17}
              />

              <Player owner={data.guild.owner}>
                {data.guild.owner ? "Anfitrião" : "Visitante"}
              </Player>
            </PlayerInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
}
