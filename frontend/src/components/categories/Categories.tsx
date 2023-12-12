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
    <View className={"mt-6"}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {children}
      </ScrollView>
    </View>
  );
}
