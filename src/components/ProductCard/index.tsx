import { Product } from "../../../interfaces";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import AddToCartBtn from "../AddToCartBtn";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <div className={styles.product_container}>
      <Image
        className={styles.image}
        src={props.product.imagePath}
        alt={props.product.name}
      />
      <h4>{props.product.name}</h4>
      <p>{props.product.price}</p>
      <AddToCartBtn product={props.product} />
    </div>
  );
};

export default ProductCard;
