// general import
import { 
    GET_USER_INFO_START,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    GET_PATIENT_INFO_START,
    GET_PATIENT_INFO_SUCCESS,
    GET_PATIENT_INFO_FAILURE,
    ADD_NEW_PATIENT_START,
    ADD_NEW_PATIENT_SUCCESS,
    ADD_NEW_PATIENT_FAILURE,
    EDIT_PATIENT_START,
    EDIT_PATIENT_SUCCESS,
    EDIT_PATIENT_FAILURE,
    DELETE_PATIENT_START,
    DELETE_PATIENT_SUCCESS,
    DELETE_PATIENT_FAILURE,
    GIVE_PERMISSION_START,
    GIVE_PERMISSION_SUCCESS, 
    GIVE_PERMISSION_FAILURE,
    EDIT_PERMISSION_START,
    EDIT_PERMISSION_SUCCESS, 
    EDIT_PERMISSION_FAILURE, 
} from "../actions"

// initialState
// ask Karen about splitting up files and organizing state
const initialState = {
    patientSideInfo: [],
    isLoading: false,
    error: "", 
    medProId: "",
    immunization_id: "",
    patient_id: "",
    user_id: ""
}

// 1. User - get user info reducer
export const getUserInfoReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_USER_INFO_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                user_id: ""
            }
        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 2. Patient - user gets patient(child) info reducer
export const getPatientInfoReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_PATIENT_INFO_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case GET_PATIENT_INFO_SUCCESS:
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                patient_id: ""
            }
        case GET_PATIENT_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 3. Add Patient - user adds patient(child) info reducer
export const addNewPatientReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_NEW_PATIENT_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case ADD_NEW_PATIENT_SUCCESS:
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                patient_id: ""
            }
        case ADD_NEW_PATIENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 4. Edit Patient - user edits patient(child) info reducer
export const editPatientReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case EDIT_PATIENT_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case EDIT_PATIENT_SUCCESS:
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                patient_id: ""
            }
        case EDIT_PATIENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 5. Delete Patient - user deletes patient(child) info reducer
export const deletePatientReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case DELETE_PATIENT_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case DELETE_PATIENT_SUCCESS:
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                patient_id: ""
            }
        case DELETE_PATIENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 6. Give permission - user gives permission to medical professional reducer
export const givePermissionReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GIVE_PERMISSION_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case GIVE_PERMISSION_SUCCESS: 
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                patient_id: ""
            }
        case GIVE_PERMISSION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

// 7. Edit permission - user edits permission to medical professional reducer
export const editPermissionReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case EDIT_PERMISSION_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case EDIT_PERMISSION_SUCCESS: 
            return {
                ...state,
                patientSideInfo: action.payload,
                isLoading: false,
                error: "",
                patient_id: ""
            }
        case EDIT_PERMISSION_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}








