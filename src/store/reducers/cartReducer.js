import { cartActions } from "../actions/actionTypes";

const initialState = {
  carts: [],
  id: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.ADD_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case cartActions.ADD_ITEM: {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.id === action.payload.product.id
      );
      if (item === -1) {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload.product, quantity: 1 }],
        };
      } else {
        const tempCart = [...state.carts];
        tempCart[item].quantity++;
        return {
          ...state,
          carts: [...tempCart],
        };
      }
    }
    case cartActions.DEL_ITEM: {
      const item = state.carts.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      return {
        ...state,
        carts: [...item],
      };
    }
    case cartActions.EMPTY_CART: {
      return { carts: [] };
    }
    case cartActions.INC_ITEM_COUNT: {
      const item = state.carts.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.quantity++;
        }
        return cartItem;
      });
      return {
        ...state,
        carts: [...item],
      };
    }
    case cartActions.DEC_ITEM_COUNT: {
      const item = state.carts.map((cartItem) => {
        if (cartItem.id === action.payload) {
          if (cartItem.quantity > 1) {
            cartItem.quantity--;
          }
        }
        return cartItem;
      });
      return {
        ...state,
        carts: [...item],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
