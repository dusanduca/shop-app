import React from "react";
import { CartItem } from "../../../interfaces";
import Image from "next/image";

interface Props {
    cartItem: CartItem;
}

const CartItemCard = ({cartItem}: Props) => {
    return(
         <div className="card_container">
            <div className="card_list">
                <Image
                   src={cartItem.product.imagePath}
                   alt={cartItem.product.name}
                 />
                 <p>{cartItem.product.name}</p>
                 <p> ${cartItem.product.price}</p>
            </div>

         </div>
    )
}


export default CartItemCard;