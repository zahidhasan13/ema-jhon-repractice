import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaders = async () => {
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    const products = await loadedProducts.json();
    
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
    return savedCart;
}

export default cartProductLoaders;