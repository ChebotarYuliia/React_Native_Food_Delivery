import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../../theme";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function CartWidget() {
  const navigation = useNavigation();
  const { items: cartItems, totalSum: sum } = useSelector(
    (state: RootState) => state.cart
  );

  if (!cartItems.length) {
    return null;
  }

  return (
    <View className='absolute bottom-5 w-full z-50'>
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bg_main(1) }}
        onPress={() => navigation.navigate("Cart" as never)}
        className='flex-row justify-between items-center mx-5 rounded-full px-4 py-2 shadow-lg'
      >
        <View
          className='p-2 px-4 rounded-full'
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className='font-extrabold text-white text-lg'>
            {cartItems.length}
          </Text>
        </View>

        <Text className='flex-1 text-center font-extrabold text-white text-lg'>
          View Cart
        </Text>
        <Text className='font-extrabold text-white text-lg'>${sum}</Text>
      </TouchableOpacity>
    </View>
  );
}
