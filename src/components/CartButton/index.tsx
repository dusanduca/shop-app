import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { store, useAppSelector } from "../store/store";
import { totalCartItemsSelector } from "../store/cartSlice";
import styles from "./styles.module.css";


interface ButtonProps {
  className?: string,
}

const CartButton = (props: ButtonProps) => {

  const totalItems = useAppSelector(totalCartItemsSelector);
  
  return (
    <div className={`${props.className}`} >
      <FaShoppingCart />
      {!!totalItems && 
       <div  >
        {totalItems}
      </div>}
    </div>
  );
};

export default CartButton;
