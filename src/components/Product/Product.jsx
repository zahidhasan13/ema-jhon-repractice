/* eslint-disable react/prop-types */
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className="relative border-solid border-2 border-[#95A0A7] rounded-lg h-[508px]">
            <img src={img} alt="" className="w-[286px] rounded-lg mx-auto mt-2"/>
            <div className="ml-2 mt-4">
                <h2 className="text-xl font-medium">{name}</h2>
                <p className="text-lg font-medium mb-5">Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
                <button className="absolute bottom-0 left-0 bg-[#FFE0B3] w-full py-2 rounded-b-lg font-medium hover:bg-[#f1a532]" onClick={() => addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;