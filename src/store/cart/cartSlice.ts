import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../../interfaces";
import { RootState } from "../store";
import initialState from "./initialState";

export interface CartState {
  cartItems: CartItem[];
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) cartItem.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const cartItems = (state: RootState) => state.cart.cartItems;

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
