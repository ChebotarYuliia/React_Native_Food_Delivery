import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { NO_IMAGE } from "../../const/Contants";
import Rating from "../rating/Rating";
import * as Icon from "react-native-feather";

export type RestaurantCardProps = {
  id?: number;
  children?: string; // title
  image?: ImageSourcePropType;
  category?: string;
  address?: string;
  rating?: number;
};

export default function RestaurantCard({
  children,
  image,
  category,
  address,
  rating,
}: RestaurantCardProps) {
  return (
    <TouchableWithoutFeedback>
      <View className='bg-white rounded-3xl shadow-md mb-2'>
        <Image
          className='h-36 w-60 rounded-t-3xl object-contain'
          source={image || NO_IMAGE}
        />
        <View className='flex-column px-4 pb-4 pt-3 space-y-2'>
          <View className='flex-row justify-between items-center space-y-2'>
            <Text className='font-bold text-lg'>
              {children || "no name yet"}
            </Text>
            <Rating rating={rating} />
          </View>

          <View className='flex space-x-1 justify-between'>
            {address && (
              <View className='flex-row items-center space-x-1'>
                {/* <Icon.MapIcon /> */}
              </View>
            )}
            {category && (
              <Text className='font-italic font-semibold text-right text-gray-500 text-sm'>
                {category}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
