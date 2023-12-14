import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
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
import RestaurantCard, {
  RestaurantCardProps,
} from "../components/restaurants/RestaurantCard";

export default function HomeScreen() {
  const { logout } = useContext(AuthContext) as TAuthContext;
  const [activeCategory, setActiveCategory] = useState<number | null>(1);
  const [filteredRetaurants, setFilteredRestaurants] =
    useState<RestaurantCardProps[]>(tempRestaurants);

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

      {/* <View style={{ backgroundColor: themeColors.bg_main() }}>
        <SubmitButton text='Sign out' onPress={handleSignout} />
      </View> */}

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='flex-column gap-4 px-3 min-h-screen'
      >
        <View className='flex items-center pt-4 text-center'>
          <Text className='text-lg'>Home Screen</Text>
        </View>

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
          let relevantRestaurants: RestaurantCardProps[] = [];
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
