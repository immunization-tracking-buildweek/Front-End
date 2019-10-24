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
  MED_GET_USER_INFO_START,
  MED_GET_USER_INFO_SUCCESS,
  MED_GET_USER_INFO_FAILURE
} from "../actions";

// initialState
// ask Karen about splitting up files and organizing state
const initialState = {
  isLoading: false,
  error: "",
  patientInfo: [],
  medInfo: [],
  isAuth: localStorage.getItem("token") ? true : false,
  medProfSideInfo: []
};

// 1. Medical professional - get user info reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // auth user registration reducer
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

    // auth user login reducer
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

    // auth med register reducer
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

    // auth med login reducer
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

    // med get user info reducer
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
