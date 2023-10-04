import { errorActions } from "../actions/actionTypes";

const initialState = {
  showError: false,
  errorMessage: "",
};

const errorReducer = (state = initialState, action) => {
    console.log('payload:',action);
  switch (action.type) {
    case errorActions.SHOW_ERROR: {
      return {
        showError: true,
        errorMessage: action.payload,
      };
    }
    case errorActions.CLOSE_MODAL: {
        return {
            ...state,
          showError: false,
        };
      }
    default: return state
  }
};

export default errorReducer