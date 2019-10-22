import { 
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
 } from "../actions"

const initialState = {
    patientInfo: [],
    isLoading: false,
    error: "",
    isAuth: localStorage.getItem('token') ? true : false
}

export const authUserLoginReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case USER_LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

export const authUserRegisterReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case USER_REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}