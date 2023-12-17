import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RestaurantCard } from "../types/base";

type State = {
  restaurant: RestaurantCard | null;
};

const initialState: State = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantCard>) => {
      state.restaurant = action.payload;
    },
    clearState: (state) => {
      state.restaurant = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant, clearState } = restaurantSlice.actions;

export default restaurantSlice.reducer;
