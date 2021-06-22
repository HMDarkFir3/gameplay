//React
import React, { useContext } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Styles
import { Container, Content, Checked, Title } from "./styles";

//Types
type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export default function Category(props: Props) {
  const { title, icon: Icon, checked = false, ...rest } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <RectButton {...rest}>
      <Container colors={[theme.colors.secondary50, theme.colors.secondary70]}>
        <Content checked={checked}>
          <Checked checked={checked} />
          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>
  );
}
