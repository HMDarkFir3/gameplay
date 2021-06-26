//React
import React from "react";

//react-native-gesture-handler
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

//react-native-svg
import { SvgProps } from "react-native-svg";

//Hooks
import { useTheme } from "../../hooks/useTheme";

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

  const { theme } = useTheme();

  return (
    <RectButton {...rest}>
      <Container
        colors={[
          theme.title === "dark" ? "#243189" : "#757575",
          theme.title === "dark" ? "#1B2565" : "#eeeeee",
        ]}
      >
        <Content
          colors={[
            isChecked
              ? theme.title === "dark"
                ? "#171f52"
                : "#eeeeee"
              : theme.title === "dark"
              ? "#243189"
              : "#757575",
            theme.title === "dark" ? "#1B2565" : "#eeeeee",
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
