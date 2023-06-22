import React from "react";
import { useAppSelector } from "../store/store";
import { TotalPriceSelector } from "../store/cartSlice";
import styles from "./styles.module.css";
import CartItemCard from "../CardItem";

const CartPage = () => {
  const CartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <div className={styles.cart_container}>
      {CartItems.map((item, index) => (
        <CartItemCard key={index} cartItem={item} />
      ))}

      <p>
        Total price : {""}
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

export default CartPage;
