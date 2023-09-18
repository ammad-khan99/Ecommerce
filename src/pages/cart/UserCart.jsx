import React from "react";
import style from "./UserCart.module.css";
import CartCard from "../../components/cart-card/CartCard";
import Navbar from "../../components/nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../redux/slices/cartSlice";

function UserCart() {
  const cartStore = useSelector((store) => store.cart.carts);
  const dispatch = useDispatch();

console.log('cart : ',cartStore);

  const handleDelCart = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      <Navbar />
      <div className={style.cartPage}>
        <div className={style.header}>
          <h2 className={style.heading}> User Cart </h2>
          <button className={style.emptyBtn} onClick={handleDelCart}>
            Empty Cart
          </button>
        </div>
        <div>
          <div className={style.cartDiv}>
            {cartStore.length > 0 ? (
              cartStore.map((each, index) => {
                return <CartCard key={index} each={each} />;
              })
            ) : (
              <p style={{ margin: 100 }}>No item added</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCart;
