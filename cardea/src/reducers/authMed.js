import {
    MED_REGISTER_START,
    MED_REGISTER_SUCCESS,
    MED_REGISTER_FAILURE,
    MED_LOGIN_START,
    MED_LOGIN_SUCCESS,
    MED_LOGIN_FAILURE
} from "../actions"

const initialState = {
    medInfo: [],
    isLoading: false,
    error: "",
    isAuth: localStorage.getItem('token') ? true : false
}

// 1. Med Register Reducer
export const authMedRegisterReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case MED_REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case MED_REGISTER_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case MED_REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 2. Med Login Reducer
export const authMedLoginReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case MED_LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case MED_LOGIN_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case MED_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}