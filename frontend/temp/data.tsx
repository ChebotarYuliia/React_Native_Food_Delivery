import { CategoryProps } from "../src/components/categories/Category";
import { RestaurantCardProps } from "../src/components/restaurants/RestaurantCard";
import { RestaurantsRowProps } from "../src/components/restaurants/RestaurantsRow";

export const tempCategories: CategoryProps[] = [
  {
    id: 1,
    name: "Chinese",
    image: require("../assets/images/categories/chinese.png"),
  },
  {
    id: 2,
    name: "Italian",
    image: require("../assets/images/categories/spagetti.png"),
  },
  {
    id: 3,
    name: "Pizza",
    image: require("../assets/images/categories/pizza.png"),
  },
  {
    id: 4,
    name: "Burgers",
    image: require("../assets/images/categories/burger.png"),
  },
  {
    id: 5,
    name: "Seafood",
    image: require("../assets/images/categories/fish.png"),
  },
  {
    id: 6,
    name: "Desserts",
    image: require("../assets/images/categories/cupcake.png"),
  },
  {
    id: 7,
    name: "Cocktails",
    image: require("../assets/images/categories/drink.png"),
  },
];

export const tempRestaurantRows: ({
  restaurants: number[];
} & RestaurantsRowProps)[] = [
  {
    id: 1,
    title: "Hot and spicy",
    description: "soft and tender fried chicken",
    restaurants: [1, 2, 3],
  },
  {
    id: 2,
    title: "Soft and creamy",
    description: "soft and tender fried chicken",
    restaurants: [2, 3, 4],
  },
  {
    id: 3,
    title: "Specials",
    description: "soft and tender fried chicken",
    restaurants: [4, 1, 5],
  },
];

export const tempRestaurants: RestaurantCardProps[] = [
  {
    id: 1,
    image: require("../assets/images/restaurants/1.jpg"),
    children: "Papa Johns",
    category: "Pizzeria",
    address: "",
    rating: 4.55,
  },
  {
    id: 2,
    image: require("../assets/images/restaurants/2.jpg"),
    children: "Istanbul",
    category: "Fast food",
    address: "",
    rating: 3.7,
  },
  {
    id: 3,
    image: require("../assets/images/restaurants/3.jpg"),
    children: "Pan Asia",
    category: "Asian",
    address: "",
    rating: 4.25,
  },
  {
    id: 4,
    image: require("../assets/images/restaurants/4.png"),
    children: "McDonalds",
    category: "Fast food",
    address: "",
    rating: 5,
  },
  {
    id: 5,
    children: "Intourist",
    category: "Reastaurant",
    address: "",
    rating: 4,
  },
];
