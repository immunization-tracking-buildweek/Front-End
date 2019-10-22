// general imports 
import axiosWithAuth from "../utils/axiosWithAuth"

// action types for user login
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"

// action types for user register
export const USER_REGISTER_START = "USER_REGISTER_START"
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS"
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE"

export const authUsers = () => dispatch => {
    dispatch({ type: USER_LOGIN_START })

    axiosWithAuth
        .post(`auth/user-login`)
        .then(res => console.log(`This is the initial console.log in authActions.js - user_login`, res))
        .catch(err => console.log(`This is the failure from authActions.js - user_login`, err))
}

export const authUsers = () => dispatch => {
    dispatch({ type: USER_REGISTER_START })

    axiosWithAuth
        .post(`auth/user-register`)
        .then(res => console.log(`This is the initial console.log in authActions.js - user_register`, res))
        .catch(err => console.log(`This is the failure from authActions.js - user_register`, err))
}
