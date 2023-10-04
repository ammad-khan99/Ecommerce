const cartActions = {
  ADD_ID: "ADD_ID",
  ADD_ITEM: "ADD_ITEM",
  EMPTY_CART: "EMPTY_CART",
  DEL_ITEM: "DEL_ITEM",
  INC_ITEM_COUNT: "INC_ITEM_COUNT",
  DEC_ITEM_COUNT: "DEC_ITEM_COUNT",
};

const inventoryActions = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
};

const userActions = {
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL"
};

const errorActions = {
  SHOW_ERROR: "SHOW_ERROR",
  CLOSE_MODAL: "CLOSE_MODAL"
};

export { cartActions, inventoryActions, userActions, errorActions };