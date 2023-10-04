import { cartActions } from "../actions/actionTypes";

const initialState = {
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM: {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.id === action.payload.product.id
      );
      if (item === -1) {
        return {
          ...state,
          carts: [
            ...state.carts,
            {
              ...action.payload.product,
              quantity: 1,
              userId: action.payload.userId,
            },
          ],
        };
      } else {
        const tempCart = [...state.carts];
        if (tempCart[item].userId === action.payload.userId) {
          tempCart[item].quantity++;
          return {
            ...state,
            carts: [...tempCart],
          };
        } else {
          return {
            ...state,
            carts: [
              ...state.carts,
              {
                ...action.payload.product,
                quantity: 1,
                userId: action.payload.userId,
              },
            ],
          };
        }
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
      const emptyUsercart = state.carts.filter(
        (cartItem) => cartItem.userId !== action.payload
      );
      return { carts: [...emptyUsercart] };
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
