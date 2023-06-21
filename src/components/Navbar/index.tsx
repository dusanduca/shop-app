import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Link href={"/"}>Shop</Link>
      <Link href={""}>
        <FaShoppingCart />
      </Link>
    </div>
  );
};

export default Navbar;
