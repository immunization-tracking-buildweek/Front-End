// general import
import { 
    MED_GET_USER_INFO_START,
    MED_GET_USER_INFO_SUCCESS,
    MED_GET_USER_INFO_FAILURE,
    ADD_IMMUNIZATION_START,
    ADD_IMMUNIZATION_SUCCESS,
    ADD_IMMUNIZATION_FAILURE,
    DELETE_IMMUNIZATION_START,
    DELETE_IMMUNIZATION_SUCCESS,
    DELETE_IMMUNIZATION_FAILURE
} from "../actions"

// initialState
// ask Karen about splitting up files and organizing state
const initialState = {
    medProfSideInfo: [],
    isLoading: false,
    error: "", 
    medProId: "",
    immunization_id: "",
    patient_id: "",
}

// 1. Medical professional - get user info reducer
export const medGetUserInfoReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case MED_GET_USER_INFO_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case MED_GET_USER_INFO_SUCCESS:
            return {
                ...state,
                medProfSideInfo: [...state.medProfSideInfo, action.payload],
                isLoading: false,
                error: ""
            }
        case MED_GET_USER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}
    
// 2. Medical professional - add immunization
export const addImmunizationReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_IMMUNIZATION_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case ADD_IMMUNIZATION_SUCCESS:
            return {
                ...state,
                medProfSideInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case ADD_IMMUNIZATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 3. Medical professional - delete immunization
export const deleteImmunizationReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case DELETE_IMMUNIZATION_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case DELETE_IMMUNIZATION_SUCCESS:
            const newArr = state.medProfSideInfo.filter(deleteImmunization => deleteImmunization.id !== action.payload);
            return {
                ...state,
                medProfSideInfo: newArr,
                isLoading: false,
                error: ""
            }
        case DELETE_IMMUNIZATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

