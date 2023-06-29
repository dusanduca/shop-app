import CartItemCard from "@/components/CartItemCard";
import { selectTotal } from "@/store/cart/selectors"; 
import { useAppSelector } from "@/store/store"; 
import Layout from "@/layout/MainLayout";
import React from "react";
import styles from "./styles.module.css";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(selectTotal);
  return (
    <div className={styles.page_container}>
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} key={item.product.id} />
      ))}

      <p>
        Total Price: {""}
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

CartPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default CartPage;
