import { userActions } from "./actionTypes"

export const userLogin = () => {
    return{
        type: userActions.USER_LOGIN,
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