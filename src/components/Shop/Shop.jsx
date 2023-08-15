import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find(pd => pd.id === product.id);
    if(!exist){
        product.quantity = 1;
        newCart = [...cart, product];
    }else{
        exist.quantity = exist.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining, exist];
    }



    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addProduct = products.find((product) => product.id === id);
      if (addProduct) {
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        savedCart.push(addProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className="flex">
      <div className="basis-[70%] md:basis-3/4 pt-4 px-8">
        <h1 className="text-2xl mb-2">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="basis-[30%] md:basis-1/4 bg-pink-300 pt-4">
        <Cart cart={cart}>
        <Link to={"/order"} className="w-full inline-block bg-green-500 text-center text-xl font-medium rounded py-2">Go to Cart <FontAwesomeIcon icon={faArrowRight}/></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
