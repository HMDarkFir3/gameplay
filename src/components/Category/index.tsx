//React
import React, { useContext } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

//Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

//Utils
import categories from "../../utils/categories";

//Styles
import { Container, Gradient, Content, Checked, Title } from "./styles";

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
    <Container {...rest}>
      <Gradient colors={[theme.colors.secondary50, theme.colors.secondary70]}>
        <Content checked={checked}>
          <Checked checked={checked}>
            <Icon width={48} height={48} />
          </Checked>

          <Title>{title}</Title>
        </Content>
      </Gradient>
    </Container>
  );
}
