import { Product } from "../../../interfaces";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import AddToCartBtn from "../AddToCartBtn";
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.product_container}>
      <Image
        className={styles.image}
        src={product.image}
        alt={product.name}
        width={350}
        height={250}
      />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <AddToCartBtn product={product} />
    </div>
  );
};

export default ProductCard;
