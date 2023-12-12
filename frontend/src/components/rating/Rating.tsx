import { View, Text, Image } from "react-native";
import React from "react";

type RatingProps = {
  rating?: number | string;
};

export default function Rating({ rating }: RatingProps) {
  if (!rating) {
    return null;
  }

  return (
    <View className='flex-row items-center space-x-1'>
      <Image
        className='h-4 w-4 object-center'
        source={require("../../../assets/images/star.png")}
      />
      <Text>{rating}</Text>
    </View>
  );
}
