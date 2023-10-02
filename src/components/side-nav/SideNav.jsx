import React from "react";
import style from "./SideNav.module.css";
import { NavLink } from "react-router-dom";

function SideNav() {

  return (
    <div className={style.filter}>
      <ul>
       <li className={style.list}> <NavLink className={style.link_items} to="/home">
          Home
        </NavLink></li>
        <li className={style.list}> <NavLink className={style.link_items} to="/products">
          Products
        </NavLink></li>
        <li className={style.list}> <NavLink className={style.link_items} to="/contact">
          Contact
        </NavLink></li>
      </ul>
    </div>
  );
}

export default SideNav;