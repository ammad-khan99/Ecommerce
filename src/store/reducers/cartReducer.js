const initialState = {
    carts:[]
}

const cartReducer = (state = initialState ,action)=>{
switch(action.type){
    case 'ADD_ITEM': {
        const item = state.carts.findIndex(
            (cartItem) => cartItem.product.id === action.payload.product.id
          );
          if (item === -1) {
            state.carts.push(action.payload);
          } else {
            state.carts[item].quantity++;
          }
        return state
    }
    case 'DEL_ITEM':{
        const item = state.carts.findIndex(
            (cartItem) => cartItem.product.id === action.payload
          );
          state.carts.splice(item, 1);
        return state
    }
    case 'EMPTY_CART':{
        state.carts.length = 0;
          return state
    }
    case 'INC_ITEM_COUNT':{
        const item = state.carts.findIndex(
            (cartItem) => cartItem.product.id === action.payload
          );
          console.log('item',item);
          console.log('state',state.carts);
          state.carts && state.carts[item].quantity++;
          return state
    }
    case 'DEC_ITEM_COUNT':{
        const item = state.carts.findIndex(
            (cartItem) => cartItem.product.id === action.payload
          );
          if(state.carts[item].quantity > 0){
          state.carts[item].quantity--;
          }
          return state
    }
        default:return state
}
}

export default cartReducer;