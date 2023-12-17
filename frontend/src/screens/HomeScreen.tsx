import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../components/form-elements/SubmitButton";
import { AuthContext, TAuthContext } from "../context/AuthProvider";
import Categories from "../components/categories/Categories";
import {
  tempCategories,
  tempRestaurantRows,
  tempRestaurants,
} from "../../temp/data";
import Category from "../components/categories/Category";
import RestaurantsRow from "../components/restaurants/RestaurantsRow";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import { RestaurantCard as TRestaurantCard } from "../../types/base";

export default function HomeScreen() {
  const { logout } = useContext(AuthContext) as TAuthContext;
  const [activeCategory, setActiveCategory] = useState<number | null>(1);
  const [filteredRetaurants, setFilteredRestaurants] =
    useState<TRestaurantCard[]>(tempRestaurants);

  useEffect(() => {
    if (activeCategory) {
      const filtered = tempRestaurants.filter((res) => {
        if (res.filters?.find((f) => f === activeCategory)) {
          return true;
        }
      });
      setFilteredRestaurants(filtered);
    }
  }, [activeCategory]);

  const handleSignout = async () => {
    logout();
  };

  return (
    <SafeAreaView className='bg-white pb-6'>
      <StatusBar barStyle={"dark-content"} />

      <View className='py-4 px-3 flex-row items-center relative'>
        <Text className='text-lg text-center w-full'>Home Screen</Text>
        <SubmitButton
          className='rounded-3xl w-20 ml-auto absolute right-4'
          text='Sign out'
          onPress={handleSignout}
        />
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='flex-column gap-4 px-3 min-h-screen'
      >
        <View className='pb-3'>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories>
              {tempCategories.map((category) => (
                <Category
                  onPress={setActiveCategory}
                  isActive={activeCategory === category.id}
                  {...category}
                  key={category.id}
                />
              ))}
            </Categories>
          </ScrollView>
        </View>

        {tempRestaurantRows.map((row) => {
          const { restaurants, ...props } = row;
          let relevantRestaurants: TRestaurantCard[] = [];
          restaurants.map((res) =>
            filteredRetaurants.find((r) => {
              if (r.id === res) {
                relevantRestaurants.push(r);
              }
            })
          );
          if (relevantRestaurants.length) {
            return (
              <RestaurantsRow {...props} key={row.id}>
                {relevantRestaurants.map((res, i) => {
                  return <RestaurantCard {...res} key={i} />;
                })}
              </RestaurantsRow>
            );
          } else {
            return undefined;
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
