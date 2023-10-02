import { urlConstants } from "../../utils/constants";
import { inventoryActions } from "./actionTypes";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(urlConstants.PRODUCTS_URL);
      const res = await data.json();

      dispatch({
        type: inventoryActions.GET_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: inventoryActions.GET_PRODUCTS_FAILURE,
      });
    }
  };
};