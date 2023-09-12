import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth_pages/login/Login";
import Home from "./pages/home/Home";
import Products from "./pages/product/Products";
import ProtectedRoute from "./pages/user-routes/ProtectedRoute";
import NotFound from "./pages/error-page/NotFound";
import ContactForm from "./pages/contact/ContactForm";
import UserCart from "./pages/cart/UserCart";


function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<UserCart/>} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> 
      
    </div>
  );
}

export default App;
