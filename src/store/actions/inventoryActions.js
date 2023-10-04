import axios from "axios";
import { urlConstants } from "../../utils/constants";
import { errorActions, inventoryActions } from "./actionTypes";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(urlConstants.PRODUCTS_URL);
      // const res = await data.json();

      dispatch({
        type: inventoryActions.GET_PRODUCTS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: inventoryActions.GET_PRODUCTS_FAILURE,
      // });
        dispatch({
          type: errorActions.SHOW_ERROR,
          payload: error.message
        })
    }
  };
};