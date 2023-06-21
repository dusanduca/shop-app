import { addedProduct } from "../../data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="main_container">
      {addedProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
