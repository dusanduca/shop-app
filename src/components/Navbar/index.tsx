import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./styles.module.css";
import CartBtn from "../CartBtn";

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <Link className={styles.link1} href={"/"}>
        Shop
      </Link>
      <Link className={styles.link2} href={"/cart"}>
        <FaShoppingCart />
      </Link>
    </nav>
  );
};

export default Navbar;
