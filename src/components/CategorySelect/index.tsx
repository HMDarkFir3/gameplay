//React
import React from "react";

//Utils
import categories from "../../utils/categories";

//Components
import Category from "../Category";

//Styles
import { Scroller, Container } from "./styles";

//Types
type Props = {
  categorySelect: string;
};

export default function CategorySelect(props: Props) {
  const { categorySelect } = props;

  return (
    <Scroller
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelect}
        />
      ))}
    </Scroller>
  );
}
