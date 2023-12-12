import { View, Text, ScrollView } from "react-native";
import React, { Children } from "react";

type CategoriesProps = {
  children?: React.ReactNode;
};

export default function Categories({ children }: CategoriesProps) {
  const childArray = Children.count(children);

  if (!childArray) {
    return null;
  }

  return (
    <View className={"mt-2"}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
      >
        {children}
      </ScrollView>
    </View>
  );
}
