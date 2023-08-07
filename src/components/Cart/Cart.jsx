/* eslint-disable react/prop-types */

const Cart = (props) => {
    return (
        <div className="px-4">
            <h1 className="text-2xl text-center">Order Summary</h1>
            <p><strong>Order: {props.cart.length}</strong></p>
        </div>
    );
};

export default Cart;