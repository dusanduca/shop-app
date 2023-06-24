import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import CartButton from "../CartButton";


const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <Link className={styles.link1} href={"/"}>
        Shop
      </Link>
      <Link className={styles.link2} href={"/cart"}>
        <CartButton />
      </Link>
    </nav>
  );
};

export default Navbar;
