import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./styles.module.css";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}

const QuantityButton = (props: Props) => {
  return (
    <div className={styles.btn_container}>
      <button  onClick={props.onDecrease}>
        {props.qty === 1 ? <FaTrash /> : "-"}
        
      </button>
      <p>{props.qty}</p>
      <button onClick={props.onIncrease}> + </button>
    </div>
  );
};

export default QuantityButton;
