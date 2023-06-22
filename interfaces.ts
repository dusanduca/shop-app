import { StaticImageData } from "next/image";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  }
  
  export interface CartItem {
    product: Product;
    qty: number;
  }