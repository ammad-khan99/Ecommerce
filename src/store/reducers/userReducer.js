import { userActions } from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  showModal: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.USER_LOGIN: {
      return {
        isLoggedIn: true,
        showModal: false,
      };
    }
    case userActions.USER_LOGOUT: {
      return {
        isLoggedIn: false,
        showModal: false,
      };
    }
    case userActions.SHOW_MODAL: {
      return {
        isLoggedIn: false,
        showModal: true,
      };
    }
    case userActions.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
