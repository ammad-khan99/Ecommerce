import { errorActions } from "./actionTypes";

export const showError = (payload) => {
  return {
    type: errorActions.SHOW_ERROR,
    payload: payload,
  };
};

export const closeModal = () => {
    return {
      type: errorActions.CLOSE_MODAL,
    };
  };
  