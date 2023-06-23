import { Provider } from "react-redux";
import { addedProduct } from "../../data";
import ProductCard from "@/components/ProductCard";
import { store } from "@/components/store/store";
import styles from "./styles.module.css";
import Navbar from "@/components/Navbar";


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <Navbar />
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
