import { createSelector } from "@reduxjs/toolkit";
import { cartItems } from "../cartSlice";
import { CartItem } from "../../../../interfaces";

export const selectCartItems = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const selectProductQuantity = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find(
        (el: { product: { id: number } }) => el.product.id === productId
      )?.qty
  );

  export const selectTotal = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);