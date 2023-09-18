import React, { useEffect, useState } from "react";
import style from "./UserCart.module.css";
import CartCard from "../../components/cart-card/CartCard";
import Navbar from "../../components/nav/Navbar";
import ClipLoader from "react-spinners/ClipLoader";

function UserCart() {
  const [cartData, setCartData] = useState([]);
  const style1 = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const data = await fetch("https://fakestoreapi.com/carts/user/4");
    const res = await data.json();
    setCartData(res);
  };

  return (
    <>
      <Navbar />
      <div className={style.cartPage}>
        <div>
          {cartData.length > 0 ? (
            <h2 className={style.heading}> User {cartData[0].userId} Cart </h2>
          ) : (
            <div style={style1}>
              <ClipLoader
                color="#be6b9b"
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
        <div>
          <div className={style.cartDiv}>
            {cartData.length > 0 &&
              cartData[0].products.map((each, index) => {
                return <CartCard key={index} each={each} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCart;
