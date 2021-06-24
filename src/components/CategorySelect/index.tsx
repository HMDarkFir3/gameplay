//React
import React from "react";

//Utils
import categories from "../../utils/categories";

//Components
import Category from "../Category";

//Styles
import { Scroller } from "./styles";

//Types
type Props = {
  categorySelect: string;
  setCategory: (categoryId: string) => void;
};

export default function CategorySelect(props: Props) {
  const { categorySelect, setCategory } = props;

  return (
    <Scroller
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          isChecked={category.id === categorySelect}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Scroller>
  );
}
