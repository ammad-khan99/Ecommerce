import React, { useEffect } from "react";
import style from "./SideNav.module.css";
import { NavLink, json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/actions/userActions";

function SideNav() {
  const dispatch = useDispatch();
  const handleRoute = () => {
    const userLogin = JSON.parse(localStorage.getItem("persist:user"));
    if (userLogin?.isLoggedIn === undefined || userLogin?.isLoggedIn === "false" ) {
      dispatch(userLogout());
    }
  };

  return (
    <div className={style.filter}>
      <ul>
        <li className={style.list}>
          {" "}
          <NavLink className={style.link_items} onClick={handleRoute} to="/">
            Home
          </NavLink>
        </li>
        <li className={style.list}>
          {" "}
          <NavLink
            className={style.link_items}
            onClick={handleRoute}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li className={style.list}>
          {" "}
          <NavLink
            className={style.link_items}
            onClick={handleRoute}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
