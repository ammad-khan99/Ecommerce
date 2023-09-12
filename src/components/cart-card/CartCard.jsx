import React from 'react'
import style from './CartCard.module.css'

function CartCard(props) {
  return (
    <div className={style.card}>
        <div>
            <h4>product id</h4>
            <span>{props.each.productId}</span>
        </div>
        <div>
            <h4>Quantity</h4>
            <span>{props.each.quantity}</span>
        </div>
    </div>
  )
}

export default CartCard