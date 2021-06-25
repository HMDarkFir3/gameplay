//React
import React from "react";

//react-native-gesture-handler
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

//Hooks
import { useTheme } from "../../hooks/useTheme";

//Utils
import categories from "../../utils/categories";

//Components
import GuildIcon from "../GuildIcon";

//Style
import {
  Container,
  GuildIconContainer,
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
import { GuildProps } from "../Guild";

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

export default function Appointment(props: Props) {
  const { data, ...rest } = props;

  const { theme } = useTheme();

  const [category] = categories.filter((item) => item.id === data.category);

  return (
    <RectButton {...rest}>
      <Container>
        <GuildIconContainer
          colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
          <GuildIcon />
        </GuildIconContainer>

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
