import { userActions } from "./actionTypes"

export const userLogin = (payload) => {
    return{
        type: userActions.USER_LOGIN,
        payload:payload
    }
}

export const userLogout = () => {
    return{
        type: userActions.USER_LOGOUT,
    }
}

export const showModal = () => {
    return{
        type: userActions.SHOW_MODAL,
    }
}

export const hideModal = () => {
    return{
        type: userActions.HIDE_MODAL,
    }
}