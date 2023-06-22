import Navbar from "@/components/Navbar";
import { store } from "@/components/store/store";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
