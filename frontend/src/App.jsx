import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
