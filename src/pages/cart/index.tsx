import CartItemCard from "@/components/CartItemCard";
import { TotalPriceSelector } from "@/components/store/cartSlice";
import { useAppSelector } from "@/components/store/store";
import React from "react";


const CartPage = () => {

    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    );
    const totalPrice = useAppSelector(TotalPriceSelector);
    return(
        <div>
            {cartItems.map(item=>
                <CartItemCard cartItem={item} key={item.product.id} />)}

            <p>Total Price: {""}
               <span>${totalPrice}</span>
            </p> 
        </div>
    )
}


export default CartPage;