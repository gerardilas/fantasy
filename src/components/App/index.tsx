import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import StoreLayout from "../../layouts/StoreLayout.tsx";
import Cart from "../../pages/Cart";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Products from "../../pages/Products";
import Stores from "../../pages/Stores";

function App() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/contacto' element={<Contact />} />
                        <Route path='/nuestras-tiendas' element={<Stores />} />
                        <Route path='/carrito' element={<Cart />} />
                        <Route path='/productos/:productName' element={<Product />} />
                        <Route path='/productos' element={<Products />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
