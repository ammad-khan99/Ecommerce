import React from "react";
import style from "./CartCard.module.css";
import { useDispatch } from "react-redux";
import deleteIcon from './../../logo/trash-2.svg'
import { delItem, decItemCount, incItemCount } from "../../redux/slices/cartSlice";

function CartCard(props) {
  const { quantity, product} = props.each
  const dispatch = useDispatch()

const handleDelItem = (id) => {
  dispatch(delItem(id))
}

const handleIncCount = (id) => {
  dispatch(incItemCount(id))

}

const handleDecCount = (id) => {
  dispatch(decItemCount(id))

}

  return (
    <div className={style.card}>
      <div>
        <img
          src={product && product.image}
          alt="product"
          width={100}
          height={100}
        />
      </div>
      <div className={style.desc}>
        <div>
          <h4 className={style.title}>{product && product.title}</h4>
        </div>
        <div className={style.quantity}>
          <p className={style.quantity_text}>Quantity :</p>
          <button onClick={()=> handleDecCount(product && product.id)} className={style.count}>-</button>
          <span>{quantity}</span>
          <button onClick={()=> handleIncCount(product && product.id)} className={style.count}>+</button>
          <span onClick={()=> handleDelItem( product && product.id)} className={style.del_btn}><img alt="delete" src={deleteIcon}/></span>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
