import { Provider } from "react-redux";
import { addedProduct } from "../../data";
import ProductCard from "@/components/ProductCard";
import { store } from "@/components/store/store";
import Navbar from "@/components/Navbar";
import styles from "./styles.module.css"

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
        This is a test branch
      </div>
    </div>
  );
};

export default Home;
