import React from "react";
import { useAppSelector } from "../store/store";
import { TotalPriceSelector } from "../store/cartSlice";
import styles from "./styles.module.css";
import CartItemCard from "../CartItemCard";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <div className={styles.cart_container}>
      {cartItems.map((item, index) => (
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
