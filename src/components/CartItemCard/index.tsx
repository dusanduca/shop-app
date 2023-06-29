import React from "react";
import { CartItem } from "../../../interfaces";
import Image from "next/image";
import styles from "./styles.module.css";
import QuantityButton from "../ProductCard/QuantityButton";
import { decrement, increment } from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/store";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card_container}>
      <div className={styles.card_list}>
        <Image
          src={cartItem.product.image}
          width={200}
          height={150}
          alt={cartItem.product.name}
        />
        <div className={styles.name}>
          <p>{cartItem.product.name}</p>
        </div>

        <p> ${cartItem.product.price}</p>
        {"x"}
        <QuantityButton
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
        />
        <p>{cartItem.qty * cartItem.product.price} $</p>
      </div>
    </div>
  );
};

export default CartItemCard;
