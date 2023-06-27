import { addedProduct } from "../../data";
import ProductCard from "@/components/ProductCard";
import styles from "./styles.module.css";
import Layout from "@/layout/MainLayout";

const Home = () => {
  return (
    <div className={styles.main_container}>
      {addedProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;
