import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NO_IMAGE } from "../const/Contants";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { RestaurantDish } from "../../types/base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { OrderAlert } from "../components/order-alert/OrderAlert";
import { addToCart, clearCart, removeFromCart } from "../../slices/cartSlice";
import { DishControls } from "../components/dish-controls/DishControls";
import { clearState } from "../../slices/restaurantSlice";

type GroupedDishes = {
  [key: number]: RestaurantDish[];
};

export default function CartScreen() {
  const { items: cartItems, totalSum } = useSelector(
    (state: RootState) => state.cart
  );
  const { restaurant } = useSelector((state: RootState) => state.resturant);

  const [groupedItems, setGroupedItems] = useState<GroupedDishes>({});

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deliveryFee = 5;

  useMemo(() => {
    const gItems = cartItems.reduce((group: GroupedDishes, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});

    setGroupedItems(gItems);
  }, [cartItems]);

  const handleThankyouPress = () => {
    dispatch(clearCart());
    dispatch(clearState());
    navigation.navigate("Home" as never);
  };

  return (
    <View className='bg-white flex-1 pt-10'>
      {/* top button */}
      <View className='relative py-4'>
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bg_main(1) }}
          onPress={navigation.goBack}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
        >
          <Icon.ArrowLeft strokeWidth={3} stroke='white' />
        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl'>Your cart</Text>
          <Text className='text-center text-gray-500'>
            {restaurant?.children}
          </Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bg_main(0.2) }}
        className='flex-row px-4 items-center'
      >
        <Image
          source={require("../../assets/images/delivery.jpg")}
          className='w-20 h-20 rounded-full'
        />
        <Text className='flex-1 pl-4'>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className='font-bold'>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='bg-white pt-5'
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          return (
            <View
              key={key}
              className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
            >
              <Text
                style={{ color: themeColors.text }}
                className='font-bold w-7'
              >
                {items.length} x{" "}
              </Text>
              <Image
                className='rounded-3xl'
                style={{ height: 100, width: 100 }}
                source={items[0]?.image || NO_IMAGE}
              />
              <Text className='flex-1 font-bold text-gray-700'>
                {items[0]?.name}
              </Text>

              <View className='flex-row items-center'>
                <DishControls
                  remove
                  onPress={() => dispatch(removeFromCart(items[0]))}
                />
                <Text className='font-semibold text-base w-10 text-center'>
                  ${items[0]?.price}
                </Text>

                <DishControls
                  add
                  onPress={() => dispatch(addToCart(items[0]))}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bg_main(0.2) }}
        className=' p-6 px-8 rounded-t-3xl space-y-4'
      >
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Subtotal</Text>
          <Text className='text-gray-700'>${totalSum}</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Delivery Fee</Text>
          <Text className='text-gray-700'>${deliveryFee}</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='font-extrabold'>Order Total</Text>
          <Text className='font-extrabold'>${totalSum + deliveryFee}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bg_main(1) }}
            onPress={() => OrderAlert(handleThankyouPress)}
            className='p-3 rounded-full'
          >
            <Text className='text-white text-center font-bold text-lg'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
