//React
import React from "react";
import { View } from "react-native";

//Components
import Avatar from "../Avatar";

//Styles
import { Container, Title, Status, BulletStatus, NameStatus } from "./styles";

//Types
type Props = {
  data: MemberProps;
};

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

export default function Member(props: Props) {
  const { data } = props;

  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Title>{data.username}</Title>
        <Status>
          <BulletStatus status={data.status} />

          <NameStatus>
            {data.status === "online" ? "Disponível" : "Ocupado"}
          </NameStatus>
        </Status>
      </View>
    </Container>
  );
}
