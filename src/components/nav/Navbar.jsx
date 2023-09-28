import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu } from "react-feather";
import logo from "./../../logo/website-logo.jpg";
import { useSelector } from "react-redux";

function Navbar() {
  const [active, setActive] = useState("links");
  const [itemCount, setItemCount] = useState(0);
  const cart = useSelector((data) => data.cart.carts);

  useEffect(() => {
    const itemQuantity = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setItemCount(itemQuantity);
  }, [cart]);
  const toggler = () => {
    active === "links" ? setActive("links nav_active") : setActive("links");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="nav">
      <div>
        <img height="37rem" src={logo} alt="logo" />
      </div>
      <div className="logout">
      <NavLink className="link_elements" to="/cart">
          <ShoppingCart />
          <span className="cart_count">{itemCount}</span>
        </NavLink>
        <button className="log" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <Menu onClick={toggler} className="menu" color="#be6b9b" />
      </div>
    </nav>
  );
}

export default Navbar;
