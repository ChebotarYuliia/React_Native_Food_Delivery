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
    address: "5th Ave",
    rating: 4.55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui",
  },
  {
    id: 2,
    image: require("../assets/images/restaurants/2.jpg"),
    children: "Istanbul",
    category: "Fast food",
    address: "4th Ave",
    rating: 3.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    image: require("../assets/images/restaurants/3.jpg"),
    children: "Pan Asia",
    category: "Asian",
    address: "1st Ave",
    rating: 4.25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    image: require("../assets/images/restaurants/4.png"),
    children: "McDonalds",
    category: "Fast food",
    address: "2d Ave",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    children: "Intourist",
    category: "Reastaurant",
    address: "6th Ave",
    rating: 4,
    description: "",
  },
];
