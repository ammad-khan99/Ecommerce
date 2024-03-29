import {cartActions} from "./actionTypes"

export const addItem = (payload)=>{
    return{
        type: cartActions.ADD_ITEM,
        payload: payload
    }
}
export const emptyCart = ()=>{
    return{
        type: cartActions.EMPTY_CART
    }
}
export const delItem = (payload)=>{
    return{
        type: cartActions.DEL_ITEM,
        payload: payload
    }
}
export const incItemCount = (payload)=>{
    return{
        type: cartActions.INC_ITEM_COUNT,
        payload: payload
    }
}
export const decItemCount = (payload)=>{
    return{
        type: cartActions.DEC_ITEM_COUNT,
        payload: payload
    }
}