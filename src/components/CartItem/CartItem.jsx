/* eslint-disable react/prop-types */

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({product, removeCartItem}) => {
    const {id,img, name,price, quantity} = product;
    return (
        <div className="border-2 border-gray-700 rounded p-2 flex items-center mb-4">
            <img src={img} alt={name} className="w-24"/>
            <div className="flex-grow ml-4">
            <h3 className="text-2xl">{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            </div>
            <button onClick={() => removeCartItem(id)} className="bg-red-300 w-10 h-10 rounded-full text-red-700"><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
    );
};

export default CartItem;