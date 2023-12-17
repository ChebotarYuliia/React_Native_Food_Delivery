import { ImageSourcePropType } from "react-native";

export type RestaurantDish = {
  id: number;
  name: string;
  price: string;
  description?: string;
  image?: ImageSourcePropType;
  restaurantId: number;
};

export type RestaurantCard = {
  id?: number;
  children?: string; // title
  image?: ImageSourcePropType;
  category?: string;
  address?: string;
  rating?: number;
  description?: string;
  dishes?: RestaurantDish[];
  filters?: number[];
};
