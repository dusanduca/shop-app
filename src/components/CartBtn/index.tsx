import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { store, useAppSelector } from "../store/store";
import { totalCartItemsSelector } from "../store/cartSlice";


interface BtnProps {
  index?: string,
}

const CartBtn = (props: BtnProps) => {

  const totalItems = useAppSelector(totalCartItemsSelector);
  
  return (
    <div key={props.index}>
      <FaShoppingCart />
      {!!totalItems && 
      <div key={totalItems}>
        {totalItems}
      </div>}
    </div>
  );
};

export default CartBtn;
