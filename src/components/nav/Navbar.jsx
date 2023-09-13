import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu } from "react-feather";
import logo from "./../../logo/website-logo.jpg";

function Navbar() {
  const [active, setActive] = useState("links");

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
      <div className={active}>
        <NavLink className="link_elements" to="/home">
          Home
        </NavLink>
        <NavLink className="link_elements" to="/products">
          Products
        </NavLink>
        <NavLink className="link_elements" to="/contact">
          Contact
        </NavLink>
        <NavLink className="link_elements" to="/cart">
          <ShoppingCart />
        </NavLink>
      </div>
      <div className="logout">
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
