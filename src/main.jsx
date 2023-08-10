import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import Order from './components/Order/Order.jsx';
import Shop from './components/Shop/Shop.jsx';
import './index.css';
import cartProductLoaders from './loaders/cartProductLoaders.js';
import Checkout from './components/Checkout/Checkout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "order",
        element: <Order></Order>,
        loader: cartProductLoaders
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "login",
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
