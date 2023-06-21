import Navbar from "@/components/Navbar";
import { store } from "@/components/store/store";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        {props.children}
      </Provider>
    </>
  );
};

export default Layout;
