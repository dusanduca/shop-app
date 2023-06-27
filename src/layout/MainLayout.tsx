import Navbar from "@/components/Navbar";
import { store } from "@/components/store/store";
import { Provider } from "react-redux";
import styles from "./styles.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>
        <Provider store={store}>
          <Navbar />
          <main>{children}</main>
        </Provider>
      </div>
    </>
  );
}
