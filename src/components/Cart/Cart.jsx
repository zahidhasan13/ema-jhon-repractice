/* eslint-disable react/prop-types */

const Cart = ({cart}) => {


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
        </div>
    );
};

export default Cart;