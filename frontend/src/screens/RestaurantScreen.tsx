import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NO_IMAGE } from "../const/Contants";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Rating from "../components/rating/Rating";
import DishCard from "../components/dish-card/DishCard";
import { RestaurantCard } from "../../types/base";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../slices/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const item = params as RestaurantCard;

  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant(item));
    }
  }, [item]);

  return (
    <ScrollView>
      <View className='relative'>
        <Image className='w-full h-72' source={item.image || NO_IMAGE} />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full'
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bg_main(1)} />
        </TouchableOpacity>
      </View>

      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className='bg-white -mt-12 pt-6'
      >
        <View className='px-5'>
          <View className='flex-row space-x-4 items-center'>
            <Text className='text-3xl mb-2 font-bold'>{item.children}</Text>
            <Text className=' text-gray-700'>{item.category}</Text>
          </View>

          <View className='flex-row justify-between space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
              <Rating rating={item.rating} />
              <Text className='text-sm'>
                <Text className='text-gray-700'> (4.6k review) · </Text>
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <Icon.MapPin color='gray' width={15} height={15} />
              <Text className='text-gray-800 text-md'>
                Nearby · {item.address}
              </Text>
            </View>
          </View>

          <Text className='text-gray-500 my-2 text-lg'>{item.description}</Text>
        </View>

        <View className='pb-20 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {item.dishes?.map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}
