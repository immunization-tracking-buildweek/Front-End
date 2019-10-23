// general imports 
import axiosWithAuth from "../utils/axiosWithAuth"


// 1. PATIENTS REGISTER
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
            console.log(`This is the success console.log in index.js - user_register`, res);
            dispatch({ type: USER_REGISTER_SUCCESS });
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - user_register`, err);
            dispatch({ type: USER_REGISTER_FAILURE, payload: err.response });
        })
}

// 2. PATIENTS LOGIN
// action types for user login
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"

export const authUsersLogin = ( patientLogin, props ) => dispatch => {
    dispatch({ type: USER_LOGIN_START })

    axiosWithAuth()
        .post(`/auth/user-login`, patientLogin )
        .then(res => {
            console.log(`This is the login console.log in index.js - user_login`, res);
            dispatch({  type: USER_LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('token', res.data.token )
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - user_login`, err);
            dispatch({ type: USER_LOGIN_FAILURE, payload: err.response })
        })
}

// 3. MED REGISTER
// action types for med register
export const MED_REGISTER_START = "MEDIC_REGISTER_START"
export const MED_REGISTER_SUCCESS = "MEDIC_REGISTER_SUCCESS"
export const MED_REGISTER_FAILURE = "MEDIC_REGISTER_FAILURE"

export const authMedRegister = ( medProfRegister, props ) => dispatch=> {
    console.log(medProfRegister)
    console.log(props)
    dispatch({ type: MED_REGISTER_START })

    axiosWithAuth()
        .post(`/auth/med-register`, medProfRegister)
        .then(res => {
            console.log(`This is the success console.log in index.js - med_register`, res);
            dispatch({ type: MED_REGISTER_SUCCESS });
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - user_register`, err);
            dispatch({ type: MED_REGISTER_FAILURE, payload: err.response });
        })
}

// 4. MED LOGIN
// action types for med login
export const MED_LOGIN_START = "MED_LOGIN_START"
export const MED_LOGIN_SUCCESS = "MED_LOGIN_SUCCESS"
export const MED_LOGIN_FAILURE = "MED_LOGIN_FAILURE"

export const authMedLogin = ( medLogin, props ) => dispatch => {
    dispatch({ type: MED_LOGIN_START })

    axiosWithAuth()
        .post(`/auth/med-login`, medLogin )
        .then(res => {
            console.log(`This is the initial console.log in index.js - med_login`, res);
            dispatch({  type: MED_LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('token', res.data.token )
            props.history.push("/medical-professional-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - med_login`, err);
            dispatch({ type: MED_LOGIN_FAILURE, payload: err.response })
        })
}