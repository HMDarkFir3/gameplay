//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/fonts";

type Props = {
  status: string;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View<Props>`
  width: 8px;
  height: 8px;

  margin-right: 9px;

  background-color: ${(props) =>
    props.status === "online"
      ? props.theme.colors.on
      : props.theme.colors.primary};

  border-radius: 4px;
`;

export const NameStatus = styled.Text`
  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.highlight};
`;
