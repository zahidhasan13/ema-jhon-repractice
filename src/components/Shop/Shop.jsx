import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="flex">
            <div className="basis-3/4 pt-4 px-8">
                <h1 className="text-2xl mb-2">All Products</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        products.map(product => <Product product = {product} key = {product.id} addToCart = {addToCart}></Product>)
                    }
                </div>
            </div>
            <div className="basis-1/4 bg-pink-300 pt-4">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;