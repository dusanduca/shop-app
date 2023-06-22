import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { store, useAppSelector } from "../store/store";
import { totalCartItemsSelector } from "../store/cartSlice";


const CartBtn = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div>
      <FaShoppingCart />
      {!!totalItems && 
      <div key={totalItems}>
        {totalItems}
      </div>}
    </div>
  );
};

export default CartBtn;
