import React from "react";
import style from "./Product_card.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";



function Product_card(props) {
  const {data} = props
  const dispatch = useDispatch();

  const handleAddToCart= () => {
dispatch(addItem({product: data,quantity:1}))
  }

  return (
    <div className={style.card}>
      <img
        className={style.prod_image}
        src={data && data.image}
        alt="Product Image"
      />
      <div className={style.card_desc}>
        <hr className={style.card_hr} />
        <p className={style.price}>
          <span className={style.span}> ${data && data.price}</span>
          <span className={style.span}> Rating : {data && data.rating.rate}</span>
        </p>
        <h4 className={style.title}>{data && data.title}</h4>
        <p className={style.para}>{data && data.description}</p>
      </div>
      <button className={style.card_button} onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default Product_card;
