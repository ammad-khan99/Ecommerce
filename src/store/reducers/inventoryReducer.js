import { inventoryActions } from "../actions/actionTypes";

const initialState = {
    products:[],
    error:false
}

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case inventoryActions.GET_PRODUCTS: {
      return {products:[...action.payload],error:false}
    }
    case inventoryActions.GET_PRODUCTS_FAILURE: {
      return {products:[],error:true}
    }
    default: return state
  }

};

export default inventoryReducer;