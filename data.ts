import { Product } from "./interfaces";
import image from "./src/images/mobile.jpg";
import image1 from "./src/images/ipad.jpg";
import image2 from "./src/images/laptop.jpg";
import image3 from "./src/images/tv.jpg";
import image4 from "./src/images/ps5.jpg";
import image5 from "./src/images/sony.jpg";

export const addedProduct: Product[] = [
  {
    id: 0,
    name: "Mobile phone",
    price: 500,
    image: image,
  },
  {
    id: 1,
    name: "Ipad",
    price: 800,
    image: image1,
  },
  {
    id: 2,
    name: "Laptop",
    price: 1200,
    image: image2,
  },
  {
    id: 3,
    name: "TV 43",
    price: 1500,
    image: image3,
  },
  {
    id: 4,
    name: "PS 5 500GB",
    price: 600,
    image: image4,
  },
  {
    id: 5,
    name: "Headphones Sony",
    price: 700,
    image: image5,
  },
];
