import { action types } from "../actions"

const initialState = {
    patientInfo: [],
    isLoading: false,
    error: "",
    isAuth: getItem.localStorage('token') ? true : false
}

const authReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case START_AUTH:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case AUTH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

export default authReducer