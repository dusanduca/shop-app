import { Provider } from "react-redux";
import { addedProduct } from "../../data";
import ProductCard from "@/components/ProductCard";
import { store } from "@/components/store/store";
import styles from "./styles.module.css";
import Layout from "@/layout/MainLayout";


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
       <Layout>

       </Layout>
      </div>
      <div className={styles.main_container}>
        <Provider store={store}>
          {addedProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Provider>
      </div>
    </div>
  );
};

export default Home;
