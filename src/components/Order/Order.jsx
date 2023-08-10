import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const removeCartItem = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        console.log(id);
        setCart(remaining);
        removeFromDb(id);
    };
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='flex mx-20 my-10'>
            <div className='basis-3/4 mr-2'>
                {
                    cart.map(product => <CartItem 
                    key = {product.id}
                    product = {product}
                    removeCartItem ={removeCartItem}
                    ></CartItem>)
                }
            </div>
            <div className='bg-pink-300 p-8 basis-1/4 ml-2'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to={"/checkout"} className="bg-green-500 w-full text-center text-xl font-medium rounded py-2 inline-block disabled:opacity-40" disabled>Checkout <FontAwesomeIcon icon={faArrowRight}/></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;