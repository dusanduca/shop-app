import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../store/store";
import { totalCartItemsSelector } from "../store/cartSlice";
import styles from "./styles.module.css";




const CartButton = () => {

  const totalItems = useAppSelector(totalCartItemsSelector);
  
  return (
    <div className={styles.cart_button_container} >
      <FaShoppingCart />
      {!!totalItems && 
       <div className={styles.total_number}>
        {totalItems}
      </div>}
    </div>
  );
};

export default CartButton;
