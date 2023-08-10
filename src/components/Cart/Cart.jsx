/* eslint-disable react/prop-types */

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({cart, clearCart, children}) => {


    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (totalPrice*2)/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="px-4 sticky top-[80px] space-y-4">
            <h1 className="text-2xl text-center">Order Summary</h1>
            <p><strong>Selected Item: {quantity}</strong></p>
            <p className="text-lg font-medium">Total: ${totalPrice}</p>
            <p className="text-lg font-medium">Shipping: ${totalShipping}</p>
            <p className="text-lg font-medium">Tax: ${tax}</p>
            <p className="text-lg font-medium">Grand Total: ${grandTotal}</p>
            <button onClick={clearCart} className="w-full text-center bg-red-600 py-2 text-white text-xl font-medium rounded">Clear Cart <FontAwesomeIcon icon={faTrashAlt}/></button>
            {children}
        </div>
    );
};

export default Cart;