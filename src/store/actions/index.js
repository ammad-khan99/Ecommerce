import actionTypes from "./actionTypes"

export const addItem = (payload)=>{
    return{
        type: actionTypes.ADD_ITEM,
        payload: payload
    }
}
export const emptyCart = ()=>{
    return{
        type: actionTypes.EMPTY_CART
    }
}
export const delItem = (payload)=>{
    return{
        type: actionTypes.DEL_ITEM,
        payload: payload
    }
}
export const incItemCount = (payload)=>{
    return{
        type: actionTypes.INC_ITEM_COUNT,
        payload: payload
    }
}
export const decItemCount = (payload)=>{
    return{
        type: actionTypes.DEC_ITEM_COUNT,
        payload: payload
    }
}