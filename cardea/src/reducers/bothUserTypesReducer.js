// general import
import { 
    GET_PERMISSION_STATUS_START,
    GET_PERMISSION_STATUS_SUCCESS,
    GET_PERMISSION_STATUS_FAILURE,
    GET_IMMUNIZATION_INFO_START,
    GET_IMMUNIZATION_INFO_SUCCESS,
    GET_IMMUNIZATION_INFO_FAILURE
} from "../actions"

// initialState
// ask Karen about splitting up files and organizing state
const initialState = {
    bothUserTypesInfo: [],
    isLoading: false,
    error: "", 
}

// 1. get permission status reducer
export const getPermissionStatusReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_PERMISSION_STATUS_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case GET_PERMISSION_STATUS_SUCCESS:
            return {
                ...state,
                bothUserTypesInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case GET_PERMISSION_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}
    
// 2. get immunization info
export const getImmunizationInfoReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_IMMUNIZATION_INFO_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case GET_IMMUNIZATION_INFO_SUCCESS:
            return {
                ...state,
                bothUserTypesInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case GET_IMMUNIZATION_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}
