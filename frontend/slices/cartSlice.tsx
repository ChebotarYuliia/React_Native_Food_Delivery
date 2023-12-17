import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RestaurantDish } from "../types/base";

type State = {
  items: RestaurantDish[];
  totalSum: number;
};

const initialState: State = {
  items: [],
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<RestaurantDish>) => {
      state.items = [...state.items, action.payload];
      state.totalSum += +action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<RestaurantDish>) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
        state.totalSum -= +action.payload.price;
      } else {
        console.log("can't remove item as its not in the cart");
      }
      state.items = newCart;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
