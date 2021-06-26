//styled-components
import styled from "styled-components/native";

//react-native-iphone-x-helper
import { getBottomSpace } from "react-native-iphone-x-helper";

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
  color: ${(props) => (props.theme.title === "dark" ? "#DDE3F0" : "#fafafa")};
`;

export const Subtitle = styled.Text`
  line-height: 21px;
  font-family: ${fonts.InterRegular};
  font-size: 13px;
  color: ${(props) => (props.theme.title === "dark" ? "#DDE3F0" : "#fafafa")};
`;

export const ButtonArea = styled.View`
  margin-bottom: ${getBottomSpace()}px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
`;
