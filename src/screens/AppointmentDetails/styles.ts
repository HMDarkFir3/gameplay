//styled-components
import styled from "styled-components/native";

//Fonts
import fonts from "../../global/fonts";

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;

  margin-bottom: 30px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;

  margin-bottom: 30px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  font-family: ${fonts.RajdhaniBold};
  font-size: 28px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => props.theme.colors.heading};
`;

export const List = styled.FlatList`
  margin-top: 27px;
  margin-left: 24px;
`;
