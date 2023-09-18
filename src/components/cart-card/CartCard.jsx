import React, { useEffect, useState } from "react";
import style from "./CartCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from './../../logo/trash-2.svg'
import { delItem } from "../../redux/slices/cartSlice";

function CartCard(props) {
  const dispatch = useDispatch()

const handleDelItem = (id) => {
  dispatch(delItem(id))
}

  return (
    <div className={style.card}>
      <div>
        <img
          src={props.each.product && props.each.product.image}
          width={100}
          height={100}
        />
      </div>
      <div className={style.desc}>
        <div>
          <h4 className={style.title}>{props.each.product.title}</h4>
        </div>
        <div className={style.quantity}>
          <p>Quantity :</p>
          <span>{props.each.quantity}</span>
          <span onClick={()=> handleDelItem(props.each.product.id)} className={style.del_btn}><img src={deleteIcon}/></span>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
