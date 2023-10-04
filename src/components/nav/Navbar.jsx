import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "react-feather";
import logo from "./../../logo/website-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { showModal, userLogout } from "../../store/actions/userActions";

function Navbar() {
  const [active, setActive] = useState("links");
  const [itemCount, setItemCount] = useState(0);
  const cart = useSelector((data) => data.cart.carts);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const itemQuantity = cart.reduce((acc, item) => {
      if(item.userId === user.currentUser.id ){
      return acc + item.quantity;
      }
      return acc
    }, 0);
    setItemCount(itemQuantity);
  }, [cart]);
  
  const toggler = () => {
    active === "links" ? setActive("links nav_active") : setActive("links");
  };

  const handleLogout = () => {
    if (user?.isLoggedIn) {
      dispatch(userLogout());
    } else {
      dispatch(showModal());
    }
  };

  return (
    <nav className="nav">
      <div>
        <img height="37rem" src={logo} alt="logo" />
      </div>
      <div className="logout">
        {user && user.isLoggedIn && (
          <NavLink className="link_elements" to="/cart">
            <ShoppingCart />
            <span className="cart_count">{itemCount}</span>
          </NavLink>
        )}
        <button className="log" onClick={handleLogout}>
          {user?.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      {/* <div className="menu" >
        <Menu onClick={toggler} className="menu" color="#be6b9b" />
      </div> */}
    </nav>
  );
}

export default Navbar;
