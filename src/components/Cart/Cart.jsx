/* eslint-disable react/prop-types */

const Cart = ({cart}) => {


    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice*2)/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="px-4 sticky top-0 space-y-4">
            <h1 className="text-2xl text-center">Order Summary</h1>
            <p><strong>Selected Item: {cart.length}</strong></p>
            <p className="text-lg font-medium">Total: ${totalPrice}</p>
            <p className="text-lg font-medium">Shipping: ${totalShipping}</p>
            <p className="text-lg font-medium">Tax: ${tax}</p>
            <p className="text-lg font-medium">Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;