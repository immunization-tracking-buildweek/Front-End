// general imports 
import axiosWithAuth from "../utils/axiosWithAuth"
import axios from "axios"

// action types for user login
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"

export const authUsersLogin = ( patientLogin, props ) => dispatch => {
    dispatch({ type: USER_LOGIN_START })

    axios
        .post(`https://immunizationtracker-bw.herokuapp.com/api/auth/user-login`, patientLogin )
        .then(res => {
            console.log(`This is the initial console.log in authActions.js - user_login`, res);
            // version 1 - just below, didn't work
            dispatch({  type: USER_LOGIN_SUCCESS, payload: res.data });
            // version 4 -- tried changing the payload
            // dispatch({  type: USER_LOGIN_SUCCESS, payload: res.data.payload });

            // version 2 - just below, didn't work 
            // version 3 - lines 18 and 21
            localStorage.setItem('token', res.data.token )
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure from authActions.js - user_login`, err);
            dispatch({ type: USER_LOGIN_FAILURE, payload: err.response })
        })
}

// action types for user register
export const USER_REGISTER_START = "USER_REGISTER_START"
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS"
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE"

export const authUsersRegister = ( patientRegister, props ) => dispatch => {
    console.log(patientRegister)
    console.log(props)
    dispatch({ type: USER_REGISTER_START })

    axiosWithAuth()
        .post(`/auth/user-register`, patientRegister)
        .then(res => {
            console.log(`This is the initial console.log in index.js - user_register`, res);
            dispatch({ type: USER_REGISTER_SUCCESS });
        })
        .catch(err => {
            console.log(`This is the failure from authActions.js - user_register`, err);
            dispatch({ type: USER_REGISTER_FAILURE, payload: err.response });
        })
}