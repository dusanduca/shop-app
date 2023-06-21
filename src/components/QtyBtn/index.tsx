import React from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  onIncrease: () => void;
  onDecrase: () => void;
  qty: number;
}

const QtyBtn = (props: Props) => {
  return (
    <div className="btn_container">
      <button onClick={props.onDecrase}>
        {props.qty === 1 ? <FaTrash /> : "-"}
      </button>
      <p>{props.qty}</p>
      <button onClick={props.onIncrease}> + </button>
    </div>
  );
};

export default QtyBtn;
