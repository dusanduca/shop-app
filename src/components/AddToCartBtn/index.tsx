import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "../store/cartSlice";
import QuantityButton from "../QuantityButton";
import { Product } from "../../../interfaces";
import styles from "./styles.module.css"

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
    );
    
    const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className={styles.btn_cart}>
        <button onClick={() => dispatch(increment(props.product))}>
          Add to cart
        </button>
      </div>
    );
  return (
    <div className={styles.btn_cart2}>
      <QuantityButton
        onDecrease={() => dispatch(decrement(props.product))}
        onIncrease={() => dispatch(increment(props.product))}
        qty={qty}
      />
    </div>
  );
};

export default AddToCartBtn;
