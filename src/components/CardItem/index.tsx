import React from "react";
import { CartItem } from "../../../interfaces";
import Image from "next/image";
import styles from "./styles.module.css"

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_list}>
        <Image src={cartItem.product.image} alt={cartItem.product.name} />
        <p>{cartItem.product.name}</p>
        <p> ${cartItem.product.price}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
