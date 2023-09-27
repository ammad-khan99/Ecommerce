import { inventoryActions } from "../actions/actionTypes";

const initialState = {
    products:[]
}

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case inventoryActions.GET_PRODUCTS: {
      return {products:[...action.payload]}
    }
    default: return state
  }
};

export default inventoryReducer;
