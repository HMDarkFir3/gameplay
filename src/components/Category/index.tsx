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
  isChecked?: boolean;
  hasCheckBox?: boolean;
};

export default function Category(props: Props) {
  const {
    title,
    icon: Icon,
    isChecked = false,
    hasCheckBox = false,
    ...rest
  } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <RectButton {...rest}>
      <Container colors={[theme.colors.secondary50, theme.colors.secondary70]}>
        <Content
          colors={[
            isChecked ? theme.colors.secondary85 : theme.colors.secondary50,
            theme.colors.secondary40,
          ]}
          isChecked={isChecked}
        >
          {hasCheckBox && <Checked isChecked={isChecked} />}

          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>
  );
}
