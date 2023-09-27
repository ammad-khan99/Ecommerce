import actionTypes from "../actions/actionTypes";

const initialState = {
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.id === action.payload.product.id
      );
      if (item === -1) {
        return {
          carts: [...state.carts, { ...action.payload.product, quantity: 1 }],
        };
      } else {
        const tempCart = [...state.carts];

        tempCart[item].quantity++;
        return { carts: [...tempCart] };
      }
    }
    case actionTypes.DEL_ITEM: {
      const item = state.carts.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      return { carts: [...item] };
    }
    case actionTypes.EMPTY_CART: {
      return { carts: [] };
    }
    case actionTypes.INC_ITEM_COUNT: {
      const item = state.carts.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.quantity++;
        }
        return cartItem;
      });
      return { carts: [...item] };
    }
    case actionTypes.DEC_ITEM_COUNT: {
      const item = state.carts.map((cartItem) => {
        if (cartItem.id === action.payload) {
          if (cartItem.quantity > 0) {
            cartItem.quantity--;
          }
        }
        return cartItem;
      });
      return { carts: [...item] };
    }
    default:
      return state;
  }
};

export default cartReducer;
