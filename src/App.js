// This is component - function component - Root.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";
import { getCart , storeCart} from './helpers';
const App = () => {
const [cart, setCart] = useState({});
// fetch cart from local storage

useEffect(async ()=>{
    const cart =await getCart();
    setCart(JSON.parse(cart));
},[]);

useEffect(()=>{
      storeCart(JSON.stringify(cart));
},[cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart,setCart}}>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} exact></Route>
                        {/* <Route path="/about" element={<About />}></Route> */}
                        <Route path="/products" exact element={<ProductsPage />}></Route>
                        <Route path="/products/:_id" element={<SingleProduct />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}
export default App;