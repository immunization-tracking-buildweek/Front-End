// general import
import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  MED_REGISTER_START,
  MED_REGISTER_SUCCESS,
  MED_REGISTER_FAILURE,
  MED_LOGIN_START,
  MED_LOGIN_SUCCESS,
  MED_LOGIN_FAILURE,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  MED_GET_USER_INFO_START,
  MED_GET_USER_INFO_SUCCESS,
  MED_GET_USER_INFO_FAILURE,
  ADD_NEW_PATIENT_START,
  ADD_NEW_PATIENT_SUCCESS,
  ADD_NEW_PATIENT_FAILURE,
} from "../actions";

// initialState
// ask Karen about splitting up files and organizing state
const initialState = {
  isLoading: false,
  error: "",
  patientInfo: [],
  medInfo: [],
  medProfSideInfo: [],
  isAuth: localStorage.getItem("token") ? true : false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 1. PATIENT SIDE
    // 1.1 Patient Registration Reducer
    case USER_REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        patientInfo: action.payload,
        isLoading: false,
        error: ""
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    // 1.2 Patient Login Reducer
    case USER_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        patientInfo: action.payload,
        isLoading: false,
        error: ""
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    // 1.3 Patient Get Info
    case GET_USER_INFO_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        patientSideInfo: action.payload,
        isLoading: false,
        error: "",
        user_id: ""
      };
    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    
    // 1.4 Add New Patient
    case ADD_NEW_PATIENT_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case ADD_NEW_PATIENT_SUCCESS:
      return {
        ...state,
        patientInfo: action.payload,
        isLoading: false,
        error: ""
      };
    case ADD_NEW_PATIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };


    // 2. MEDIC SIDE
    // 2.1 MedProf Register Reducer
    case MED_REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case MED_REGISTER_SUCCESS:
      return {
        ...state,
        medInfo: action.payload,
        isLoading: false,
        error: ""
      };
    case MED_REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    // 2.2 MedProf Login Reducer
    case MED_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case MED_LOGIN_SUCCESS:
      return {
        ...state,
        medInfo: action.payload,
        isLoading: false,
        error: ""
      };
    case MED_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    // 2.3 MedProf get user info reducer
    case MED_GET_USER_INFO_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case MED_GET_USER_INFO_SUCCESS:
      return {
        ...state,
        medProfSideInfo: action.payload,
        isLoading: false,
        error: ""
      };
    case MED_GET_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

// // combineReducers
// import { combineReducers } from "redux"

// //import reducers from all reducer files
// import {
//     authUserLoginReducer,
//     authUserRegisterReducer, } from "./auth"
// import {
//     authMedRegisterReducer,
//     authMedLoginReducer } from "./authMed"
// import {
//     getUserInfoReducer,
//     getPatientInfoReducer,
//     addNewPatientReducer,
//     editPatientReducer,
//     deletePatientReducer,
//     givePermissionReducer,
//     editPermissionReducer,  } from "./patientInfoReducer"
// import {
//     medGetUserInfoReducer,
//     addImmunizationReducer,
//     deleteImmunizationReducer } from "./medProfReducer"
// import {
//     getPermissionStatusReducer,
//     getImmunizationInfoReducer } from "./bothUserTypesReducer"

// const rootReducer = combineReducers({
//     authUserLoginReducer,
//     authUserRegisterReducer,
//     authMedRegisterReducer,
//     authMedLoginReducer,
//     getUserInfoReducer,
//     getPatientInfoReducer,
//     addNewPatientReducer,
//     editPatientReducer,
//     deletePatientReducer,
//     givePermissionReducer,
//     editPermissionReducer,
//     medGetUserInfoReducer,
//     addImmunizationReducer,
//     deleteImmunizationReducer,
//     getPermissionStatusReducer,
//     getImmunizationInfoReducer
// })

// export default rootReducer
