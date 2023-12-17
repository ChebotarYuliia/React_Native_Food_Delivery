import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { NO_IMAGE } from "../../const/Contants";
import Rating from "../rating/Rating";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { RestaurantCard as TRestaurantCard } from "../../../types/base";

export default function RestaurantCard(item: TRestaurantCard) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate({
          name: "Restaurant" as never,
          params: { ...item },
        } as never)
      }
    >
      <View className='bg-white rounded-3xl shadow-md mb-2'>
        <Image
          className='h-36 w-60 rounded-t-3xl object-contain'
          source={item.image || NO_IMAGE}
        />
        <View className='flex-column px-4 pb-4 pt-3 space-y-2'>
          <View className='flex-row justify-between items-center space-y-2'>
            <Text className='font-bold text-lg'>
              {item.children || "no name yet"}
            </Text>

            {item.category && (
              <Text className='font-semibold text-right text-gray-700 text-sm'>
                {item.category}
              </Text>
            )}
          </View>

          <View className='flex-row space-x-1 items-center justify-between'>
            <Rating rating={item.rating} />

            {item.address && (
              <View className='flex-row items-center space-x-1'>
                <Icon.MapPin color='gray' width='15' height='15' />
                <Text className='text-gray-700 text-sm'>{item.address}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
