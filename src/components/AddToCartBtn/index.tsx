import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "../store/cartSlice";
import QtyBtn from "../QtyBtn";
import { Product } from "../../../interfaces";


interface Props {
  product: Product
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );

  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="btn-cart">
        <button onClick={() => dispatch(increment(props.product))}>
          Add to cart
        </button>
      </div>
    );
  return (
    <div className="btn-cart2">
    <QtyBtn
      onDecrase={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
    </div>
  );
};

export default AddToCartBtn;
