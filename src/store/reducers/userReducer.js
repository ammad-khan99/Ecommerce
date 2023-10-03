import { userActions } from "../actions/actionTypes";

const initialState = {
  currentUser:{},
  isLoggedIn: false,
  showModal: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.USER_LOGIN: {
      console.log('payload :',action.payload);
      return {
        currentUser:{...action.payload,password: null },
        isLoggedIn: true,
        showModal: false,
      };
    }
    case userActions.USER_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        showModal: false,
      };
    }
    case userActions.SHOW_MODAL: {
      return {
        ...state,
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
