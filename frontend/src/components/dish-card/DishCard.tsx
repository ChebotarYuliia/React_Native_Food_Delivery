import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { themeColors } from "../../theme";
import { NO_IMAGE } from "../../const/Contants";
import * as Icon from "react-native-feather";
import { useDispatch } from "react-redux";
import { RestaurantDish } from "../../../types/base";
import { addToCart, removeFromCart } from "../../../slices/cartSlice";

type DishCardProps = {
  dish: RestaurantDish;
};

export default function DishCard({ dish }: DishCardProps) {
  const { name, description, price, image } = dish;
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (quantity !== 0) {
      setQuantity((s) => s - 1);
      dispatch(removeFromCart(dish));
    } else {
      return;
    }
  };

  const increaseQuantity = () => {
    setQuantity((s) => s + 1);
    dispatch(addToCart(dish));
  };

  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image
        className='rounded-3xl'
        style={{ height: 100, width: 100 }}
        source={image || NO_IMAGE}
      />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{name}</Text>
          <Text className='text-gray-700'>{description}</Text>
        </View>
        <View className='flex-row pl-3 justify-between items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${price}</Text>
          <View className='flex-row items-center'>
            <TouchableOpacity
              onPress={decreaseQuantity}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bg_main(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke='white'
              />
            </TouchableOpacity>
            <Text className='px-3 w-8'>{quantity}</Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bg_main(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke='white'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
