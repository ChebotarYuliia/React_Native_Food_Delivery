import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { Children } from "react";
import { themeColors } from "../../theme";

export type RestaurantsRowProps = {
  id?: number;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export default function RestaurantsRow({
  title,
  description,
  children,
}: RestaurantsRowProps) {
  const childCount = Children.count(children);

  if (!childCount) {
    return null;
  }

  return (
    <View>
      <View className='flex-row justify-between items-center py-2 px-4 mb-2'>
        <View>
          <View>
            <Text className='font-bold text-lg'>{title}</Text>
            <Text className='text-gray-500 text-xs'>{description}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className='py-2 pl-2'>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 10 }}
      >
        {(children as React.ReactElement[])?.map((child, i) => (
          <View
            className={`${i === childCount - 1 ? undefined : "mr-6"}`}
            key={i}
          >
            {child}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
