import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { NO_IMAGE } from "../../const/Contants";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantCard, RestaurantDish } from "../../../types/base";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../../slices/cartSlice";
import { RootState } from "../../../store";
import { DishControls } from "../dish-controls/DishControls";
import { setRestaurant } from "../../../slices/restaurantSlice";

type DishCardProps = {
  dish: RestaurantDish;
  restaurant: RestaurantCard;
};

export default function DishCard({
  dish,
  restaurant: restaurantProp,
}: DishCardProps) {
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const { restaurant: restaurantState } = useSelector(
    (state: RootState) => state.resturant
  );
  const { name, description, price, image } = dish;
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const inCart = cartItems.filter(
      (i) => i.id === dish.id && i.restaurantId === dish.restaurantId
    );
    setQuantity(inCart.length);
  }, [cartItems]);

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

    // reset cart and update restaurant card if dished from another restaurant were added
    if (restaurantState?.id !== restaurantProp.id) {
      dispatch(setRestaurant(restaurantProp));
      dispatch(clearCart());
    }
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
            <DishControls remove onPress={decreaseQuantity} />

            <Text className='px-3 w-8'>{quantity}</Text>

            <DishControls add onPress={increaseQuantity} />
          </View>
        </View>
      </View>
    </View>
  );
}
